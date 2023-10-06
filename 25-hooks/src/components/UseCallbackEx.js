//=== useCallback ===
// 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
// "함수"를 기억하여 최적화

import React, { useState, useCallback } from 'react';

export default function UseCallbackEx() {
  const [text, setText] = useState('');

  //] [ BEFORE ]
  //-- text 상태가 업데이트되면 = 컴포넌트 리렌더링 = 코드 다시 읽음
  //-- = onChangeText 함수도 다시 생성 (JS Func는 object type이라 주소 값이 변경됨)
  //-- 불필요한 작업 !
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  //] [ AFTER ]
  //-- useCallback 훅으로 함수 기억해서,
  //-- 컴포넌트가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 함수를 재사용
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <h1>useCallback</h1>
      <input type="text" onChange={(e) => {}} />
      <button onClick={onChangeText}>Plus</button>
      <p>작성한 값: {text || '없음'}</p>
    </div>
  );
}
