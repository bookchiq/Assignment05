function rockPaperScissors() {
	do {
		let userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
		if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
			alert("Invalid choice. Please choose rock, paper or scissors.");
			continue;
		}

		let computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		}
		alert(`The computer chose ${computerChoice}.` + "\n" + compare(userChoice, computerChoice) );
	} while (confirm("Do you want to play again?"));
}

function compare(choice1, choice2) {
	if (choice1 === choice2) {
		return "The result is a tie!";
	} else if (choice1 === "rock") {
		return choice2 === "scissors" ? "Rock wins." : "Paper wins.";
	} else if (choice1 === "paper") {
		return choice2 === "rock" ? "Paper wins." : "Scissors wins.";
	} else if (choice1 === "scissors") {
		return choice2 === "rock" ? "Rock wins." : "Scissors wins.";
	} else {
		return "Invalid choice. Please choose rock, paper or scissors.";
	}
}