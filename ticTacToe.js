let boardArray = ["", "", "", "", "", "", "", "", ""];
let playerOne;
let currentPlayer = playerOne;
let playerTwo;
let turnCount = 0;
let gameOver = false;
let gameTie = false;
let gameBoard = document.querySelector("#gameBoard");
let startRestartBtn = document.querySelector("#startRestartBtn");
let playAgainBtn = document.querySelector("#playAgainBtn");
playAgainBtn.disabled = true;
startRestartBtn.disabled = false;
let humanPlayer = document.querySelector("#player");
// let computerPlayer = document.querySelector("cpu");

// Press start on page load
let display = document.querySelector("#display");
display.innerHTML = "Select game mode and press Start";

//Reset all game variables on page load and reset buttons
function newGame(){
    boardArray = ["", "", "", "", "", "", "", "", ""];
    cell1.innerHTML = "";
    cell2.innerHTML = "";
    cell3.innerHTML = "";
    cell4.innerHTML = "";
    cell5.innerHTML = "";
    cell6.innerHTML = "";
    cell7.innerHTML = "";
    cell8.innerHTML = "";
    cell9.innerHTML = "";
    // currentPlayer = "";
    turnCount = 0;
    gameOver = false;
    gameTie = false;
    playAgainBtn.disabled = true;
    startRestartBtn.disabled = false;
    startingPlayer();
    playerTurnDisplay();
    cell1.addEventListener("click", function () {
        if (boardArray[0] == "") {
            boardArray[0] = currentPlayer;
            gameLogic();
        };
    });
    cell2.addEventListener("click", function () {
        if (boardArray[1] == "") {
            boardArray[1] = currentPlayer;
            gameLogic();
        };
    });
    cell3.addEventListener("click", function () {
        if (boardArray[2] == "") {
            boardArray[2] = currentPlayer;
            gameLogic();
        };
    });
    cell4.addEventListener("click", function () {
        if (boardArray[3] == "") {
            boardArray[3] = currentPlayer;
            gameLogic();
        };
    });
    cell5.addEventListener("click", function () {
        if (boardArray[4] == "") {
            boardArray[4] = currentPlayer;
            gameLogic();
        };
    });
    cell6.addEventListener("click", function () {
        if (boardArray[5] == "") {
            boardArray[5] = currentPlayer;
            gameLogic();
        };
    });
    cell7.addEventListener("click", function () {
        if (boardArray[6] == "") {
            boardArray[6] = currentPlayer;
            gameLogic();
        };
    });
    cell8.addEventListener("click", function () {
        if (boardArray[7] == "") {
            boardArray[7] = currentPlayer;
            gameLogic();
        };
    });
    cell9.addEventListener("click", function () {
        if (boardArray[8] == "") {
            boardArray[8] = currentPlayer;
            gameLogic();
        };
    });
};

// Using the math.random method to generate a decimal between 0.0 and 1.0 and comparing it's return value to determine the starting player
function startingPlayer(){
    let randomNum = Math.random();
    console.log(randomNum);
    if (humanPlayer.checked = true) {
        currentPlayer = playerOne;
        if (randomNum >= 0.5) {
            return (playerOne = "X", playerTwo = "O");
        } else {
            return (playerOne = "O", playerTwo = "X");
        };
    } else {
        playerOne = "X";
        playerTwo = "O";
        if (randomNum >= 0.5) {
            return currentPlayer = playerOne;
        } else {
            return currentPlayer = playerTwo;
        };
    };
};

// Checks all possible boardArray win combinations and returns gameOver = true
function checkForGameWin(){
    if ( boardArray[0] && boardArray[1] && boardArray[2] && 
        (boardArray[0] === boardArray[1]) && (boardArray[1] === boardArray[2]) && (boardArray[0] === boardArray[2]) )
    {
        return gameOver = true;
    } else if ( boardArray[3] && boardArray[4] && boardArray[5] && 
               (boardArray[3] === boardArray[4]) && (boardArray[4] === boardArray[5]) && (boardArray[3] === boardArray[5]) )
    {
        return gameOver = true;
    } else if ( boardArray[6] && boardArray[7] && boardArray[8] &&  
               (boardArray[6] === boardArray[7]) && (boardArray[7] === boardArray[8]) && (boardArray[6] === boardArray[8]) )
    {
        return gameOver = true;
    } else if ( boardArray[0] && boardArray[3] && boardArray[6] && 
               (boardArray[0] === boardArray[3]) && (boardArray[3] === boardArray[6]) && (boardArray[0] === boardArray[6]) )
    {
        return gameOver = true;
    } else if ( boardArray[1] && boardArray[4] && boardArray[7] && 
               (boardArray[1] === boardArray[4]) && (boardArray[4] === boardArray[7]) && (boardArray[1] === boardArray[7]) )
    {
        return gameOver = true;
    } else if ( boardArray[2] && boardArray[5] && boardArray[8] && 
               (boardArray[2] === boardArray[5]) && (boardArray[5] === boardArray[8]) && (boardArray[2] === boardArray[8]) )
    {
        return gameOver = true;
    } else if (boardArray[0] && boardArray[4] && boardArray[8] && 
               (boardArray[0] === boardArray[4]) && (boardArray[4] === boardArray[8]) && (boardArray[0] === boardArray[8]) )
    {
        return gameOver = true;
    } else if ( boardArray[2] && boardArray[4] && boardArray[6] && 
               (boardArray[2] === boardArray[4]) && (boardArray[4] === boardArray[6]) && (boardArray[2] === boardArray[6]) )
    {
        return gameOver = true;
    };
};

//checks turn count for maximum number of turns if no winning combination is achieved
function checkForDraw(){
    if ( turnCount == 8 ){
        return gameTie = true;
    };
};

function switchPlayer(){
    if (humanPlayer.checked = true) {
        if ( currentPlayer == playerOne ){
            return currentPlayer = playerTwo;
        } else {
            return currentPlayer = playerOne;
        };
    } else {
        currentPlayer = playerTwo;
        playerTurnDisplay();
        setTimeout(function(){}, 2000);
        computerPlayerLogic()
        currentPlayer = playerOne;
    };
};

// displays the current players turn string in the display element
function playerTurnDisplay(){
    return display.innerHTML = "It is " + currentPlayer + "'s turn";
};

function gameLogic(){
    updateGameBoard();
    checkForGameWin();
    checkForDraw();
    turnCount++;
    if (gameOver == true){
        // stop timer
        // play gain button active
        display.innerHTML = "Player " + currentPlayer + " Wins!<br> Press Start to Play again";
    } else if (gameTie == true) {
        startRestartBtn.disabled = true;
        playAgainBtn.disabled = false;
        display.innerHTML = "Cat's game!";
    } else {
        switchPlayer();
        playerTurnDisplay();
    };
};

/*Math.random returns a random integer between 0 & 8 inclusive and
 while loop checks random array indexes until an empty one is found and
 updates its value with "O" */
function computerPlayerLogic(){
    let emptyArrayIndex = false;
    while(emptyArrayIndex = false){
        if(boardArray[Math.floor(Math.random() * 9)] == ""){
            boardArray[Math.floor(Math.random() * 9)] == "O";
            updateGameBoard();
            return emptyArrayIndex = true;
        };
    };
};

// Prints contents of boardArray to HTML gameboard 
function updateGameBoard(){
    cell1.innerHTML = boardArray[0];
    cell2.innerHTML = boardArray[1];
    cell3.innerHTML = boardArray[2];
    cell4.innerHTML = boardArray[3];
    cell5.innerHTML = boardArray[4];
    cell6.innerHTML = boardArray[5];
    cell7.innerHTML = boardArray[6];
    cell8.innerHTML = boardArray[7];
    cell9.innerHTML = boardArray[8];
};