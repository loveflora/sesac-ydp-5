//=== Redux 최적화하기 (분리) ===
// store 폴더 추가

import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';

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
      <Box1 />

      <h2>number: {number}</h2>
    </div>
  );
}

//] 컴포넌트 1. Box1
// const Box1 = ({ number, plus, minus }) => {
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      {/* <Box2 number={number} plus={plus} minus={minus} /> */}
      <Box2 />
    </div>
  );
};

//] 컴포넌트 2. Box2
const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};

//] 컴포넌트 3. Box3
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};

//] 컴포넌트 4. Box4
const Box4 = () => {
  const number = useSelector((state) => state.counter.number);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4: {number}</h2>
      <h2>isVisible 값은 {isVisible ? '참' : '거짓'} 이다. </h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button>

      <button onClick={() => dispatch({ type: 'CHANGE' })}>CHANGE</button>
    </div>
  );
};

export default App;
