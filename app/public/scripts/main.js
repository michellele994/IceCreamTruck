requirejs.config({
    baseUrl: 'scripts/drawings'
});

// Start the main app logic.
requirejs(['drawmain', 'icecreamtruck', '../interactive/music'],
    function (draw, icecreamtruck, music) {
        music();
        draw();
    });