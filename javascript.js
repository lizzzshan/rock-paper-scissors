var moves = [
    'rock',
    'paper',
    'scissors'
]

// Get random computer choice 
function getComputerChoice(moves){
    return moves[Math.floor(Math.random()*moves.length)];
}

//TODO: Catch invalid player selections
function playRound(playerSelection, computerSelection){
    // Convert player input to all lowercase
    var player = playerSelection.toLowerCase();
    // If the input is invalid and does not exist within the moves array, return an error message
    if(moves.includes(player)!= true){
        return("Invalid input!");
    }
    if (player == computerSelection){
        console.log("It's a tie!");
        return("tie");
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

// Plays the game for 5 rounds and returns the score
function game(){
    let cpuScore = 0;
    let playerScore = 0;
    let status = null;
    for (let i =0; i < 5; i++){
        let player = prompt("Enter rock, paper, or scissors");
        status = playRound(player, getComputerChoice(moves));
        console.log(status);
        //update scores of cpu and player
        if(status == "win"){
            playerScore +=1; 
        }
        else if (status =="lose"){
            cpuScore+=1;
        }
        else if(status == "tie"){
            cpuScore +=1;
            playerScore +=1;
        }
    }

    //determine winner
    if(cpuScore > playerScore){
        console.log("CPU wins!");
    }
    else if (cpuScore < playerScore){
        console.log("You win!");
    }
    else{
        console.log("It's a tie for this round!");
    }
}

game();
