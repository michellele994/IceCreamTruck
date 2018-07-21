var canvas = document.getElementById("truck");
var ctx = canvas.getContext("2d");
var xPos = canvas.width / 5;
var yPos = canvas.height / 5
setInterval(function () {
    if (yPos == canvas.height / 5) {
        yPos = canvas.height / 5 + 20;
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
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawTruck(canvas, ctx) {
    ctx.beginPath()
    ctx.lineWidth = "4";
    ctx.strokeStyle = "blue";
    ctx.rect(xPos, yPos, 150, 75);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.stroke();
}