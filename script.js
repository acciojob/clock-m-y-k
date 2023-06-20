//your JS code here. If required.

function updateTimer() {
	var elem = document.getElementById("timer");
	var currentTime = new Date();

	var day = currentTime.getDate();
	var month = currentTime.getMonth();
	var year = currentTime.getFullYear();
	var formattedDate = day + "/" + month + "/" + year;

	var hour = currentTime.getHours();
	var min = currentTime.getMinutes();
	var sec = currentTime.getSeconds();
	var formattedTime = hour + ":" + min + ":" + sec;

	return formattedDate + ", " + formattedTime;
}


setInterval(updateTimer, 1000);
