//=== type vs interface ===

//] 1. interface

//++ 1) interface 사용
//-- (1) interface
// student2 보다 보기 편함
interface Student {
  name: string;
  isPassed: boolean;
}

// 일반 학생
const student1: Student = {
  name: 'sarah',
  isPassed: true,
  // addr: 'seoul',  //\ error 발생
};

//-- (2) interface 미사용
const student2: object = {
  name: 'sarah',
  isPassed: true,
  addr: 'seoul',
};

//++ 2) interface 상속
// 야구부 학생
interface BaseballClub extends Student {
  //   name: string;
  //   isPassed: boolean;
  position: string;
  height: number;
  //   backNumber: number; // error 발생 ! --> 필수로 전부 다 있어야 함
  backNumber?: number; // ? 추가하면 -->  선택사항
  //  [grade: number]: string; // key [학년: 타입]
  //)  점수체계를 따로 타입으로 뺌 (A+, A, B, C, D, F)
  [grade: number]: Score1; // 원치 않는 값은 못들어가게

  //.. readonly
  readonly age: number;
}

//) 점수 체계
type Score1 = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';

// Enum 사용
enum Score2 {
  Aplus = 'A+',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}

const otani: BaseballClub = {
  name: 'otani', // Student 상속
  isPassed: true, // Student 상속
  position: 'pitcher',
  height: 193,
  1: 'A+', // '학년: 점수' 쓰고 싶다면... 위에서 [대괄호] 사용
  //  2: 'AAA', // 원치 않는 값도 들어감
  //)  2: 'AAA', // error ! : type Score 추가될 경우, 원치 않는 값 입력 안됨.

  // Enum 사용
  2: Score2.A,

  age: 30, //.. readonly 사용
};

//++ 3) 값 변경하기
// (1) 점 표기법
console.log(otani); // position: 'pitcher',

otani.position = '투수';
console.log(otani); // position: '투수',

// (2) 대괄호 표기법
otani['height'] = 200;
console.log(otani); // height: 200

//.. readonly
// otani.age = 20; // error ! --> readonly는 값 변경할 수 없음

//_ type vs. Enum
// type: 간단
// Enum: 관계가 있을 경우, 편하게 사용가능 (Breakpoint라는 공통점을 가지고 있는 경우)

// Enum 을 사용하는 예시
// -> 변수로 breakpoint
// (1) type
type Bp1 = 500 | 700 | 1000;
// (2) enum
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

// (1) type : 값을 알고 있어야 함
// const width1: Bp1 = 550

// (2) enum : 값을 몰라도 됨
const width2: Bp2 = Bp2.SM;

//++ 4) 교차 타입
// 2개 이상의 type을 합치는 것
// type ToyCar = Toy & Car;

// (1) Toy 타입
interface Toy {
  name: string;
  start(): void;
}

// (2) Car 타입
interface Car {
  name: string;
  color: string;
  price: number;
}

// 교차 타입
type ToyCar = Toy & Car;

const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발!');
  },
  color: 'blue',
  price: 5000,
};

////////////////////////////////////////////////////

//] 2. type
type Gender = 'F' | 'M';

type Person = {
  name: string;
  age?: number;
  like?: string[]; // 선택, 문자열인 배열
  gender: Gender;
};

let daniel: Person = {
  name: 'daniel',
  //  age: 20,
  //  like: ['minji', 'max'],
  gender: 'F',
  //  gender: 'f',    //\ error ! --> Gender 타입에 선언된 값만 넣을 수 있음
};
