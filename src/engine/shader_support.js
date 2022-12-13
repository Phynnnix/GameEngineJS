"use strict";
import { getGL } from "./core.js";
import {get as getVertexBuffer}  from "./vertex_buffer.js";

let mCompiledShader = null;
let mVertexPositionRef = null;

function loadAndCompileShader(id, shaderType){
    let shaderSource = null;
    let compiledShader = null;

    let shaderText = document.getElementById(id);
    shaderSource = shaderText.firstChild.textContent;

    let gl = getGL();
    compiledShader = gl.createShader(shaderType);
    gl.shaderSource(compiledShader, shaderSource);
    gl.compileShader(compiledShader);
    if(!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)){
        throw new Error("A shader compiling error occurred: " +
        gl.getShaderInfoLog(compiledShader));
    }
    return compiledShader;
}

function activate(){
    let gl = getGL();

    gl.useProgram(mCompiledShader);

    gl.bindBuffer(gl.ARRAY_BUFFER, getVertexBuffer());
    gl.vertexAttribPointer(mVertexPositionRef,
        3,
        gl.FLOAT,
        false,
        0,
        0
        );
    gl.enableVertexAttribArray(mVertexPositionRef);
}

function init(vertexShaderId, fragmentShaderId){
    let gl = getGL();

    let vertexShader = loadAndCompileShader(vertexShaderId, gl.VERTEX_SHADER);
    let fragmentShader = loadAndCompileShader(fragmentShaderId, gl.FRAGMENT_SHADER);

    mCompiledShader = gl.createProgram();
    gl.attachShader(mCompiledShader, vertexShader);
    gl.attachShader(mCompiledShader, fragmentShader);
    gl.linkProgram(mCompiledShader);

    if(!gl.getProgramParameter(mCompiledShader, gl.LINK_STATUS)){
        throw new Error("An Error occured while linking shader.");
    }

    mVertexPositionRef = gl.getAttribLocation(mCompiledShader, "aVertexPosition");
}

export {init, activate}