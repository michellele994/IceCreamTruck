var canvas = document.getElementById("truck");
var ctx = canvas.getContext("2d");
var xPos = canvas.width / 4;
var yPos = canvas.height / 4;
setInterval(function () {
    if (yPos == canvas.height / 4) {
        yPos = canvas.height / 4 + 3;
        setUp(xPos, yPos)
    }
    else {
        yPos = canvas.height / 4;
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
    ctx.lineWidth = "3";
    ctx.strokeStyle = "#777";
    //starting at top left rounded corner going clockwise
    ctx.beginPath();
    ctx.arc(xPos + 10, yPos + 10, 10, 1.2 * Math.PI, 1.5 * Math.PI);
    //top right rounded corner
    ctx.arc(xPos + (canvas.width * (2 / 3)) - 10, yPos + 10, 10, 1.5 * Math.PI, 0 * Math.PI);
    //bottom right rounded corner
    ctx.arc(xPos + (canvas.width * (2 / 3)) - 10, yPos + (canvas.height * (3 / 5)) - 10, 10, 0, 0.5 * Math.PI);
    //bottom left rounded corner
    ctx.arc(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (3 / 5)) - 10, 10, 0.5 * Math.PI, Math.PI);
    //engine
    ctx.arc(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (1 / 3)), 10, Math.PI, 1.4 * Math.PI);
    ctx.lineTo(xPos - (canvas.width * (1 / 15)) - 10, yPos + (canvas.height * (1 / 4)) - 10);
    ctx.closePath();
    ctx.stroke();

    // Filling in the truck color
    ctx.fillStyle = "white";
    ctx.fill();

    //Front tire
    ctx.beginPath()
    ctx.lineWidth = "45";
    ctx.strokeStyle = "#777";
    ctx.arc((canvas.width * (1 / 4)) - (canvas.width * (1 / 25)), (canvas.height * (1 / 4)) + (canvas.height * (3 / 5)), 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    //Back tire
    ctx.beginPath()
    ctx.lineWidth = "45";
    ctx.strokeStyle = "#777";
    ctx.arc((canvas.width * (1 / 4)) + (canvas.width * (5 / 9)), (canvas.height * (1 / 4)) + (canvas.height * (3 / 5)), 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    // ctx.moveTo(xPos, yPos);
    // ctx.arc(300, 300, 30, 0, 2 * Math.PI);
    // ctx.stroke();
}