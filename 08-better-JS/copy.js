// js 에서 종종 객체를 복사할 일이 있는데요. 사실 객체를 복사하는 방식에는 두가지 방법이 있습니다.
// "얕은 복사"와 "깊은 복사"의 두 방식 차이를 알아보도록 하겠습니다.
// 참고로, 해당 개념은 javascript에 종속적인 개념은 아닙니다. 다른 언어(python, java, c++ 등)에도 존재하는 보편적인 개념입니다. 이 기회에 두 복사의 차이를 명확히 구분해보죠.
// 언어가 달라지면 문법이 조금씩 달라지겠지만, 근복적인 원리 자체는 동일합니다.

// 1. shallow copy: 얕은 복사
//  - 두 객체가 "같은 참조값"을 갖습니다.
//  - "원본 객체"와 "복사된 객체"가 동일한 참조값을 가지므로, 한쪽 데이터가 변경되면 다른 한쪽도 반영됩니다.!

// 2. deep copy: 깊은 복사
// - 두 객체가 "참조값"을 공유하지 않고, 속성만을 복사해 갖습니다.
// - 즉, 생긴 것만 똑같이 보이고 실제 주소값이 다릅니다.
// - "원본 객체"와 "복사된 객체"가 서로 다른 참조값을 가집니다. (메모리 주소가 다름) 두 객체가 독립적이므로 한쪽이 변경되면 다른 한쪽은 영향을 끼치지 않습니다.!

////////////////////////////////////////////////////////////////
// [ shallow copy - 얕은 복사 ]
const jack = { name: 'jack' };
const jack2 = jack; // pass by reference
console.log(jack, jack2);

// jack 객체에 age 속성 저장
jack.age = 1;

// 같은 객체를 참조하므로 jack2 객체를 출력해도 age 속성 출력됨
console.log(jack, jack2);

// 두 변수는 같은 참조값을 가지므로 true
console.log(jack === jack2); // true
console.log('--------------------------------');

////////////////////////////////////////////////////////////////
// [ deep copy - 깊은 복사 ]
const harry = { name: 'harry' };

// 방법1. ...(spread) 연산자를 이용
// harry와 harry2는 같은 속성을 가져 얼핏 보면 같은 객체같아 보이지만,
// 두 객체를 비교해보면 서로 다른 "참조값"을 가지므로 false
const harry2 = { ...harry };
console.log(harry, harry2);
console.log(harry === harry2); // false

// 참고) 단, spread 연산자를 이용한 깊은 복사는 1 depth만 가능함.
// sally 객체는 중첩 객체임.
// sally2는 sally를 spread 연산자를 이용해 복사 -> 깊은 복사가 이루어짐
// 따라서 sally 객체와 sally2 객체는 서로 다른 참조 값을 가지므로 비교시 false
const sally = { name: 'sally', univ: { major: 'CS' } };
const sally2 = { ...sally };
console.log(sally, sally2);
console.log(sally === sally2); // false

// 하지만, spread 연산자를 이용한 깊은 복사는 1 depth만 가능하므로 sally와 sally2 객체안의 univ 속성(객체)는 깊은 복사되지 않음. (같은 참조값을 가짐)
// 즉, spread 연산자를 이용한 객체의 복사는 1 depth는 deep copy, 2 depth 이상 부터는 shallow copy가 이루어짐
sally.univ.grade = 2;
console.log(sally, sally2);
console.log(sally.univ === sally2.univ); // true

// spread 연산자로 깊은 복사 구현하려면 다음과 같이도 가능은 함
// 다음과 같이 객체를 복사하면 deep copy
const sally3 = { ...sally, univ: { ...sally.univ } };
console.log(sally, sally3);
console.log(sally === sally3); // false
console.log(sally.univ === sally3.univ); // false
console.log('--------------------------------');

// 방법2. object.assign()을 이용하는 방법
const mark = { name: 'mark', univ: { major: 'Korean' } };
const mark2 = Object.assign({}, mark);
console.log(mark, mark2);
console.log(mark === mark2); // false

// assign() 메서드 또, spread 연산자와 마찬가지로 1 depth는 deep copy, 2 depth 이상 부터는 shallow copy 가 이루어짐
const bob = { name: 'bob', univ: { major: 'English' } };
const bob2 = Object.assign({}, bob);
console.log(bob, bob2);
console.log(bob === bob2); // false
console.log(bob.univ === bob2.univ); // true
console.log('--------------------------------');

////////////////////////////////////////////////////////////////
// 완벽하게 deep copy 하는 방법은?

// 방법1. 재귀 함수로 깊은 복사 수행
// 재귀 함수: 자기 자신을 호출하는 함수. (ex. deepCopy 함수는 함수 body에서 deepCopy 함수를 호출하고 있음)
function deepCopy(obj) {
  // obj: 원본 객체
  // newObj: 깊은 복사하려는 객체
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let newObj = {};

  for (let key in obj) {
    newObj[key] = deepCopy(obj[key]); // 재귀적으로 중첩 객체 복사
  }

  return newObj;
}

const runningMan = { name: '런닝맨', info: { day: 'sunday' } };
const runningMan2 = deepCopy(runningMan);
console.log(runningMan, runningMan2);
console.log(runningMan === runningMan2); // false

runningMan2.stars = 5;
console.log(runningMan, runningMan2); // 서로 다른 객체임
console.log('--------------------------------');

// 방법2. JSON.parse(), JSON.stringify() 이용
// 객체를 json으로 만들고, 다시 parsing 하여 원본 객체와의 참조를 끊어버릴 수도 있습니다.
const runningMan3 = JSON.parse(JSON.stringify(runningMan));
console.log(runningMan, runningMan3);
console.log(runningMan === runningMan3); // false

runningMan3.stars = 5;
console.log(runningMan, runningMan3); // 서로 다른 객체임
