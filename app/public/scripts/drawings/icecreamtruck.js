function drawCanvas(currHour) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    if (currHour > 5 && currHour < 19) {
        gradient.addColorStop("0", "#11b7fc");
        gradient.addColorStop("0.5", "#8edeff");
        gradient.addColorStop("1.0", "#ade7ff");
        ctx.fillStyle = gradient
    }
    else if ((currHour > 4 && currHour < 6) || (currHour > 18 && currHour < 21)) {
        gradient.addColorStop("0", "#a932ff");
        gradient.addColorStop("0.5", "#b61add");
        gradient.addColorStop("1.0", "#ff7944");
        ctx.fillStyle = gradient
    }
    else if (currHour > 20 || currHour < 7) {
        gradient.addColorStop("0", "#010a70");
        gradient.addColorStop("0.5", "#5c19d1");
        gradient.addColorStop("1.0", "#9932ff");
        ctx.fillStyle = gradient
    }

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (currHour > 5 && currHour < 19) {
        ctx.strokeStyle = "green";
        ctx.fillStyle = "lightgreen";
    }
    else {
        ctx.strokeStyle = "#229e49";
        ctx.fillStyle = "#2ac15a";
    }

    ctx.rect(0 - (canvas.width * (1 / 12)), (canvas.height * (11 / 12)), canvas.width + (canvas.width * (2 / 12)), (canvas.height * (2 / 12)))
    ctx.fill();
    ctx.stroke();
}
function drawTruck() {
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
    ctx.fillStyle = "#fef9e7";
    ctx.fill();
    ctx.stroke();
    //Front tire
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.arc(xPos, yPos + (canvas.height * (5 / 11)), 45, Math.PI, 0);
    ctx.closePath();
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#333";
    ctx.arc(xPos, (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 40, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#555";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#333";
    ctx.arc(xPos, (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#333";
    ctx.arc(xPos, (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#555";
    ctx.fill();
    ctx.stroke();
    //Back tire
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.arc(xPos + (canvas.width * (2 / 5)), yPos + (canvas.height * (5 / 11)), 45, Math.PI, 0);
    ctx.closePath();
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#333";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (2 / 5)), (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 40, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#555";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#333";
    ctx.arc(xPos + (canvas.width * (2 / 5)), (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 20, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath()
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#333";
    ctx.arc(xPos + (canvas.width * (2 / 5)), (canvas.height * (11 / 25)) + (canvas.height * (5 / 11)), 10, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#555";
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

    //Window shine
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.moveTo(xPos + 10, yPos + (canvas.height * (1 / 6)) - 10);
    ctx.lineTo(xPos + (canvas.width * (1 / 12)), yPos + 30);
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#FFF";
    ctx.beginPath();
    ctx.moveTo(xPos + 30, yPos + (canvas.height * (1 / 6)) - 5);
    ctx.lineTo(xPos + (canvas.width * (1 / 12)), yPos + 50);
    ctx.closePath();
    ctx.stroke();

    //Ice Cream Window
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.rect(xPos + (canvas.width * (1 / 6)), yPos + 20, (canvas.width * (1 / 4)), (canvas.height * (1 / 5)))
    ctx.fillStyle = "#9acdd1";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)), (yPos + 20) + (canvas.height * (1 / 5)), 10, 0.5 * Math.PI, 1.5 * Math.PI);
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 4)), (yPos + 20) + (canvas.height * (1 / 5)), 10, 1.5 * Math.PI, 0.5 * Math.PI);
    ctx.fillStyle = "#f7cf62";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    drawServer();

    //Front lights
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.rect(xPos - (canvas.width * (1 / 9) + 10), yPos + (canvas.height * (3 / 10)), 30, 20);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    //Ice Cream Window Curtains
    var lengthOfWindow = (canvas.width * (1 / 4)) + 20
    var edgeCurtain = (xPos + (canvas.width * (1 / 6)) - 10);
    for (var i = 0; i < 10; i++) {
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#777";
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
            ctx.fillStyle = "#ff4c4c";
        }
        else {
            ctx.fillStyle = "#fffb49";
        }
        ctx.fill();
        ctx.stroke();

        //Drawing Ice Cream Sign
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.font = "45px Fredoka One";
        ctx.fillStyle = "white";
        ctx.fillText("ICE CREAM", xPos + (canvas.width * (1 / 20)), yPos + (canvas.height * (1 / 3)) + 20);
        ctx.strokeText("ICE CREAM", xPos + (canvas.width * (1 / 20)), yPos + (canvas.height * (1 / 3)) + 20);
        ctx.closePath();

        drawTopIceCream();
    }
    function drawTopIceCream() {
        var xStartOfIceCreamBottom = xPos + (canvas.width * (2 / 15));
        var rightEdge;
        ctx.strokeStyle = "#9c640c";
        ctx.beginPath();
        ctx.moveTo(xStartOfIceCreamBottom, yPos);
        ctx.lineTo(xStartOfIceCreamBottom + (canvas.width * (1 / 5)), yPos - (canvas.height * (1 / 6)));
        ctx.lineTo(xStartOfIceCreamBottom + (canvas.width * (3 / 13)), yPos);
        ctx.closePath();
        ctx.fillStyle = "#f8c471";
        ctx.fill();
        ctx.stroke();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "#b9770e";
        ctx.fillStyle = "#b9770e";
        for (var i = 1; i < 16; i++) {
            ctx.beginPath();
            ctx.rect(xStartOfIceCreamBottom + (10 * i), yPos - (5 * i), 3, 3);
            ctx.fill();
            ctx.stroke();
        }

        //Pattern inside ice cream
        var firstSet = 3;
        var secondSet = 11;
        for (var i = 1; i < 5; i++) {
            for (var j = firstSet; j < 17; j++) {
                ctx.beginPath();
                ctx.rect(xStartOfIceCreamBottom + (10 * j), (yPos - (5 * j)) + (10 * i), 3, 3);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            for (var j = secondSet; j < 18; j++) {
                ctx.beginPath();
                ctx.rect(xStartOfIceCreamBottom + (10 * j), (yPos - (5 * j)) + 40 + (10 * i), 3, 3);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            }
            firstSet = firstSet + 2;
            secondSet = secondSet + 2;
        }

        //Ice Cream Scoop
        ctx.lineWidth = "2";
        ctx.strokeStyle = "salmon";
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (4 / 10)) - 5, yPos - (canvas.height * (1 / 9)), 55, 1.3 * Math.PI, 0.6 * Math.PI);
        ctx.arc(xPos + (canvas.width * (4 / 11)) - 5, yPos - 5, 10, 0.3 * Math.PI, 1.2 * Math.PI);
        for (var i = 1; i < 4; i++) {
            ctx.arc(xPos + (canvas.width * (4 / 11)) - (10 + (5 * i)), yPos - (20 * i), 10, 0.5 * Math.PI, 1.2 * Math.PI);
        }
        ctx.arc(xPos + (canvas.width * (4 / 11)) - 30, yPos - 80, 10, 0.5 * Math.PI, 1.7 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "pink";
        ctx.fill();
        ctx.stroke();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (4 / 10)) - 5, yPos - (canvas.height * (1 / 9)), 47, 1.25 * Math.PI, 1.7 * Math.PI);
        ctx.stroke();
        ctx.lineWidth = "3";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (4 / 11)) - 30, yPos - 80, 5, 1.1 * Math.PI, 1.7 * Math.PI);
        ctx.stroke();


        //Cherry on top
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#f44336";
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (4 / 10)) + 45, yPos - (canvas.height * (1 / 9)) - 20, 12, 0, 2 * Math.PI);
        ctx.lineTo(xPos + (canvas.width * (4 / 10)) + 67, yPos - (canvas.height * (1 / 9)) - 20)
        ctx.closePath();
        ctx.fillStyle = "#e57373";
        ctx.fill();
        ctx.stroke();

        ctx.lineWidth = "2";
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (4 / 10)) + 45, yPos - (canvas.height * (1 / 9)) - 20, 8, 1.3 * Math.PI, 1.8 * Math.PI);
        ctx.stroke();
    }


};
function drawServer() {
    //Server Body
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)), yPos + 20 + (canvas.height * (1 / 5)), 40, 1.08 * Math.PI, 1.92 * Math.PI)
    ctx.fillStyle = "#c192d3";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Apron
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.moveTo(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 30, yPos + 10 + (canvas.height * (1 / 5)))
    ctx.lineTo(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 30, yPos + 10 + (canvas.height * (1 / 5)))
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 10, yPos + 10 + (canvas.height * (1 / 5)), 40, 1.08 * Math.PI, 1.42 * Math.PI)
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 10, yPos + 10 + (canvas.height * (1 / 5)), 40, 1.58 * Math.PI, 1.92 * Math.PI)
    ctx.lineTo(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 30, yPos + 10 + (canvas.height * (1 / 5)))
    ctx.fillStyle = "#eee";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 3, yPos + 5 + (canvas.height * (1 / 5)), 20, 1.08 * Math.PI, 1.42 * Math.PI)
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 3, yPos + 5 + (canvas.height * (1 / 5)), 20, 1.58 * Math.PI, 1.92 * Math.PI)
    ctx.fillStyle = "#c192d3";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();


    //Server hands
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 20, yPos + 10 + (canvas.height * (1 / 5)), 8, 0, 2 * Math.PI)
    ctx.fillStyle = "#ffea9e";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 20, yPos + 10 + (canvas.height * (1 / 5)), 8, 0, 2 * Math.PI)
    ctx.fillStyle = "#ffea9e";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Server head
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)), yPos + 20 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)), 25, 0, 2 * Math.PI)
    ctx.fillStyle = "#ffea9e";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Server's ears
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 25, yPos + 25 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 2, 4, 0.5 * Math.PI, 1.5 * Math.PI)
    ctx.fillStyle = "#ffea9e";
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 25, yPos + 25 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 2, 4, 1.5 * Math.PI, 0.5 * Math.PI)
    ctx.fillStyle = "#ffea9e";
    ctx.fill();
    ctx.stroke();

    //Server hair
    ctx.lineCap = "round";
    ctx.lineWidth = "6";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)), yPos + 20 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)), 25, 1.8 * Math.PI, 2 * Math.PI)
    ctx.stroke();
    ctx.lineCap = "round";
    ctx.lineWidth = "6";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)), yPos + 20 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)), 25, Math.PI, 1.2 * Math.PI)
    ctx.stroke();

    //right eye
    //winking
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#555";
    if (yPos == canvas.height * (11 / 25) + 3) {
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 9, yPos + 24 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 4, 3, Math.PI, 2 * Math.PI)
    }
    else {
        ctx.beginPath();
        ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 9, yPos + 22 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 4, 2, 0, 2 * Math.PI)
        ctx.fillStyle = "#555";
        ctx.fill();
        ctx.closePath();
    }
    ctx.stroke();

    //left eye
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#555";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 9, yPos + 22 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 4, 2, 0, 2 * Math.PI)
    ctx.fillStyle = "#555";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //eyebrows
    ctx.lineWidth = "4";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 9, yPos + 20 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 4, 7, 1.3 * Math.PI, 1.8 * Math.PI)
    ctx.stroke();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 9, yPos + 20 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) - 4, 7, 1.2 * Math.PI, 1.7 * Math.PI)
    ctx.stroke();

    //Server Mustache
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 4, yPos + 22 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) + 10, 5, Math.PI, 2 * Math.PI)
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 4, yPos + 22 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) + 10, 5, Math.PI, 2 * Math.PI);
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) + 7, yPos + 22 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) + 8, 6, 0, Math.PI)
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)) - 7, yPos + 22 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)) + 8, 6, 0, Math.PI)
    ctx.fillStyle = "#999";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Server's nose
    ctx.lineWidth = "2";
    ctx.strokeStyle = "#777";
    ctx.beginPath();
    ctx.arc(xPos + (canvas.width * (1 / 6)) + (canvas.width * (1 / 8)), yPos + 25 + (canvas.height * (1 / 5)) - (canvas.height * (1 / 10)), 4, 0, Math.PI)
    ctx.fillStyle = "#ffea9e";
    ctx.fill();
    ctx.stroke();


}
