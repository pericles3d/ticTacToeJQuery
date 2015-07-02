// still need to do a reset button and display Winning messages. Maybe images.
// reset will have to reset vars to 0 and clear the squares.
// need to make X and O look better in the squares.


var clickNumber = 0;
var xo = "X";
var xWins = 0;
var oWins = 0;
var end = 0;
var xScore = document.querySelector('.xScoreTitle');
var oScore = document.querySelector('.oScoreTitle');

// Displaying messages


var mySquares = document.querySelectorAll('.square');
var messages = document.querySelector('h2');

  for(i = 0; i < mySquares.length; i++){
  mySquares[i].addEventListener('click', onClick);
  }

function onClick(){
  if (this.innerText !== ""){
    window.alert("You know you can't click there. You must be out of your mind, son!!!");
    return false;
  }
  // Check if game has ended.
  if (end === 1){
    return false;
  }
  clickNumber +=1;
  if (clickNumber % 2 === 0){
    xo = "O";
  } else {
    xo = "X";
  }
  this.innerText = xo;
  if (xo === "X"){
    messages.innerText = "It's your turn player O";
  } else {
    messages.innerText = "It's your turn player X";
  }
  gameOverX();
  gameOverO();
  gameTie();
}

var square01 = mySquares[0];
var square02 = mySquares[1];
var square03 = mySquares[2];
var square04 = mySquares[3];
var square05 = mySquares[4];
var square06 = mySquares[5];
var square07 = mySquares[6];
var square08 = mySquares[7];
var square09 = mySquares[8];


function gameOverX(){
  if ((square01.innerText === "X" && square02.innerText === "X" && square03.innerText === "X") ||
      (square04.innerText === "X" && square05.innerText === "X" && square06.innerText === "X") ||
      (square07.innerText === "X" && square08.innerText === "X" && square09.innerText === "X") ||
      (square01.innerText === "X" && square04.innerText === "X" && square07.innerText === "X") ||
      (square02.innerText === "X" && square05.innerText === "X" && square08.innerText === "X") ||
      (square03.innerText === "X" && square06.innerText === "X" && square09.innerText === "X") ||
      (square01.innerText === "X" && square05.innerText === "X" && square09.innerText === "X") ||
      (square03.innerText === "X" && square05.innerText === "X" && square07.innerText === "X")) {
    messages.innerText = "Game Over!! X is the winner";
    xWins += 1;
    xScore.innerText = "X Wins = " + xWins;
    end = 1;
  }
}

function gameOverO(){
  if ((square01.innerText === "O" && square02.innerText === "O" && square03.innerText === "O") ||
      (square04.innerText === "O" && square05.innerText === "O" && square06.innerText === "O") ||
      (square07.innerText === "O" && square08.innerText === "O" && square09.innerText === "O") ||
      (square01.innerText === "O" && square04.innerText === "O" && square07.innerText === "O") ||
      (square02.innerText === "O" && square05.innerText === "O" && square08.innerText === "O") ||
      (square03.innerText === "O" && square06.innerText === "O" && square09.innerText === "O") ||
      (square01.innerText === "O" && square05.innerText === "O" && square09.innerText === "O") ||
      (square03.innerText === "O" && square05.innerText === "O" && square07.innerText === "O")) {
    messages.innerText = "Game Over!! O is the winner";
    oWins += 1;
    oScore.innerText = "O Wins = " + oWins;
    end = 1;
  }
}

function gameTie(){
  if (end === 0 && clickNumber > 8){
    messages.innerText = "Game Over!! It's a tie";
    end = 1;
  }
}

// New game
var myNewButton = document.querySelector('.new');
myNewButton.addEventListener('click', newButtonClick);

function newButtonClick(){
  newGame();
}

function newGame(){
  clickNumber = 0;
  xo = "X";
  end = 0;
  messages.innerText = "It's your turn player X";
  square01.innerText = "";
  square02.innerText = "";
  square03.innerText = "";
  square04.innerText = "";
  square05.innerText = "";
  square06.innerText = "";
  square07.innerText = "";
  square08.innerText = "";
  square09.innerText = "";
}

// Reset score
var myResetButton = document.querySelector('.reset');
myResetButton.addEventListener('click', scoreReset);

function scoreReset(){
  location.reload();
}
