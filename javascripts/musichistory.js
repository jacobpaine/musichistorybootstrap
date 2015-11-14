// EXAMPLE only. Entire file must be redone.

define(
	["jquery", "hbs/handlebars", "firebase"],
	function($, Handlebars, Firebase) {

// Attempting to create a remove button.
var myFirebaseRef = new Firebase("https://fiery-inferno-6987.firebaseio.com/");


//*****************************Delete code**********
//myFirebaseRef.remove();
// var onComplete = function(error) {
//   if (error) {
//     console.log('Synchronization failed');
//   } else {
//     console.log('Synchronization succeeded');
//   }
// };
// fredRef.remove(onComplete);
//**************************************************




// textarea--profile on Enter, print text to profile--comments

	$(".profile--textarea").keypress(function(e) {
	    if(e.which == 13) {
	    	$(".profile--comments").html($(".profile--textarea").val());
	    }
	});

	$("#addmusic--comments-textarea").keypress(function(e) {
	    if(e.which == 13) {
	    	$("#addmusic--commentstext").html($("#addmusic--comments-textarea").val());
	    }
	});


// *******************Handlebars helpers*************************************
// The empty array gets each this.artist as long as nothing else in the array equals this.artist. All matches get tossed. 

	var uniqueArtists = [];
	Handlebars.registerHelper ("eraseDuplicateArtists", function (options) {

	    if (uniqueArtists.indexOf(this.artist) === -1){
	    	uniqueArtists.push(this.artist);

	    return options.fn(this);
	   }
	});

	var uniqueAlbums = [];
	Handlebars.registerHelper ("eraseDuplicateAlbums", function (options) {

	    if (uniqueAlbums.indexOf(this.album) === -1){
	    	uniqueAlbums.push(this.album);
	    
	    return options.fn(this);
	   }
	});

	var uniqueTitles = [];
	Handlebars.registerHelper ("eraseDuplicateTitles", function (options) {
	    if (uniqueTitles.indexOf(this.title) === -1){
	    	uniqueTitles.push(this.title);
	    
	    return options.fn(this);
	   }
	});




// **************FILTER for everything****************************
	$(".music-selector").change(function(e){
		var filtered = {
			songs : {}
		};

		var selected_albums = $("#select-albums").find(":selected").text()
		var selected_artists = $("#select-artists").find(":selected").text()
		var selected_titles = $("#select-titles").find(":selected").text()
	
		if ($(this).attr("id") === "select-albums"){
				for (var song in songList.songs){
					if (songList.songs[song].album === selected_albums){
						filtered.songs[song]=songList.songs[song];
					}
				}
			
			} else if ($(this).attr("id") === "select-artists"){
				for (var song in songList.songs){
					if (songList.songs[song].artist === selected_artists){
						filtered.songs[song]=songList.songs[song];
					}
				
				}
			} else {
				for (var song in songList.songs){
					if (songList.songs[song].title === selected_titles){
						filtered.songs[song]=songList.songs[song];	
					}
				}
			}
	        require(['hbs!../templates/songs'], function(songTemplate) {
	        	uniqueTitles = [];
	          $("#title-output").html(songTemplate(filtered));        
	        });

	        require(['hbs!../templates/albums'], function(songTemplate) {
	        	uniqueAlbums = [];
	          $("#album-output").html(songTemplate(filtered));
	            });

	        require(['hbs!../templates/artists'], function(songTemplate) {
	        	uniqueArtists = [];
	          $("#artist-output").html(songTemplate(filtered));
	            });

	});
	// *****************ADD SONGS*************************
		$(document).on("click", "#addSong", function(e){
			var newSong = {
				"title": $("#song--input").val(),
				"artist": $("#artist--input").val(),
				"album": $("#album--input").val()
				}
			
		 	$.ajax({
		 		url:"https://fiery-inferno-6987.firebaseio.com/songs/songs.json",
		 		method: "POST", 
		 		data: JSON.stringify(newSong)
		 	}).done(function(addedSong) {
 		});
 	

 	});	


});






