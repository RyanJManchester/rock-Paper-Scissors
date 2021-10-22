let playerTally = 0; let computerTally = 0;
const paragraph = document.createElement('div');
let tally = document.createElement('div');


const body = document.body;
body.onload = resetFunct();
tally.textContent = `player: ${playerTally} | computer: ${computerTally}`;
const reset = document.getElementById("reset");
reset.onclick = resetFunct();

body.appendChild(tally);

function resetFunct() {
    console.log("yay!");
    alert("YAY!");
}

function play(pl) {
    let string;
    let com = computerSelection();
    if (pl == com) {
        string = "It's a tie! Nobody wins.";
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
    paragraph.textContent = string;
    tally.textContent = `player: ${playerTally}
    | computer: ${computerTally}`;
    body.appendChild(paragraph);
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