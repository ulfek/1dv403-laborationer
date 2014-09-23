console.log("script");

window.onload = function() {

	var ul = document.createElement("ul");
	var li =null;


	document.getElementById("content").appendChild(ul);

	for(var i = 1; i <= 10; ++i) {
		createLink(i);
	}

	for(var j = 1; j <= 10; ++j) {
		console.log("Yttre i = " + i);
		li = document.createElement("li");
		a = document.createElement ("a");
		a.href = "#";
		a.innerHTML = "Klicka för att visa siffra " + j;
		a.onclick = function() {
			console.log("Inre j = " + j);
			document.getElementById("counter").innerHTML = "Räknaren är nu "  + j + "  " + this;
		}
		li.appendChild(a);
		ul.appendChild(li);
	}


	function createLink(i) {

		console.log("Yttre i = " + i);
		li = document.createElement("li");
		a = document.createElement ("a");
		a.href = "#";
		a.innerHTML = "Klicka för att visa siffra " + i;
		a.onclick = function() {
			console.log("Inre i = " + i);
			document.getElementById("counter").innerHTML = "Räknaren är nu " + i + "  " + this;
		}
		li.appendChild(a);
		ul.appendChild(li);
	}

}