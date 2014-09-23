"use strict";

window.onload = function(){

	
	var birthday = function(date){
		try {
			console.log("date: " + date);
			if(date.length != 10)
				throw(1);
			else if(date[4]!='-' || date[7] !='-')
				throw(2);
			var birth = new Date(date);
			var nowFull = new Date();
			var now = new Date(nowFull.getFullYear(),nowFull.getMonth(),nowFull.getDate(),0,0,0,0);
			console.log(now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString());
			var diff = birth - now;
			var days = diff/(1000*60*60*24);
			return Math.round(days);
		}
		catch(e) {
			if(e==1)
				alert("Felaktig längd: " + date.length);
			else if(e==2)
				alert("2");
			else
				alert("99 " + "e: " + e);
		}

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			console.log("answer: " + answer);
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};