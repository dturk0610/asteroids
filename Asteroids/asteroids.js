var gl;
var invh, h;
var invw, w;


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

function Asteroid(points, position, velocity, area){
    var that = this;
    this.points = points;
    this.position = position;
    this.velocity = velocity;
    this.area = area;


    //Inorder to format strings like this, use a "backtick" `````  < these versus '''' < those, or """" < that
    that.toString = function(){
        var retStr = "Points: [ ";
        for (var i = 0; i < 12; i++){
            retStr += `(${points[i][0]}, ${points[i][0]})`;
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

function setup(){

    var center = vec2(Math.random()*w, Math.random()*h);
    var div = 12;
    var stepAmount = 2*Math.PI/div;
    var points = [];
    for ( var theta = 0; theta < 2*Math.PI; theta += stepAmount ){
        var rad = Math.random() * 20;
        var x = rad*Math.cos( theta ) + center[0];
        var y = rad*Math.sin( theta ) + center[1];
        points.push( convertCanvasPosToView(x,y) );
    }

    var vel = vec2(Math.random()*8 - 4, Math.random()*8 - 4);

    // Calculate area, this will be used hopefulyl for energy conversion so that
    // smaller asteroids broken off from larger ones will move faster by some amount
    var area = 0;
    for (var i = 1; i < 12; i++){
        var currPt = points[i];
        var prevPt = points[i - 1];
        var side1 = vec3(prevPt[0] - center[0], prevPt[1] - center[1], 0);
        var side2 = vec3(currPt[0] - center[0], currPt[1] - center[1], 0);
        var crossProd = cross(side1, side2);
        area += (mag(crossProd))*.5;
    }

    var firstAsteroid = new Asteroid(points, center, vel, area);
    console.log("Test: " + firstAsteroid.toString());
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


function render(){

    gl.viewport(0, 0, w, h );
    gl.clearColor( 0, 0, 0, 1.0 );
    gl.clear( gl.COLOR_BUFFER_BIT );

    var point1 = vec2(0,0);
    var point2 = vec2(0,1);
    var point3 = vec2(1,0);

    var point4 = vec2(0,0);
    var point5 = vec2(0,-1);
    var point6 = vec2(-1,-1);
    var point7 = vec2(-1,0);

    var trinangleArr = [];
    trinangleArr.push(point1);
    trinangleArr.push(point2);
    trinangleArr.push(point3);
    //pushing square points into array
    trinangleArr.push(point4);
    trinangleArr.push(point5);
    trinangleArr.push(point6);
    trinangleArr.push(point7);

    var triBufferID = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, triBufferID);
    gl.bufferData( gl.ARRAY_BUFFER, flatten(trinangleArr), gl.STATIC_DRAW );

    var myShaderProgram = initShaders( gl, "vertex-shader", "frag-blue" );
    gl.useProgram(myShaderProgram);

    var myPos = gl.getAttribLocation( myShaderProgram, "myPosition");
    gl.vertexAttribPointer( myPos, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( myPos );

    // gl.drawArrays( gl.TRIANGLES, 0, 3 );
    // gl.drawArrays( gl.TRIANGLE_FAN, 3, 4 );

// for (inititializer; condition; increment){ ... }
    // for (var i = 0; i < 128; i++){
    //     for (var j = 0; j < 128; j++){
    //         drawCirc(4, vec2(16*i + 8, 16*j + 8));
    //     }
    // }

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