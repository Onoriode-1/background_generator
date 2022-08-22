var _ = require('lodash');

var array=[1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

let button1 = document.querySelector('#button1');
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}




//Add a random button that generates two random numbers for the color inputs

function setRandomColor() {
	let randomRed1 =  Math.random() * 255 ;
	let randomGreen1 =  Math.random() * 255 ;
	let randomBlue1 =  Math.random() * 255 ;
	let wholeRed1 = Math.trunc( randomRed1) ;
	let wholeGreen1 = Math.trunc( randomGreen1) ;
	let wholeBlue1 = Math.trunc( randomBlue1) ;
	let hexRed1 = wholeRed1.toString(16) ;
	let hexGreen1 = wholeGreen1.toString(16) ;
	let hexBlue1 = wholeBlue1.toString(16) ;
	if (hexRed1.length < 2){
		hexRed1 = '0'+ hexRed1;
	}
	if (hexGreen1.length < 2){
		hexGreen1 = '0'+ hexGreen1;
	}
	if (hexBlue1.length < 2){
		hexBlue1 = '0'+ hexBlue1;
	}	
	let randomColor1 = (`#${hexRed1}${hexGreen1}${hexBlue1}`);

	let randomRed2 =  Math.random() * 255 ;
	let randomGreen2 =  Math.random() * 255 ;
	let randomBlue2 =  Math.random() * 255 ;
	let wholeRed2 = Math.trunc( randomRed2) ;
	let wholeGreen2 = Math.trunc( randomGreen2) ;
	let wholeBlue2 = Math.trunc( randomBlue2) ;
	let hexRed2 = wholeRed2.toString(16) ;
	let hexGreen2 = wholeGreen2.toString(16) ;
	let hexBlue2 = wholeBlue2.toString(16) ;
	if (hexRed2.length < 2){
		hexRed2 = '0'+ hexRed2;
	}
	if (hexGreen2.length < 2){
		hexGreen2 = '0'+ hexGreen2;
	}
	if (hexBlue2.length < 2){
		hexBlue2 = '0'+ hexBlue2;
	}
	let randomColor2 = (`#${hexRed2}${hexGreen2}${hexBlue2}`);

	
	body.style.background = 
	`linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

	css.textContent = body.style.background + ";";
	
	
}

button1.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


