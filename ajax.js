$(document).ready(function() {

  function printString(songsObj){
    var songbox = $("#songbox");
    songsObj.songs.forEach(function(songs2){
      var string = "<div>" + songs2.title + " " + songs2.artist + " " + songs2.album +
      "<input id = 'delete' class = 'clear-message' type = 'button' name = 'delete' value = 'Delete'>" + "</div>";

    //Can I write an if statement here to check if the 'more' button has been pressed before?

      songbox.append(string);
    });
  }
 


  $.ajax({
    url: "data/songs.json"
  }).done(printString);

  $('#more').click(function() {
    $.ajax({
      url: "data/songs2.json"
    }).done(printString);
  })


document.querySelector("body").addEventListener("click", function(event) {
  if (event.target.className === "clear-message") {
    event.target.parentElement.setAttribute("hidden", true);
  }
});

});
