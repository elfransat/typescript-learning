// global variables
var calculateMethod = "null";
var firstNumber = 0;
var currentNumber = 0;
var calculatedNumber = 0;
var visualDisplay = document.getElementById("input");
var remainder = 0;
// opperator functions
var addition = function () {
    // saves the first chosen number and resets the current number variable for when the second number is chosen //
    firstNumber = currentNumber;
    currentNumber = 0;
    calculateMethod = "addition";
};
var divide = function () {
    var remainder = currentNumber;
    firstNumber = currentNumber;
    currentNumber = 0;
    calculateMethod = "divide";
};
var subtract = function () {
    var remainder = currentNumber;
    firstNumber = currentNumber;
    currentNumber = 0;
    calculateMethod = "subtract";
};
var multiply = function () {
    var remainder = currentNumber;
    firstNumber = currentNumber;
    currentNumber = 0;
    calculateMethod = "multiply";
};
var calculation = function () {
    if (calculateMethod === "addition") {
        calculatedNumber = currentNumber += firstNumber;
        visualDisplay.innerHTML = calculatedNumber.toString();
    }
    else if (calculateMethod === "multiply") {
        calculatedNumber = currentNumber * firstNumber;
        visualDisplay.innerHTML = calculatedNumber.toString();
    }
    else if (calculateMethod === "subtract") {
        calculatedNumber = firstNumber - currentNumber;
        visualDisplay.innerHTML = calculatedNumber.toString();
    }
    else if (calculateMethod === "divide") {
        calculatedNumber = firstNumber / currentNumber;
        visualDisplay.innerHTML = calculatedNumber.toString();
    }
    currentNumber = 0;
    firstNumber = 0;
};
var clearCalc = function () {
    currentNumber = 0;
    firstNumber = 0;
    visualDisplay.innerHTML = currentNumber.toString();
};
var currenter = function (curNumber) {
    if (currentNumber < 1000000000 && currentNumber >= 1) {
        currentNumber *= 10;
    }
    currentNumber += curNumber;
    visualDisplay.innerHTML = currentNumber.toString();
};
