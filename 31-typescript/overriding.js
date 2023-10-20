//=== 오버라이딩 ===
// 부모 클래스한테서 extends 키워드 사용하여 속성을 변경/확장
// 그 자식에서만 특별하게 추가적으로 할 일이 있을 경우 사용

// node 파일명으로 실행

class Car {
  constructor(year) {
    this.year = year;
  }

  getYear() {
    return this.year;
  }
}

class Truck extends Car {
  //  부모 클래스 (Car) getYear 메소드를 재정의 => "overriding"
  getYear() {
    return this.year + 5;
  }
}

const car = new Car(2020);
const truck = new Truck(2020);

console.log(car.getYear()); // 2020
console.log(truck.getYear()); // 2025
