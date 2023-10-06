//=== Custom Hook 2 ===

import React, { useState } from 'react';

// 기본값을 false로 설정
export default function useToggle(initValue = false) {
  //-- value : 토글 상태
  //-- setValue : 토글 상태를 변화시키는 setter

  const [value, setValue] = useState(initValue);

  // 토글 상태를 전환 (스위칭)
  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue];
}
