console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain); // domain 취소선 : 쓰지 않는 것을 권장

//=== document 객체 이용해서 HTML 요소 선택 (DOM) ===
//; 1. getElementById
console.log(document.getElementById('red'));
console.log(document.getElementById('green'));

//; 2. getElementsClassName
console.log(document.getElementsByClassName('pink')); // 유사배열 (인덱싱은 되는데, forEach는 안됨)
console.log(document.getElementsByClassName('pink')[1]);

//; 3. getElementsByTagName
console.log(document.getElementsByTagName('div'));

//; 4. getElementsByName
console.log(document.getElementsByName('id'));

//; 5. querySelector (CSS selector)
//-- 장점 : 메소드 이름 안바꿔도 됨
//-- 처음 발견한 하나만 가지고 옴
console.log(document.querySelector('.pink'));
console.log(document.querySelector('.others'));
console.log(document.querySelector('#green'));
console.log(document.querySelector('div'));
console.log(document.querySelector('[name="id"]')); // [attribute]

//; 6. querySelectorAll (CSS selector)
console.log(document.querySelectorAll('.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('#green'));
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll('.pink')[0]);
console.log(document.querySelectorAll('.pink')[1]);
console.log(document.querySelectorAll('.pink')[2]);
console.log(document.querySelectorAll('.pink')[3]);

//] 유사배열
//-- HTMLCollection, NodeList
// [] 식으로 생긴 배열을 의미하나, 배열은 아님 !
// index, length 가짐
// 배열과 달리, 사용가능한 메서드가 제한

//,, NodeList --> forEach() 반복문 사용 O
document.querySelectorAll('.pink').forEach((e) => console.log(e));

//,, HTMLCollection --> forEach() 사용 X
// 반복해야 한다 ? Array 변경 //ll Array.from()
// document.getElementsByClassName('.pink').forEach((e) => console.log(e));   //: error
Array.from(document.getElementsByClassName('pink')).forEach((e) =>
  console.log(e)
);

//,, for of 반복문도 가능 O
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
  console.log(pink);
}
