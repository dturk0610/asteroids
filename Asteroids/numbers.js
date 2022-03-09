var numScale = 5;

var oneVerts = [ vec4( 2, 16, 0, 1 ), vec4( 2, 8, 0, 1 ), vec4( 0, 8, 0, 1 ),
     vec4( 2, 6, 0, 1 ), vec4( 3, 6, 0, 1 ), vec4( 3, 16, 0, 1 ) ];

var twoVerts = [ vec4( 0, 16, 0, 1 ), vec4( 0, 14, 0, 1 ), vec4( 5, 9, 0, 1 ),
    vec4( 5, 8, 0, 1 ), vec4( 4, 7, 0, 1 ), vec4( 2, 7, 0, 1 ), vec4( 1, 8, 0, 1 ),
    vec4( 0, 8, 0, 1 ), vec4( 0, 7, 0, 1 ), vec4( 1, 6, 0, 1 ), vec4( 5, 6, 0, 1 ),
    vec4( 6, 7, 0, 1 ), vec4( 6, 10, 0, 1 ), vec4( 2, 14, 0, 1 ), vec4( 2, 15, 0, 1 ),
    vec4( 6, 15, 0, 1 ), vec4( 6, 16, 0, 1 ) ];

var threeVerts = [ vec4( 0, 15, 0, 1 ), vec4( 0, 14, 0, 1 ), vec4( 1, 14, 0, 1 ), 
    vec4( 2, 15, 0, 1 ), vec4( 4, 15, 0, 1 ), vec4( 5, 14, 0, 1 ), vec4( 5, 12, 0, 1 ), 
    vec4( 4, 11, 0, 1 ), vec4( 3, 11, 0, 1 ), vec4( 3, 10, 0, 1 ), vec4( 4, 10, 0, 1 ), 
    vec4( 5, 9, 0, 1 ), vec4( 5, 8, 0, 1 ), vec4( 4, 7, 0, 1 ), vec4( 2, 7, 0, 1 ), 
    vec4( 1, 8, 0, 1 ), vec4( 0, 8, 0, 1 ), vec4( 0, 7, 0, 1 ), vec4( 1, 6, 0, 1 ), 
    vec4( 5, 6, 0, 1 ), vec4( 6, 7, 0, 1 ), vec4( 6, 9, 0, 1 ), vec4( 5, 10, 0, 1 ), 
    vec4( 5, 11, 0, 1 ), vec4( 6, 12, 0, 1 ), vec4( 6, 15, 0, 1 ), vec4( 5, 16, 0, 1 ), 
    vec4( 1, 16, 0, 1 ) ];

var fourPoints = [ vec4( 0, 13, 0, 1 ), vec4( 0, 6, 0, 1 ), vec4( 1, 6, 0, 1 ), 
    vec4( 1, 12, 0, 1 ), vec4( 4, 12, 0, 1 ), vec4( 4, 6, 0, 1 ), vec4( 5, 6, 0, 1 ), 
    vec4( 5, 12, 0, 1 ), vec4( 7, 12, 0, 1 ), vec4( 7, 13, 0, 1 ), vec4( 5, 13, 0, 1 ), 
    vec4( 5, 16, 0, 1 ), vec4( 4, 16, 0, 1 ), vec4( 4, 13, 0, 1 ) ];