
var oneVerts = [ 
    vec4( -1, 0, 0, 1 ),
    vec4( -1, 8, 0, 1 ),
    vec4( -3, 8, 0, 1 ),
    vec4( -1, 10, 0, 1 ),
    vec4( 0, 10, 0, 1 ),
    vec4( 0, 0, 0, 1 ) ];

var twoVerts = [ 
    vec4( -3, 0, 0, 1 ),
    vec4( -3, 2, 0, 1 ),
    vec4( 2, 7, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -3, 8, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 6, 0, 1 ),
    vec4( -1, 2, 0, 1 ),
    vec4( -1, 1, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 3, 0, 0, 1 ) ];

var threeVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 2, 0, 1 ),
    vec4( -2, 2, 0, 1 ),
    vec4( -1, 1, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( 1, 5, 0, 1 ),
    vec4( 0, 5, 0, 1 ),
    vec4( 0, 6, 0, 1 ),
    vec4( 1, 6, 0, 1 ),
    vec4( 2, 7, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -3, 8, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 7, 0, 1 ),
    vec4( 2, 6, 0, 1 ),
    vec4( 2, 5, 0, 1 ),
    vec4( 3, 4, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var fourVerts = [ 
    vec4( -3, 3, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( -2, 4, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( 3, 4, 0, 1 ),
    vec4( 3, 3, 0, 1 ),
    vec4( 2, 3, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( 1, 0, 0, 1 ),
    vec4( 1, 3, 0, 1 ) ];

var fiveVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 2, 0, 1 ),
    vec4( -2, 2, 0, 1 ), 
    vec4( -1, 1, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 2, 4, 0, 1 ), 
    vec4( 1, 5, 0, 1 ),
    vec4( -3, 5, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 3, 10, 0, 1 ), 
    vec4( 3, 9, 0, 1 ),
    vec4( -2, 9, 0, 1 ),
    vec4( -2, 6, 0, 1 ),
    vec4( 2, 6, 0, 1 ), 
    vec4( 3, 5, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var sixOutVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -2, 6, 0, 1 ),
    vec4( 2, 6, 0, 1 ),
    vec4( 3, 5, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var sixInVerts = [ 
    vec4( -2, 2, 0, 1 ),
    vec4( -2, 4, 0, 1 ),
    vec4( -1, 5, 0, 1 ),
    vec4( 1, 5, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( -1, 1, 0, 1 ) ];

var sevenVerts = [ 
    vec4( -1, 0, 0, 1 ),
    vec4( -1, 2, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 2, 9, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 3, 10, 0, 1 ),
    vec4( 3, 7, 0, 1 ),
    vec4( 0, 1, 0, 1 ),
    vec4( 0, 0, 0, 1 ) ];

var eightOutVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 4, 0, 1 ),
    vec4( -2, 5, 0, 1 ),
    vec4( -3, 6, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 6, 0, 1 ),
    vec4( 2, 5, 0, 1 ),
    vec4( 3, 4, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var eightBotInVerts = [ 
    vec4( -2, 2, 0, 1 ),
    vec4( -2, 4, 0, 1 ),
    vec4( -1, 5, 0, 1 ),
    vec4( 1, 5, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( -1, 1, 0, 1 ) ];
  
var eightTopInVerts = [ 
    vec4( -2, 7, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 2, 7, 0, 1 ),
    vec4( 1, 6, 0, 1 ),
    vec4( -1, 6, 0, 1 ) ];

var nineOutVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 2, 0, 1 ),
    vec4( -2, 2, 0, 1 ),
    vec4( -1, 1, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( -2, 4, 0, 1 ),
    vec4( -3, 5, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];
    
var nineInVerts = [ 
    vec4( -2, 6, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 2, 6, 0, 1 ),
    vec4( 1, 5, 0, 1 ),
    vec4( -1, 5, 0, 1 ) ];

var zeroOutVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var zeroInVerts = [ 
    vec4( -2, 2, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( -1, 1, 0, 1 ) ];

var sVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 2, 0, 1 ),
    vec4( -2, 2, 0, 1 ),
    vec4( -1, 1, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( -3, 7, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( 3, 3, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var tVerts = [ 
    vec4( -1, 0, 0, 1 ),
    vec4( -1, 8, 0, 1 ),
    vec4( -3, 8, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 3, 10, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ];

var aOutVerts = [ 
    vec4( -3, 0, 0, 1 ),
    vec4( -3, 8, 0, 1 ),
    vec4( -1, 10, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 3, 0, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( 2, 4, 0, 1 ),
    vec4( -2, 4, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var aInVerts = [ 
    vec4( -2, 5, 0, 1 ),
    vec4( -2, 7, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 2, 7, 0, 1 ),
    vec4( 2, 5, 0, 1 ) ];

var rOutVerts = [ 
    vec4( -3, 0, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 3, 6, 0, 1 ),
    vec4( 1, 4, 0, 1 ),
    vec4( 3, 2, 0, 1 ),
    vec4( 3, 0, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( 2, 1, 0, 1 ),
    vec4( -1, 4, 0, 1 ),
    vec4( -2, 4, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var rInVerts = [ 
    vec4( -2, 5, 0, 1 ),
    vec4( -2, 9, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 2, 7, 0, 1 ),
    vec4( 0, 5, 0, 1 ) ];

var eVerts = [
    vec4( -3, 0, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 3, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( -2, 9, 0, 1 ),
    vec4( -2, 6, 0, 1 ),
    vec4( 1, 6, 0, 1 ),
    vec4( 1, 5, 0, 1 ),
    vec4( -2, 5, 0, 1 ),
    vec4( -2, 1, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 3, 0, 0, 1 ) ];

var oOutVerts = [ 
    vec4( -3, 1, 0, 1 ),
    vec4( -3, 9, 0, 1 ),
    vec4( -2, 10, 0, 1 ),
    vec4( 2, 10, 0, 1 ),
    vec4( 3, 9, 0, 1 ),
    vec4( 3, 1, 0, 1 ),
    vec4( 2, 0, 0, 1 ),
    vec4( -2, 0, 0, 1 ) ];

var oInVerts = [ 
    vec4( -2, 2, 0, 1 ),
    vec4( -2, 8, 0, 1 ),
    vec4( -1, 9, 0, 1 ),
    vec4( 1, 9, 0, 1 ),
    vec4( 2, 8, 0, 1 ),
    vec4( 2, 2, 0, 1 ),
    vec4( 1, 1, 0, 1 ),
    vec4( -1, 1, 0, 1 ) ];

var iVerts = [
    vec4( -3, 0, 0, 1 ),
    vec4( -3, 2, 0, 1 ),
    vec4( -1, 2, 0, 1 ),
    vec4( -1, 8, 0, 1 ),
    vec4( -3, 8, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 3, 10, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 1, 8, 0, 1 ),
    vec4( 1, 2, 0, 1 ),
    vec4( 3, 2, 0, 1 ),
    vec4( 3, 0, 0, 1 ) ];    
    
var dOutVerts = [
    vec4( -3, 0, 0, 1 ),
    vec4( -3, 10, 0, 1 ),
    vec4( 1, 10, 0, 1 ),
    vec4( 3, 8, 0, 1 ),
    vec4( 3, 2, 0, 1 ),
    vec4( 1, 0, 0, 1 ) ];
        
var dInVerts = [
    vec4( -2, 1, 0, 1 ),
    vec4( -2, 9, 0, 1 ),
    vec4( 0, 9, 0, 1 ),
    vec4( 2, 7, 0, 1 ),
    vec4( 2, 3, 0, 1 ),
    vec4( 0, 1, 0, 1 ) ];

var gVerts = [
    vec4( 0, 4, 0, 1),
    vec4( 1.5, 4, 0, 1),
    vec4( 1.5, 2, 0, 1),
    vec4( -1.5, 2, 0, 1),
    vec4( -1.5, 8, 0, 1),
    vec4( 1.5, 8, 0, 1),
    vec4( 1.5, 7, 0, 1),
    vec4( 3, 7, 0, 1),
    vec4( 3, 8, 0, 1),
    vec4( 1.5, 10, 0, 1),
    vec4( -1.5, 10, 0, 1),
    vec4( -3, 8, 0, 1),
    vec4( -3, 2, 0, 1),
    vec4( -1.5, 0, 0, 1),
    vec4( 3, 0, 0, 1),
    vec4( 3, 6, 0, 1),
    vec4( 0, 6, 0, 1),
];

var mVerts = [
    vec4( -3, 10, 0, 1),
    vec4( -1, 10, 0, 1),
    vec4( 0, 6, 0, 1),
    vec4( 1, 10, 0, 1),
    vec4( 3, 10, 0, 1),
    vec4( 3, 0, 0, 1),
    vec4( 2, 0, 0, 1),
    vec4( 2, 9, 0, 1),
    vec4( 0, 3, 0, 1),
    vec4( -2, 9, 0, 1),
    vec4( -2, 0, 0, 1),
    vec4( -3, 0, 0, 1),
];

var vVerts = [
    vec4( -3, 10, 0, 1),
    vec4( -2, 10, 0, 1),
    vec4( 0, 2, 0, 1),
    vec4( 2, 10, 0, 1),
    vec4( 3, 10, 0, 1),
    vec4( 0.5, 0, 0, 1),
    vec4( -0.5, 0, 0, 1),
];

var nVerts = [
    vec4( -3, 10, 0, 1),
    vec4( -1, 10, 0, 1),
    vec4( 2, 1, 0, 1),
    vec4( 2, 10, 0, 1),
    vec4( 3, 10, 0, 1),
    vec4( 3, 0, 0, 1),
    vec4( 1, 0, 0, 1),
    vec4( -2, 9, 0, 1),
    vec4( -2, 0, 0, 1),
    vec4( -3, 0, 0, 1),
];

var wVerts = [
    vec4( -3, 10, 0, 1),
    vec4( -2, 10, 0, 1),
    vec4( -1, 5, 0, 1),
    vec4( -0.5, 10, 0, 1),
    vec4( 0.5, 10, 0, 1),
    vec4( 1, 5, 0, 1),
    vec4( 2, 10, 0, 1),
    vec4( 3, 10, 0, 1),
    vec4( 2, 0, 0, 1),
    vec4( 1, 0, 0, 1),
    vec4( 0, 5, 0, 1),
    vec4( -1, 0, 0, 1),
    vec4( -2, 0, 0, 1),
];

var qmUpVerts = [
    vec4( -3, 6, 0, 1),
    vec4( -3, 8, 0, 1),
    vec4( -1, 10, 0, 1),
    vec4( 1, 10, 0, 1),
    vec4( 3, 8, 0, 1),
    vec4( 3, 6, 0, 1),
    vec4( 1, 4, 0, 1),
    vec4( 1, 3, 0, 1),
    vec4( -1, 3, 0, 1),
    vec4( -1, 5, 0, 1),
    vec4( 1, 7, 0, 1),
    vec4( 0, 8, 0, 1),
    vec4( -1, 7, 0, 1),
    vec4( -1, 6, 0, 1),
];

var qmLowVerts = [
    vec4( -1, 2, 0, 1),
    vec4( 1, 2, 0, 1),
    vec4( 1, 0, 0, 1),
    vec4( -1, 0, 0, 1),
];