"use strict";
import {init as initializeVertexBuffer, get as getVertexBuffer} from "./vertex_buffer.js";
import {init as initializeShaderSupport, activate as activateShader} from "./shader_support.js";

let mGL = null;
function getGL(){ return mGL; }

function initWebGL(canvasID){
    let canvas = document.getElementById(canvasID);
    mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");
    if(mGL === null){
        document.write("<br /><b>WebGL 2 is not supported by your Device!</b>");
        return;
    }
    mGL.clearColor(.1, .1, .1, 1.0);

    initializeVertexBuffer();
    initializeShaderSupport("VertexShader", "FragmentShader");
}

function clearCanvas(){
    mGL.clear(mGL.COLOR_BUFFER_BIT);
}

function drawSquare(){
    activateShader();

    mGL.drawArrays(mGL.TRIANGLE_STRIP, 0, 4);
}

window.onload = () => {
    initWebGL("game-canvas");
    clearCanvas();
    drawSquare();
};

export {getGL}