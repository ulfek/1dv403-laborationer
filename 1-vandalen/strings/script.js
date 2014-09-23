"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
		try {
			if(str.length == 0) {
				console.log("str.length == 0");
				throw(1);
			}
			var index;
			var char;
			var converted = "";

			for(index = 0; index < str.length; index+=1 )
			{
				char = str.charAt(index);
				if(char == 'a' ||char == 'A')
					converted += '#';
				else if(char.toLowerCase() == str.charAt(index))
					converted += str.charAt(index).toUpperCase();
				else if(char.toUpperCase() == str.charAt(index))
					converted += str.charAt(index).toLowerCase();

			}
			console.log(converted);
			return converted;
		}
		catch(e) {
			alert("Strängen är tom!");
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};