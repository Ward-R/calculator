// Create simple 2 variable calculator
// add, subtract, multiply, divide


// consider adding second display showing 4 + 4 = 8

// Calculation logic:
function operate(number1, number2, operand) {
    result = null;
    switch(operand) {
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
let operand = null;
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
                    numberEnteredLast = false;
                    break;
                case "buttonPlus":  
                    if (numberEnteredLast === true && number1 !== null) { // case if entering a 3rd or more number
                        
                        number2 = parseFloat(display.value);
                       // operand = "+";                     bug if switching 1 + 2 - 2, etc.
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                        console.log("+operator", operand);
                        console.log("plus if:", display.value);
                        console.log("+number1:", number1);
                        console.log("+number2:", number2);
                        console.log("result:", result);
                    }
                    else if (numberEnteredLast === false) {  // if operator entered twice or more in a row does nothing/ changes operator.
                        operand = "+";
                        console.log("operator", operand);
                        console.log("plus else if nel===f:", display.value);
                        console.log("+number1:", number1);
                        console.log("+number2:", number2);
                    }
                    else if (numberEnteredLast === true) {  // case if only two number calculation
                        number1 = parseFloat(display.value);
                        operand = "+";
                        numberEnteredLast = false;
                        console.log("+plus else if:", display.value);
                        console.log("+number1:", number1);
                        console.log("+number2:", number2);
                    }
                    break;
                case "buttonMinus":
                    if (numberEnteredLast === true && number1 !== null) {
                        
                        console.log("operator -", operand);
                        number2 = parseFloat(display.value);
                        //operand = "-";
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operand = "-";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operand = "-";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonDivide":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operand = "/";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operand = "/";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonMultiply":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operand = "*";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operand = "*";
                        numberEnteredLast = false;
                    }
                    break;
                case "buttonModulus":
                    if (numberEnteredLast === true && number1 !== null) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;   
                    }
                    else if (numberEnteredLast === false) { 
                        operand = "%";
                    }
                    else if (numberEnteredLast === true) {  
                        number1 = parseFloat(display.value);
                        operand = "%";
                        numberEnteredLast = false;
                    }
                    break;                
                case "buttonPosNeg": // Plus/Minus
                    let currentValue = parseFloat(display.value);
                    display.value = -currentValue; // Toggle sign
                break;
                case "buttonEquals":
                    if (numberEnteredLast === true) {
                        number2 = parseFloat(display.value);
                        result = operate(number1, number2, operand);
                        display.value = result;
                        number1 = result;
                        numberEnteredLast = false;
                    }
                    else if (numberEnteredLast === false) { // Prevents '=' from activating multiple times in a row.
                        operand = "=";
                    }
                    break;
                default: // numbers
                    if (display.value === "0") {
                        display.value = buttonValue; // Replace initial "0" with first digit entered
                        numberEnteredLast = true;
                        console.log("numbers if:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    } else if (parseFloat(display.value) === number1) { // clears screen then displays number2 entry
                        display.value = "";
                        display.value = buttonValue;
                        numberEnteredLast = true;
                        console.log("numbers else if:", display.value);
                        console.log("number1:", number1);
                        console.log("number2:", number2);
                    } else {
                        display.value += buttonValue; // This is for displaying the number1 only
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

