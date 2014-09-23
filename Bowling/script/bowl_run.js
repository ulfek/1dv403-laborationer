console.log("bowl_run.js");

var bwGame = {
	run: function() { 
		var players = [
			new Player("Penny","right",26),
			new Player("Leonard","right",28),
			new Player("Sheldon","left",26)
		];

		var game = new BowlingGame(players);
		game.play();
		game.showScoreBoard();
		game.pins[1]();
		game.pins[2]();
		game.pins[10]();
	}
};

window.onload = bwGame.run;