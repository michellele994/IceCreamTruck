define(function (canvas, ctx, xPos, yPos, currHour) {
    return function drawCanvas(canvas, ctx, xPos, yPos, currHour) {
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
});