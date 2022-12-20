"use strict!";

import SimpleShader from "../shaders/simple_shader.js";

let kSimpleVS = "src/glsl_shaders/vertex/simple_vs.glsl";
let kSimpleFS = "src/glsl_shaders/fragment/plain_color_fs.glsl";
let mConstColorShader = null;

function createShaders(){
    mConstColorShader = new SimpleShader(kSimpleVS, kSimpleFS);
}

function init(){
    createShaders();
}

function getConstantColorShader(){
    return mConstColorShader;
}

export {init, getConstantColorShader}