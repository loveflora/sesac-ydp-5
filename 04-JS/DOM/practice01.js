const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorInput = document.getElementById('operator');
const resultInput = document.getElementById('result');
const calculatedBtn = document.getElementById('calculated');
const resetBtn = document.getElementById('reset');

function calculate(a, b, calculateOperator) {
  if (calculateOperator === '+') {
    resultInput.value = a + b;
  } else if (calculateOperator === '-') {
    resultInput.value = a - b;
  } else if (calculateOperator === '*') {
    resultInput.value = a * b;
  } else if (calculateOperator === '/') {
    resultInput.value = a / b;
  } else {
    return;
  }
}

function reset() {
  num1Input.value = '';
  num2Input.value = '';
  operatorInput.value = '';
  resultInput.value = '';
}

calculatedBtn.addEventListener('click', () =>
  calculate(
    Number(num1Input.value),
    Number(num2Input.value),
    operatorInput.value
  )
);

resetBtn.addEventListener('click', () => reset());

//# 아래 방법 안됨 ㅠㅠ ---> 질문 !

// let num1 = Number(num1Input.value);
// let num2 = Number(num2Input.value);
// let operator = operatorInput.value;
// let result = resultInput.value;

// function calculate(a, b, calculateOperator) {
//   if (calculateOperator === '+') {
//     result = a + b;
//   } else if (calculateOperator === '-') {
//     result = a - b;
//   } else if (calculateOperator === '*') {
//     result = a * b;
//   } else if (calculateOperator === '/') {
//     result = a / b;
//   } else {
//     return;
//   }
// }

// calculatedBtn.addEventListener('click', () => calculate(num1, num2, operator));

// resetBtn.addEventListener('click', () => console.log(operatorInput.value));

//=== 방명록 ===
