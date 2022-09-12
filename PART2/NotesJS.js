function mySave() {
  var notes = document.getElementById("Textbox").value;
  localStorage.setItem("notes", notes);
}
function myLoad() {
  var notes = localStorage.getItem("notes");
  document.getElementById("Textbox").value = notes;
}

var x = document.getElementById("location");
function Location() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  }
  else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "<p>Latitude: " + position.coords.latitude + "</p>" + "<p>Longitude: " + position.coords.longitude + "</p>";
}

$(document).ready(function() {
	$(".save_name").click(function() {
		var Name = $("#Name").val();
    	sessionStorage.setItem("name", Name);
		alert("Your name has been saved.");
	});
	$(".access_name").click(function() {
  		alert("Hi, " + sessionStorage.getItem("name"));
	});
});
