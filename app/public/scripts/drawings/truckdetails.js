define(["./icecreamman", "./topicecream"], function (drawIceCreamMan, drawTopIceCream) {
    return function drawTruckDetails(canvas, ctx, xPos, yPos) {
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

        drawIceCreamMan(canvas, ctx, xPos, yPos);

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

            drawTopIceCream(canvas, ctx, xPos, yPos);
        }
    }
}
);