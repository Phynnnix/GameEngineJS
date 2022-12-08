"use strict";
let mGL = null;
function getGL(){ return mGL; }

function initWebGL(canvasID){
    let canvas = document.getElementById(canvasID);
    mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");
    if(mGL === null){
        document.write("<br /><b>WebGL 2 is not supported by your Device!</b>");
        return;
    }
    mGL.clearColor(.0, .2, .0, 1.0);
}

function clearCanvas(){
    mGL.clear(mGL.COLOR_BUFFER_BIT);
}

window.onload = () => {
    initWebGL("game-canvas");
    clearCanvas();
};