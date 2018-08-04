define(function () {
    return function drawTopIceCream(canvas, ctx, xPos, yPos) {

        //Ice cream cone
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

        //Pattern inside ice cream cone
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
});