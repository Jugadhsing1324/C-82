var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=3;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_line");
    mouseevent="mousedown";
} 

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("lastx="+lastx+", lasty="+lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();
    }
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseevent="mouseleave";
}
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
