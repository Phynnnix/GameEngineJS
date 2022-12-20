uniform mat4 uModelXformMatrix;
attribute vec3 aVertexPosition;
void main(void){
    gl_Position = uModelXformMatrix * vec4(aVertexPosition, 1.0);
}