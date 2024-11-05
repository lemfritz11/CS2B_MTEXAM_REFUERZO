const theFavNumber = 11;
let guess;

while (guess !== theFavNumber) {
    guess = parseInt(prompt("Guess my favorite number:"), 20);

    if (guess > theFavNumber) {
        console.log("Too high!");
    } else if (guess < theFavNumber) {
        console.log("Too low!");
    } else if (guess === theFavNumber) {
        console.log("Correct! You guessed my favorite number.");
    } else {
        console.log("Please enter a valid number.");
    }
}
