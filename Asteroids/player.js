

// THETA IS ASSUMED TO BE IN RADIANS OFF X AXIS
function Player ( points, position = vec2(0, 0), speed = 0, theta = 0 ){
    this.points = points;
    this.position = position;
    this.speed = speed;
    this.theta = theta;
    this.lives = 3;
    var tempDir = [vec2(1,0)];
    this.rotMat = mat2([Math.cos(theta), Math.sin(theta)], [-Math.sin(theta), Math.cos(theta)]);
    tempDir = matVecArrMult(tempDir, this.rotMat);
    this.dir = vec2(tempDir[0][0], tempDir[0][1]);

    this.updateRotMat = function( theta ){
        var tempDir = [vec2(1,0)];
        this.rotMat = mat2([Math.cos(theta), Math.sin(theta)], [-Math.sin(theta), Math.cos(theta)]);
        tempDir = matVecArrMult(tempDir, this.rotMat);
        this.dir = vec2(tempDir[0][0], tempDir[0][1]);
        this.theta = theta;
    };

    this.calculatePlayerPoints = function(){
        var tempPoints = [];
        tempPoints = Object.assign(tempPoints, this.points);
        var rotPoints = matVecArrMult(tempPoints, this.rotMat);
        for (var i = 0; i < rotPoints.length; i++){
            rotPoints[i][0] += position[0];
            rotPoints[i][1] += position[1];
        }
        return rotPoints;
    };
    
    this.hyperSpaceJump = function( h, w ){
        this.position[0] = Math.random() * w;
        this.position[1] = Math.random() * h;
    }

}