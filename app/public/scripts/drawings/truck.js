define(["./truckdetails"], function (drawTruckDetails) {
    return function drawTruck(canvas, ctx, xPos, yPos) {

        //Main truck shape
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

        drawTruckDetails(canvas, ctx, xPos, yPos);
    }
}
);