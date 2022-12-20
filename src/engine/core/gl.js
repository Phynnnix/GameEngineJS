"use strict";

let mGL = null;
let mCanvas = null;
function get(){ return mGL; }

function init(canvasId){
    mCanvas = document.getElementById(canvasId);
    mGL = mCanvas.getContext("webgl2") || mCanvas.getContext("experimental-webgl2");
    if(mGL === null){
        document.write("<br /><b>WebGL 2 is not supported by your Device!</b>");
        return;
    }
}

export {init, get}