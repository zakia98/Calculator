function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2) 
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}
function compute() {
    if (operatorClicked[0] == false) {
        num1 += this.textContent 
        display.textContent = num1  
    }
    if (operatorClicked[0] == true) {
        num2 += this.textContent
        display.textContent = num2
    }

    
       
}

let num1 =''
let num2 =''

const numberButtons = document.querySelectorAll('#button')
numberButtons.forEach(button => 
    button.addEventListener('click', compute
))

const operatorClicked = [false]

const operatorButtons = document.querySelectorAll('.operators > *')
operatorButtons.forEach(operatorButton => operatorButton
    .addEventListener('click', () => {
        operatorClicked[0, 1] = [true, operatorButton.textContent]
        display.textContent = ""
    }))
        
const clearButton = document.querySelectorAll()