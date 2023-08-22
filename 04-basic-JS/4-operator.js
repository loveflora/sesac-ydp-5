// 연산자
// 1. 대입 연산자 (=) : 변수에 값 할당

// 2. 산술 연산자
// 사칙, 나머지, 거듭제곱

// 3. 비교 연산자
// 1) 동등 ==, ===
// 2) 부등 !=, !==
// . ==, !=: "값"만 비교 => type 비교하지 않는 관대한 연산자다!
// . ===, !==: "값"과 "type" 모두 비교 => 엄격한 연산자
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 2); // true
console.log(1 != 1); // false
console.log('1' == 1); // true
console.log('1' != 1); // false
console.log('--------------------');

console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 2); // true
console.log(1 !== 1); // false
console.log('1' === 1); // false
console.log('1' !== 1); // true
console.log('--------------------');

// 3) 크기
console.log(2 > 1); // true
console.log(2 >= 2); // true
console.log(2 < 1); // false
console.log(2 <= 2); // true

// 동등연산자 2개 (==) : 예기치 못한 결과를 발생할 수도 있기 때문에 자제하자 !
console.log(1 == '1'); // true
console.log('0' == false); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// 4. 논리 연산자
// !: not (참 -> 거짓, 거짓 -> 참)
// &&: and (여러 값 중 모두가 참 -> 참)
// ||: or (여러 값 중 하나라도 참 -> 참)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);

console.log(!(2 > 1)); // !true -> false
console.log(2 > 1 && -2 < 1); // true && true -> true
console.log((2 > 1 && -2 < 1) || 5 > 2);
// (true && true) || true -> true || true -> true

// 문자열에서 + 연산: 문자열 더하기
console.log('안녕' + '하세요');
console.log('12' + '34');
// 더하기 이외의 연산은 숫자로 자동 형변환 되어 계산이 됨!
console.log('5' - '2');
console.log('5' * '2');
console.log('5' / '2');

// 5. 증감 연산자 (++, --)
let result1, result2;
let num = 10,
  num2 = 10;

// 1) 후위 연산자 (postfix operator)
// 변수 먼저 대입한 뒤, 연산(+1) 수행
result1 = num++;
console.log(result1); // 10
console.log(num); // 11

// 2) 전위 연산자 (prefix operator)
// 연산(+1) 수행하고, 변수에 대입
result2 = ++num2;
console.log(result2); // 11
console.log(num2); // 11

// +=, -= 더 자주 씀 !
console.log((num += 1));
console.log((num2 -= 1));
