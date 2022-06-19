function add(a ,b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return a*b;
}

function devide(a, b) {
  return a/b;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  if(operator === "+"){
    return add(a, b).toString();
  }
  else if(operator === "-"){
    return subtract(a, b).toString();
  }
  else if(operator === "*"){
    return multiply(a, b).toString();
  }
  else if(operator === "/"){
    return devide(a, b).toString();
  }
}
const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
let num = '';
let prevNum = '';
let operator = '';

numberButtons.forEach(numberButton => numberButton.addEventListener("click", numberListener));
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operatorListener))
function numberListener(e) {
  let numInput = e.target.id;
  num += numInput;
  displayNumber(num);
};
function operatorListener(e) {
  let operatorInput = e.target.id;
  if(operatorInput === '='){
    prevNum = operate(prevNum, operator, num);
    operate(prevNum, operator, num)
    displayNumber(prevNum);
  }
  else if(operatorInput === 'reset'){
    num = '';
    prevNum = '';
    operator = '';
    display.textContent ='';
  }
  else if(prevNum) {
    prevNum = operate(prevNum, operator, num);
    operator = operatorInput;
    displayNumber(prevNum);
    num = '';
  }
  else {
    prevNum = num;
    operator = operatorInput;
    num = '';
  }
}
function displayNumber(num) {
  display.textContent = num;
};