import React, { useState, useEffect } from 'react';

//] 자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState();

  // //-- 1. Mount 시점에 실행
  // // 의존성 배열 O
  // useEffect(() => {
  //   console.log('컴포넌트 마운트');
  // }, []); // [] : 의존성 배열
  // //) 렌더링에만 호출됨
  // //) 업데이트 시점(plus 버튼 눌렀을 때)에는 호출되지 않음

  // //-- 2. Unmount 시점에 실행
  // useEffect(() => {
  //   return () => {
  //     console.log('컴포넌트 언마운트 !!!');
  //   };
  // }, []);

  // //-- 3. Mount or Update 시점에 실행
  // // 의존성 배열 X
  // useEffect(() => {
  //   console.log('컴포넌트 마운트 or 업데이트 !!!');
  // });
  // //) 업데이트 시점(렌더링)이랑 마운트(plus 버튼 눌렀을 때) 둘 다 실행됨

  // // 4. input 상태가 업데이트될 때 실행
  // useEffect(() => {
  //   console.log('input 상태가 변경됨에 따라, 컴포넌트 업데이트');
  // }, [input]);
  // // (초기) input 상태가 변경됨에 따라, 컴포넌트 업데이트
  // // (초기) input 상태가 변경됨에 따라, 컴포넌트 업데이트
  // // (입력 시마다) input 상태가 변경됨에 따라, 컴포넌트 업데이트

  return (
    <div style={{ background: 'gold' }}>
      자식 컴포넌트
      <div>현재 Number 값은 {number} 입니다.</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}
