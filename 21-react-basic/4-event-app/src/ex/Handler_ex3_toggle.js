import { useState } from 'react';

const Handler_ex3_toggle = () => {
  const [isNone, setIsNone] = useState(false);
  let btnMsg = '사라져라';
  let msg = '안녕하세요';

  if (!isNone) {
    btnMsg = '나타나라';
    msg = '';
  } else {
    btnMsg = '사라져라';
    msg = '안녕하세요';
  }

  return (
    <div>
      <button onClick={() => setIsNone(!isNone)}>{btnMsg}</button>
      <h2>{msg}</h2>
    </div>
  );
};

export default Handler_ex3_toggle;
