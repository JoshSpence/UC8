var plyerChoice;
var computerChoice;
var score = [0, 0, 0];
var roundScore = [0,0];

function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
    storeComputerChoice();
}

function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

function playGame() {
    if (playerChoice == computerChoice) {
        console.log("tie");
        return 0;
    }
    else if (playerChoice == 0 && computerChoice == 2) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 0 && computerChoice == 3) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 1 && computerChoice == 0) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 1 && computerChoice == 4) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 1) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 2 && computerChoice == 3) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 3 && computerChoice == 4) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 3 && computerChoice == 1) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 4 && computerChoice == 2) {
        console.log("win");
        return 1;
    }
    else if (playerChoice == 4 && computerChoice == 0) {
        console.log("win");
        return 1;
    }
    else {
        console.log("lose");
        return -1;
    }
}

function displayGameResult(resultId) {
    var choices = ["Rock", "Paper", "Scissors", "Spock", "Lizard"];
    var result = playGame();
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    if (result == 1) {
        updateScore(0);
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    }
    else if (result == -1) {
        updateScore(2);
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    }
    else {
        updateScore(1);
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}

function displayScoreBoard(winsId, lossesId, tiesId, mWinsId, cpWinsId) {
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
    document.getElementById(mWinsId).innerHTML = roundScore[0];
    document.getElementById(cpWinsId).innerHTML = roundScore[1];
}

function displayRounds(){
    if (score[0] + score[2] >= 3)
}
