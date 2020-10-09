var mouseEvent = "empty";
var lastPositionOfX;
var lastPositionOfY;
canvas = document.getElementById("myCanvas");


ctx = canvas.getContext("2d");
color = document.getElementById("color_line").value;
width_line = document.getElementById("width_line").value;
width_of_line = 2;

canvas.addEventListener("mousedown",my_mouse_down());

function my_mouse_down(e){
mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){
    current_mouseX = e.clientX-canvas.offsetLeft;
    current_mouseY = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mousedown" ){
    ctx.beginPath();
    color = document.getElementById("color_line").value;
    width_line = document.getElementById("width_line").value;
    ctx.strokeStyle=color;
    ctx.lineWidth =  width_line;
    }
    console.log("last position of x and y coordinates are");
    console.log("X ="+ lastPositionOfX + "Y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX,lastPositionOfY);
    console.log("current position of x and y coordinates are");
    console.log("X ="+ current_mouseX + "Y = " + current_mouseY);
    ctx.lineTo(current_mouseX,current_mouseY);
    ctx.stroke();
    lastPositionOfX=current_mouseX;
    lastPositionOfY=current_mouseY;
}


canvas.addEventListener("mouseup",my_mouse_up);

function my_mouse_up(e){
mouseEvent = "mouseup";}

canvas.addEventListener("mouseleave",my_mouse_leave);

function my_mouse_leave(e){
mouseEvent = "mouseleave";
}

function my_clear_all() {

    ctx.clearRect(0,0,canvas.width,canvas.height );
    
    }
