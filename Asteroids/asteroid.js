
/* sample object
function Shape(x, y) {
    var that= this;

    this.x= x;
    this.y= y;

    this.toString= function() {
        return 'Shape at '+that.x+', '+that.y;
    };
}*/

function Asteroid( points = [], numPoints = 0, position = vec2( 0, 0 ), velocity = vec2( 0, 0 ), area = 0 ) {
    var that = this;
    this.points = points;
    this.numPoints = numPoints;
    this.position = position;
    this.velocity = velocity;
    this.area = area;
    this.clicked = false;

    that.isInside = function(point){
        // console.log(`point: ${point}`);
        // console.log(`pos: ${position}`);
        var countCross = 0;
        var n = that.points.length;
		for (var i = 0; i < n; i ++){
			var p = vec2(that.points[i][0] + that.position[0], that.points[i][1] + that.position[1]);
			var r = vec2(that.points[(i + 1) % n][0] + that.position[0], that.points[(i + 1) % n][1] + that.position[1]);
			var q = vec2(point[0], point[1]);
			if ((q[0] < p[0] || q[0] < r[0]) && //q.x <= Mathf.Max(p.x, r.x) && q.x >= Mathf.Min(p.x, r.x) && 
            	q[1] <= Math.max(p[1], r[1]) && q[1] >= Math.min(p[1], r[1])) {
				countCross ++;
			}
		}
        if (countCross > 0){
            if (countCross % 2 == 1){
                return true;
            }else{
                countCross = 0;
            }
        }
        return false;
    }

    //Inorder to format strings like this, use a "backtick" `````  < these versus '''' < those, or """" < that
    that.toString = function () {
        var retStr = "Points: [ ";
        for (var i = 0; i < this.numPoints; i++) {
            retStr += `(${points[i][0]}, ${points[i][1]})`;
            if (i != 11) {
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

function compareAsteroids(A1, A2){
    if (A1.position[0] < A2.position[0]) return -1;
    if (A1.position[0] > A2.position[0]) return 1;
    return 0;
}