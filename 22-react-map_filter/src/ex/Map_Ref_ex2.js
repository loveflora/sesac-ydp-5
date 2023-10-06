import React, { useState, useRef } from 'react';

export default function Map_Ref_ex2() {
  // 하나의 state로 input 여러개 관리하기
  const [inputs, setInputs] = useState({
    user: '', // 작성자
    title: '', // 제목
    type: 'user', // 검색 타입
    search: '', // 검색
  });

  // input의 입력값
  const { user, title, search, type } = inputs;

  // 등록 데이터
  const [resultData, setResultData] = useState([]);

  // 검색 데이터
  const [searchData, setSearchData] = useState('');

  // 검색 기능
  const [searchOn, setSearchOn] = useState(false);

  // input useRef
  const inputUserRef = useRef();
  const inputTitleRef = useRef();

  ////////////////////////////////////////

  //] 등록
  const addHandler = () => {
    // 입력 안했을 경우, focus 처리

    if (!user.trim()) {
      return inputUserRef.current.focus();
    }

    if (!title.trim()) {
      return inputTitleRef.current.focus();
    }

    //\ input/textarea에서 조건을 충족하지 못하면 alert 띄우는 것은 UX 측면에서 좋지 않음!!
    //\ => 트렌디한 사이트는 alert을 사용하지 않고 input에 focus 주는 방식을 사용함
    // if (!inputUser.trim()) return alert('이름을 입력해주세요');
    // if (!inputTitle.trim()) return alert('이메일을 입력해주세요');

    const newItem = {
      id: resultData.length + 1,
      user,
      title,
    };

    // 기존 데이터 배열과 새로운 아이템을 합친 새 배열 생성
    const newResultData = [...resultData, newItem];

    // setData를 사용하여 상태를 업데이트
    setResultData(newResultData);

    // input 초기화
    setInputs({
      ...inputs, // type, search
      user: '',
      title: '',
    });
  };

  //] 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //] 검색
  const searchHandler = () => {
    //-- 예외 처리
    // 등록된 데이터가 없는데 '검색' 버튼 눌렀을 경우, focus 처리
    if (!resultData.length) {
      return inputUserRef.current.focus();
    }

    setSearchOn(true);

    const searchResult = resultData.filter((e) => {
      if (!e[type].includes(search)) {
        return null; // 검색결과 없음; null 반환
      } else return e; // 검색결과 있음; 검색결과(배열) 반환
    });

    setSearchData(searchResult);

    // input 초기화
    setInputs({
      ...inputs,
      search: '',
    });
  };

  //] 전체
  const showAllHandler = () => {
    //-- 예외 처리
    // 등록된 데이터가 없는데 '검색' 버튼 눌렀을 경우
    if (!resultData.length) {
      return inputUserRef.current.focus();
    }

    setSearchOn(false);

    setSearchData('');
  };

  return (
    <div>
      <fieldset>
        작성자 :{' '}
        <input
          onChange={onChange}
          name="user"
          value={user}
          ref={inputUserRef}
        />
        제목 :{' '}
        <input
          onChange={onChange}
          name="title"
          value={title}
          ref={inputTitleRef}
        />
        <button onClick={addHandler}>등록</button>
      </fieldset>
      <select name="type" onChange={onChange}>
        <option value="user">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        placeholder="검색어"
        name="search"
        value={search}
        onChange={onChange}
      />
      <button onClick={searchHandler}>검색</button>
      <button onClick={showAllHandler}>전체</button>

      {/* 검색 ? { (검색O : 검색X) : 데이터 ? (데이터O : 데이터X) } */}

      {/* 검색 */}
      {searchOn ? (
        searchData.length ? (
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>작성자</th>
                <th>제목</th>
              </tr>
            </thead>
            <tbody>
              {searchData.map((e) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.user}</td>
                    <td>{e.title}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h5> 검색 결과가 없습니다. </h5>
        )
      ) : // 등록
      resultData.length ? (
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>제목</th>
            </tr>
          </thead>
          <tbody>
            {resultData.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.user}</td>
                  <td>{e.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h5> 등록된 댓글이 없습니다. </h5>
      )}
    </div>
  );
}
