let firstNum = 0;
let secondNum = 0;
let step = 0;
let operation = null;
let result = 0;
let currentNumArr = [];
let history = [];
const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');

function updateDisplay() {
  display.textContent = step === 2 ? secondNum : firstNum;
  historyDisplay.value = history.join('');
}

function getFormula(num) {
  if (step === 0 || step === 1) {
    if (result !== 0) {
      clearDisplay();
    }
    currentNumArr.push(num);
    history.push(num);
    step = 1;
    firstNum = Number(currentNumArr.join(''));
  } else if (step === 2) {
    currentNumArr.push(num);
    history.push(num);
    secondNum = Number(currentNumArr.join(''));
  }
  updateDisplay();
}

function getOperator(op) {
  if (step === 1 || (step === 0 && result !== 0)) {
    if (step === 0) {
      firstNum = result;
      history = [result];
    }
    step = 2;
    operation = op;
    history.push(' ' + op + ' ');
    currentNumArr = [];
    updateDisplay();
  } else if (step === 2) {
    operation = op;
    history.pop();
    history.push(' ' + op + ' ');
    updateDisplay();
  }
}

function clearDisplay() {
  firstNum = 0;
  secondNum = 0;
  step = 0;
  operation = null;
  result = 0;
  currentNumArr = [];
  history = [];
  updateDisplay();
}

function calculateEquals() {
  if (step === 2 && operation) {
    switch (operation) {
      case '+': result = firstNum + secondNum; break;
      case '-': result = firstNum - secondNum; break;
      case '*': result = firstNum * secondNum; break;
      case '/':
        if (secondNum === 0) {
          alert("Cannot divide by zero");
          return;
        }
        result = firstNum / secondNum;
        break;
    }
    
    display.textContent = result;
    history.push(' = ' + result);
    updateDisplay();
    firstNum = result;
    secondNum = 0;
    step = 0;
    operation = null;
    currentNumArr = [];
  } else {
    alert("Please enter a complete calculation formula");
  }
}

function backSpace() {
  if (step === 0 && result !== 0) {
    clearDisplay();
  } else {
    currentNumArr.pop();
    if (step === 0 || step === 1) {
      firstNum = Number(currentNumArr.join('')) || 0;
    } else if (step === 2) {
      secondNum = Number(currentNumArr.join('')) || 0;
    }
    history.pop();
  }
  updateDisplay();
}

updateDisplay();