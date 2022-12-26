import * as engine from "../engine/api.js";
import * as glSys from "../engine/core/gl.js";

class Game{
    constructor(canvasId){
        engine.init(canvasId);
        
        this.mBlueSq = new engine.Renderable();
        this.mBlueSq.setColor([0.25, 0.25, 0.95, 1]);
        this.mRedSq = new engine.Renderable();
        this.mRedSq.setColor([1, 0.25, 0.25, 1]);
        this.mTLSq = new engine.Renderable();
        this.mTLSq.setColor([0.9, 0.1, 0.1, 1]);
        this.mTRSq = new engine.Renderable();
        this.mTRSq.setColor([0.1, 0.9, 0.1, 1]);
        this.mBRSq = new engine.Renderable();
        this.mBRSq.setColor([0.1, 0.1, 0.9, 1]);
        this.mBLSq = new engine.Renderable();
        this.mBLSq.setColor([0.1, 0.1, 0.1, 1]);

        engine.clearCanvas([.9, .9, .9, 1]);

        let gl = glSys.get();
        gl.viewport(20,40,600,300);
        gl.scissor(20,40,600,300);
        gl.enable(gl.SCISSOR_TEST);
        engine.clearCanvas([.7,.7,.7,1]);
        gl.disable(gl.SCISSOR_TEST);

        let cameraCenter = glMatrix.vec2.fromValues(20, 60);
        let wcSize = glMatrix.vec2.fromValues(20, 10);
        let cameraMatrix = glMatrix.mat4.create();
        glMatrix.mat4.scale(cameraMatrix, glMatrix.mat4.create(), 
            	glMatrix.vec3.fromValues(2.0/wcSize[0], 2.0/wcSize[1], 1.0));
        glMatrix.mat4.translate(cameraMatrix, cameraMatrix,
                glMatrix.vec3.fromValues(-cameraCenter[0], -cameraCenter[1], .0));
        

        this.mBlueSq.getXform().setPosition(20, 60);
        this.mBlueSq.getXform().setRotationInRad(0.2); // In Radians
        this.mBlueSq.getXform().setSize(5, 5);
        this.mBlueSq.draw(cameraMatrix);

        this.mRedSq.getXform().setPosition(20, 60);
        this.mRedSq.getXform().setSize(2, 2);
        this.mRedSq.draw(cameraMatrix);
        
        this.mTLSq.getXform().setPosition(10, 65);
        this.mTLSq.draw(cameraMatrix);

        this.mTRSq.getXform().setPosition(30, 65);
        this.mTRSq.draw(cameraMatrix);

        this.mBRSq.getXform().setPosition(30, 55);
        this.mBRSq.draw(cameraMatrix);

        this.mBLSq.getXform().setPosition(10, 55);
        this.mBLSq.draw(cameraMatrix);

    }
}

window.onload = function(){
    new Game("game-canvas");
}