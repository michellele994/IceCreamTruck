var canvas = document.getElementById("truck");
var ctx = canvas.getContext("2d");
var xPos = canvas.width / 4;
var yPos = canvas.height / 5
setInterval(function () {
    if (yPos == canvas.height / 5) {
        yPos = canvas.height / 5 + 5;
        setUp(xPos, yPos)
    }
    else {
        yPos = canvas.height / 5;
        setUp(xPos, yPos)
    }

}, 800)

function setUp(xPos, yPos) {
    drawCanvas(canvas, ctx);
    drawTruck(canvas, ctx);
}
function drawCanvas(canvas, ctx) {
    ctx.fillStyle = "lightyellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawTruck(canvas, ctx) {

    // roundedCorners();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    //top left rounded corner
    ctx.beginPath();
    ctx.arc(xPos + 10, yPos + 10, 10, Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    //top line
    ctx.lineTo(xPos + (canvas.width * (2 / 3)) - 10, yPos);
    ctx.stroke();

    //top right rounded corner
    ctx.arc(xPos + (canvas.width * (2 / 3)) - 10, yPos + 10, 10, 1.5 * Math.PI, 0 * Math.PI);
    ctx.stroke();

    //right line
    ctx.lineTo(xPos + (canvas.width * (2 / 3)), yPos + (canvas.height * (3 / 5)) - 10);
    ctx.stroke();

    //bottom right rounded corner
    ctx.arc(xPos + (canvas.width * (2 / 3)) - 10, yPos + (canvas.height * (3 / 5)) - 10, 10, 0, 0.5 * Math.PI);
    ctx.stroke();

    //bottom line
    ctx.lineTo(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (3 / 5)));
    ctx.stroke();

    //bottom left rounded corner
    ctx.arc(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (3 / 5)) - 10, 10, 0.5 * Math.PI, Math.PI);
    ctx.stroke();

    //left lines
    ctx.lineTo(xPos - (canvas.width * (1 / 6)) - 10, yPos + (canvas.height * (1 / 3)));
    ctx.stroke();

    //top left engine rounded corner
    ctx.arc(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (2 / 7)), 10, Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    ctx.lineTo(xPos - (canvas.width * (1 / 7)) - 10, yPos + (canvas.height * (2 / 7)) - 10);
    ctx.stroke();

    ctx.lineTo(xPos, yPos + 10);
    ctx.stroke();

    // ctx.fillStyle = "white";
    // ctx.fill();
}