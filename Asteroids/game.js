var gl;
var invh, h;
var invw, w;
var pastTime = 0;
var numOfAsteroirds = 30;

var roidBuffer;
var roids = [];
var roidsToDelete = [];
var timeDelta = 0;

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

function tryClickAsteroid(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = rect.height - (event.clientY - rect.top);
    for (var i = 0; i < roids.length; i++){
        if (roids[i].isInside(vec2(x,y))){
            roids[i].clicked = true;
            console.log(`clicked asteroid: ${roids[i]}`);
        }
    } 
    //console.log(`x: ${x}, y: ${y}`);
}

function setupGL(){
    gl.viewport(0, 0, w, h );
    gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    gl.clear( gl.COLOR_BUFFER_BIT );
}

function setupAsteroids() {
    var radMult = 20;
    var radDiff = 5;
    for (var asteroidAmount = 0; asteroidAmount < numOfAsteroirds; asteroidAmount++) {
        var center = vec2(Math.random() * w, Math.random() * h);
        var div = 12;
        var stepAmount = 2 * Math.PI / div;
        var points = [];
        for (var theta = 0; theta < 2 * Math.PI; theta += stepAmount) {
            var rad = (Math.random() * radMult) + (radMult - radDiff);
            var x = rad * Math.cos(theta);
            var y = rad * Math.sin(theta);
            points.push(vec2(x, y));
        }

        var speed = 90;
        var vel = vec4(Math.random() * 2.0*speed - speed, Math.random() * 2.0*speed - speed, 0, 1);

        // Calculate area, this will be used hopefulyl for energy conversion so that
        // smaller asteroids broken off from larger ones will move faster by some amount
        var area = 0;
        for (var i = 1; i < points.length; i++) {
            var currPt = points[i];
            var prevPt = points[i - 1];
            var side1 = vec3(prevPt[0], prevPt[1], 0);
            var side2 = vec3(currPt[0], currPt[1], 0);
            var crossProd = cross(side1, side2);
            area += (mag(crossProd)) * .5;
        }

        var currRoid = new Asteroid(points, points.length, center, vel, area);
        roids.push(currRoid);
        //console.log("Test: " + firstAsteroid.toString());
    }

}

function drawAsteroids(){

    if (!roidBuffer)
        roidBuffer = gl.createBuffer();

    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.bindBuffer(gl.ARRAY_BUFFER, roidBuffer);

    var myShaderProgram = initShaders(gl, "vertex-shader", "frag-asteroid");
    gl.useProgram(myShaderProgram);

    var myPos = gl.getAttribLocation(myShaderProgram, "myPosition");
    gl.enableVertexAttribArray(myPos);
    gl.vertexAttribPointer(myPos, 2, gl.FLOAT, false, 0, 0);

    for (var i = 0; i < roids.length; i++){

        var pointsToRender = []
        var currRoid = roids[i];
        var center = currRoid.position;
        for (var j = 0; j < currRoid.points.length; j++){
            var point = currRoid.points[j];
            pointsToRender.push(convertCanvasPosToView(point[0] + center[0], point[1] + center[1]));
        }

        gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsToRender), gl.STATIC_DRAW);

        // var velUniform = gl.getUniformLocation( myShaderProgram, "velocity" )
        // gl.uniform4fv(velUniform, vel)

        var clickUniform = gl.getUniformLocation( myShaderProgram, "clicked" );
        gl.uniform1i(clickUniform, currRoid.clicked);

        gl.drawArrays( gl.LINE_LOOP, 0, pointsToRender.length );
    }
}

function compareAsteroids(A1, A2){
    if (A1.position[0] < A2.position[0]) return -1;
    if (A1.position[0] > A2.position[0]) return 1;
    return 0;

}

function updateAsteroids(now){
    var timeDelta = now - pastTime;
    var areAllPointsOutOfView = true;
    var anyPointOutofView = false;
    var currCount = roids.length;

    var padding = 5;
    for (var i = 0; i < currCount; i++){
        var currRoid = roids[i];
        var points = currRoid.points;
        var currVel = currRoid.velocity;
        currRoid.position[0] += currVel[0]*timeDelta;
        currRoid.position[1] += currVel[1]*timeDelta;

        var velMag = mag(vec3(currVel[0], currVel[1], 0));
        var dir = vec2(currVel[0]/velMag, currVel[1]/velMag);

        if ((currRoid.position[0] > w) && dir[0] > 0){ currRoid.position[0] -= w + padding + 10; }
        if ((currRoid.position[0] < 0) && dir[0] < 0){ currRoid.position[0] += w - padding + 10; }

        if ((currRoid.position[1] > h) && dir[1] > 0){ currRoid.position[1] -= h + padding + 10; }
        if ((currRoid.position[1] < 0) && dir[1] < 0){ currRoid.position[1] += h - padding + 10; }
    }
    roids.sort(compareAsteroids);

}

function animate(now){
    now *= .001;
    updateAsteroids(now);
    drawAsteroids();
    pastTime = now;
    window.requestAnimationFrame(animate);
}
/* Visual for cross product help
        |  i   j   k  |
    v1z | v1x v1y v1z | v1x
v2y v2z | v2x v2y v2z | v2x v2y
*/
function cross(v1, v2){
    var xVal = v1[1]*v2[2] - v1[2]*v2[1];
    var yVal = v1[2]*v2[0] - v1[0]*v2[2];
    var zVal = v1[0]*v2[1] - v1[1]*v2[0];
    return vec3(xVal, yVal, zVal);
}

function mag(v){
    return Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2])
}

function dot (v1, v2){
    return (v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2]);
}



function convertCanvasPosToView( x, y ){
   return vec2((x*invw*2) - 1, (y*invh*2) - 1);
}

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