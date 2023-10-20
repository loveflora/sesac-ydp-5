//=== type vs interface ===

//] 1. interface
//-- 1) interface
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

//-- 2) interface 미사용
const student2: object = {
  name: 'sarah',
  isPassed: true,
  addr: 'seoul',
};

//_ interface 상속
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
  [grade: number]: Score; // 원치 않는 값은 못들어가게
}

type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F'; //) 점수 체계

const otani: BaseballClub = {
  name: 'otani', // Student 상속
  isPassed: true, // Student 상속
  position: 'pitcher',
  height: 193,
  1: 'A+', // '학년: 점수' 쓰고 싶다면... 위에서 [대괄호] 사용
  //  2: 'AAA', // 원치 않는 값도 들어감
  //)  2: 'AAA', // error ! : type Score 추가될 경우, 원치 않는 값 입력 안됨.
};

//_ 값 변경하기
// (1) 점 표기법
console.log(otani); // position: 'pitcher',

otani.position = '투수';
console.log(otani); // position: '투수',

// (2) 대괄호 표기법
otani['height'] = 200;
console.log(otani); // height: 200

////////////////////////////////////////////////////

//] 2. type
