// Create simple 2 variable calculator
// add, subtract, multiply, divide


// consider adding second display showing 4 + 4 = 8

// Calculation logic:
function operate(number1, number2, operand) {
    result = null;
    a = parseInt(number1);
    b = parseInt(number2);
    operand = operand;
    switch(operand) {
        case "+":
            result = (a + b);
        break;
        case "-":
            result = (a - b);
        break;
        case "*":
            result = (a * b);
        break;
        case "/":
            if (b === 0) {
                result = "Are you dumb?! You can't divide by 0!";
            }
            else {
                result = (a / b);
            }
        break;
        case "%":
            result = (a % b)
        break;
    }
    return (result)
}

const display = document.getElementById("display");
const buttons = document.querySelector(".buttons"); // Use querySelector

let number1 = null;  
let number2 = null;
let operand = null;

if (buttons && display) {
    buttons.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const buttonValue = event.target.textContent; // Declare and initialize buttonValue
            const buttonId = event.target.id; // Get button ID

            // Button logic:
            switch (buttonId) {
                case "buttonAC":
                    display.value = "0";
                    number1 = null;
                    number2 = null;
                    operand = null;
                    break;
                case "buttonPlus":
                    number1 = display.value;
                    operand = "+"
                    display.value = "0"
                    break;
                case "buttonMinus":
                    number1 = display.value;
                    operand = "-"
                    display.value = "0"
                    break;
                case "buttonDivide":
                    number1 = display.value;
                    operand = "/"
                    display.value = "0"
                    break;
                case "buttonMultiply":
                    number1 = display.value;
                    operand = "*"
                    display.value = "0"
                    break;
                case "buttonModulus":
                    number1 = display.value;
                    operand = "%"
                    display.value = "0"
                    break;                
                case "buttonPosNeg": // Plus/Minus
                    let currentValue = parseFloat(display.value);
                    display.value = -currentValue; // Toggle sign
                break;
                case "buttonEquals":
                    number2 = display.value;
                    result = operate(number1, number2, operand);
                    display.value = result;
                    console.log("result", result);
                    console.log("display value", display.value)
                    break;
                default: // numbers
                    if (display.value === "0") {
                        display.value = buttonValue; // Replace initial "0"
                    } else {
                        display.value += buttonValue;
                    }
            }
        }
    });
} else {
    console.error("Button container not found!");
}

