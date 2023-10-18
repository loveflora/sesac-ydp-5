//) 000/ACTION
// 000에 대한 ACTION
const INCOME = 'money/INCOME';
const OUTCOME = 'money/OUTCOME';

// INCOME() , OUTCOME()
// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록
export const income = (money) => ({ type: INCOME, payload: money }); // return { type: 'counter/INCOME' }
export const outcome = (money) => ({ type: OUTCOME, payload: money }); // return { type: 'counter/OUTCOME' }

// state 초기값 정의
const initialState = {
  money: 6000,
};

//] reducer 정의 : 변화를 일으키는 함수
// action 객체 : {type: 'xxx', payload: ? }
const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCOME:
      return { money: state.money + action.payload };
    case OUTCOME:
      return { money: state.money - action.payload };
    default:
      return state;
  }
};

export default moneyReducer;
