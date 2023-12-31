const div1 = document.getElementById('div1');
console.log(div1);

//=== 1. 태그 내부 내용 변경 ===
//; 1) innerHTML : 태그 사용O
div1.innerHTML = '여기는 <b>첫번째</b> 태그';
console.log(div1);
//-- 2) innerText : 태그가 문자(기호) 그대로 노출 (b 태그 그대로 노출)
// div1.innerText = '여기는 <b>첫번째</b> 태그';
// console.log(div1);
//-- 3) innerContent (b 태그 그대로 노출)
// div1.innerContent = '여기는 <b>첫번째</b> 태그';
// console.log(div1);

//=== 2. 속성(attribute) ===
//-- 1) 속성 값 '설정' : setAttribute(속성명, 변경할 속성값)
const naver = document.getElementById('naver');
naver.setAttribute('href', 'https://www.google.com');

const pooh = document.getElementById('pooh');
pooh.setAttribute('src', './img/cat.jpeg');

//-- 2) 속성 값 '얻기' : getAttribute(속성명)
console.log(document.getElementById('pooh').getAttribute('src'));

//-- 3) 속성 접근 : . 연산자로도 가능
console.log(document.getElementById('pooh').id);
console.log(document.getElementById('naver').href);

//-- 4) 변경 : . 연산자로 속성에 접근하고 = 할당 연산자로 속성 값 변경 가능
document.getElementById('naver').href = '#';

//=== 3. CSS 지정 ===
const h1 = document.querySelector('h1');
const list = document.querySelectorAll('ul > li'); // 유사 배열

//; 1) style 속성
// style 속성 이용해 CSS 지정 가능
// style.XXX (XXX : camelCase)
// list[0].style.backgroundColor = 'purple';
// list[0].style.fontSize = '20px';
// list[0].style.color = 'yellow';
for (let li of list) {
  li.style.backgroundColor = 'purple';
  li.style.fontSize = '20px';
  li.style.color = 'yellow';
}

//; 2) classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains : 유무 확인 (T/F)
// xxx.classList.toggle : 있으면 제거, 없으면 추가
h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
console.log(h1.classList.contains('add-h1'));

h1.classList.contains('add-h1')
  ? (h1.innerText = 'add-h1 클래스 있음')
  : (h1.innerText = 'add-h1 클래스 없음');

h1.classList.toggle('add-h1');

//=== 4. 요소 찾기 ===
// 계층 구조 (형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector('#friends');
const tigger = document.querySelector('#tigger');

//; 1) 자식 요소
console.log(friends.children); // 유사배열 --> 자식 모두 선택
console.log(friends.children[0]);

//; 2) 부모 요소
console.log(tigger.parentNode);
console.log(tigger.parentNode.parentNode);

//; 3) 형제 요소
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);
console.log(tigger.nextElementSibling.nextElementSibling);

//=== 5. 요소 생성, 추가, 삭제 ===
const container = document.querySelector('.container');

//; 1) 생성
const p = document.createElement('p'); // 요소 생성
// js로 <p></p> 태그 생성
console.log(p);
p.innerText = '새로 추가된 p 요소입니다.';
p.style.fontWeight = 700;
p.style.backgroundColor = 'red';

//; 2) 추가
//-- (1) x.append(y) : x 요소의 맨 마지막 자식으로 y 요소 추가 (여러개 추가가능)
container.append(p);

const p2 = document.createElement('p'); // 요소 생성
const p3 = document.createElement('p'); // 요소 생성
p2.innerHTML = 'p2';
p3.innerHTML = 'p3';
p2.classList.add('p-2');
p3.classList.add('p-3');

container.append(p2, p3); // 여러개 추가도 가능 !
// appendChild 는 한 번에 하나만 추가가능

//-- (2) x.prepend(y) : x요소의 맨 처음 자식으로 y요소 추가
const li1 = document.createElement('li');
li1.textContent = '처음';
friends.prepend(li1);
const li0 = document.createElement('li');
li0.innerHTML = '<b>친구들을 소개합니다</b>';
friends.prepend(li0);

//-- (3) x.appendChild(y) : x 요소의 맨 마지막 자식으로 y 요소 추가 (한 번에 하나만 추가가능)
div1.appendChild(p);
// div1 태그의 자식으로 p 추가

//; 3) 삭제
//-- (1) x.remove(y) : x요소 삭제
const firstLi = document.querySelector('li');
console.log(firstLi);
// firstLi.remove();

//-- (2) x.removeChild(y) : x의 자식요소인 y가 삭제
const ul = firstLi.parentNode;
ul.removeChild(firstLi);
