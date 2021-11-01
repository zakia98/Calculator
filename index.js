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
function input() {
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
numberButtons.forEach(numberButton => 
    numberButton.addEventListener('click', input
))

const operatorClicked = [false, '']

const operatorButtons = document.querySelectorAll('#operator')
operatorButtons.forEach(operatorButton => operatorButton
    .addEventListener('click', () => {
        operatorClicked[0] = true 
        operatorClicked[1] = operatorButton.textContent.toString()
        display.textContent = ""
    }))
        
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    display.textContent = ''
    operatorClicked[0] = false;
    operatorClicked[1] = ''
})

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    display.textContent = operate(num1, num2, operatorClicked[1])
})