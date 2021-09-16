function computerSelection() {
    let random = Math.floor((Math.random() * 3));
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    };
}
/* Rock is 1
Paper is 2
Scissors is 3 */

let playerTally = 0; let computerTally = 0;
const tally = document.createElement('div')
tally.textContent = `player: ${playerTally} | computer: ${computerTally}`;
const paragraph = document.createElement('div');

let reset = document.querySelector('#reset');
reset.addEventListener("click", () => {
    alert("yay!");
});

function resetfunct() {
    playerTally = 0;
    computerTally = 0;
    body.appendChild(tally);
    alert("Yay!");
}

function play(pl) {
    let string;
    let com = computerSelection();
    if (pl == com) {
        return string = "It's a tie!";
    } else if ( // Only scenarios where player wins
        (pl == "Rock" && com == "Scissors") ||
        (pl == "Paper" && com == "Rock") ||
        (pl == "Scissors" && com == "Paper"))
        {
    string = `You win! ${pl} beats ${com}. `;
        ++playerTally;
    } else {
        string = `You lose! ${pl} is beaten by ${com}. `;
        ++computerTally;
    }
    console.log(string);
    const body = document.querySelector('body');
    paragraph.textContent = string;
    tally.textContent = `player: ${playerTally} | computer: ${computerTally}`;
    body.appendChild(paragraph);
    body.appendChild(tally);
}