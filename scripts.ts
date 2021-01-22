// global variables
let calculateMethod = "null";
let firstNumber = 0;
let currentNumber = 0;
let calculatedNumber = 0;
let visualDisplay = document.getElementById("input");
let remainder = 0;
// opperator functions
let addition = () => {
  // saves the first chosen number and resets the current number variable for when the second number is chosen //
  firstNumber = currentNumber;
  currentNumber = 0;
  calculateMethod = "addition";
};

let divide = () => {
  let remainder = currentNumber;
  firstNumber = currentNumber;
  currentNumber = 0;
  calculateMethod = "divide";
};

let subtract = () => {
  let remainder = currentNumber;
  firstNumber = currentNumber;
  currentNumber = 0;
  calculateMethod = "subtract";
};

let multiply = () => {
  let remainder = currentNumber;
  firstNumber = currentNumber;
  currentNumber = 0;
  calculateMethod = "multiply";
};

let calculation = () => {
  if (calculateMethod === "addition") {
    calculatedNumber = currentNumber += firstNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
  } else if (calculateMethod === "multiply") {
    calculatedNumber = currentNumber * firstNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
  } else if (calculateMethod === "subtract") {
    calculatedNumber = firstNumber - currentNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
  } else if (calculateMethod === "divide") {
    calculatedNumber = firstNumber / currentNumber;
    visualDisplay.innerHTML = calculatedNumber.toString();
  }
  currentNumber = 0;
  firstNumber = 0;
};
let clearCalc = () => {
  currentNumber = 0;
  firstNumber = 0;
  visualDisplay.innerHTML = currentNumber.toString();
};

let currenter = (curNumber) => {
  if (currentNumber < 1000000000 && currentNumber >= 1) {
    currentNumber *= 10;
  }
  currentNumber += curNumber;
  visualDisplay.innerHTML = currentNumber.toString();
};
