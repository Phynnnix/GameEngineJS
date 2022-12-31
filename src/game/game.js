import * as engine from "../engine/api.js";
import * as loop from "../engine/core/loop.js";

class Game{
    constructor(){
        this.mCamera = null;
        this.mWhiteSq = null;
        this.mRedSq = null;
    }

    init(){
        console.log('init game.js');
        this.mCamera = new engine.Camera(
            glMatrix.vec2.fromValues(20, 60),
            20,
            [20, 40, 600, 300]
        );
        this.mCamera.setBackgroundColor([.8, .8, .8, 1])

        this.mWhiteSq = new engine.Renderable();
        this.mWhiteSq.setColor([.99, .99, .99, 1]);
        this.mRedSq = new engine.Renderable();
        this.mRedSq.setColor([1, 0.1, 0.1, 1]);

        this.mWhiteSq.getXform().setPosition(20, 60);
        this.mWhiteSq.getXform().setRotationInRad(.2);
        this.mWhiteSq.getXform().setSize(5,5);

        this.mRedSq.getXform().setPosition(20,60);
        this.mRedSq.getXform().setSize(2,2);
    }

    draw(){
        engine.clearCanvas([.9, .9, .9, 1]);

        this.mCamera.setViewAndCameraMatrix();

        this.mWhiteSq.draw(this.mCamera);
        this.mRedSq.draw(this.mCamera);
    }

    update(){
        let whiteXform = this.mWhiteSq.getXform();
        let deltaX = .05;

        if(whiteXform.getXPos() > 30){
            whiteXform.setPosition(10,60);
        }
        whiteXform.incXPosBy(deltaX);
        whiteXform.incRotationInDegreeBy(1);

        let redXform = this.mRedSq.getXform();
        if(redXform.getWidth() > 5){
            redXform.setSize(2,2);
        }
        redXform.incSizeBy(.05);
    }
}

window.onload = function(){
    engine.init("game-canvas");
    let game = new Game();
    loop.start(game);
}