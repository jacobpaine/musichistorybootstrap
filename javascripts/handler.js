// EXAMPLE only. Entire file must be redone.

define(
	["jquery", "hbs/handlebars", "firebase"],
	function($, Handlebars, Firebase) {


// textarea--profile on Enter, print text to profile--comments

	// $(".profile--textarea").keypress(function(e) {
	//     if(e.which == 13) {
	//     	$(".profile--comments").html($(".profile--textarea").val());
	//     }
	// });


// *****************ADD SONGS*************************
// 		$(document).on("click", "#addSong", function(e){
// 			var newSong = {
// 				"title": $("#song--input").val(),
// 				"artist": $("#artist--input").val(),
// 				"album": $("#album--input").val()
// 				}
			
// 		 	$.ajax({
// 		 		url:"https://fiery-inferno-6987.firebaseio.com/songs/songs.json",
// 		 		method: "POST", 
// 		 		data: JSON.stringify(newSong)
// 		 	}).done(function(addedSong) {
//  		});
 	

//  	});	


// });

// *****************HANDLEBARS******************************
           
 var myFirebaseRef = new Firebase("https://fiery-inferno-6987.firebaseio.com/books");
  myFirebaseRef.on("value", function(snapshot) {

    var firebaseData = snapshot.val();

    templateStuffer(firebaseData);

    function templateStuffer (templates) {

            require(['hbs!../templates/addform'], function(hbsTemplate) {
              $("#addbook--box").html(hbsTemplate());
            });

            require(['hbs!../templates/addbook'], function(hbsTemplate) {
              $("#addbook--box").html(hbsTemplate());
            });
}
});
});


