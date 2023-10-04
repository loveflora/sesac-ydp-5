import { useState } from 'react';

const Handler_ex_Function = () => {
  const [msg, setMsg] = useState('Hello world!');

  const msgHandler = () => {
    setMsg('Goodbye world!');
  };

  return (
    <div>
      <h2>{msg}</h2>

      <button onClick={msgHandler}>Click</button>
    </div>
  );
};

export default Handler_ex_Function;
