"use strict";

import { getGL } from "./core.js";

let mGLVertexBuffer = null;
function get(){return mGLVertexBuffer;}

let mVerteciesOfSquare = [
    .5,.5,.0,
    -.5,.5,.0,
    .5,-.5,.0,
    -.5,-.5,.0
]

function init(){
    let gl = getGL();
    mGLVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, mGLVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mVerteciesOfSquare), gl.STATIC_DRAW);
}

export {init, get}