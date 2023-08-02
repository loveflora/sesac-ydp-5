//=== jQuery ===
//; $(선택자).동작함수()
//-- $() : HTML 요소 선택하는 함수
// 동작함수 : 선택하는 요소에 대해 원하는 동작 수행

console.log($('#div1'));

function submitJs() {
  // 요소 선택
  const div1 = document.getElementById('div1');

  // div 내용 변경
  div1.innerHTML = '자바스크립트입니다';

  // div border style 추가
  div1.setAttribute('style', 'border: 2px solid red');
}

function submitJquery() {
  // 요소 선택
  const div1 = $('#div1');

  // div 내용 변경
  div1.html('jQuery입니다');

  // div border style 추가
  div1.css('border', '2px dotted blue');
}

const colorsJs = document.querySelectorAll('.color');
const colorsJquery = $('.color');

// 유사배열 형태로 출력
console.log(colorsJs);
// NodeList
console.log(colorsJquery);
// jQuery Object

//_ js li 요소 선택 시, 글씨 색상 빨강
// addEventListener는 요소 하나에만 걸 수 있음
colorsJs[0].addEventListener('click', () => {
  colorsJs[0].style.color = 'red';
});

//: 모든 요소에 이벤트 추가하려면, 유사배열 !!! 반복문 !!! 사용
colorsJs.forEach((item) => {
  item.addEventListener('click', () => {
    item.style.color = 'red';
  });
});

//_ jQuery li 요소 클릭 시, 배경 색상 하늘색
//: 반복 안돌아도 됨
colorsJquery.on('click', function () {
  // 클릭된 유사배열 출력
  // console.log($(this));
  $(this).css('background-color', 'yellow');
  // camelCase 아닌 css 그대로 snake_case
});
