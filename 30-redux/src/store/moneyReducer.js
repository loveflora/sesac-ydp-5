const PLUS = 'money/PLUS';
const MINUS = 'money/MINUS';

// PLUS() , MINUS()
// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록
export const plus = (money) => ({ type: PLUS, payload: money });
export const minus = (money) => ({ type: MINUS, payload: money });

// state 초기값 정의
const initialState = {
  money: 6000,
};

//] reducer 정의 : 변화를 일으키는 함수
// action 객체 : {type: 'xxx', payload: ? }
const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { money: state.money + Number(action.payload) };
    case MINUS:
      return { money: state.money - Number(action.payload) };
    default:
      return state;
  }
};

export default moneyReducer;
