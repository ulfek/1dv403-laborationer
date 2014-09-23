"use strict";

window.onload = function(){

		// Slumpar fram ett tal mellan max och min
	var getRandom = function(max,min){
		return Math.floor(Math.random() * (max-min) + min);
		//Math.floor( Math.random() * (max-min)+1 )+min;
		//Math.floor( Math.random() * (100-1)+1) + 1;
		//Math.floor( Math.random() * 100)+1;
	};
	
	var min = 1;
	var max = 100;
	var guesses = 0;
	var secret = 60; // Detta tal behöver bytas ut mot ett slumpat tal.
	secret = getRandom(max,min);
	console.log("secret = " + secret); 
	


	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		var answer = "";
		var correctGuess = false;
		guesses+=1;
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
		if(number >= min && number <= max) {
			if(number==secret) {
				console.log("number===secret");
				correctGuess = true;
				answer = "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + guesses + " gissningar för att hitta det."
			} 
			else if(number<secret) {
				answer = "Det hemliga talet är högre!";
			}
			else if(number>secret) {
				answer ="Det hemliga talet är lägre!";
			}
		}
		else {
			answer = "Talet är utanför intervallet 0 - 100";
		}
		return[correctGuess,answer];
		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	
	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		console.log("click");
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	
		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}

	});
};