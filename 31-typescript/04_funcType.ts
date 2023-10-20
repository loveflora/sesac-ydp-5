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
