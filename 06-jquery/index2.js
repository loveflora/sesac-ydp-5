//] 1. val()
function getValue() {
  //-- js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);

  //-- jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  //-- js
  //   document.querySelector('input').value = 'hi';

  //-- jquery
  $('input').val('hi');
}

//] 2. css()
function changeCssJS() {
  //-- js : 첫번째 요소에만 반영
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red;';
}

function changeCssJquery() {
  //-- jquery : 모든 요소에 반영
  // 1)
  //.   $('span').css('font-size', '40px');
  //.   $('span').css('color', 'blue');

  // 2) css 여러 속성을 한 번에 적용 - 객체에 담기
  $('span').css({
    fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
    color: 'blue', // 모든 span에 대해 폰트 색상 변경
  });
}

function getCssJquery() {
  //-- js
  //   console.log(document.querySelector('span').style.color);
  //-- jquery
  console.log($('span').css('color'));
}

//] 3. attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const a = document.querySelector('a');
  a.innerHTML = 'naver';
  // a.setAttribute('href', 'https://www.naver.com');
  a.href = 'https://www.naver.com';
}

function changeAttrJquery() {
  const a = $('a');
  a.text('daum');
  a.attr('href', 'https://www.daum.net');
}

//] 4. text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const pText = document.querySelector('.p-text');
  pText.innerText = 'javascript';
}

function changeTextJquery() {
  $('.p-text').text('jquery');
}

//] 5. html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const pHtml = document.querySelector('.p-html');
  pHtml.innerHTML = '<h3>javascript</h3>';
}

function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

//++ 요소 추가하기
//] 6-1. append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append

  const colors = document.querySelector('.colors');
  const li = document.createElement('li');
  li.innerText = '마지막 자식으로 추가된 js';
  colors.append(li);
}

function appendJquery() {
  $('.colors').append('<li>마지막으로 추가된 jquery</li>');
}

//] 6-2. prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend

  const colors = document.querySelector('.colors');
  const li = document.createElement('li');
  li.innerText = '첫 자식으로 추가된 js';
  colors.prepend(li);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

//] 6-3. before()
// js 4줄
function beforeJS() {
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.innerHTML = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  green.before(li);
}

// jquery 1줄
function beforeJquery() {
  $('.green').before(
    '<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jquery)</li>'
  );
}

//] 6-4. after()
function afterJS() {
  const green = document.querySelector('.green');
  const li = document.createElement('li');
  li.innerHTML = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  green.after(li);
}

function afterJquery() {
  $('.green').after(
    '<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jquery)</li>'
  );
}

//++ 요소 삭제하기
//] 7-1. remove()
function removeJS() {
  const li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

//] 7-2. empty()
function emptyJS() {
  const nums = document.querySelector('.nums');

  liList = nums.querySelectorAll('li');
  // 전체에 적용해야 하니까 배열 반복문 forEach 사용
  liList.forEach((i) => i.remove());
}

function emptyJquery() {
  // $('.nums').empty('<li></li>');
  $('ul.nums').empty('');
}

//++ 요소 탐색하기
//-- js
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  console.log(document.querySelector('.child2').parentElement);
  $('.child1').parent().css('color', 'red');
}

function findParents() {
  $('.child1').parents().css('color', 'red');
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  console.log(document.querySelector('.child2').nextSibling);
  $('.child2').next().css('color', 'red');
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  console.log(document.querySelector('.child2').previousSibling);
  $('.child2').prev().css('color', 'red');
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  console.log(document.querySelector('.parent').children);
  $('.parent').children().css('color', 'red');
}

// //++ 클래스 조작하기
function addClass() {
  $('.color-blue').addClass('fs-50');
}

function removeClass() {
  $('.color-blue').removeClass('fs-50');
}

function hasClass() {
  console.log($('.color-blue').hasClass('fs-50'));
}

function toggleClass() {
  console.log($('#hi').toggleClass('bg-pink'));
}
