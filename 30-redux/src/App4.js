//=== Redux 최적화하기 (분리) ===
//] containers 폴더 추가
//-- presentational component
// “뷰” 집중 ⇒ components/ ⇒ 뷰에 관련된 것만

//-- container component
// "presentational + container" ⇒ containers/ ⇒ 그외 로직 확인 가능

// → 유지 보수가 쉬워짐

///////////////////////////////////////

import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';
import {
  Box1Container,
  Box2Container,
  Box3Container,
  Box4Container,
} from './containers/BoxesContainer';
import { minus, plus } from './store/counterReducer';

// import { useState } from 'react';

function App() {
  //_ [ BEFORE : Props Drilling ]
  // const [number, setNumber] = useState(100);
  // const plus = () => setNumber(number + 1);
  // const minus = () => setNumber(number - 1);

  const number = useSelector((state) => state.counter.number);

  return (
    <div className="App">
      <h1>React Redux</h1>
      {/* <h2>Props Drilling</h2> */}
      {/* <Box1 number={number} plus={plus} minus={minus} /> */}
      <Box1Container />

      <h2>number: {number}</h2>
    </div>
  );
}

//] 컴포넌트 1. Box1
// const Box1 = ({ number, plus, minus }) => {
export const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      {/* <Box2 number={number} plus={plus} minus={minus} /> */}
      <Box2Container />
    </div>
  );
};

//] 컴포넌트 2. Box2
export const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3Container />
    </div>
  );
};

//] 컴포넌트 3. Box3
export const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4Container />
    </div>
  );
};

//] 컴포넌트 4. Box4
export const Box4 = ({ number, onPlus, onMinus }) => {
  //_ [ BEFORE ] : container에서 진행 (BoxesContainer)
  // const number = useSelector((state) => state.counter.number);
  // const isVisible = useSelector((state) => state.isVisible);
  // const dispatch = useDispatch();

  // view에 집중
  // prop으로 받음

  return (
    <div className="Box">
      <h2>Box4: {number}</h2>

      <button onClick={onPlus}>PLUS</button>
      <button onClick={onMinus}>MINUS</button>

      {/* <button onClick={() => dispatch({ type: 'PLUS' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button> */}
    </div>
  );
};

export default App;
