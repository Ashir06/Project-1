let wins = 0;
let losses = 0;
let ties = 0;


const roundsInput = prompt("How many rounds do you want to play?");
const totalRounds = parseInt(roundsInput);


for (let round = 1; round <= totalRounds; round++) {
   
    const userChoice = prompt(`Round ${round}: Use 'r' for rock, 'p' for paper, or 's' for scissors`);

    const computerChoice = Math.floor(Math.random() * 3);

   
    if (
        (userChoice === 'r' && computerChoice === 2) ||
        (userChoice === 'p' && computerChoice === 0) ||
        (userChoice === 's' && computerChoice === 1)
    ) {
        wins++;
        alert("You won!");
    } else if (
        (userChoice === 'r' && computerChoice === 1) ||
        (userChoice === 'p' && computerChoice === 2) ||
        (userChoice === 's' && computerChoice === 0)
    ) {
        losses++;
        alert("You lost!");
    } else {
        ties++;
        alert("You tied!");
    }
}

// the results
alert(`Game Over! You won ${wins} times, tied ${ties} times, and lost ${losses} times.`);