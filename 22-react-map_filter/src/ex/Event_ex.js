import React, { useState } from 'react';

export default function Event_ex() {
  const [data, setData] = useState([
    {
      id: 1,
      user: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      user: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  const [inputUser, setInputUser] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addHandler = () => {
    if (!inputUser.trim()) return alert('이름을 입력해주세요');
    if (!inputEmail.trim()) return alert('이메일을 입력해주세요');

    const newItem = {
      id: data.length + 1,
      user: inputUser,
      email: inputEmail,
    };

    // 기존 데이터 배열과 새로운 아이템을 합친 새 배열 생성
    const newData = [...data, newItem];

    // setData를 사용하여 상태를 업데이트
    setData(newData);

    // 입력 필드를 초기화 (선택 사항)
    setInputUser('');
    setInputEmail('');
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

  const deleteHandler = (targetId) => {
    // targetId : 삭제될 요소의 id

    const newData = data.filter((e) => e.id !== targetId);
    setData(newData);
  };

  return (
    <div>
      <input
        placeholder="이름"
        onChange={(e) => {
          setInputUser(e.target.value);
        }}
        value={inputUser}
      />
      <input
        placeholder="이메일"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        value={inputEmail}
      />
      <button onClick={addHandler} onKeyDown={handleKeyDown}>
        등록
      </button>
      <div>
        {data.map((e) => (
          <h2
            key={e.id}
            onDoubleClick={() => {
              deleteHandler(e.id);
            }}
          >
            {e.user} : {e.email}
          </h2>
        ))}
      </div>
    </div>
  );
}
