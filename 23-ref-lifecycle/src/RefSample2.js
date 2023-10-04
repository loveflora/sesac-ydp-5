//=== useRef()의 용도 (2) ===
//] 2. 로컬변수로 사용
// 로컬변수 = 랜더링되어도 값이 그대로 유지 (컴포넌트 내에서만 유효)
// => ref 안의 변경되어도 컴포넌트는 랜더링되지 않음!!!

import React, { useRef, useState } from 'react';

export default function RefSample2() {
  //-- 1. ref 객체 만들기
  const id = useRef(10);

  const [number, setNumber] = useState(10);

  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
  };

  const plusNumState = () => setNumber(number + 1);
  // state는 setter 함수가 실행되어서, state 변경됨에 따라 리렌더링됨

  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭 시, id 값을 1씩 증가 !</p>
      {/*-- 2. 직접 접근하고 싶은 DOM 요소에 ref props 설정 */}
      <h2>{id.current}</h2>
      {/* current 써야 실제 ref 값을 쓸 수 있음 */}
      <button onClick={plusIdRef}>Plus</button>

      {/* id.current 했을 경우, 숫자 변경되지 않는 이유는 ? */}
      {/* => useRef를 사용했기 때문에 그저 변수로 취급되어,
             useState를 사용해 값을 변경하는 것(이 때는 리렌더링)과는 다르게 
             ref를 사용하고 있어 반영되지 않기 때문
      */}

      <br />
      <p>[비교] state는 ref와 다르게, 값이 변경되면 리렌더링됨</p>
      <h2>{number}</h2>
      <button onClick={plusNumState}>Plus</button>
    </div>
  );
}
