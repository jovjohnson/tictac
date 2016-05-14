'use strict';

function init(){

	document.querySelector('table').addEventListener('click', switchTurn, hasWon);
}


//GLOBAL VARIABLES
var turn = "X";
var winner;
var square = document.getElementsByClassName('square');


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


function hasWon(){
	//loop 1:   over array of arrays (winCombos)
	for(var i = 0; i < winCombos.length; i ++) {
		console.log(winCombos[i]);
	}
		//loop 2:   loop over sub-array (exa. "[1,2,3]") to check if all boxes of that number are "X"
}
