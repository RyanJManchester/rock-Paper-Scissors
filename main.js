const body = document.body;
let playerTally = 0; let computerTally = 0;
const paragraph = document.createElement('div');

let tally = document.createElement('div');
let tied;
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function (e) {
    resetFunct();
})

body.onload = resetFunct();
tally.textContent = `player: ${playerTally} | computer: ${computerTally}`;

function resetFunct() {
    computerTally = 0, 
    playerTally = 0,
    tied = 0;
    body.removeChild(tally);
    paragraph.textContent = "Play a game to see your score!";
    paragraph.style.color = 'black';
    body.insertBefore(paragraph, resetBtn);
}

function play(pl) {
    let string;
    let com = computerSelection();
    if (pl == com) {
        string = "It's a tie! Nobody wins.";
        ++tied;
        paragraph.style.color = 'black'
    } else if ( // Only scenarios where player wins
        (pl == "Rock" && com == "Scissors") ||
        (pl == "Paper" && com == "Rock") ||
        (pl == "Scissors" && com == "Paper"))
        {
    string = `You win! ${pl} beats ${com}. `;
        ++playerTally;
        paragraph.style.color = 'green';
    } else {
        string = `You lose! ${pl} is beaten by ${com}. `;
        ++computerTally;
        paragraph.style.color = 'red';
    }
    paragraph.textContent = string;
    tally.textContent = ` You: ${playerTally}
    | Tied: ${tied} | Computer: ${computerTally}`;
    body.insertBefore(paragraph, resetBtn);
    body.appendChild(tally);
}

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
