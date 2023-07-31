const num1Input = document.getElementById('num1').value;
console.log(num1Input);
const num2Input = document.getElementById('num2');
const operatorInput = document.getElementById('operator');
const resultInput = document.getElementById('result');
const calculatedBtn = document.getElementById('calculated');
const resetBtn = document.getElementById('reset');

function calculate(a, b, calculateOperator) {
  let result = resultInput.value;

  if (calculateOperator === '+') {
    result = a + b;
  } else if (calculateOperator === '-') {
    result = a - b;
  } else if (calculateOperator === '*') {
    result = a * b;
  } else if (calculateOperator === '/') {
    result = a / b;
  } else {
    return;
  }
}

calculatedBtn.addEventListener('click', () => {
  //   let num1 = Number(num1Input.value);
  //   let num2 = Number(num2Input.value);
  //   let operator = operatorInput.value;
  //   console.log('btn click', num1, num2, operator);
  //   calculate(num1, num2, operator);
});

// resetBtn.addEventListener('click', () => console.log(operatorInput.value));
