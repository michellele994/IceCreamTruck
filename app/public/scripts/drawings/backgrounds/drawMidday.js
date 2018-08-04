var xPosForCloudOne = 500;
var yPosForCloudOne = 100;
var xPosForCloudTwo = 50;
var yPosForCloudTwo = 300;
define(function (canvas, ctx, xPos, yPos, currHour) {
    return function drawMidday(canvas, ctx, xPos, yPos, currHour) {
        //Changing background of the HTML
        document.body.style.background = "#ffefce url('../../../assets/icecreambackgroundmidday.png')";


        //Adding gradient for the canvas
        var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop("0", "#11b7fc");
        gradient.addColorStop("0.5", "#8edeff");
        gradient.addColorStop("1.0", "#ade7ff");
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        //Clouds
        var cloudGradOne = ctx.createLinearGradient(0, yPosForCloudOne - 50, 0, yPosForCloudOne + 100);
        cloudGradOne.addColorStop("0.35", "white");
        cloudGradOne.addColorStop("1", "black");
        ctx.strokeStyle = "#777";
        ctx.fillStyle = cloudGradOne;
        ctx.beginPath();
        ctx.arc(xPosForCloudOne, yPosForCloudOne, 20, 0.5 * Math.PI, 1.7 * Math.PI)
        ctx.arc(xPosForCloudOne + 45, yPosForCloudOne, 40, 1.15 * Math.PI, 1.7 * Math.PI)
        ctx.arc(xPosForCloudOne + 120, yPosForCloudOne, 60, 1.15 * Math.PI, 1.89 * Math.PI)
        ctx.arc(xPosForCloudOne + 180, yPosForCloudOne, 20, 1.3 * Math.PI, 0.5 * Math.PI)
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        var cloudGradTwo = ctx.createLinearGradient(0, yPosForCloudTwo - 50, 0, yPosForCloudTwo + 100);
        cloudGradTwo.addColorStop("0.35", "white");
        cloudGradTwo.addColorStop("1", "black");
        ctx.strokeStyle = "#777";
        ctx.fillStyle = cloudGradTwo;
        ctx.beginPath();
        ctx.arc(xPosForCloudTwo, yPosForCloudTwo, 20, 0.5 * Math.PI, 1.7 * Math.PI)
        ctx.arc(xPosForCloudTwo + 63, yPosForCloudTwo + 15, 60, 1.15 * Math.PI, 1.85 * Math.PI)
        ctx.arc(xPosForCloudTwo + 120, yPosForCloudTwo, 20, 1.4 * Math.PI, 0.5 * Math.PI)
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

        if (xPosForCloudOne < -200) {
            yPosForCloudOne = Math.floor(Math.random() * (canvas.height * (11 / 12)));
            xPosForCloudOne = 1000;
        }
        else {
            xPosForCloudOne -= 2;
        }
        if (xPosForCloudTwo < -200) {
            yPosForCloudTwo = Math.floor(Math.random() * (canvas.height * (11 / 12)));
            xPosForCloudTwo = 1000;
        }
        else {
            xPosForCloudTwo -= 3;
        }
    }
});
