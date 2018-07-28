
define(function () {
    return function playMusic() {
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/icecreammusic.mp3");

        audioElement.play();
        audioElement.loop = true;

        if (audioElement.paused == true) {
            $(".play-button").text("PLAY");
        }
        else {
            $(".play-button").text("PAUSE");
        }
        $(".play-button").on("click", function () {
            if (audioElement.paused == true) {
                audioElement.volume = 0.8;
                audioElement.play();
                audioElement.loop = true;
                $(".play-button").text("PAUSE");
            }
            else {
                audioElement.pause();
                $(".play-button").text("PLAY");
            }
        });
    }
});