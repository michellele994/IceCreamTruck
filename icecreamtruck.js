var xPos = 0;
var yPos = 0
setInterval(function () {
    if (yPos == 0) {
        yPos = 50;
        setUp(xPos, yPos)
    }
    else {
        yPos = 0;
        setUp(xPos, yPos)
    }

}, 800)

function setUp(xPos, yPos) {
    var canvas = document.getElementById("truck");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath()
    ctx.lineWidth = "4";
    ctx.strokeStyle = "blue";
    ctx.rect(xPos, yPos, 150, 75);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.stroke();
}