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



//player's markers
let currentPlayer = 'x'

//*for 2x2 gameboard
const gameboardArr = [
  ['', ''],
  ['', '']
];

// MAIN LOGIC OF GAME,
function mainLogic() {

};

//*
  //*if mark inside arr index is not one of player's marks, move is valid
function checkMoveValidity() {
  if (gameboardArr[i][j] === '') {
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
      if (gameboardArr[i][j] !=== '') {
        return true;
      } else {
        return false;
      }
    }
  }
};





//turn tracker
function turnTracker() {

};

//reset game
function resetGame() {

};

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