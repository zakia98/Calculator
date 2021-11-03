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
            if (num2 == 0) return "ERR: Can't divide by 0!"
            return divide(num1, num2);
            break;
    }
}
function input() {
    if (operatorClicked[0] == false) {
        num1 += this.textContent 
        displayNum1.textContent = num1  
    }
    if (operatorClicked[0] == true) {
        num2 += this.textContent
        displayNum2.textContent = num2
    }
}

function clear() {
    num1 = '';
    num2 = '';
    displayNum1.textContent = ''
    displayNum2.textContent = ''
    displayOperator.textContent = ''
    operatorClicked[0] = false;
    operatorClicked[1] = ''
}
let num1 =''
let num2 =''

function equals() {
    displayOperator.textContent = ''
    displayNum1.textContent = ''
    total = operate(num1, num2, operatorClicked[1])
    displayNum2.textContent =  total
    num1 = total
    num2 = ''
    console.log(num1)
}

function operatorButton() {
    if (operatorClicked[0] == false) {
        operatorClicked[0] = true
        operatorClicked[1] = operatorButton.textContent.toString()
        displayOperator.textContent = operatorClicked[1]
    } else {
        displayOperator.textContent = operatorClicked[1]
        displayNum1.textContent = num2
        total = operate(num1, num2, operatorClicked[1])
        displayNum2.textContent =  total
        num1 = total
        num2 = ''
        console.log(num1)
    }
}

function addDecimal() {
    if (!(num1.includes('.')) && (operatorClicked[0]==false)) {
        num1 += '.'
        displayNum1.textContent = num1
    }
    if (!(num2.includes('.')) && (operatorClicked[0]==true)) {
        num2 += '.'
        displayNum2.textContent = num2
    }
}

const displayNum1 = document.querySelector('#display-first')
const displayNum2 = document.querySelector('#display-second')

const numberButtons = document.querySelectorAll('#button')
numberButtons.forEach(numberButton => 
    numberButton.addEventListener('click', input
))

const operatorClicked = [false, '']

const operatorButtons = document.querySelectorAll('#operator')
const displayOperator = document.querySelector('#display-operator')
operatorButtons.forEach(operatorButton => operatorButton
    .addEventListener('click', () => {
        operatorClicked[0] = true 
        operatorClicked[1] = operatorButton.textContent.toString()
        displayOperator.textContent = operatorClicked[1]
    }))
        
const clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', clear)

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', equals)

const decimalButton = document.querySelector('#decimal')

decimalButton.addEventListener('click', addDecimal)

const backspaceButton = document.querySelector('#backspace')
backspaceButton.addEventListener('click', () => {
    if (operatorClicked[0] == false) {
        num1 = num1.substring(0, num1.length - 1)
        displayNum1.textContent = num1 
    } 
    if (operatorClicked[0] == true) {
        num2 = num2.substring(0, num2.length - 1)
        displayNum2.textContent = num2
    }
})

document.addEventListener('keydown', (e) => {
    if (operatorClicked[0] == false) {
        if ((e.key < 10) || (e.key > -1)) {
            num1 += e.key
            displayNum1.textContent = num1  
        }
        if (e.key == 'Backspace') {
            console.log('backspace')
            num1 = num1.substring(0, num1.length - 1)
            displayNum1.textContent = num1 
        }
        if (e.key == '.') {
            if (!(num1.includes('.')) && (operatorClicked[0]==false)) {
                num1 += '.'
                displayNum1.textContent = num1
            }
            if (!(num2.includes('.')) && (operatorClicked[0]==true)) {
                num2 += '.'
                displayNum2.textContent = num2
            }
        }
    }
    if (operatorClicked[0] == true) {
        if ((e.key < 47) || (e.key > 58)) {
            num2 += e.key
            displayNum2.textContent = num2 
        }
        if (e.key == 'Backspace') {
            console.log('backspace')
            num2 = num2.substring(0, num2.length - 1)
            displayNum2.textContent = num2
        }
        if (e.key == '.') {
            if (!(num1.includes('.')) && (operatorClicked[0]==false)) {
                num1 += '.'
                displayNum1.textContent = num1
            }
            if (!(num2.includes('.')) && (operatorClicked[0]==true)) {
                num2 += '.'
                displayNum2.textContent = num2
            }
        }
    }

})