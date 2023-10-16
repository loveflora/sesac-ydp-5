//=== Props Drilling ===

import { useState } from 'react';
import './styles/Box.css';

function App() {
  const [number, setNumber] = useState(100);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);

  return (
    <div className="App">
      <h1>React Redux</h1>
      <h2>Props Drilling</h2>
      <Box1 number={number} plus={plus} minus={minus} />
    </div>
  );
}

//] 컴포넌트 1. Box1
const Box1 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box1: {number}</h2>
      <Box2 number={number} plus={plus} minus={minus} />
    </div>
  );
};

//] 컴포넌트 2. Box2
const Box2 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box2: {number}</h2>
      <Box3 number={number} plus={plus} minus={minus} />
    </div>
  );
};

//] 컴포넌트 3. Box3
const Box3 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box3: {number}</h2>
      <Box4 number={number} plus={plus} minus={minus} />
    </div>
  );
};

//] 컴포넌트 4. Box4
const Box4 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box4: {number}</h2>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
    </div>
  );
};

export default App;
