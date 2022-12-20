import * as engine from "../engine/api.js";

class Game{
    constructor(canvasId){
        let trsMatrix = glMatrix.mat4.create();

        engine.init(canvasId);
        engine.clearCanvas([.7, .7, .7, 1]);
        
        this.mWhiteSquare = new engine.Renderable();
        this.mWhiteSquare.setColor([1,1,1,1]);

        this.mRedSquare = new engine.Renderable();
        this.mRedSquare.setColor([1, 0, 0, 1]);

        this.mWhiteSquare.getXform().setPosition(-0.25, 0.25);
        this.mWhiteSquare.getXform().setRotationInRad(.2);
        this.mWhiteSquare.getXform().setSize(1.2, 1.2);
        this.mWhiteSquare.draw();

        this.mRedSquare.getXform().setXPos(0.25);
        this.mRedSquare.getXform().setYPos(-0.25);
        this.mRedSquare.getXform().setRotationInDegree(45);
        this.mRedSquare.getXform().setWidth(.4);
        this.mRedSquare.getXform().setHeight(.4);
        this.mRedSquare.draw();
    }
}

window.onload = function(){
    new Game("game-canvas");
}