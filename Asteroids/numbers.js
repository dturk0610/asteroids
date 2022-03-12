
var oneVerts = [ vec4( 2, 0, 0, 1 ), vec4( 2, 8, 0, 1 ), vec4( 0, 8, 0, 1 ),
     vec4( 2, 10, 0, 1 ), vec4( 3, 10, 0, 1 ), vec4( 3, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var twoVerts = [ vec4( 0, 0, 0, 1 ), vec4( 0, 2, 0, 1 ), vec4( 5, 7, 0, 1 ),
    vec4( 5, 8, 0, 1 ), vec4( 4, 9, 0, 1 ), vec4( 2, 9, 0, 1 ), vec4( 1, 8, 0, 1 ),
    vec4( 0, 8, 0, 1 ), vec4( 0, 9, 0, 1 ), vec4( 1, 10, 0, 1 ), vec4( 5, 10, 0, 1 ),
    vec4( 6, 9, 0, 1 ), vec4( 6, 6, 0, 1 ), vec4( 2, 2, 0, 1 ), vec4( 2, 1, 0, 1 ),
    vec4( 6, 1, 0, 1 ), vec4( 6, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var threeVerts = [ vec4( 0, 1, 0, 1 ), vec4( 0, 2, 0, 1 ), vec4( 1, 2, 0, 1 ), 
    vec4( 2, 1, 0, 1 ), vec4( 4, 1, 0, 1 ), vec4( 5, 2, 0, 1 ), vec4( 5, 4, 0, 1 ), 
    vec4( 4, 5, 0, 1 ), vec4( 3, 5, 0, 1 ), vec4( 3, 6, 0, 1 ), vec4( 4, 6, 0, 1 ), 
    vec4( 5, 7, 0, 1 ), vec4( 5, 8, 0, 1 ), vec4( 4, 9, 0, 1 ), vec4( 2, 9, 0, 1 ), 
    vec4( 1, 8, 0, 1 ), vec4( 0, 8, 0, 1 ), vec4( 0, 9, 0, 1 ), vec4( 1, 10, 0, 1 ), 
    vec4( 5, 10, 0, 1 ), vec4( 6, 9, 0, 1 ), vec4( 6, 7, 0, 1 ), vec4( 5, 6, 0, 1 ), 
    vec4( 5, 5, 0, 1 ), vec4( 6, 4, 0, 1 ), vec4( 6, 1, 0, 1 ), vec4( 5, 0, 0, 1 ), 
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var fourVerts = [ 
    vec4( 0, 3, 0, 1 ),
    vec4( 0, 10, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 4, 4, 0, 1 ),
    vec4( 4, 10, 0, 1 ),
    vec4( 5, 10, 0, 1 ),
    vec4( 5, 4, 0, 1 ),
    vec4( 7, 4, 0, 1 ),
    vec4( 7, 3, 0, 1 ),
    vec4( 5, 3, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 4, 0, 0, 1 ),
    vec4( 4, 3, 0, 1 ) ]; // DONE WITH Y FLIP

var fiveVerts = [ 
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 2, 0, 1 ),
    vec4( 1, 2, 0, 1 ), 
    vec4( 2, 1, 0, 1 ),
    vec4( 4, 1, 0, 1 ),
    vec4( 5, 2, 0, 1 ),
    vec4( 5, 4, 0, 1 ), 
    vec4( 4, 5, 0, 1 ),
    vec4( 0, 5, 0, 1 ),
    vec4( 0, 10, 0, 1 ),
    vec4( 6, 10, 0, 1 ), 
    vec4( 6, 9, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( 1, 6, 0, 1 ),
    vec4( 5, 6, 0, 1 ), 
    vec4( 6, 5, 0, 1 ),
    vec4( 6, 1, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var sixOutVerts = [ 
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 5, 10, 0, 1 ),
    vec4( 6, 9, 0, 1 ),
    vec4( 6, 8, 0, 1 ),
    vec4( 5, 8, 0, 1 ),
    vec4( 4, 9, 0, 1 ),
    vec4( 2, 9, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 1, 6, 0, 1 ),
    vec4( 5, 6, 0, 1 ),
    vec4( 6, 5, 0, 1 ),
    vec4( 6, 1, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var sixInVerts = [ 
    vec4( 1, 2, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 2, 5, 0, 1 ),
    vec4( 4, 5, 0, 1 ),
    vec4( 5, 4, 0, 1 ),
    vec4( 5, 2, 0, 1 ),
    vec4( 4, 1, 0, 1 ),
    vec4( 2, 1, 0, 1 ) ]; // DONE WITH Y FLIP

var sevenVerts = [ 
    vec4( 2, 0, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 5, 8, 0, 1 ),
    vec4( 5, 9, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 0, 10, 0, 1 ),
    vec4( 6, 10, 0, 1 ),
    vec4( 6, 7, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 3, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var eightOutVerts = [ 
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 4, 0, 1 ),
    vec4( 1, 5, 0, 1 ),
    vec4( 0, 6, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 5, 10, 0, 1 ),
    vec4( 6, 9, 0, 1 ),
    vec4( 6, 6, 0, 1 ),
    vec4( 5, 5, 0, 1 ),
    vec4( 6, 4, 0, 1 ),
    vec4( 6, 1, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var eightBotInVerts = [ 
    vec4( 1, 2, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 2, 5, 0, 1 ),
    vec4( 4, 5, 0, 1 ),
    vec4( 5, 4, 0, 1 ),
    vec4( 5, 2, 0, 1 ),
    vec4( 4, 1, 0, 1 ),
    vec4( 2, 1, 0, 1 ) ]; // DONE WITH Y FLIP
  
var eightTopInVerts = [ 
    vec4( 1, 7, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 2, 9, 0, 1 ),
    vec4( 4, 9, 0, 1 ),
    vec4( 5, 8, 0, 1 ),
    vec4( 5, 7, 0, 1 ),
    vec4( 4, 6, 0, 1 ),
    vec4( 2, 6, 0, 1 ) ]; // DONE WITH Y FLIP

var nineOutVerts = [ 
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 2, 0, 1 ),
    vec4( 1, 2, 0, 1 ),
    vec4( 2, 1, 0, 1 ),
    vec4( 4, 1, 0, 1 ),
    vec4( 5, 2, 0, 1 ),
    vec4( 5, 4, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 0, 5, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 5, 10, 0, 1 ),
    vec4( 6, 9, 0, 1 ),
    vec4( 6, 1, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP
    
var nineInVerts = [ 
    vec4( 1, 6, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 2, 9, 0, 1 ),
    vec4( 4, 9, 0, 1 ),
    vec4( 5, 8, 0, 1 ),
    vec4( 5, 6, 0, 1 ),
    vec4( 4, 5, 0, 1 ),
    vec4( 2, 5, 0, 1 ) ]; // DONE WITH Y FLIP

var zeroOutVerts = [ 
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 5, 10, 0, 1 ),
    vec4( 6, 9, 0, 1 ),
    vec4( 6, 1, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var zeroInVerts = [ 
    vec4( 1, 2, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 2, 9, 0, 1 ),
    vec4( 4, 9, 0, 1 ),
    vec4( 5, 8, 0, 1 ),
    vec4( 5, 2, 0, 1 ),
    vec4( 4, 1, 0, 1 ),
    vec4( 2, 1, 0, 1 ) ]; // DONE WITH Y FLIP

var sVerts = [ 
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 2, 0, 1 ),
    vec4( 1, 2, 0, 1 ),
    vec4( 2, 1, 0, 1 ),
    vec4( 4, 1, 0, 1 ),
    vec4( 5, 2, 0, 1 ),
    vec4( 0, 7, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 5, 10, 0, 1 ),
    vec4( 6, 9, 0, 1 ),
    vec4( 6, 8, 0, 1 ),
    vec4( 5, 8, 0, 1 ),
    vec4( 4, 9, 0, 1 ),
    vec4( 2, 9, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 6, 3, 0, 1 ),
    vec4( 6, 1, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var tVerts = [ 
    vec4( 2, 0, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 0, 8, 0, 1 ),
    vec4( 0, 10, 0, 1 ),
    vec4( 6, 10, 0, 1 ),
    vec4( 6, 8, 0, 1 ),
    vec4( 4, 8, 0, 1 ),
    vec4( 4, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var aOutVerts = [ 
    vec4( 0, 0, 0, 1 ),
    vec4( 0, 8, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 4, 10, 0, 1 ),
    vec4( 6, 8, 0, 1 ),
    vec4( 6, 0, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 5, 4, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var aInVerts = [ 
    vec4( 1, 5, 0, 1 ),
    vec4( 1, 7, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 5, 7, 0, 1 ),
    vec4( 5, 5, 0, 1 ) ]; // DONE WITH Y FLIP

var rOutVerts = [ 
    vec4( 0, 0, 0, 1 ),
    vec4( 0, 10, 0, 1 ),
    vec4( 4, 10, 0, 1 ),
    vec4( 6, 8, 0, 1 ),
    vec4( 6, 6, 0, 1 ),
    vec4( 4, 4, 0, 1 ),
    vec4( 6, 2, 0, 1 ),
    vec4( 6, 0, 0, 1 ),
    vec4( 5, 0, 0, 1 ),
    vec4( 5, 1, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ]; // DONE WITH Y FLIP

var rInVerts = [ 
    vec4( 1, 5, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 5, 7, 0, 1 ),
    vec4( 3, 5, 0, 1 ) ]; // DONE WITH Y FLIP