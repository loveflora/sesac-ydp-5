const nickObjs = {};

const socket = { id: 'sdfsdfsd' };

//-- js에서 obj에 key, value 추가하는 방법
nickObjs.hello = '안녕';
nickObjs['apple'] = '사과';

nickObjs[socket.id] = 'sarah';
console.log(nickObjs); // { hello: '안녕', apple: '사과', sdfsdfsd: 'sarah' }

//-- js에서 obj에 특정 key가 존재하는지 검사
const nickObjs2 = { hello: '안녕', apple: '사과' };
const nick1 = '안녕';
const nick2 = '사과';
const nick3 = '오렌지';

// Object.values() : object에서 value만 뽑아서 배열로 만듦
console.log(Object.values(nickObjs2)); // [ '안녕', '사과' ]
console.log(Object.values(nickObjs2).indexOf(nick1)); // 0
console.log(Object.values(nickObjs2).indexOf(nick2)); // 1
console.log(Object.values(nickObjs2).indexOf(nick3)); // -1 : nick3는 nickObjs2에 존재하지 않는 value

// for in 반복문
for (let key in nickObjs2) {
  console.log(key, nickObjs2[key]); // key, value
}

// object 요소 삭제
console.log('삭제 전 >>>>>', nickObjs2);
delete nickObjs2['hello'];

console.log('삭제 후 >>>>>', nickObjs2);
