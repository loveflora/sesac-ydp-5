//=== Generic ===
// 함수를 호출할 때 데이터 타입을 지정할 수 있는 문법 Generic !

// 선언할 때 타입을 지정하기 어려운 케이스가 존재
// => 데이터 타입을 외부에서 지정 (생성 시점에 타입을 명시)
// => "재사용성 증가"
// --> 타입을 변수처럼 사용한다 !

// <T> 형태로 주로 사용

function numArrLen(arr: number[]): number {
  return arr.length;
}

function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3])); // 3
console.log(strArrLen(['1', '2', '3', '4'])); // 4

// <T> 사용해서 매개변수를 선언하는 공간을 하나 더 만듦
// -> type만 올 수 있음
function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<string>(['1', '2', '3', '4'])); // 4
console.log(arrLen<number>([1, 2, 3])); // 3
console.log(arrLen<string | number>(['원', 2])); // 2
