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
  if(operator === "+"){
    return add(a, b);
  }
  else if(operator === "-"){
    return subtract(a, b);
  }
  else if(operator === "*"){
    return multiply(a, b);
  }
  else if(operator === "/"){
    return devide(a, b);
  }
}
const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
let num = '';
numberButtons.forEach(numberButton => numberButton.addEventListener("click", numberListener));

function numberListener(e) {
  let numInput = e.target.id;
  num += numInput;
  displayNumber(num);
};
function displayNumber(num) {
  display.textContent = num;
};