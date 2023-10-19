import { useDispatch, useSelector } from "react-redux";
import { Box1, Box2, Box3, Box4, Bank } from "../App4";
// 한 파일에서 export는 여러개 --> 객체 구조분해
// export default 하나
import { plus, minus } from "../store/counterReducer.js";
import { income, outcome } from "../store/moneyReducer.js";

//////////////////////////////////////////////

export const Box1Container = () => {
  return <Box1 />;
};

export const Box2Container = () => {
  return <Box2 />;
};

export const Box3Container = () => {
  return <Box3 />;
};

export const Box4Container = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <Box4
      number={number}
      onPlus={() => dispatch(plus())}
      onMinus={() => dispatch(minus())}
    />
  );
};

export const BankContainer = () => {
  const money = useSelector((state) => state.money.money);
  // const inputValue = useSelector((state) => state.money.inputValue);
  const dispatch = useDispatch();

  // dispatch({ type: , payload: inputValue });
  return (
    <Bank
      money={money}
      onPlus={(inputValue) => dispatch(income(inputValue))}
      onMinus={(inputValue) => dispatch(outcome(inputValue))}
    />
  );
};
