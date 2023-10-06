//=== useMemo ===
// 특정 "값"을 기억하여 최적화
// 메모이제이션으로 수행한 연산의 결과값을 기억함으로써, 불필요한 연산 최소화

//) useEffect vs. useMemo
// 결과는 같긴 함, 하지만 목적이 다름.
// • useEffect(): 컴포넌트가 렌더링 될 때마다, 특정 작업을 수행하도록 설정할 수 있는 훅
// • useMemo(): 메모이제이션을 통해 함수의 리턴 값을 재사용할 수 있게 해주는 훅

import React, { useState, useMemo } from 'react';

export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //-- calc 함수 : 임의의 큰 연산을 하는 함수

  //] [ BEFORE ]
  //-- Plus 버튼 누를 때 뿐만 아니라,
  //-- input에 값을 입력해도, calc 함수가 실행되어 연산이 이뤄짐
  //-- useMemo 렌더링 과정에서 특정 값을 기억해서 바뀔 때만 연산되도록 최적화
  // const calc = () => {
  //   console.log('계산 중...');
  //   for (let i = 0; i < 100000000; i++) {}

  //   return count ** 2;
  // };

  //] [ AFTER ]
  //-- 의존성 배열에 있는 값의 상태(count의 state)가 바뀔 때만, calc 함수 실행
  //-- input 상태가 바뀌면, 컴포넌트는 리렌더링 되지만, calc는 연산되지 않음.
  const calc = useMemo(() => {
    console.log('계산 중...');
    for (let i = 0; i < 100000000; i++) {}

    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemo Ex</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>Plus</button>
      <p>count: {count}</p>
      {/* [ BEFORE ] */}
      {/* <p>calc: {calc()}</p> */}

      {/* [ AFTER ] */}
      <p>calc: {calc}</p>
    </div>
  );
}
