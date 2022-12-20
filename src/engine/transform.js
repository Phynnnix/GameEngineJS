

class Transform{
    constructor(){
        this.mPosition = glMatrix.vec2.fromValues(0, 0);
        this.mScale = glMatrix.vec2.fromValues(1, 1);
        this.mRotationInRad = 0.0;
    }

    setPosition(xPos, yPos){
        this.setXPos(xPos);
        this.setYPos(yPos);
    }
    getPosition(){
        return this.mPosition;
    }

    setSize(width, height){
        this.setWidth(width);
        this.setHeight(height);
    }
    getSize(){
        return this.mScale;
    }

    setXPos(xPos){
        glMatrix.vec2.set(this.mPosition, xPos, this.mPosition[1]);
    }
    getXPos(){
        return this.mPosition[0];
    }
    setYPos(yPos){
        glMatrix.vec2.set(this.mPosition, this.mPosition[0], yPos);
    }
    getYPos(){
        return this.mPosition[1];
    }

    setWidth(width){
        glMatrix.vec2.set(this.mScale, width, this.mScale[1]);
    }
    getWidth(){
        return this.mScale[0];
    }
    setHeight(height){
        glMatrix.vec2.set(this.mScale, this.mScale[0], height);
    }
    getHeight(){
        return this.mScale[1];
    }

    setRotationInRad(rotationInRadians){
        this.mRotationInRad = rotationInRadians;
        while(this.mRotationInRad > (2 * Math.PI)){
            this.mRotationInRad -= (2 * Math.Pi);
        }
    }
    setRotationInDegree(rotationInDegree){
        this.setRotationInRad(rotationInDegree * Math.PI / 180.0);
    }
    getRotation(){
        return this.mRotationInRad;
    }

    getTRSMatrix(){
        let matrix = glMatrix.mat4.create();

        glMatrix.mat4.translate(matrix, matrix, glMatrix.vec3.fromValues(this.getXPos(), this.getYPos(), .0));
        glMatrix.mat4.rotateZ(matrix, matrix, this.getRotation());
        glMatrix.mat4.scale(matrix, matrix, glMatrix.vec3.fromValues(this.getWidth(), this.getHeight(), .0));

        return matrix;
    }
}


export default Transform;