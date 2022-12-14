"use strict";
import {init as initializeVertexBuffer} from "./vertex_buffer.js";
import SimpleShader from "./shaders/simple_shader.js";

let mGL = null;
function getGL(){ return mGL; }

let mShader = null;
function createShader(){
    mShader = new SimpleShader(
            "src/glsl_shaders/vertex/simple_vs.glsl", 
            "src/glsl_shaders/fragment/plain_color_fs.glsl");
}

function initWebGL(canvasId){
    let canvas = document.getElementById(canvasId);
    mGL = canvas.getContext("webgl2") || canvas.getContext("experimental-webgl2");
    if(mGL === null){
        document.write("<br /><b>WebGL 2 is not supported by your Device!</b>");
        return;
    }
}

function clearCanvas(color){
    mGL.clearColor(color[0], color[1], color[2], color[3]);
    mGL.clear(mGL.COLOR_BUFFER_BIT);
}

function init(canvasId){
    initWebGL(canvasId);
    initializeVertexBuffer();
    createShader();
}

function drawSquare(color){
    mShader.activate(color);

    mGL.drawArrays(mGL.TRIANGLE_STRIP, 0, 4);
}

export {getGL, init, clearCanvas, drawSquare}