define(function () {
    return function drawIceCreamMan(canvas, ctx, xPos, yPos) {
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
});