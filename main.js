'use strict';


//WHEN DOCUMENT LOADS RUN INIT FUNCTION
//document.addEventListener('DOMContentLoaded', function() {

	//init();

//});

//INIT FUNCTION IS SIMPLY LOADING YOUR LISTENERS AND POINTING TO THE FUNCTIONS YOU'LL WRITE BELOW
function init(){

	document.querySelector('table').addEventListener('click', switchTurn, hasWon);
}
//THE "BODY" OF THIS JAVASCRIPT FILE STARTS HERE

//GLOBAL VARIABLES
var turn = "X";
var winner;
//var turns = ["x","y"];
var square = document.getElementsByClassName('square');
//var table = document.getElementById('game');
//var p = document.getElementsByTagName('p');
//var winCombos = [[1,2,3],[1,4,7],[7,8,9],[4,5,6],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

//AFTER GLOBAL VARIABLES START WRTING YOUR FUNCTIONS

function startGame() {
 if(Math.random() < 0.5) {
 	turn = "O";
 }

 winner = null;
 setMessage(turn + " gets to start.");

}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(square) {
	if(winner != null ) {
		setMessage(winner + " already won the game.")
	}
	else if(square.innerText == "") {
		square.innerText = turn;
		switchTurn();
	}
	else {
		setMessage("Used");
	}
}

function switchTurn() {
	if (checkForWinner(turn)) {
		setMessage(turn + " wins!");
		winner = turn;
	}
	else if(turn == "X") {
		turn = "O";
		setMessage("It's " + turn + " 's turn.");
	}
	else if(turn == "O") {
		turn = "X"
		setMessage("It's " + turn + " 's turn.");
	}
}

function checkForWinner(move) {
	return (
		checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)
	
)

}

function checkRow(a, b, c, move) {
	var result = false;
	if(getSq(a) == move && getSq(b) == move && getSq(c) == move) {
		result = true;
	}
	return result;
}

function getSq(number) {
	return document.getElementById("s" + number).innerText;
}

//function turnTaken(){

	//LOCAL VARIABLES ALWAYS AT TOP OF FUNCTION

	//if targets innerhtml exists then don't let user take turn 
	//if(event.target.innerHTML) {
	//	return;
// 	}

// 	// if(condition){
// 		// alert('bad')
// 	// 	return;
// 	// }

// 	//set the boxes text to x or o based on whos turn
// 	event.target.innerHTML = turn;

// 	console.log(event.target);

// 	 if (turn === "X") {
// 	 	turn = "O";
// 	 }
// 	 else {
// 	 	turn = "X";
// 	 }

// }
	
function hasWon(){

	//loop 1:   over array of arrays (winCombos)
	for(var i = 0; i < winCombos.length; i ++) {
		console.log(winCombos[i]);
	}

		//loop 2:   loop over sub-array (exa. "[1,2,3]") to check if all boxes of that number are "X"

}