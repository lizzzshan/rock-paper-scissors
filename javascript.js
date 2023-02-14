var moves = [
    'rock',
    'paper',
    'scissors'
]

// Get random computer choice 
function getComputerChoice(moves){
    return moves[Math.floor(Math.random()*moves.length)];
}

//console.log(getComputerChoice(moves));

function playRound(playerSelection, computerSelection){
    // Convert player input to all lowercase
    var player = playerSelection.toLowerCase();
    if (player == computerSelection){
        return("It's a tie!");
    }
    // Player win options
    else if((player == "rock" && computerSelection =="scissors")
        || (player =="scissors" && computerSelection == "paper")
        || (player == "paper" && computerSelection =="rock")){
            console.log("You win, ", player, " beats ", computerSelection, "!");
            return("win");
    }
    else{
        console.log("You lose, ", computerSelection, " beats ", player);
        return("lose");
    }
}

console.log(playRound("rocK", getComputerChoice(moves)));
// Plays the game for 5 rounds and returns the score
function game(){
    let cpuScore = 0;
    let playerScore = 0;
    
    for (let i =0; i < 5; i++){
        //TODO: implement game func here 
    }
}