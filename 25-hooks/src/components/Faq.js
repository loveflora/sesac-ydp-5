//=== useToggle Custom Hook 사용하는 예제 ===

import React from 'react';
import useToggle from '../hooks/useToggle';

// FAQ(Frequently Asked Questions) : 자주 묻는 질문

export default function Faq() {
  // useToggle.js에서 return [value, toggleValue];
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  //    [  value  , toggleValue ]
  //             기본값을 false로 설정
  //-- value : 토글 상태
  //-- setValue : 토글 상태를 변화시키는 setter

  return (
    <div>
      <h1>Custom Hook(useToggle) Ex</h1>
      <div onClick={setIsFaqOpen}>Q. 질문입니다 ?</div>
      {isFaqOpen && <div>A. 답변입니다 !</div>}
    </div>
  );
}
