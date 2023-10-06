import React, { useReducer } from 'react';

const initState = { value: 0 }; // 초기 상태값

//] 3. Reducer
//-- 현재 state와 action 값을 전달 받아, 새로운 state 반환
// const reducer = (prevState 현재상태, action) => { ... };
const reducer = (prevState, action) => {
  // action: {type: xxx}
  switch (action.type) {
    // action을 'INCREMENT'로 던졌을 경우
    case 'INCREMENT':
      return { value: prevState.value + 1 };
    case 'DECREMENT':
      return { value: prevState.value - 1 };
    case 'RESET':
      return initState;
    default:
      return { value: prevState.value }; // 아니라면, 현재 값으로 저장
  }
};

export default function UseReducerEx() {
  //] 1. Reducer 정의
  const [state, dispatch] = useReducer(reducer, initState);
  // state: 현재 상태
  //^ dispatch: 액션(;state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 "함수"
  // reducer: state 업데이트하는 "함수"
  // initial State: 상태 초기값

  //] 2. dispatch 함수로 action 값 전달
  //-- dispatch는 action 값을 받아, state와 함께 (3.)reducer로 전달
  //dispatch : 상태변화에 대한 힌트인 액션과 정보를 가지고 reducer한테 가져감

  // "증가"에 대한 상태 변화가 필요하다는 "액션"을 보냄
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h1>useReducer Ex</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
