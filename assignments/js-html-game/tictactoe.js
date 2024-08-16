//size of game board is hard-coded in html
  //future: create function that creates the gameboard dynamically using user input
const board = document.getElementById('gameboard')
const cells = document.getElementsByClassName('cell')

//# of players is hard-coded into js file
  //future: create function to track turns, update tracker, 
const players = ['X', 'O'];
let currentPlayer = players[0];

const endMessage = document.getElementById('end-message')

const restartButton = document.getElementById('restart-button');

// function turnTracker() {
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turn
//   return currentPlayer;
// };

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', () => {
        if(cells[i].textContent !== ''){
            return
        }
        cells[i].textContent = currentPlayer
        if(checkWin(currentPlayer)) {
            endMessage.textContent=`Game over! ${currentPlayer} wins!`
            return
        }
        if(checkBoardFull()) {
            endMessage.textContent= `Game is tied!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        //console.log(`Next turn: Player ${currentPlayer}`);
        if(currentPlayer == players[0]) {
            endMessage.textContent= `X's turn!`
        } else {
            endMessage.textContent= `O's turn!`
        }     
    })   
}

restartButton.addEventListener('click', resetGame);

function checkWin(currentPlayer) {
    for(let i = 0; i < winningCombinations.length; i++){
        const [a, b, c] = winningCombinations[i]
        if (cells[a].textContent === currentPlayer 
          && cells[b].textContent === currentPlayer 
          && cells[c].textContent === currentPlayer) {
            return true
        }
    }
    return false
}

function checkBoardFull() {
  //*iterates through cells
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      return false;
    }
  }
  return true;
};

 
// function checkMoveValidity() {
//   for (let i = 0; i < cells.length; i++) {
//     if (cells[i].textContent === '') {
//     return true;
//     }
//   }
//   return false;
// };
  // is loop needed if main logic of game has an eventhandler
  //that checks each cell and performs all functions already?

function resetGame() {
  // Clear the game board array
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }
  endMessage.textContent=`x's turn!`
  currentPlayer = players[0]
}

