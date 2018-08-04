define(function (canvas, ctx, xPos, yPos, currHour) {
    return function drawRiseOrSet(canvas, ctx, xPos, yPos, currHour) {
        //Change background of HTML
        document.body.style.background = "pink url('../../../assets/icecreambackgroundriseorset.png')";

        //Create gradient for the background of canvas
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop("0", "#a932ff");
        gradient.addColorStop("0.5", "#b61add");
        gradient.addColorStop("1.0", "#ff7944");
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //Adding Stars
        ctx.fillStyle = "white";
        for (var i = 0; i < 20; i++) {
            if (i % 2 == 0) {
                ctx.beginPath();
                ctx.arc(50 + (100 * i), 50, 2, 0 * Math.PI, 2 * Math.PI)
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                ctx.beginPath();
                ctx.arc(50 + (100 * i), 150, 2, 0 * Math.PI, 2 * Math.PI)
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
            else {
                ctx.beginPath();
                ctx.arc(50 + (100 * i), 100, 2, 0 * Math.PI, 2 * Math.PI)
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        //Grass
        ctx.strokeStyle = "#229e49";
        ctx.fillStyle = "#2ac15a";
        ctx.beginPath();
        ctx.rect(0 - (canvas.width * (1 / 12)), (canvas.height * (11 / 12)), canvas.width + (canvas.width * (2 / 12)), (canvas.height * (2 / 12)))
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
});
