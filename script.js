// Simple Calculator
// R Ward 2025

// Calculation logic:
function operate(number1, number2, operator) {
    result = null;
    switch(operator) {
        case "+":
            result = (number1 + number2);
        break;
        case "-":
            result = (number1 - number2);
        break;
        case "*":
            result = (number1 * number2);
        break;
        case "/":
            if (number2 === 0) {
                result = "Are you dumb?! You can't divide by 0!";
            }
            else {
                result = (number1 / number2);
            }
        break;
        case "%":
            result = (number1 % number2)
        break;
    }
    return result
}

const display = document.getElementById("display");
const buttons = document.querySelector(".buttons"); // Use querySelector

let number1 = null;  
let number2 = null;
let operator = null;
numberEnteredLast = false; // This is used to stop ++ etc from doing unwanted behaviour.

if (buttons && display) {
    buttons.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const buttonValue = event.target.textContent; // Declare and initialize buttonValue
            const buttonId = event.target.id; // Get button ID

            // Button logic:
            switch (buttonId) {
                case "buttonAC": // Clears display, resets all flags/variables
                   display.value = "0";
                    number1 = null;
                    number2 = null;
                    operator = null;
                    numberEnteredLast = false;
                    break;
                case "buttonPlus":  // all other operator cases follow similar logic as buttonPlus
                    if (numberEnteredLast === true && number1 !== null) { // case if entering a chain of 3 or more number operator pairs 
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operator);
                        operator = buttonValue;  // updates the operator in a chain after the previous calculation performed
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) {  // if operator entered twice or more in a row does nothing/ changes operator.
                        operator = "+";
                    }
                    else if (numberEnteredLast === true) {  // case if only two number calculation
                        number1 = parseFloat(display.value);
                        operator = "+";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonMinus":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operator);
                        operator = buttonValue;
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operator = "-";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operator = "-";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonDivide":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operator);
                        operator = buttonValue;
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operator = "/";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operator = "/";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonMultiply":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operator);
                        operator = buttonValue;
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operator = "*";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operator = "*";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonModulus":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operator);
                        operator = buttonValue;
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operator = "%";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operator = "%";
                        numberEnteredLast = false;
                    }
                    break;                
                case "buttonPosNeg": // Plus/Minus
                    let currentValue = parseFloat(display.value);
                    display.value = -currentValue; // sets display to opposite +/-
                    if (currentValue === number1) { // updates stored variable to new polarity
                        number1 = -currentValue;
                    }
                    else if (currentValue === number2) {
                        number2 = -currentValue;
                    }
                break;
                case "buttonEquals":
                    if (numberEnteredLast === true) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operator);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;
                    }
                    else if (numberEnteredLast === false) { // Prevents '=' from activating multiple times in a row.
                        operator = "=";
                    }
                    break;
                default: // numbers
                    if (display.value === "0") {
                        display.value = buttonValue; // Replace initial "0" with first digit entered
                        numberEnteredLast = true;
                    } else if (parseFloat(display.value) === number1) { // clears screen then displays number2 entry
                        display.value = "";
                        display.value = buttonValue;
                        numberEnteredLast = true;
                    } else {
                        display.value += buttonValue; // This is for displaying the number1 only
                        numberEnteredLast = true;
                    }
            } 
        }
    });
} else {
    console.error("Button container not found!");
}
