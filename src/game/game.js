import * as engine from "../engine/core.js";

class Game{
    constructor(canvasId){
        engine.init(canvasId);
        engine.clearCanvas([.7, .7, .7, 1]);
        engine.drawSquare([.9, .3, .5, 1]);
    }
}

window.onload = function(){
    new Game("game-canvas");
}