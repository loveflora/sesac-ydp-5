import React, { useState, useRef } from 'react';

export default function Map_Ref_ex2() {
  const [data, setData] = useState([]);
  const [inputUser, setInputUser] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [field, setField] = useState('user');

  const inputUserRef = useRef();
  const inputTitleRef = useRef();

  const addHandler = () => {
    // 입력 안했을 경우, focus 처리

    if (!inputUser.trim()) {
      return inputUserRef.current.focus();
    }

    if (!inputTitle.trim()) {
      return inputTitleRef.current.focus();
    }

    //\ input/textarea에서 조건을 충족하지 못하면 alert 띄우는 것은 UX 측면에서 좋지 않음!!
    //\ => 트렌디한 사이트는 alert을 사용하지 않고 input에 focus 주는 방식을 사용함
    // if (!inputUser.trim()) return alert('이름을 입력해주세요');
    // if (!inputTitle.trim()) return alert('이메일을 입력해주세요');

    const newItem = {
      id: data.length + 1,
      user: inputUser,
      title: inputTitle,
    };

    // 기존 데이터 배열과 새로운 아이템을 합친 새 배열 생성
    const newData = [...data, newItem];

    // setData를 사용하여 상태를 업데이트
    setData(newData);

    // 입력 필드를 초기화 (선택 사항)
    setInputUser('');
    setInputTitle('');
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }

    if (e.code === 'Enter') {
      addHandler();
      return;
    }
  };

  const searchHandler = () => {
    console.log(field);

    if (field === 'user') {
      const searchData = data.filter((e) => e.user === inputSearch);
      setData(searchData);
      console.log(searchData);
    } else if (field === 'title') {
      const searchData = data.filter((e) => e.title === inputSearch);
      setData(searchData);
      console.log(searchData);
    }
  };

  const showAllHandler = () => {};

  return (
    <div>
      <fieldset>
        작성자 :{' '}
        <input
          onChange={(e) => {
            setInputUser(e.target.value);
          }}
          value={inputUser}
          ref={inputUserRef}
        />
        제목 :{' '}
        <input
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          value={inputTitle}
          ref={inputTitleRef}
        />
        <button onClick={addHandler} onKeyDown={handleKeyDown}>
          등록
        </button>
      </fieldset>
      <select
        onChange={(e) => {
          setField(e.target.value);
        }}
      >
        <option value="user">작성자</option>
        <option value="title">제목</option>
      </select>
      <input
        placeholder="검색어"
        value={inputSearch}
        onChange={(e) => {
          setInputSearch(e.target.value);
        }}
      />
      <button onClick={searchHandler}>검색</button>
      <button onClick={showAllHandler}>전체</button>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.user}</td>
              <td>{e.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
