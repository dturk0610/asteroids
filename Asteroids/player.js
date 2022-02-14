// THETA IS ASSUMED TO BE IN RADIANS OFF X AXIS
function Player ( points, position = vec2(0, 0), speed = 0, theta = 0 ){
    var that = this;
    this.points = points;
    this.position = position;
    this.speed = speed;
    this.theta = theta;
    var tempDir = [vec2(1,0)];
    this.rotMat = mat2([Math.cos(theta), Math.sin(theta)], [-Math.sin(theta), Math.cos(theta)]);
    tempDir = matVecArrMult(tempDir, this.rotMat);
    this.dir = vec2(tempDir[0][0], tempDir[0][1]);

    that.updateRotMat = function( theta ){
        var tempDir = [vec2(1,0)];
        this.rotMat = mat2([Math.cos(theta), Math.sin(theta)], [-Math.sin(theta), Math.cos(theta)]);
        tempDir = matVecArrMult(tempDir, this.rotMat);
        this.dir = vec2(tempDir[0][0], tempDir[0][1]);
    };

    that.calculatePlayerPoints = function(){
        var tempPoints = [];
        tempPoints = Object.assign(tempPoints, that.points);
        var rotPoints = matVecArrMult(tempPoints, that.rotMat);
        for (var i = 0; i < rotPoints.length; i++){
            rotPoints[i][0] += position[0];
            rotPoints[i][1] += position[1];
        }
        return rotPoints;
    };
}

// RADIUS IS ASSUMED TO BE IN PIXELS
function Bullet ( center, radius ){
    this.position = center;
    this.radius = radius;
}