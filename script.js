//your JS code here. If required.

function updateTimer() {
	var elem = document.getElementById("timer");
	var currentTime = new Date();

	var day = currentTime.getDate();
	var month = currentTime.getMonth() + 1;
	var year = currentTime.getFullYear();
	var formattedDate = day + "/" + month + "/" + year;

	var hour = currentTime.getHours();
	var min = currentTime.getMinutes();
	var sec = currentTime.getSeconds();
	var amPmIndicator = hour >= 12 ? "PM" : "AM";
	hour = hour % 12 || 12;
	var formattedTime = hour+ ":" + min + ":" + sec + " " + amPmIndicator;

	elem.textContent = formattedDate + ", " + formattedTime;
}


setInterval(updateTimer, 1000);
