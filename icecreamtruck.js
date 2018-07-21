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
    var recanvas = document.getElementById("truck");
    var rectx = recanvas.getContext("2d");
    rectx.fillStyle = "#FFFFFF";
    rectx.fillRect(0, 0, 500, 500);

    var canvas = document.getElementById("truck");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xPos, yPos, 150, 75);
}