// Create simple 2 variable calculator
// add, subtract, multiply, divide


// consider adding second display showing 4 + 4 = 8

// Calculation logic:
function operate(number1, number2, operand) {
    result = null;
    //a = parseInt(number1);
    //b = parseInt(number2);
    a = number1; // as int
    b = number2; // as int
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
    return result
}

const display = document.getElementById("display");
const buttons = document.querySelector(".buttons"); // Use querySelector

let number1 = null;  
let number2 = null;
let operand = null;
operandPressed = false;
numberEnteredLast = false;

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
                    operandPressed = false;
                    numberEnteredLast = false;
                    break;
                // case "buttonPlus":
                //     if (numberEnteredLast === true) {  // only works if a number entry preceeds operand. operand operand does nothing.
                //         number1 = parseFloat(display.value);
                //         operand = "+";
                //         //display.value = "";
                //         if (operandPressed === true) {  // need to get this to mimic equals button logic to get rid of number 1 from screen.
                //             number2 = parseFloat(display.value);
                //             result = operate(number1, number2, operand);
                //             display.value = result;
                //             number1 = result;
                //         }
                //         operandPressed = true;
                //         numberEnteredLast = false; // **** trying to get it to not allow operand pushed twice in a row
                //     }
                //     break;
                case "buttonPlus":  //***** I realized that operandpressd and numberenteredlast are opposites doing the same fucking thing. refactor after to only use one or the other... get rid of operandpressed */
                    
                    if (numberEnteredLast === true && number1 !== null && operandPressed === false) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false; // **** trying to get it to not allow operand pushed twice in a row
                        
                        console.log("plus if:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                        console.log("result:", result);
                    
                    }
                    else if (numberEnteredLast === false) { 
                        operand = "+";
                        console.log("plus else if nel===f:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operand = "+";
                        numberEnteredLast = false;
                        console.log("plus else if:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    }
                    
                    break;
                case "buttonMinus":
                    number1 = parseFloat(display.value); //this works only for two number situations.
                    operand = "-";
                    numberEnteredLast = false;
                    console.log("minus:", display.value);
                    console.log("number1:", number1);
                    console.log("number2:", number2);
                    break;
                case "buttonDivide":
                    number1 = display.value;
                    operand = "/"
                    break;
                case "buttonMultiply":
                    number1 = display.value;
                    operand = "*"
                    break;
                case "buttonModulus":
                    number1 = display.value;
                    operand = "%"
                    break;                
                case "buttonPosNeg": // Plus/Minus
                    let currentValue = parseFloat(display.value);
                    display.value = -currentValue; // Toggle sign
                break;
                case "buttonEquals":
                    number2 = parseFloat(display.value);
                    result = operate(number1, number2, operand);
                    display.value = result;
                    number1 = result;
                    numberEnteredLast = false;
                    operandPressed = true;
                    console.log("equals result:", result);
                    console.log("number1:", number1);
                    console.log("number2:", number2);
                    break;
                default: // numbers
                    if (display.value === "0") {
                        display.value = buttonValue; // Replace initial "0"
                        numberEnteredLast = true;
                        console.log("numbers if:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    } else if (parseFloat(display.value) === number1) { // clears screen to display number2 entry
                        display.value = "";
                        display.value = buttonValue;
                        numberEnteredLast = true;
                        console.log("numbers else if:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    } else {
                        display.value += buttonValue; // This is for displaying the first number only
                        numberEnteredLast = true;
                        console.log("numbers else:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    }
            } 
        }
    });
} else {
    console.error("Button container not found!");
}

//The Crucial Limitation (and Bug):

//The problem is that this approach only works correctly if the user immediately starts entering the second number after entering the operator.  If the user enters the operator and then accidentally presses a number key before starting the second number (for instance, they meant to press another operator), your logic will clear the display incorrectly.