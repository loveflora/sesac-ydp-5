//=== class ===
//-- 객체 생성 템플릿 => 객체를 만들기 위해 사용!

const { createGunzip } = require("zlib");

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

class House {
  //] 생성자 함수
  //-- 클래스를 이용해 객체를 생성할 때마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  //_ 메서드 1 : 집의 건축년도를 출력
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요! `);
  }

  //_ 메서드 2: 집의 창문 개수 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
  }
}

// 클래스(틀)를 이용해 객체를 찍어보자 (생산해보자)
const house1 = new House(1990, "롯데캐슬", 1);
console.log("house1 >>", house1); // { year: 1990, name: '롯데캐슬', window: 1 }
console.log(typeof house1); // object
console.log(house1.year); // 1990
house1.getAge(); // 2023
house1.getWindow(); // 1

// house2 : 2007년에 지어진 '자이', 창문 10개
const house2 = new House(2007, "자이", 10);
console.log("house2 >>", house2);
console.log(house2.year);
house2.getAge();
house2.getWindow();

//] 클래스 상속 extends
// 부모 클래스 : House
// 자식 클래스 : Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    //-- 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}개 입니다!`;
  }

  //] 오버라이딩 (overriding)
  //-- 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name} 아파트의 ${this.window} 개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, "레미안", 3, 20, "KCC");
console.log(apt1);
console.log(apt1.getAptInfo()); // 2022에 지어진 레미안 아파트의 총 층수는 20 이며, 창문의 개수는 3개 입니다!

// 실습
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 메소드
  getArea() {
    return this.width * this.height;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea()); // 12

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // 대각선 메소드
  getDiagonal() {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.height * this.width) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

let rec = new Rectangle(3, 4);
let tri = new Triangle(3, 4);
let cir = new Circle(1, 1, 3);

console.log("사각형 넓이 : ", rec.getArea()); // 12
console.log("사각형 대각선 길이 : ", rec.getDiagonal()); // 5

console.log("삼각형 넓이 : ", tri.getArea()); // 6

console.log("원 넓이 : ", cir.getArea());

// 개발 블로그 작성하기
