"use strict"
window.onload = function () {
console.log("hello from jscript");

var h3s, h3, a;

var h3s = document.querySelectorAll(".product h3");
console.log(h3s);
for(var i = 0; i < h3s.length; i+=1 ) {
	h3 = h3s[i];

	a = document.createElement("a");
	a.href="#";
	a.innerHTML = h3.innerHTML;
	h3.innerHTML = "";

	h3.appendChild(a);

	a.onclick = function(e) {
		console.log("klick");
		this.parentNode.parentNode.querySelector("div").classList.toggle("hide");
		return false;
	}
	a.parentNode.parentNode.querySelector("div").classList.add("hide");
}



var ul = document.getElementById("col0");


var li = document.createElement("li");
var a = document.createElement("a");
var text = document.createTextNode("Gå till..");
li.appendChild(a);
a.appendChild(text);
//a.href = "http://coursepress.lnu.se";
a.setAttribute("href", "http://coursepress.lnu.se");
ul.appendChild(li);
var str = "<li><a href=\"http://coursepress.lnu.se\">dddd</a></li>";
ul.innerHTML += str;


//console.log("ul nodeType: " + ul.nodeType);
//console.log("ul nodeName: " + ul.nodeName);
var lis = ul.getElementsByTagName("li");
//console.log("No off li elements: " + lis.length);

// Alternativ metod
if(!NodeList.prototype.forEach)
	NodeList.prototype.forEach = Array.prototype.forEach;
var lis1 = document.querySelectorAll("div #col0 li");
var a = document.querySelectorAll("div #col0 li a");
//console.log(lis1.length);

//console.log("lis1");
lis1.forEach(doSomething);
//console.log("a");
a.forEach(doSomething);

function doSomething(x) {
/*	console.log(x.nodeType);
	console.log(x.nodeValue);
	console.log(x.firstChild.nodeName);
	console.log(x.firstChild.nodeType);
	console.log(x.firstChild.nodeValue);
*/
}

//
};