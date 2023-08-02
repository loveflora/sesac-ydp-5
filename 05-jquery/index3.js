//=== jQuery 이벤트 리스너 ====

console.log(document); // js
console.log($(document)); // jquery

//] 1. Load Event
//-- js
document.addEventListener('DOMContentLoaded', function () {
  console.log('문서의 DOM tree가 완성되면 실행되는 이벤트');
});

//-- jquery
$(document).ready(function () {
  console.log('문서의 DOM tree가 완성되면 실행되는 이벤트');
});

$(function () {
  console.log('문서의 DOM tree가 완성되면 실행되는 이벤트');
});

//] 2. Click Event
//-- jquery
$('.p-msg').click('on', () => {
  $('.p-msg').css('color', 'red');
});

$('.num').click(function () {
  // num 4개 전체 적용됨
  $('.num').css('color', 'blue');

  // $(this) : 자기자신 = 이벤트가 적용된 요소만 적용됨
  $(this).css('color', 'green');
});

//-- js
const nums = document.querySelectorAll('.num');

for (let num of nums) {
  num.addEventListener('click', function () {
    console.log(this); // this : 현재 클릭된 요소
    this.style.color = 'red';
  });
}

//] 3. Mouseover(Mouseout) Event
$('.numbers').on('mouseout', function () {
  $(this).css('background-color', 'yellow');
  $(this).append('<div>handler for .on() called</div>');
});

//] 4. hover
$('.div-hover').hover(function () {
  $(this).toggleClass('hover');
});

// $('.div-hover').hover(
//   function () {
//     $(this).addClass('hover');
//   },
//   function () {
//     $(this).removeClass('hover');
//   }
// );

//] 5. scroll
//--  jquery
// $(window).scroll(function () {
//   console.log('scrolling!!!');
// });

$(window).on('scroll', function () {
  console.log('scroll with jquery');
});

//-- js
window.addEventListener('scroll', function () {
  console.log('scroll with js');
});

//] 6. Key Event
//; 1) keyup
// 키보드에서 손을 땠을 때 실행

//; 2) keydown
// 키보드를 눌렀을 때 실행
// 키보드를 누르고 있을 때 한번만 실행됨
$('.input-key').on('keydown', function (e) {
  console.log(e); // e: 이벤트 객체
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === 'ArrowUp') {
    console.log('⬆');
  } else if (e.code === 'ArrowDown') {
    console.log('⬇');
  } else {
    console.log('others');
  }
});

//; 3) keypress
// 키보드를 눌렀을 때 실행
// 키보드를 누르고 있을 때 계속 실행됨

//] 6. Form Event
$('#todo-form').on('submit', function (e) {
  e.preventDefault(); // 이벤트의 기본동작을 막는 메서드
  // 지금 발생한 이벤트가 'submit'이기 때문에, submit 이벤트의 기본 동작인 '새로고침'을 막는거임.

  // 퀴즈
  // 1. name 속성값이 todo인 요소를 선택하고 해당 요소의 value를 todo 변수에 저장
  const todo = $('[name=todo]');
  const value = todo.val();
  //\ const todo = $('input[name="todo"]').val(''); 라고 하면
  //\ val('') : 빈 값의 return값이 todo에 담기는거임

  // 2. todos 클래스를 갖는 요소를 선택
  //    -> li 요소에 todo 변수의 값을 텍스트로 갖게 한 후 todos 클래스 요소에 추가
  $('.todos').append(`<li>${value}</li>`);

  // 3. name 속성값이 todo인 요소의 value 초기화
  todo.val('');
});

//_ e.preventDefault()
$('a#inactive').on('click', function (e) {
  e.preventDefault(); // a 태그의 기본 동작 막음
  // href에 연결되어 있는 링크로의 이동
  $('#text').append('이 링크는 동작하지 않음');
});

//=== this ===
// 그 함수가 속해 있던 객체를 참조
// '뭔가'를 클릭할 때 불러오는 함수(콜백함수)에서 this는 그 '뭔가'를 의미
const btns = document.querySelectorAll('.btn');
const spans = document.querySelectorAll('.span');

function setBgColor() {
  this.style.backgroundColor = 'royalblue';
}

function setBgColor2(elem, color) {
  elem.style.backgroundColor = color;
}

for (let btn of btns) {
  //) 1)
  //# btn.addEventListener('click', setBgColor);

  //) 2)
  // btn.addEventListener('click', function () {
  //   console.log(this);
  //   this.style.backgroundColor = 'royalblue';
  // });

  //) 3)
  btn.addEventListener('click', function () {
    setBgColor2(this, 'yellow');
  });
  //# 매개변수 있으면 콜백함수 형식 ,,,
}

for (let span of spans) {
  span.addEventListener('click', setBgColor);

  span.addEventListener('click', function () {
    setBgColor2(this, 'red');
  });

  // span.addEventListener('click', function () {
  //   console.log(this);
  //   this.style.backgroundColor = 'royalblue';
  // });
}
