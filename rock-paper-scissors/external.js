
function getComputerChoice() {
    // Randomly select computer choice from array of choices.
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerSelection = choices[randomNumber];
    return computerSelection;
}

function game(playerSelection) {
    //receives the computer`s choice
    const computerSelection = getComputerChoice();
    //stores the player`s choice
    console.log("Player Choice: " + playerSelection);
    console.log("Computer Choice: " + computerSelection);

    const result =
    //checks to see if the player wins 
        playerSelection === computerSelection ? "It's a tie" :
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ?
        "You win" : "Computer Wins!";

    document.getElementById("result").innerText = result;
}
