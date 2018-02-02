var canvas;
var canvasContext;
var boxX = 2;
var boxY = 2;
var boxSpeedX = 5;
var boxSpeedY = 5;

var initAnim = true;
var runAnim = false;
var isPlay = false;
var theta = 0; 

window.onload = function()
{
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");
    
    var framesPerSecond = 30;
    var internal = setInterval(function() {
       draw();
       move();
       draw();  
    }, 1000/framesPerSecond);
}

function draw() {

    canvasContext.fillStyle = '#ffffcc';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = '#ff0000';
    canvasContext.fillRect(boxX, boxY, 75, 75);
}

function move() {

    if(boxX <= canvas.width - 80 && boxY == 2) {
        leftToRight();
    }
    else if (boxX == 522 && boxY <= canvas.height - 80)
    {
       topToBottom();
   }
    else if(boxX <= 522 && boxX > 2 && boxY == 447) {
         rightToLeft();
    }

    else if(boxX == 2 && boxY <= 447) {
        bottomToTop();
    }

    else if(boxX >= 2 && boxY ==75)
    {
        leftToRight();
    }

}

function leftToRight() {
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    boxX = boxX + boxSpeedX;
    canvasContext.fillRect(boxX,boxY,75,75);
    console.log(boxX,boxY);

    if((boxX >= 7 && boxX < 447) && boxY == 72)
    {   
        setTimeout(leftToRight,33);
    }

    else if (boxX == 447 && boxY >= 72) 
    {
        setTimeout(topToBottom,33);
    }

    else if ((boxX >= 82 && boxX < 372) && boxY == 147) {
        setTimeout(leftToRight,33);
    }

    else if (boxX == 372 && boxY == 147) {
        setTimeout(topToBottom,33);
    }

    else if ((boxX >= 162 && boxX < 275) && boxY == 222) {
        setTimeout(leftToRight,33);
    }

}

function rightToLeft() {
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    boxX = boxX - boxSpeedX;
    canvasContext.fillRect(boxX,boxY,75,75);
    console.log(boxX,boxY);

    if((boxX <= 442 && boxX > 77) && boxY == 372)
    {   
        setTimeout(rightToLeft,33);
    }
    
    else if (boxX == 77 && boxY == 372) 
    {
        setTimeout(bottomToTop,33);
    }

    else if ((boxX <= 367 && boxX > 157) && boxY == 297) {
        setTimeout(rightToLeft,33);
    }

    else if (boxX == 157 && boxY == 297) 
    {
        setTimeout(bottomToTop,33);
    }

} 

function topToBottom() {
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    boxY = boxY + boxSpeedY;
    canvasContext.fillRect(boxX,boxY,75,75);
    console.log(boxX,boxY);

    if(boxX == 447 && (boxY >= 77 && boxY < 372))
    {   
        setTimeout(topToBottom,33);
    }

     else if (boxX == 447 && boxY == 372) 
    {
        setTimeout(rightToLeft,33);
    }

    else if (boxX == 372 && (boxY >= 152 && boxY < 297)) {
        setTimeout(topToBottom,33);
    }

     else if (boxX == 372 && boxY == 297) 
    {
        setTimeout(rightToLeft,33);
    }
}

function bottomToTop() {        
    canvasContext.clearRect(0,0,canvas.width,canvas.height);
    boxY = boxY - boxSpeedY;
    canvasContext.fillRect(boxX,boxY,75,75);
    console.log(boxX,boxY);
    
    if(boxX == 2 && boxY == 72) {
        leftToRight();
    }

    else if (boxX == 77 && (boxY <= 367 && boxY > 147)) 
    {
        setTimeout(bottomToTop,33);
    }

    else if (boxX == 77 && boxY == 147) {
        setTimeout(leftToRight,33);
    }

    else if (boxX == 157 && (boxY <= 292 && boxY > 222)) {
        setTimeout(bottomToTop,33);
    }

    else if (boxX == 157  && boxY == 222) {
        setTimeout(leftToRight,33);
    }
}


