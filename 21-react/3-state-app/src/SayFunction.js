import { useState } from 'react';

const SayFunction = () => {
  const [message, setMessage] = useState('welcome');
  // 'welcome' : 상태 초기값 (숫자, 문자, 배열 등 값의 형태 자유로움)
  // message : 메세지 상태
  // setMessage() : message state 값을 바꾸는 함수
  console.log(message);

  const onClickEnter = () => {
    setMessage('안녕하세요 !');
  };

  const onClickLeave = () => {
    setMessage('안녕히가세요 ~');
  };

  return (
    <div>
      {/* 
           - HTML : onclick="onClickEvent()" 
               ~~> 문자열 형식
           
            - JS : addEventListener('click', onClickEnter) 
              ~~> (괄호)를 없애 함수를 바로 실행하지 않고, 클릭했을 때 ! 함수를 실행
    
            - React : onClick={onClickEnter} 
              ~~> JS와 동일
        */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default SayFunction;
