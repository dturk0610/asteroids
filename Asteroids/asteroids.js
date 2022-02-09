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

    h = parseFloat(canvas.height);
    invh = 1.0/h;
    w = parseFloat(canvas.width);
    invw = 1.0/w;

    render();
    setup();
    drawAsteroids();
    window.requestAnimationFrame(animate);
}

/* sample object
function Shape(x, y) {
    var that= this;

    this.x= x;
    this.y= y;

    this.toString= function() {
        return 'Shape at '+that.x+', '+that.y;
    };
}
*/

function Asteroid(points, numPoints, position, velocity, area){
    var that = this;
    this.points = points;
    this.numPoints = numPoints;
    this.position = position;
    this.velocity = velocity;
    this.area = area;


    //Inorder to format strings like this, use a "backtick" `````  < these versus '''' < those, or """" < that
    that.toString = function(){
        var retStr = "Points: [ ";
        for (var i = 0; i < this.numPoints; i++){
            retStr += `(${points[i][0]}, ${points[i][1]})`;
            if (i != 11){
                retStr += ', ';
            }
        }
        retStr += ' ]\n';
        retStr += `Position: (${position[0]}, ${position[1]})\n`;
        retStr += `Velocity: (${velocity[0]}, ${velocity[1]})\n`;
        retStr += `Area: ${area}\n`;
        return retStr;
    };
}

// struct Asteroid{
//     vec2[12] points;
//     vec2 position;
//     vec2 velocity;
//     float area;
// }

function setup() {
    for (var asteroidAmount = 0; asteroidAmount < numOfAsteroirds; asteroidAmount++) {
        var center = vec2(Math.random() * w, Math.random() * h);
        var div = 12;
        var stepAmount = 2 * Math.PI / div;
        var points = [];
        for (var theta = 0; theta < 2 * Math.PI; theta += stepAmount) {
            var rad = (Math.random() * 15.0) + 10.0;
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
        //var firstAsteroid = new Asteroid(points, center, vel, area);
        //console.log("Test: " + firstAsteroid.toString());
    }

}

function drawAsteroids(){

    if (!roidBuffer)
        roidBuffer = gl.createBuffer();

    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.bindBuffer(gl.ARRAY_BUFFER, roidBuffer);

    var myShaderProgram = initShaders(gl, "vertex-shader", "frag-blue");
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

        gl.drawArrays( gl.LINE_LOOP, 0, pointsToRender.length );
    }
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
        //console.log(dir);
        var dir = vec2(currVel[0]/velMag, currVel[1]/velMag);

        if ((currRoid.position[0] > w) && dir[0] > 0){ currRoid.position[0] -= w + padding + 10; }
        if ((currRoid.position[0] < 0) && dir[0] < 0){ currRoid.position[0] += w - padding + 10; }

        if ((currRoid.position[1] > h) && dir[1] > 0){ currRoid.position[1] -= h + padding + 10; }
        if ((currRoid.position[1] < 0) && dir[1] < 0){ currRoid.position[1] += h - padding + 10; }

        // if (currRoid.position[0] < w && currRoid.position[0] > 0) areAllPointsOutOfView = false;
        // if (currRoid.position[1] < h && currRoid.position[1] > 0) areAllPointsOutOfView = false; 
        
        // for (var j = 0; j < points.length; j++){
        //     var currPoint = points[j];
        //     // currPoint[0] = currPoint[0] + currVel[0]*timeDelta;
        //     // currPoint[1] = currPoint[1] + currVel[1]*timeDelta;

        //     points[j] = currPoint;
            
        //     if (points[j][0] > w){ points[j][0] -= w + 1; }
        //     if (points[j][0] < 0){ points[j][0] += w - 1; }

        //     if (points[j][1] > h){ points[j][1] -= h + 1; }
        //     if (points[j][1] < 0){ points[j][1] += h - 1; }

        //     // if (points[j][0] < w && points[j][0] > 0) areAllPointsOutOfView = false;
        //     // else anyPointOutofView = true;
        //     // if (points[j][1] < h && points[j][1] > 0) areAllPointsOutOfView = false; 
        //     // else anyPointOutofView = true;
        // }

        // if (areAllPointsOutOfView){ roidsToDelete.push(currRoid); continue; }
        // if (!anyPointOutofView) { continue; }
        // else{
        //     //currRoid.velocity[0] = -currRoid.velocity[0];
        //     // var target = new Asteroid();
        //     // var tempAsteroid = Object.assign(target, currRoid);
        //     // tempAsteroid.velocity
        //     // var needNewRoid = true;
        //     // for (var j = 0; j < currCount; j++){
        //     //     var tempPos = tempAsteroid.position;
        //     //     var testPos = roids[j];
        //     //     if (tempPos[0] == testPos[0] && tempPos[1] == testPos[1]){
        //     //         needNewRoid = false;
        //     //         break;
        //     //     }
        //     // }
        //     // if (!needNewRoid) continue;

        //     // roids.push(tempAsteroid);
        // }

    }

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


function render(){

    gl.viewport(0, 0, w, h );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    gl.clear( gl.COLOR_BUFFER_BIT );

//     var point1 = vec2(0,0);
//     var point2 = vec2(0,1);
//     var point3 = vec2(1,0);

//     var point4 = vec2(0,0);
//     var point5 = vec2(0,-1);
//     var point6 = vec2(-1,-1);
//     var point7 = vec2(-1,0);

//     var trinangleArr = [];
//     trinangleArr.push(point1);
//     trinangleArr.push(point2);
//     trinangleArr.push(point3);
//     //pushing square points into array
//     trinangleArr.push(point4);
//     trinangleArr.push(point5);
//     trinangleArr.push(point6);
//     trinangleArr.push(point7);

//     var triBufferID = gl.createBuffer();
//     gl.bindBuffer( gl.ARRAY_BUFFER, triBufferID);
//     gl.bufferData( gl.ARRAY_BUFFER, flatten(trinangleArr), gl.STATIC_DRAW );

//     var myShaderProgram = initShaders( gl, "vertex-shader", "frag-blue" );
//     gl.useProgram(myShaderProgram);

//     var myPos = gl.getAttribLocation( myShaderProgram, "myPosition");
//     gl.vertexAttribPointer( myPos, 2, gl.FLOAT, false, 0, 0 );
//     gl.enableVertexAttribArray( myPos );

//     // gl.drawArrays( gl.TRIANGLES, 0, 3 );
//     // gl.drawArrays( gl.TRIANGLE_FAN, 3, 4 );

// // for (inititializer; condition; increment){ ... }
//     // for (var i = 0; i < 128; i++){
//     //     for (var j = 0; j < 128; j++){
//     //         drawCirc(4, vec2(16*i + 8, 16*j + 8));
//     //     }
//     // }

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