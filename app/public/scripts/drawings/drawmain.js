define(["./canvasbg", "./truck"], function (drawCanvas, drawTruck) {

    return function draw() {
        var canvas = document.getElementById("truck");
        var ctx = canvas.getContext("2d");
        var xPos = canvas.width * (2 / 7);
        var yPos = canvas.height * (11 / 25);

        //Interval to make truck move up and down.
        setInterval(function () {
            if (yPos == canvas.height * (11 / 25)) {
                yPos = canvas.height * (11 / 25) + 3;
                setUp(xPos, yPos)
            }
            else {
                yPos = canvas.height * (11 / 25);
                setUp(xPos, yPos)
            }
        }, 800)

        //sets up the canvas
        function setUp(xPos, yPos) {
            var time = new Date();
            var currHour = (time.getHours());
            drawCanvas(canvas, ctx, xPos, yPos, currHour);
            drawTruck(canvas, ctx, xPos, yPos);
        }
    }
}
);