//=== 함수 타입 ===

//-- 선택적 매개변수 '?' 는 맨 뒤에 있어야 함
function print(a: number, b: number, c?: number): void {
  console.log('print() 출력 결과');
  console.log(a, b, c); // return 값 생략 : void
}

print(2, 4, 6); // 2 4 6
print(2, 4); // 2 4 undefined

//-- default : 매개변수에 기본값 할당 가능
function print2(a: number, b: number, c = 100) {
  console.log('print2() 출력 결과');
  console.log(a, b, c);
}

print2(2, 4, 6); // 2 4 6
print2(2, 4); // 2 4 100

//-- 매개변수가 없는 경우
// (1)
function sayHello(): void {
  console.log('Hello');
}
sayHello();

// (2)
function sayHello2(): string {
  return 'Hello';
}
console.log(sayHello2());

//-- 매개변수가 있는 경우
// 문자열 함치는 함수
function concatString(x: string, y: string): string {
  return x + y;
}
console.log(concatString('Hello', 'World')); // HelloWorld

// 원의 넓이
function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(5)); // 78.53981633974483

//-- 화살표 함수
const squareArea = (x: number, y: number): number => {
  return x * y;
};

console.log(squareArea(3, 5)); // 15

//-- 화살표 함수 & return 구문 생략
const triangleArea = (w: string, h: string): number =>
  (parseInt(w, 10) * parseInt(h, 10)) / 2;

console.log(triangleArea('3', '4')); // 6

//-- interface 정의 시, 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const sesac: Greet = {
  name: 'sesac',
  hi() {
    return '여기는 ' + this.name + '캠퍼스';
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했습니다.`;
  },
};

console.log(sesac.hi()); // 여기는 sesac캠퍼스
console.log(sesac.bye(5)); // 작별 인사를 5번 했습니다.

//] never
// 함수의 끝에 절대 도달하지 않는 경우의 타입
function goingOn(): never {
  while (true) {
    console.log('go!');
  }
} // 무한루프에 빠져, 함수의 끝에 도달할 수 없음

//] 오버라이딩 vs. 오버로딩
//-- 1. 오버라이딩
// Class에서 "상속" -> 하위 클래스가 상위 클래스의 메소드를 상속받을 때 같은 이름의 함수(메서드)를 재정의
// 부모와 자식 클래스 존재, 상속 -> 업어준다

//-- 2. 오버로딩
// 함수 이름은 같지만, 매개변수 or 반환타입이 다른 여러 함수들을 가질 수 있음

//_ typescript 오버로딩
// - 선언부 : 매개변수의 타입과 반환 타입만 지정 (무슨 일을 하는지는 쓰지 않음)
// - 구현부 : 실제 함수의 구현 (function body)
// => '함수 이름이 동일'

function sum1(a: string, b: string): string; // 선언부
function sum1(a: number, b: number): number; // 선언부
// function sum1(a: number, b: string): string; // 선언부

// 구현부
// string 이랑 number 타입 둘 다 있으므로,
// 'any' 타입으로 지정하여 오버로딩
function sum1(a: any, b: any): any {
  return a + b;
}

console.log(sum1('가', '나')); // 가나
console.log(sum1(10, 20)); // 30
// console.log(sum1(10, '안돼요')); //\ error ! --> string 과 number 타입 동시에 사용

// console.log(sum1(10, '안돼요')); //\ error ! --> string 과 number 타입 동시에 사용
