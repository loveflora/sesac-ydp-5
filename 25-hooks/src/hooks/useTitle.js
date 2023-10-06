//=== Custom Hook 1 ===

import React, { useEffect } from 'react';

export default function useTitle(title) {
  //_ 1. 라우터 사용하면 prevTitle 필요함
  // react는 페이지 단위로 생성
  useEffect(() => {
    // console.log(document.title); // 변경 전
    // console.log(title); // 변경 후

    // swap처럼 prevTitle이랑 title을 바꿈
    const prevTitle = document.title;

    document.title = title; // 새로운 제목으로 변경

    // 원래대로 되돌려 놓음
    return () => (document.title = prevTitle); // 이전 제목으로 되돌리기
    // 사라질 때 코드
  }, [title]);

  //* [ prevTitle 사용하는 이유 ]
  // 라우터를 사용하는 경우 페이지 간에 제목을 변경해야 할 때 prevTitle과 함께 사용하는 것이 일반적인 방법입니다.

  // 라우터를 사용하면 다양한 페이지가 동적으로 렌더링되고,
  // 각 페이지마다 서로 다른 페이지 제목을 가질 수 있습니다.
  // 따라서 컴포넌트가 unmount될 때 이전 페이지의 제목으로 돌아가기 위해서 prevTitle 변수를 사용하는 것이 유용합니다.

  //* [ return "이전" vs "이후"의 document.title = title ]
  //* useEffect에서의 return 함수는 ?
  // useEffect 훅의 콜백 함수 내부에서 반환한 함수는,
  // 해당 컴포넌트가 unmount(사라질 때)될 때 실행되는 clean-up 함수입니다.

  // 따라서 return "이후"의 함수는 컴포넌트가 unmount 될 때 실행됩니다.
  // 여기에서는 페이지 제목을 이전 제목인 title로 되돌리는 역할을 합니다.

  // useTitle 훅을 사용하는 컴포넌트가 화면에 렌더링되고,
  // 해당 페이지의 제목을 변경한 후에 다른 페이지로 이동하면 컴포넌트가 unmount 됩니다.
  // 이때 return 다음에 오는 함수가 실행되어 페이지 제목을 이전 값인 title로 돌려놓게 됩니다.

  // 이러한 clean-up 함수는 메모리 누수를 방지하고 애플리케이션의 상태를 올바르게 관리하는 데 도움을 줍니다.

  //_ 2. prevTitle 사용 안해도 변경되기는 함
  // useEffect(() => {
  //   // const prevTitle = document.title;
  //   document.title = title;
  //   console.log(document.title); // 변경 전
  //   console.log(title); // 변경 후
  //   // return () => (document.title = prevTitle);
  //   return () => (document.title = title);
  // }, [title]);

  //_ Component 아닌 Hook임 !
  //\ return <div>useTitle</div>;
  // hook이라서 return 하는 것은 없고, 함수를 return 하는 것임
}
