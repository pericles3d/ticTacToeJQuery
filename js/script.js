var clickNumber = 0;
var xo = "X";
var xWins = 0;
var oWins = 0;
var end = 0;
var xScore = document.querySelector('.xScoreTitle');
var oScore = document.querySelector('.oScoreTitle');

// Displaying messages

var messages = document.querySelector('h2');

$('.square').on('click', onClick);
var mySquares = document.querySelectorAll('.square');

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
  gameOver();
  gameTie();
}

// Checking for Game Over
var square01 = mySquares[0];
var square02 = mySquares[1];
var square03 = mySquares[2];
var square04 = mySquares[3];
var square05 = mySquares[4];
var square06 = mySquares[5];
var square07 = mySquares[6];
var square08 = mySquares[7];
var square09 = mySquares[8];

function checkLines(symbol){
  return (square01.innerText === symbol && square02.innerText === symbol && square03.innerText === symbol) ||
      (square04.innerText === symbol && square05.innerText === symbol && square06.innerText === symbol) ||
      (square07.innerText === symbol && square08.innerText === symbol && square09.innerText === symbol) ||
      (square01.innerText === symbol && square04.innerText === symbol && square07.innerText === symbol) ||
      (square02.innerText === symbol && square05.innerText === symbol && square08.innerText === symbol) ||
      (square03.innerText === symbol && square06.innerText === symbol && square09.innerText === symbol) ||
      (square01.innerText === symbol && square05.innerText === symbol && square09.innerText === symbol) ||
      (square03.innerText === symbol && square05.innerText === symbol && square07.innerText === symbol);
}

function gameOver(){
  if (checkLines("X")) {
    messages.innerText = "Game Over!! X is the winner";
    xWins += 1;
    xScore.innerText = "X Wins = " + xWins;
    end = 1;
  } else if (checkLines("O")) {
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
$('.new').on('click',newButtonClick);

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
$('.reset').on('click', scoreReset);

function scoreReset(){
  location.reload();
}
