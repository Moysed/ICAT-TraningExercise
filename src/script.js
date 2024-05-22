let firstNum;
let secNum;
let step = 0;
let operation;
let result;

let numArr = [];
let secNumArr = [];

let history = [];

let display = document.getElementById('display');
let historyDisplay = document.getElementById('history');

function updateHistoryDisplay() {
  historyDisplay.value = history.join('');
}

function getFormula(num) {
  if (step === 0 || step === 1) {
    numArr.push(num);
    history.push(num);
    step = 1;
    firstNum = Number(numArr.join(''));
    display.innerHTML = firstNum;
  } else if (step === 2) {
    secNumArr.push(num);
    history.push(num);
    secNum = Number(secNumArr.join(''));
    display.innerHTML = secNum;
  }
  updateHistoryDisplay(); 
}

function getOperator(op) {
  if (step === 1) {
    step = 2;
    operation = op;
    history.push(' ' + op + ' ');
    updateHistoryDisplay(); 
  }
}

function clearDisplay() {
  display.innerHTML = 0;
  firstNum = null;
  secNum = null;
  step = 0;
  operation = null;
  result = 0;
  numArr = [];
  secNumArr = [];
  history = [];
  updateHistoryDisplay(); 
}

const calculateEquals = () => {
  if (firstNum != null && secNum != null && operation != null) {
    if (operation === '+') {
      result = firstNum + secNum;
    } else if (operation === '-') {
      result = firstNum - secNum;
    } else if (operation === '*') {
      result = firstNum * secNum;
    } else if (operation === '/') {
      result = firstNum / secNum;
    }

    display.innerHTML = result;
    history.push(' = ' + result);
    updateHistoryDisplay();

    firstNum = result;
    firstNum = null;
    secNum = null;
    step = 1;
    operation = null;
    numArr = String(result).split('');
    secNumArr = [];
  } else {
    alert("Please make it a calculation formula first");
  }
};

function backSpace() {
  if (step === 0 || step === 1) {
    numArr.pop();
    firstNum = Number(numArr.join('')) || 0;
    display.innerHTML = firstNum;
  } else if (step === 2) {
    secNumArr.pop();
    secNum = Number(secNumArr.join('')) || 0;
    display.innerHTML = secNum;
  }
  history.pop();
  updateHistoryDisplay(); 
}
