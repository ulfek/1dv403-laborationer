// BartBoard.js
	var timerId;
var BartBoard = function (text, boardId) {
	var div = document.getElementById(boardId);
	var i = 0;

	div.onmousedown = function() {
		timerId = setInterval(function () {
		// Skriv ut ett tecken
		div.innerHTML += text[i];
		i += 1;
		if(i >= text.length) {
			i = 0;
			div.innerHTML += "<br>";
			//div.innerHTML = "";
		}

		}, 200);
	}
	onmouseup = function() {
		clearInterval(timerId);
	}



};

window.onload = function () {
	var board1 = new BartBoard("I will not pollute \"window\".", "board1");
	var board2 = new BartBoard("Douglas Crockford.", "board2");
};