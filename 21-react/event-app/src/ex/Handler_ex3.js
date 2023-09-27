import { useState } from 'react';

const Handler_ex3 = () => {
  const [msgBtn, setMsgBtn] = useState('사라져라');
  const [msg, setMsg] = useState('안녕하세요');

  const changeHandler = () => {
    // 1. if문
    // if (msgBtn === '사라져라') {
    //   setMsgBtn('나타나라');
    //   setMsg('');
    // } else {
    //   setMsgBtn('사라져라');
    //   setMsg('안녕하세요');
    // }

    // 2. 삼항 연산자
    setMsgBtn((e) => (e === '사라져라' ? '나타나라' : '사라져라'));
    setMsg((e) => (e === '안녕하세요' ? '' : '안녕하세요'));
  };

  return (
    <div>
      <button onClick={changeHandler}>{msgBtn}</button>
      <h2>{msg}</h2>
    </div>
  );
};

export default Handler_ex3;
