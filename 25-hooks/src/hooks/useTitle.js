//=== Custom Hook 1 ===
// Component 아닌 Hook임 !

import React, { useEffect } from 'react';

export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    // swap처럼 바꾼 것 같음..?

    // 원래대로 되돌려 놓음
    return () => (document.title = prevTitle);
  }, [title]);

  // react는 페이지 단위로 생성

  //\ return <div>useTitle</div>;
  // hook이라서 return 하는 것은 없고, 함수를 return 하는 것임
}
