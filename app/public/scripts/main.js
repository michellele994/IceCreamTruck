requirejs.config({
    baseUrl: 'scripts/drawings'
});
// Start the main app logic.
requirejs(['drawmain', 'icecreamtruck', '../interactive/music'],
    function (draw, icecreamtruck, music) {
        //Initialize Firebase
        var config = {
            apiKey: "AIzaSyAur79eyx3rA1idPzwmJ6L77qwcUzAjNew",
            authDomain: "icecreamtruckmle.firebaseapp.com",
            databaseURL: "https://icecreamtruckmle.firebaseio.com",
            projectId: "icecreamtruckmle",
            storageBucket: "icecreamtruckmle.appspot.com",
            messagingSenderId: "277923962363"
        };
        firebase.initializeApp(config);


        var database = firebase.database();
        // console.log(database)
        // var chatData = database.ref("/chat");
        // var playersRef = database.ref("players");
        var letest = database.ref("test");

        var whatever = firebase.database().ref("test");
        // console.log(whatever);
        letest.on('value', function (snapshot) {
            console.log(snapshot.val())
        });


        // var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        // starCountRef.on('value', function (snapshot) {
        //     updateStarCount(postElement, snapshot.val());
        // });

        //         var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
        // starCountRef.on('value', function(snapshot) {
        //   updateStarCount(postElement, snapshot.val());
        // });
        // return firebase.database().ref("/test/").once('value').then(function (snapshot) {
        //     console.log(snapshot.val())
        // });
        // console.log(database)
        // var username = "Guest";
        // var currentPlayers = null;
        // var currentTurn = null;
        // var playerNum = false;
        // var playerOneExists = false;
        // var playerTwoExists = false;
        // var playerOneData = null;
        // var playerTwoData = null;



        music();
        draw();
    });