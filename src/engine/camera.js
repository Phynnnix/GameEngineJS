import * as glSys from "./core/gl.js";

class Camera {
    constructor(wcCenter, wcWidth, viewportArray){
        this.mWcCenter = wcCenter;
        this.mWcWidth = wcWidth;
        this.mViewport = viewportArray;

        this.mCameraMatrix = glMatrix.mat4.create();

        this.mBGColor = [.5,.5,.5,1];
    }

    setWCWidth(wcWidth){
        this.mWcWidth = wcWidth;
    }
    getWCWidth(){
        return this.mWcWidth;
    }

    getWCHeight(){
        let ratio = this.mViewport[eViewport.eHeight] /
                    this.mViewport[eViewport.eWidth];

        return ratio * this.getWCWidth();
    }

    setWCCenter(wcCenter){
        this.mWcCenter = wcCenter;
    }
    getWCCenter(){
        return this.mWcCenter;
    }

    setViewport(viewportArray){
        this.mViewport = viewportArray;
    }
    getViewport(){
        return this.mViewport;
    }

    setBackgroundColor(newColor){
        this.mBGColor = newColor;
    }
    getBackgroundColor(){
        return this.mBGColor;
    }

    setViewAndCameraMatrix(){
        let gl = glSys.get();

        gl.viewport(
            this.mViewport[eViewport.eOrgX],
            this.mViewport[eViewport.eOrgY],
            this.mViewport[eViewport.eWidth],
            this.mViewport[eViewport.eHeight]
        );
        gl.scissor(
            this.mViewport[eViewport.eOrgX],
            this.mViewport[eViewport.eOrgY],
            this.mViewport[eViewport.eWidth],
            this.mViewport[eViewport.eHeight]
        );
        gl.clearColor(
            this.mBGColor[0],
            this.mBGColor[1],
            this.mBGColor[2],
            this.mBGColor[3]
        );
        gl.enable(gl.SCISSOR_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.SCISSOR_TEST);
        
        let center = this.getWCCenter();

        glMatrix.mat4.scale(
            this.mCameraMatrix, 
            glMatrix.mat4.create(),
            glMatrix.vec3.fromValues(
                2.0 / this.getWCWidth(),
                2.0 / this.getWCHeight(),
                1.0
            )
        );
        glMatrix.mat4.translate(
            this.mCameraMatrix,
            this.mCameraMatrix,
            glMatrix.vec3.fromValues(-center[0], -center[1], 0)
        );
    }
    getCameraMatrix(){
        return this.mCameraMatrix;
    }
}

const eViewport = Object.freeze({
    eOrgX: 0,
    eOrgY: 1,
    eWidth: 2,
    eHeight: 3
});

export default Camera;