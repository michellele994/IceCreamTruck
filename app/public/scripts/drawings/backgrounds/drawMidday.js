var xPosForCloud = -190;
var yPosForCloud = 100;
define(function (canvas, ctx, xPos, yPos, currHour) {
    return function drawMidday(canvas, ctx, xPos, yPos, currHour) {

        //sky
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop("0", "#11b7fc");
        gradient.addColorStop("0.5", "#8edeff");
        gradient.addColorStop("1.0", "#ade7ff");
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        //Cloud
        var cloudGrad = ctx.createLinearGradient(xPosForCloud, yPosForCloud, 0, 120);
        cloudGrad.addColorStop("0.9", "white");
        cloudGrad.addColorStop("1", "#aaa");
        // cloudGrad.addColorStop("1.0", "#ade7ff");
        ctx.strokeStyle = "#777";
        ctx.fillStyle = cloudGrad;
        ctx.beginPath();
        ctx.arc(xPosForCloud, yPosForCloud, 20, 0.5 * Math.PI, 1.7 * Math.PI)
        ctx.arc(xPosForCloud + 45, yPosForCloud, 40, 1.15 * Math.PI, 1.7 * Math.PI)
        ctx.arc(xPosForCloud + 120, yPosForCloud, 60, 1.15 * Math.PI, 1.89 * Math.PI)
        ctx.arc(xPosForCloud + 180, yPosForCloud, 20, 1.3 * Math.PI, 0.5 * Math.PI)
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();


        //Grass
        ctx.strokeStyle = "green";
        ctx.fillStyle = "lightgreen";
        ctx.beginPath();
        ctx.rect(0 - (canvas.width * (1 / 12)), (canvas.height * (11 / 12)), canvas.width + (canvas.width * (2 / 12)), (canvas.height * (2 / 12)))
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        if (xPosForCloud < -200) {
            yPosForCloud = Math.floor(Math.random() * (canvas.height * (11 / 12)));
            xPosForCloud = 800;
        }
        else {
            xPosForCloud -= 1;
        }
    }
});
