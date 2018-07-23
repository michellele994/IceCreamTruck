var canvas = document.getElementById("truck");
var ctx = canvas.getContext("2d");
var xPos = canvas.width / 4;
var yPos = canvas.height * (2 / 7);
setInterval(function () {
    if (yPos == canvas.height * (2 / 7)) {
        yPos = canvas.height * (2 / 7) + 3;
        setUp(xPos, yPos)
    }
    else {
        yPos = canvas.height * (2 / 7);
        setUp(xPos, yPos)
    }

}, 800)

function setUp(xPos, yPos) {
    drawCanvas(canvas, ctx);
    drawTruck(canvas, ctx);
}
function drawCanvas(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function drawTruck(canvas, ctx) {
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + 10, yPos + 10, 10, 1.2 * Math.PI, 1.5 * Math.PI);
    //Top right rounded corner
    ctx.arc(xPos + (canvas.width * (2 / 3)) - 10, yPos + 10, 10, 1.5 * Math.PI, 0 * Math.PI);
    //Bottom right rounded corner
    ctx.arc(xPos + (canvas.width * (2 / 3)) - 10, yPos + (canvas.height * (3 / 5)) - 10, 10, 0, 0.5 * Math.PI);
    //Bottom left rounded corner
    ctx.arc(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (3 / 5)) - 10, 10, 0.5 * Math.PI, Math.PI);
    //Engine
    ctx.arc(xPos - (canvas.width * (1 / 6)), yPos + (canvas.height * (1 / 3)), 10, Math.PI, 1.4 * Math.PI);
    ctx.lineTo(xPos - (canvas.width * (1 / 15)) - 10, yPos + (canvas.height * (1 / 4)) - 10);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    //Front tire
    ctx.beginPath()
    ctx.lineWidth = "45";
    ctx.strokeStyle = "#777";
    ctx.arc((canvas.width * (1 / 4)) - (canvas.width * (1 / 25)), (canvas.height * (2 / 7)) + (canvas.height * (3 / 5)), 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    //Back tire
    ctx.beginPath();
    ctx.arc((canvas.width * (1 / 4)) + (canvas.width * (5 / 9)), (canvas.height * (2 / 7)) + (canvas.height * (3 / 5)), 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    drawTruckDetails(canvas, ctx);
}
function drawTruckDetails(canvas, ctx) {
    ctx.lineWidth = "2"
    ctx.strokeStyle = "#CBCBCB";
    //Driver Window
    ctx.beginPath();
    ctx.moveTo(xPos + 10, yPos + 20);
    ctx.lineTo(xPos + (canvas.width * (1 / 10)), yPos + 20);
    ctx.lineTo(xPos + (canvas.width * (1 / 10)), yPos + (canvas.height * (1 / 4)) - 10);
    ctx.lineTo(xPos - (canvas.width * (1 / 15)) + 10, yPos + (canvas.height * (1 / 4)) - 10);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();

    //Ice Cream Window
    ctx.beginPath();
    ctx.rect(xPos + (canvas.width * (1 / 7)), yPos + 20, (canvas.width * (3 / 7)), (canvas.height * (1 / 3)))
    ctx.fillStyle = "#DDD";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Ice Cream Window Curtains
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    //Left rounded corner
    // ctx.arc(xPos + (canvas.width * (1 / 7)), yPos + 20, 10, Math.PI, 1.5 * Math.PI);
    // ctx.arc(xPos + (canvas.width * (4 / 7)), yPos + 20, 10, 1.5 * Math.PI, 2 * Math.PI);

    //Beginning the dress of the curtain
    var lengthOfWindow = (canvas.width * (3 / 7)) + 20
    var leftEdgeCurtain = (xPos + (canvas.width * (1 / 7)) - 10);
    // var xPosOfEachRightEdgeCurtain = leftEdgeCurtain + (lengthOfWindow * 1 / 10)
    for (var i = 0; i < 10; i++) {
        if (i == 0) {
            ctx.beginPath();
            ctx.arc(leftEdgeCurtain + 10, yPos + 20, 10, Math.PI, 1.5 * Math.PI);
            ctx.lineTo(leftEdgeCurtain + (lengthOfWindow * 1 / 10), yPos + 10)
            ctx.arc(((leftEdgeCurtain) + (lengthOfWindow * 1 / 10) * (1 / 2)), yPos + (canvas.height * (1 / 7)), (lengthOfWindow * 1 / 20), 2 * Math.PI, Math.PI);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();
        }
        else if (i == 9) {
            leftEdgeCurtain = leftEdgeCurtain + (lengthOfWindow * 1 / 10);
            ctx.beginPath();
            ctx.moveTo(leftEdgeCurtain, yPos + 10)
            ctx.arc(leftEdgeCurtain + (lengthOfWindow * 1 / 10) - 10, yPos + 20, 10, 1.5 * Math.PI, 0);
            ctx.arc(((leftEdgeCurtain) + (lengthOfWindow * 1 / 10) * (1 / 2)), yPos + (canvas.height * (1 / 7)), (lengthOfWindow * 1 / 20), 2 * Math.PI, Math.PI);
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.stroke();
        }
        else if (i % 2 == 0) {
            leftEdgeCurtain = leftEdgeCurtain + (lengthOfWindow * 1 / 10);
            ctx.beginPath();
            ctx.moveTo(leftEdgeCurtain, yPos + 10)
            ctx.lineTo(leftEdgeCurtain + (lengthOfWindow * 1 / 10), yPos + 10)
            ctx.arc(((leftEdgeCurtain) + (lengthOfWindow * 1 / 10) * (1 / 2)), yPos + (canvas.height * (1 / 7)), (lengthOfWindow * 1 / 20), 2 * Math.PI, Math.PI);
            ctx.closePath();
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.stroke();
        }
        else if (i % 2 !== 0) {
            leftEdgeCurtain = leftEdgeCurtain + (lengthOfWindow * 1 / 10);
            ctx.beginPath();
            ctx.moveTo(leftEdgeCurtain, yPos + 10)
            ctx.lineTo(leftEdgeCurtain + (lengthOfWindow * 1 / 10), yPos + 10)
            ctx.arc(((leftEdgeCurtain) + (lengthOfWindow * 1 / 10) * (1 / 2)), yPos + (canvas.height * (1 / 7)), (lengthOfWindow * 1 / 20), 2 * Math.PI, Math.PI);
            ctx.closePath();
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.stroke();
        }
    }
    // ctx.arc(xPos + (canvas.width * (4 / 7) + 13), yPos + 20, 10, 1.5 * Math.PI, 2 * Math.PI);

    // ((xPos + (canvas.width * (1 / 7)) + (((canvas.width * (4 / 7)) + 10) * 1 / 10)) - (xPos + (canvas.width * (1 / 7))))* (1/2)


};

