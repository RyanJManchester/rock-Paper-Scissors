let a = playerSelectiion;
function computerSelection() {
    let result = "Error";
    let random = Math.floor((Math.random() * 3));
    if (random == 2) {
        result = "Scissors";
    } else if (random == 1) {
        result = "Paper";
    } else { result = "Scissors"};
    return random;
}
/* Rock is 1
Paper is 2
Scissors is 3 */
function playRound(a,b) {
    let string;
    if (pl == com) {
        string = "It's a tie!";
    } else if (
        (pl == "Rock" && com == "Paper") ||
        (pl == "Paper" && com == "Scissors") ||
        (pl == "Scissors" && com == "Rock")/)
        {
        string = `You win! ${pl} beats ${com}`;
    } else {
        string = `You lose! ${pl} is beaten by ${com}`;
    }
}