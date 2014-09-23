function BowlingGame(players) {

	console.log("Init BowlingGame");
	this.players = players;
	this.pins = [];

	var initPins = function(n) {
		return function() {
			alert("I am pin "+n);
		}
	};

	for(var i = 1; i <=10; ++i) {
		this.pins[i] = initPins(i);
	}
}

BowlingGame.prototype.play = function() {
	var i;
	var hit = function () {
		var point = Math.floor(Math.random() * + 11);
		return point;
	}

	for(i=0; i<20; i+=1) {
		this.players.forEach(function(p) {
			p.addPoint(hit());
		});
	}
};

BowlingGame.prototype.showScoreBoard = function () {
	document.write("<h3>Scoreboard:</h3>");
	this.players.forEach(function(p) {
		document.write(p.getName() + ": " + p.getScore() + "<br />");
	});

}



