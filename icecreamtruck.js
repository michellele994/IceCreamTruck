var canvas = document.getElementById("truck");
var ctx = canvas.getContext("2d");
var xPos = canvas.width * (2 / 7);
var yPos = canvas.height * (11 / 25);
setInterval(function () {
    if (yPos == canvas.height * (11 / 25)) {
        yPos = canvas.height * (11 / 25) + 3;
        setUp(xPos, yPos)
    }
    else {
        yPos = canvas.height * (11 / 25);
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
    ctx.arc(xPos + (canvas.width * (1 / 2)) - 10, yPos + 10, 10, 1.5 * Math.PI, 0 * Math.PI);
    //Bottom right rounded corner
    ctx.arc(xPos + (canvas.width * (1 / 2)) - 10, yPos + (canvas.height * (5 / 11)) - 10, 10, 0, 0.5 * Math.PI);
    //Bottom left rounded corner
    ctx.arc(xPos - (canvas.width * (1 / 9)), yPos + (canvas.height * (5 / 11)) - 10, 10, 0.5 * Math.PI, Math.PI);
    //Engine
    ctx.arc(xPos - (canvas.width * (1 / 9)), yPos + (canvas.height * (3 / 11)), 10, Math.PI, 1.4 * Math.PI);
    ctx.lineTo(xPos - (canvas.width * (1 / 25)) - 10, yPos + (canvas.height * (1 / 5)) - 10);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    //Front tire
    ctx.beginPath()
    ctx.lineWidth = "25";
    ctx.strokeStyle = "#777";
    ctx.arc((canvas.width * (2 / 7)), (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "silver";
    ctx.fill();
    ctx.stroke();
    //Back tire
    ctx.beginPath();
    ctx.arc((canvas.width * (2 / 7)) + (canvas.width * (2 / 5)), (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 30, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "silver";
    ctx.fill();
    ctx.stroke();

    drawTruckDetails(canvas, ctx);
}
function drawTruckDetails(canvas, ctx) {
    ctx.lineWidth = "2"
    ctx.strokeStyle = "#777";
    //Driver Window
    ctx.beginPath();
    ctx.moveTo(xPos + 20, yPos + 20);
    ctx.lineTo(xPos + (canvas.width * (1 / 10)), yPos + 20);
    ctx.lineTo(xPos + (canvas.width * (1 / 10)), yPos + (canvas.height * (1 / 5)) - 10);
    ctx.lineTo(xPos - (canvas.width * (1 / 25)) + 20, yPos + (canvas.height * (1 / 5)) - 10);
    ctx.closePath();
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();

    //Door handle
    ctx.lineWidth = "5";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.moveTo(xPos + (canvas.width * (1 / 14)), yPos + (canvas.height * (4 / 17)));
    ctx.lineTo(xPos + (canvas.width * (1 / 10)), yPos + (canvas.height * (4 / 17)));
    ctx.closePath();
    ctx.stroke();

    //Ice Cream Window
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.rect(xPos + (canvas.width * (1 / 6)), yPos + 20, (canvas.width * (1 / 4)), (canvas.height * (1 / 5)))
    ctx.fillStyle = "#DDD";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Window lights
    ctx.lineWidth = "1";
    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.moveTo(xPos + 10, yPos + (canvas.height * (1 / 6)) - 10);
    ctx.lineTo(xPos + (canvas.width * (1 / 12)), yPos + 30);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.moveTo(xPos + 30, yPos + (canvas.height * (1 / 6)) - 5);
    ctx.lineTo(xPos + (canvas.width * (1 / 12)), yPos + 50);
    ctx.closePath();
    ctx.stroke();

    //Front lights
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.rect(xPos - (canvas.width * (1 / 9) + 10), yPos + (canvas.height * (3 / 10)), 30, 20);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    //Ice Cream Window Curtains
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    var lengthOfWindow = (canvas.width * (1 / 4)) + 20
    var edgeCurtain = (xPos + (canvas.width * (1 / 6)) - 10);
    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        if (i == 0) {
            ctx.arc(edgeCurtain + 10, yPos + 25, 10, Math.PI, 1.5 * Math.PI);
            ctx.lineTo(edgeCurtain + (lengthOfWindow * 1 / 10), yPos + 15)
        }
        else {
            edgeCurtain = edgeCurtain + (lengthOfWindow * 1 / 10);
            ctx.moveTo(edgeCurtain, yPos + 15)
            if (i == 9) {
                ctx.arc(edgeCurtain + (lengthOfWindow * 1 / 10) - 10, yPos + 25, 10, 1.5 * Math.PI, 0);
            }
            else {
                ctx.lineTo(edgeCurtain + (lengthOfWindow * 1 / 10), yPos + 15)
            }
        }
        ctx.arc(((edgeCurtain) + (lengthOfWindow * 1 / 10) * (1 / 2)), yPos + (canvas.height * (1 / 12)), (lengthOfWindow * 1 / 20), 2 * Math.PI, Math.PI);
        ctx.closePath();
        if (i % 2 == 0) {
            ctx.fillStyle = "red";
        }
        else {
            ctx.fillStyle = "yellow";
        }
        ctx.fill();
        ctx.stroke();
    }


};

