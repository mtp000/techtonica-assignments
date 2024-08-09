/*Start by 1x1, 2x2, then 3x3 check for winner
1x1 Check if game is over, stalemate
2x2 check for turns
3x3, winner*/

/* Things to track
Whose turn it is
Where they went/ if move is valid
Update screen
Reset for new game
 */

/*future iterations of code: make a grid of n x n size
//function () {
  //ask user for grid size
  //modify gameboardArr to be n size
  //for now, assign gameboard size to variable
*/;




//*for 2x2 gameboard
const gameboardArr = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// MAIN LOGIC OF GAME,
function mainLogic() {

};

//check if move is a winning move 
//!! only checks last move and all it's corresponding cells that could result in a win
function checkWin() {
  //***upperBound of gameboardArr =[gameboardArr.length][gameboardArr.length]
  const upperBound = gameboardArr.length - 1;
  // lowerBound of gameboardArr = [0][0]
  const lowerBound = 0;
  
  //check vertical pattern (j is same)
   count = 1; 
    // Check up (subtract i to lowerBound>)
    for (let i = row - 1; i >= 0 && gameboardArr[i][col] === mark; i--) {
        count++;
    }
    // Check down (add i to upperBound)
    for (let i = row + 1; i < n && gameboardArr[i][col] === mark; i++) {
        count++;
    }
    if (count === n) return true; // Win if all cells in the column are marked


  
  // Check horizontal pattern (i is same)
    count = 1; // Reset for horizontal check
    // Check left (subtract j to 0)
    for (let j = col - 1; j >= 0 && gameboardArr[row][j] === mark; j--) {
        count++;
    }
    // Check right (add j to upperBound)
    for (let j = col + 1; j < n && gameboardArr[row][j] === mark; j++) {
        count++;
    }
    if (count === n) return true; // Win if all cells in the row are marked



   //check main diagonal (top-left to bottom-right)
    if (row === col) { // Only if on the main diagonal
        count = 1; // Reset for diagonal check
        // go up-left (subtract i and j equally)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0 && gameboardArr[i][j] === mark; i--, j--) {
            count++;
        }
        //go down-right (add i and j equally)
        for (let i = row + 1, j = col + 1; i < n && j < n && gameboardArr[i][j] === mark; i++, j++) {
            count++;
        }
        if (count === 3) return true; // Win if all cells in the diagonal are marked
    }







   // Check anti-diagonal (top-right to bottom-left)
    if (row + col === n - 1) { // Only if on the anti-diagonal
        count = 1; // Reset for diagonal check
        // Check top-right
        for (let i = row - 1, j = col + 1; i >= 0 && j < n && gameboardArr[i][j] === mark; i--, j++) {
            count++;
        }
        // Check bottom-left
        for (let i = row + 1, j = col - 1; i < n && j >= 0 && gameboardArr[i][j] === mark; i++, j--) {
            count++;
        }
        if (count === 3) return true; // Win if all cells in the diagonal are marked
    }

  return false;
}








//*
  //*if mark inside arr index is not one of player's marks, move is valid
function checkMoveValidity(row, col) {
  if (gameboardArr[row][col] === '') {
    return true;
  } else {
    return false;
  }
};

//*for loop within loop, time complexity as game gets bigger
//*check if game is over/stalemate
function checkBoardFull() {
  //*iterates through rows, our i coordinate
  for (let i = 0; i < gameboardArr.length, i++) {
    //*iterates through columns to grab a particular cell, j coordinate
    for (j = 0, j < gameboardArr[i].length, j++) {
      //*if each index is not empty, return true
      if (gameboardArr[i][j] === '') {
        return false;
      } 
    }
  }
  return true;
};


//turn tracker
let currentPlayer = 'X';

function turnTracker() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turn
  return currentPlayer;
}
};

//reset game
function resetGame() {
  // Clear the game board
  for (let i = 0; i < gameboardArr.length; i++) {
    for (let j = 0; j < gameboardArr[i].length; j++) {
      gameboardArr[i][j] = '';
    }
  }
  // Reset the turn
  currentPlayer = 'X';
}


//check if move is a winning move 
//!! only checks last move and all it's corresponding cells that could result in a win
    //check horizontal pattern 
    //check vertical pattern
/* function checkDiagonalWin() {
  //***upperBound of gameboardArr =[gameboardArr.length][gameboardArr.length]
  const upperBound = gameboardArr.length - 1;
  // lowerBound of gameboardArr = [0][0]
  const lowerBoundLeft = 0;

  //check diagonal pattern
  //count of marks in a row, breaks at 3 (win!), starts at 1(current move)
  
  if (i === j) {
    count = 1;
    

  if (count === 3) return true;
  }
}; */