//STEP 1
function halfNumber() {
    let num = parseFloat(prompt('Enter a number'));
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

//STEP 2
function squareNumber() {
    let num = parseFloat(prompt('Enter a number'));
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

//STEP 3
function percentOf() {
    let num1 = parseFloat(prompt('Enter the first number'));
    let num2 = parseFloat(prompt('Enter the second number'));
    let result = num1 / num2 * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

//STEP 4
function findModulus() {
    let num1 = parseFloat(prompt('Enter the first number'));
    let num2 = parseFloat(prompt('Enter the second number'));
    let result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}

//STEP 5