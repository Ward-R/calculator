// Create simple calculator
// add, subtract, multiply, divide


function operate(number1, number2, operand) {
    result = 0
    switch(operand) {
        case "+":
            result = (a + b)
        break;
        case "-":
            result = (a - b)
        break;
        case "*":
            result = (a * b)
        break;
        case "/":
            result = (a / b)
            // need to put /0 if/else**********
        break;
    }
    return (result)
}

let a = parseInt(prompt("enter first number:"))
let operand = prompt("enter operand '+, -, *, /'")
let b = parseInt(prompt("enter second number:"))


result = operate(a, b, operand)
console.log(result)