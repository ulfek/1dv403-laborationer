// E08 script.js
console.log("Log from E08 script.js");

calcExecutionTime();
//calcTimeFromBirthDayStatic();
//calcTimeFromBirthDayInstance();
var timerID = setInterval(calcExecutionTime, 2000);

function calcExecutionTime() {
	var startTime, endTime;

	startTime = Date.now();

	endTime = Date.now();

	console.log("startTime = " + startTime);
	console.log("endTime = " + endTime);
	console.log("diff = " + (endTime - startTime) );

// OBS!! Funktionen ska inte startas med sträng, kan missbrukas av injection attatcker om den den startas från något annat ställe
// setTimeout("calcExecutionTime()", 1000);

//	setTimeout(calcExecutionTime, 1000);
	clearInterval(timerID);
}

function calcTimeFromBirthDayStatic() {
	var yy1959 = Date.parse("1959,10,6");
//	var yy1959 = Date.parse("Oct 6,1959");
	var yy2014 = Date.parse("2014,10,6");
	console.log("calcTimeFromBirthDayStatic");
	console.log(yy1959);
	console.log(yy2014);

	var SdaysSince = yy2014 - yy1959;
	console.log(SdaysSince);
	console.log(SdaysSince/(1000*60*60*24));
	console.log(SdaysSince/(1000*60*60*24*365));
}

function calcTimeFromBirthDayInstance() {
	var y1959 = new Date(1959,9,6);
	var y2014 = new Date(2014,9,6);
	console.log("calcTimeFromBirthDayInstance");
	console.log(y1959);
	console.log(y1959.getTime())
	console.log(y2014);
	console.log(y2014.getTime())

	var daysSince = y2014 - y1959;
	console.log(daysSince);
	console.log(daysSince/(1000*60*60*24));
	console.log(daysSince/(1000*60*60*24*365));
}


