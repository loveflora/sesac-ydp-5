import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState({});

  // getPost 함수 : 데이터 요청
  //) 컴포넌트가 리렌더링될 때마다 - 코드 다시 읽고 - 함수도 다시 생성 - getPost 주소값이 계속 변경됨
  // 함수는 reference type이라서 주소값이 저장됨

  //] [ BEFORE ]
  //   const getPost = async () => {
  //     //_ console.log('1');
  //     //_ 콘솔 찍으면 무한히 출력됨 (요청이 계속 날라감)

  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/todos/${postId}`
  //     );
  //     setPost(res.data);
  //   };

  //] [ AFTER ]
  const getPost = useCallback(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${postId}`,
    );
    setPost(res.data);
  });

  // getPost 상태가 업데이트될 때 실행
  useEffect(() => {
    getPost();
  }, [getPost]);
  // 의존성 배열에 getPost가 있으므로, getPost 변경될 때마다 useEffect 실행
  //) 컴포넌트가 리렌더링될 때마다 - 코드 다시 읽고 - 함수도 다시 생성 - getPost 주소값이 계속 변경됨
  //) => useEffect가 계속 불러짐 ===> useCallback 훅 사용해서 함수를 저장

  // useEffect 의존성 배열에 "함수"
  // 함수가 호출되어 API 요청 -> 데이터 받아오면서 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 재호출

  // xxxx const getPost 정의하면서, getPost 함수가 변경된다고 인식
  // xxxx useEffect에서 getPost() 실행하면서

  // useEffect의 의존성 배열에 포함된 값들이 변경될 때마다 useEffect의 콜백 함수가 실행됩니다.

  // [ 초기 렌더링(initial render) 시 ]
  // getPost 함수가 초기화되고, useEffect는 해당 함수를 실행하게 됩니다.
  // 그러므로 초기화 화면에서도 getPost 함수가 호출되어 API 요청이 발생하고, 따라서 컴포넌트가 리렌더링되는 것입니다.

  // 주소값이 바뀌고, 렌더링되고, 바뀌고, 렌더링되고, ...

  return (
    <div>
      <h1>useCallback Ex2</h1>
      {post.id ? post.title : "로딩 중..."}
    </div>
  );
}
