//=== js Event ===
// 사건을 의미
// ex) 버튼 클릭, 웹페이지 로드, 키가 눌렸을 때...

//; 이벤트에 함수 등록하는 2가지 방법
//-- 1) HTML 상에서 onXXX 속성으로 등록
function clickH1() {
  alert('제목 클릭!');
}

//-- 2) js 에서 listener 사용해 등록
const btn1 = document.querySelector('.btn--black');
const btn2 = document.querySelector('.btn--green');
const btn3 = document.querySelector('.btn--blue');
const btn4 = document.querySelector('.btn--red');
const container = document.querySelector('#container');

//_ (1) addEventListener(이벤트 종류, 이벤트가 발생했을 때 일어날 일을 함수로 작성)
btn1.addEventListener('click', function () {
  alert('버튼 1을 클릭하셨네요!');
});

btn1.addEventListener('mouseover', function () {
  btn1.style.backgroundColor = 'aqua';
});

btn1.addEventListener('mouseout', function () {
  btn1.style.backgroundColor = 'rgb(44, 44, 44)';
});

btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'pink';
  div.innerHTML = 'Hi !!!!!';
  container.append(div);
});

btn3.addEventListener('click', changeColor);
function changeColor() {
  const divs = document.querySelectorAll('#container div');
  //  유사배열에서는 for of 사용가능
  for (let div of divs) {
    div.style.backgroundColor = 'skyblue';
  }
}

btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
  console.log(this); // btn4
  console.log(this.parentNode); // this를 이용해 부모 접근
  this.style.backgroundColor = 'yellow';
  this.style.color = '#000';
}

const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', function (event) {
  console.log(event); // event 객체
});

input.addEventListener('keydown', function (e) {
  console.log(e.code); // 눌러진 key의 고유 코드 (KeyA)
  console.log(e.key); // input에 입력된 값 (a)

  if (e.code === 'ArrowUp') {
    console.log('↑');
  } else if (e.code === 'ArrowDown') {
    console.log('↓');
  } else {
    console.log('🤷🏻‍♀️');
  }
});

// 1. keyup
// 키보드에서 손을 땠을 때 실행

// 2. keydown
// 키보드를 눌렀을 때 실행
// 키보드를 누르고 있을 때 한번만 실행됨

// 3. keypress
// 키보드를 눌렀을 때 실행
// 키보드를 누르고 있을 때 계속 실행됨

//_ (2) form 이벤트
const todoForm = document.getElementById('todo-form');
const todos = document.querySelector('.todos');

//.. ((1)) submit
todoForm.addEventListener('submit', (e) => {
  console.log('submit'); // submit : 백엔드로 정보 넘겨줌
  e.preventDefault();
  // submit 이벤트 안에서 사용
  // form submit 이벤트가 새로고침 되는 것을 막음 (폼 제출 막음)

  const todoInput = document.querySelector('input[name="todo"]');
  console.log(todoInput);
  // console.log
  // 요소를 'HTML'과 같은 트리 구조로 출력 하고,
  // DOM 요소에 대해 특별한 처리를 제공.
  console.dir(todoInput);
  // console.dir
  // 요소를 'JSON'과 같은 트리 구조로 출력 하고,
  // DOM JS 객체의 전체 표현을 보려고 할 때 유용.

  console.log(todoInput.value); // input에 입력된 값

  const newTodo = todoInput.value.trim();

  if (newTodo !== '') {
    const newTodoLi = document.createElement('li');
    newTodoLi.append(newTodo); // <li>input 입력값</li>
    todos.append(newTodoLi);
  }

  // input창 초기화
  todoInput.value = '';
});

//.. ((2)) change
// input 요소에 변경이 일어나고, 다른 요소 클릭해서, input이 포커스 아웃(blur)처리되었을 때 일어나는 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change', function (e) {
  console.log('change!!!', e.target.value);
});

//.. ((3)) input
// input에 값이 입력될 때마다 이벤트 발생
chgInput.addEventListener('input', function () {
  console.log('change');
  const div = document.querySelector('.intro');
  div.textContent = this.value; // 실시간 텍스트 동기화
});
