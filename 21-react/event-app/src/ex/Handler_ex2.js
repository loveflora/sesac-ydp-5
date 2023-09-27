import { useState } from 'react';

const Handler_ex2 = () => {
  const [msg, setMsg] = useState('검정색 글씨');

  const [color, setColor] = useState('black');

  const redChange = () => {
    setMsg('빨간색 글씨');
    setColor('red');
  };

  const blueChange = () => {
    setMsg('파란색 글씨');
    setColor('blue');
  };

  return (
    <div>
      <h2 style={{ color: `${color}` }}>{msg}</h2>

      <button onClick={redChange}>Red</button>
      <button onClick={blueChange}>Blue</button>
    </div>
  );
};

export default Handler_ex2;
