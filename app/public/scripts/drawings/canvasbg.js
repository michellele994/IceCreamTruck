define(["./backgrounds/drawMidday", "./backgrounds/drawRiseOrSet", "./backgrounds/drawNight"], function (drawMidday, drawRiseOrSet, drawNight, canvas, ctx, xPos, yPos, currHour) {
    return function drawCanvas(canvas, ctx, xPos, yPos, currHour) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (currHour > 5 && currHour < 19) {
            drawMidday(canvas, ctx, xPos, yPos, currHour);
        }
        else if ((currHour > 4 && currHour < 6) || (currHour > 18 && currHour < 21)) {
            drawRiseOrSet(canvas, ctx, xPos, yPos, currHour);
        }
        else if (currHour > 20 || currHour < 7) {
            drawNight(canvas, ctx, xPos, yPos, currHour);
        }
    }
});
