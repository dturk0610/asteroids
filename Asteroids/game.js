var gl;
var invh, h;
var invw, w;

var pastTime = 0;

var roidBuffer;
var roids = [];
var roidsToDelete = [];
var timeDelta = 0;

var asteroidShaderProgram;

function init(){
    var canvas=document.getElementById("asteroids-canvas");
    gl=WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert( "WebGL is not available" ); }

    //canvas.width = window.innerWidth - 32;
    //canvas.height = window.innerHeight - 32;

    // This small segment of code is dedicated to getting the height and
    // width of the canvas and then calculating their inverse. This is an
    // important technique used to same time when calculating a pixel
    // position in the viewport
    h = parseFloat(canvas.height); invh = 1.0/h;
    w = parseFloat(canvas.width); invw = 1.0/w;

    // This quick and dirty implementation of a clicking event
    // Is being used to test the isInside function that the 
    // asteroids objects have to determine if a point is inside
    // of them. The hope is to use this function to have easy
    // collision detection with the shots from them player
    canvas.addEventListener("mousedown", function(e)
    { tryClickAsteroid(canvas, e); }); 

    // Then we call the setup functions which will just prepare GL and our
    // asteroids. Eventually the player setup code should be called here
    // or at least in a similar manner.
    setupGL();
    setupAsteroids();

    window.requestAnimationFrame(animate);
}

// This event function is used to test the isInside functionality
// Hopefull this will be useful in later version, for possible 
// collision detection.
function tryClickAsteroid(canvas, event) {

    // Gets the rectangle making up the canvas then calculates
    // the mouse position with the bottom left being observed
    // as the (0, 0).
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = rect.height - (event.clientY - rect.top);

    // Now we loop through all asteroids saved and see if the
    // clicked location is within the asteroids. There is a
    // sort function in place that will eventually allow us
    // to optimize the number of times this for loop is ran
    // (possibly making a binary search functionality)
    for (var i = 0; i < roids.length; i++){
        if (roids[i].isInside(vec2(x,y))){
            roids[i].clicked = true;// A reference for how this
                                    // function works will be
                                    // pasted at the bottom of
                                    // this script
            //console.log(`clicked asteroid: ${roids[i]}`);
        }
    } 
}

// #region SETUP FUNCTIONS REGION

// Sets up the webGL to start having stuff drawn to it.
function setupGL(){

    // Sets up the viewport, the background color and
    // clears the buffer bit.
    gl.viewport( 0, 0, w, h );
    gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    gl.clear( gl.COLOR_BUFFER_BIT );

    asteroidShaderProgram = initShaders( gl, "vertex-shader", "frag-asteroid" );
    gl.useProgram( asteroidShaderProgram );

}

// This setup function is a little bit more complicated
// we first generate a collection of asteroids. Every
// asteroid has randomized values for their velocity,
// start position and for each point around the asteroid
// a randomized radius which gives us the more asteroid
// like asteroid. Technically we could increase the
// divisions amount in order to have more circular
// asteroids, but this could ruin the look as well.
function setupAsteroids() {

    // These two variables are used for the radius of the
    // asteroids. Where radMult is the multiplier on the 
    // rand function, and the radDiff helps us specify
    // a nice ring of where the radii can be. Much like
    // the width of a disk.
    var radMult = 20;
    var radDiff = 5;

    var numOfAsteroirds = 30;
    var divsForAsteroids = 12;

    // Uses the above argument to generate that number of asteroids
    // to start with. This uses a lot of Math.random in order to ensure
    // a fun always-changing experience for the player. The center, or
    // position the asteroid is on the canvas is random in both directions,
    // same with the velocity. 
    for (var asteroidAmount = 0; asteroidAmount < numOfAsteroirds; asteroidAmount++) {
        var center = vec2( Math.random() * w, Math.random() * h );
        var stepAmount = 2 * Math.PI / divsForAsteroids;
        var points = [];
        for (var theta = 0; theta < 2 * Math.PI; theta += stepAmount) {
            var rad = ( Math.random() * radMult) + (radMult - radDiff );
            var x = rad * Math.cos( theta );
            var y = rad * Math.sin( theta );
            points.push( vec2( x, y ) );
        }

        // This speed value was trial-and-error arbitrarily set. There
        // was nothing special about this speed other than it looked okay
        // during initial testing.
        var speed = 90;
        var vel = vec2( Math.random() * 2.0*speed - speed, Math.random() * 2.0*speed - speed );

        // Calculate area, this will be used hopefully for energy conversion so that
        // smaller asteroids broken off from larger ones will move faster by some amount
        var area = 0;
        for (var i = 1; i < points.length; i++) {
            var currPt = points[i];
            var prevPt = points[i - 1];
            var side1 = vec3( prevPt[0], prevPt[1], 0 );
            var side2 = vec3( currPt[0], currPt[1], 0 );
            var crossProd = cross( side1, side2 );
            area += mag( crossProd ) * .5;
        }

        var currRoid = new Asteroid( points, points.length, center, vel, area );
        roids.push( currRoid );
        // console.log(`currRoid: ${currRoid}`);
    }

}

// #endregion

// The animate function is being used to update the time
// deltas and is being used to update all drawings on the
// canvas. First, we get the current time with the input
// parameter, then we update all necessary objects then
// finally we re-draw them onto the canvas. Then the 
// request animation frame is called again
function animate( now ){
    now *= .001;

    // Update all asteroid position, then render them
    updateAsteroids( now );
    drawAsteroids();

    // Below here will ideally be other update functions
    // and render functions

    // Now that all has been updated and rendered, we update
    // the past time to now and request the next animation
    pastTime = now;
    window.requestAnimationFrame( animate );
}

// #region UPDATE FUNCTIONS REGION

// This function handles updating the positions of all the
// asteroids and will also handle making sure we have a
// smooth transition between edges for all asteroids.
// It will do this by using basic vector math to determine
// direction of movement.
function updateAsteroids( now ){

    // calculates the difference in time between this frame
    // and last frame.
    var timeDelta = now - pastTime;

    // Stoes the value of the length before any update are
    // made, just in case there are additions to the array
    // as the update happens. It should be noted that we
    // should have separate arrays setup specifically
    // dedicated to deleting asteroids as we blow them up
    // or for any other reason.
    var currCount = roids.length;

    // Loops through all asteroids and updates their
    // positions. It then uses vector math and some logic
    // to move the asteroid to the oposite side of the
    // screen to give the effect of continuous movement.
    for (var i = 0; i < currCount; i++){

        // Gets the current asteroid just for ease of use,
        // same thing with velocity. Uses these to move
        // the current position of this asteroid.
        var currRoid = roids[i];
        var currVel = currRoid.velocity;
        currRoid.position[0] += currVel[0]*timeDelta;
        currRoid.position[1] += currVel[1]*timeDelta;

        // This part of the code leverages knowledge of 
        // vector math as well as understanding the desired
        // movement effect of the asteroids in order to get
        // them to scroll endlessly across the screen.
        var velMag = mag( vec3( currVel[0], currVel[1], 0 ) );
        var dir = vec2( currVel[0]/velMag, currVel[1]/velMag );

        // If the asteroid is moving in the positive x direction, and has
        // a larger x value that the actual canvas size, we know we can
        // subtract the width of the canvas from the x position to reset
        // it back to the left side of the screen. Similar logic can be
        // understood to get it to scroll endlessly to the left, up or
        // down.
        if ((currRoid.position[0] > w) && dir[0] > 0){ currRoid.position[0] -= w; }
        if ((currRoid.position[0] < 0) && dir[0] < 0){ currRoid.position[0] += w; }

        if ((currRoid.position[1] > h) && dir[1] > 0){ currRoid.position[1] -= h; }
        if ((currRoid.position[1] < 0) && dir[1] < 0){ currRoid.position[1] += h; }
    }
    roids.sort( compareAsteroids );

}

// #endregion

// #region DRAW FUNCTIONS REGION

// This function is used explicitly to draw the asteroids
// Eventually there will be another function drawing all
// types of enemies/obstacles we implement as well as the
// player.
function drawAsteroids(){

    // Checks if our roid buffer id is null, if is, we 
    // generate a buffer for the gpu for it
    if (!roidBuffer)
        roidBuffer = gl.createBuffer();

    // Clears our buffer bit and then sets up our roid buffer
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.bindBuffer( gl.ARRAY_BUFFER, roidBuffer );

    // Sets up our shaders
    var myPos = gl.getAttribLocation( asteroidShaderProgram, "myPosition" );
    gl.enableVertexAttribArray( myPos );
    gl.vertexAttribPointer( myPos, 2, gl.FLOAT, false, 0, 0 );

    // Loops through all asteroids, uses the point positions
    // and the asteroids positions and the convertCanvasPosToView
    // in order to calculate the points' positions in the viewport.
    // All of these converted positions are saved to a pointsToRender
    // array and then rendered with the gl.LINE_LOOP to get the generic
    // Atari asteroids look.
    for (var i = 0; i < roids.length; i++){

        // Only points saved to this array will actually be rendered.
        var pointsToRender = [];
        var currRoid = roids[i];
        var center = currRoid.position;

        // Loops through each point making up the current asteroid and
        // converts the canvas space position to the viewport space
        // position.
        for (var j = 0; j < currRoid.points.length; j++){
            var point = currRoid.points[j];
            pointsToRender.push( convertCanvasPosToView( point[0] + center[0], point[1] + center[1] ) );
        }

        gl.bufferData( gl.ARRAY_BUFFER, flatten( pointsToRender ), gl.STATIC_DRAW );

        // Special uniform to surprise the user when they click on some
        // asteroids. This whole idea with the click and uniform on the
        // fragment shader and be used to our advantage in order to have
        // cool effects on asteroids that are hit.
        var clickUniform = gl.getUniformLocation( asteroidShaderProgram, "clicked" );
        gl.uniform1i( clickUniform, currRoid.clicked );

        gl.drawArrays( gl.LINE_LOOP, 0, pointsToRender.length );
    }
}

// #endregion

// #region USEFUL FUNCTIONS REGION

// A very useful vector math function that returns the
// cross product of the two input vectors. They are all
// assumed to be vec3
/* Visual for cross product help
        |  i   j   k  |
    v1z | v1x v1y v1z | v1x
v2y v2z | v2x v2y v2z | v2x v2y
*/
function cross( v1, v2 ){
    var xVal = v1[1]*v2[2] - v1[2]*v2[1];
    var yVal = v1[2]*v2[0] - v1[0]*v2[2];
    var zVal = v1[0]*v2[1] - v1[1]*v2[0];
    return vec3( xVal, yVal, zVal );
}

// A very useful vector math function that returns the
// magnitude of the input vector. They are all assumed
// to be vec3, but we could extend this to vec4 if 
// deemed necessary
function mag( v ){
    return Math.sqrt( v[0]*v[0] + v[1]*v[1] + v[2]*v[2] );
}

// A very useful vector math function that returns the
// dot product of the two input vectors. They are all
// assumed to be vec3, but we could extend this to vec4
// if deemed necessary
function dot ( v1, v2 ){
    return ( v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2] );
}

// This is a very handy function that is pretty much
// optimized as much as possible in order to ensure
// we are spending less time converting and more time
// on more important tasks. This is where getting the
// inverse height and width values becomes useful
function convertCanvasPosToView( x, y ){
   return vec2( (x*invw*2.0) - 1, (y*invh*2.0) - 1 );
}

// #endregion

// #region POSSIBLY USELESS

// Though this was a function that I made previously,
// We could likely reuse parts of it in order to draw
// any shots fired from the player or the spaceship
// enemy
function drawCirc( rad, center ){
    
    // Calculate the circle positions
    var div = 50;
    var stepAmount = 2*Math.PI/div;
    var count = 0;
    var circleArr = [];
    for ( var theta = 0; theta < 2*Math.PI; theta += stepAmount ){
        var x = rad*Math.cos( theta ) + center[0];
        var y = rad*Math.sin( theta ) + center[1];
        circleArr.push( convertCanvasPosToView(x,y) );
        count++;// count = count + 1;
    }

    var circBufferID = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, circBufferID);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(circleArr), gl.STATIC_DRAW );

    var myShaderProgram = initShaders( gl, "vertex-shader", "frag-orange" );
    gl.useProgram(myShaderProgram);

    var myPos = gl.getAttribLocation( myShaderProgram, "myPosition");
    gl.vertexAttribPointer( myPos, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( myPos );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, count );

}

// #endregion


// isInside function reference
// https://www.eecs.umich.edu/courses/eecs380/HANDOUTS/PROJ2/InsidePoly.html
// We do not claim to have ownership over this function, but
// we also did not simply just copy and past other people's work