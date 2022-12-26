uniform mat4 uModelXformMatrix;
uniform mat4 uCameraXformMatrix;
attribute vec3 aVertexPosition;
void main(void){
    gl_Position = uCameraXformMatrix * 
                    uModelXformMatrix * 
                    vec4(aVertexPosition, 1.0);
}