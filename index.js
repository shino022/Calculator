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