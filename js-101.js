var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Woods > by Bon Iver on the album Blood Bank");
songs.push("Pyramids > by Frank Ocean on the album Channel Orange");

var outputEl = document.getElementById("main");
for (i = 0; i < songs.length; i++) {
	var currentSong = songs[i];
	currentSong = currentSong.replace("*", "");
	currentSong = currentSong.replace("@","");
	currentSong = currentSong.replace("(", "");
	currentSong = currentSong.replace("!", "");
	currentSong = currentSong.replace(">", "-");
	outputEl.innerHTML += "<ol>";
  	outputEl.innerHTML += "<li>" + currentSong + "</li>";
  	outputEl.innerHTML += "</ol>";
}

