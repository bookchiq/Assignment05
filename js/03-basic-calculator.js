// ADD A FUNCTION CALLED CALCULATE
function calculate( x, y, operation ) {
	// ADD A SWITCH STATEMENT TO PERFORM THE OPERATION
	switch( operation ) {
		case '+':
			return x + y;
		case '-':
			return x - y;
		case '*':
			return x * y;
		case '/':
			return x / y;
		default:
			return `Invalid operation. Please choose +, -, *, or /.`;
	}
}

function basicCalculator() {
	// SET UP "FAILURE" VALUES FOR X, Y, AND OPERATION
	let x = NaN;
	let y = NaN;
	let operation = '';

	// COLLECT FIRST NUMBER FROM USER
	do {
		x = parseFloat(prompt("Enter the first number:"));

		if (isNaN(x) ) {
			alert("Invalid input. Please enter a number.");
			continue;
		}
	} while (isNaN(x) );

	// COLLECT SECOND NUMBER FROM USER
	do {
		y = parseFloat(prompt("Enter the second number:"));

		if (isNaN(y) ) {
			alert("Invalid input. Please enter a number.");
			continue;
		}
	} while (isNaN(y) );

	// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
	do {
		operation = prompt("Enter the operation (+, -, *, /):");

		if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
			alert("Invalid operation. Please choose +, -, *, or /.");
			continue;
		}
	} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');

	// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
	alert(`The result is: ${calculate(x, y, operation)}`);
}
