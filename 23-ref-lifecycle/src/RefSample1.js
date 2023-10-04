//=== useRef()의 용도 (1) ===
//] 1. DOM 요소에 접근
// ex. 버튼 클릭시 input 요소에 포커스 주기 => input 요소에 직접 접근 필요!
// document.querySelector()와 비슷!!

import React, { useRef } from 'react';

export default function RefSample1() {
  //-- 1. ref 객체 만들기
  const inputRef = useRef();

  //-- 3. useRef() 이용해서 만든 객체의 current 값에 focus() DOM API 사용
  const handleFocus = () => {
    console.log(inputRef.current); // <input type="text">

    //) focus() : 지정된 html 요소에 포커싱
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
    inputRef.current.focus();
  };
  return (
    <div>
      <p>함수형 컴포넌트에서 버튼 클릭 시, input에 focusing 처리해보자 !</p>
      {/*-- 2. 직접 접근하고 싶은 DOM 요소에 ref props 설정 */}
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
