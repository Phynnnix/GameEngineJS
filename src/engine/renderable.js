import * as glSys from "./core/gl.js";
import * as shaderResources from "./core/shader_resources.js";
import Transform from "./transform.js";

class Renderable{
    constructor(){
        this.mShader = shaderResources.getConstantColorShader();
        this.mColor = [1, 1, 1, 1];
        this.mXform = new Transform();
    }

    draw(cameraMatrix) {
        let gl = glSys.get();
        this.mShader.activate(this.mColor, this.mXform.getTRSMatrix(), cameraMatrix);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    getXform(){
        return this.mXform;
    }

    setColor(color){
        this.mColor = color;
    }
    getColor(){
        return this.mColor;
    }
}

export default Renderable;