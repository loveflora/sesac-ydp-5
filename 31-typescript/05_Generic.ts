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

/////////////////////////////////////////////////

function printSome<T>(x: T, y: T): void {
  console.log(x, y);
}

printSome<string>('hi', 'hello'); // hi hello
printSome<number>(100, 200); // 100 200
printSome<boolean[]>([true, false], [false, false]); // [true, false] [false, false]

// T: Type
// U: usually
function printSome2<T, U>(x: T, y: U): void {
  console.log(x, y);
}

printSome2<string, number>('1', 1);

///////////////////////////////////////////////

//] interface와 generic
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'white',
    storage: 128,
  },
};

console.log(iphone15);
// {
//     company: 'apple',
//     createdAt: 2023-10-05T00:00:00.000Z,
//     option: { color: 'white', storage: 128 }
//  }

type galaxyOption = {
  color: string;
  isBuz: boolean;
};

const galaxy23: Phone<galaxyOption> = {
  company: 'samsung',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'blue',
    isBuz: true,
  },
};

console.log(galaxy23);
// {
//     company: 'samsung',
//     createdAt: 2023-10-05T00:00:00.000Z,
//     option: { color: 'blue', isBuz: true }
//   }

////////////////////////////////////
//] 실습

// 1.
function sum2(a: number, b: number): number {
  return a + b;
}

console.log(sum2(5, 11)); // 16

// 2.
function sum3(...arr: number[]): number {
  return arr.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum3(1, 2, 3, 4, 10)); // 20

// 3.
function arrElement<T>(arr: T[], idx: number): boolean {
  return arr.length > idx ? true : false;
}

console.log(arrElement<string>(['a'], 1)); // false
