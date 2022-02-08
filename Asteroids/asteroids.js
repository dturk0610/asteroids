var gl;
var invh, h;
var invw, w;

// struct Asteroid{
//     vec2[12] points;
//     vec2 position;
//     vec2 velocity;
//     float area;
// }

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