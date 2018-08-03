define(function (canvas, ctx, xPos, yPos, currHour) {
    return function drawNight(canvas, ctx, xPos, yPos, currHour) {
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop("0", "#010a70");
        gradient.addColorStop("0.5", "#5c19d1");
        gradient.addColorStop("1.0", "#9932ff");
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Grass
        ctx.strokeStyle = "#229e49";
        ctx.fillStyle = "#2ac15a";
        ctx.rect(0 - (canvas.width * (1 / 12)), (canvas.height * (11 / 12)), canvas.width + (canvas.width * (2 / 12)), (canvas.height * (2 / 12)))
        ctx.fill();
        ctx.stroke();
    }
});
