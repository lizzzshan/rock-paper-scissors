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
    
}
