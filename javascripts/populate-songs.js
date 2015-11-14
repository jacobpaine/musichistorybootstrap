// EXAMPE only. Entire file must be redone.
define(["jquery", "firebase"], function($, Firebase) {
  var myFirebaseRef = new Firebase("https://fiery-inferno-6987.firebaseio.com/songs");
  myFirebaseRef.on("value", function(snapshot) {


    var allSongsObject = snapshot.val();

    templateStuffer(allSongsObject);

    function templateStuffer (songs) {

            songList = songs;

            require(['hbs!../templates/albums'], function(songTemplate) {
              $("#select-albums").html(songTemplate(songs));
            });

            require(['hbs!../templates/songs'], function(songTemplate) {
              $("#select-titles").html(songTemplate(songs));
            });

            require(['hbs!../templates/artists'], function(songTemplate) {
              $("#select-artists").html(songTemplate(songs));
            });

            require(['hbs!../templates/addform'], function(songTemplate) {
              $("#add-here").html(songTemplate(songs));
            });

            require(['hbs!../templates/delete-song'], function(songTemplate) {
              $("some-output").html(songTemplate());
            });


          }


    });

      // return {
      //   getsongs: function(populate) {
      //     $.ajax({
      //     	url: "https://fiery-inferno-6987.firebaseio.com/.json"
      //     }).done();
      //   }
      // };
 });




