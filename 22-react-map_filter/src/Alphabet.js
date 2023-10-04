import React, { useState } from 'react';

export default function Alphabet() {
  // 1.
  // const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);

  // 2.
  const [alphabet, setAlphabet] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    if (!inputAlpha.trim()) return; // trim() : 긴 공백도 추가 안되게

    // 값이 있으면
    // if (inputAlpha) {
    //-- 기존 데이터 배열과 새로운 아이템을 합친 새 배열 생성
    //) 1. concat 메소드
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

    //) 1. concat 메소드
    // const newAlpha = { ... }
    // const newData = [...alphabet, newAlpha];

    setAlphabet(newAlpha);
    setInputAlpha('');
  };
  //   };

  const deleteAlpha = (targetId) => {
    // targetId : 삭제될 요소의 id
    console.log(targetId);

    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);
    // 같지 않은 애들만 걸러준다
    setAlphabet(newAlpha);
  };

  const handleKeyDown = (e) => {
    console.log(e);

    //-- bug fix: IME 문제해결
    // 입력기 또는 입력 방식 편집기(input method editor, IME)는
    // 한글, 한자처럼 컴퓨터 자판에 있는 글자보다 수가 더 많은 문자를 계산하거나 조합하여 입력해 주는 시스템 소프트웨어

    // 한글이면 마지막 글자 두 개 찍히는 버그 해결
    // 조합문자이면 종료
    if (e.nativeEvent.isComposing) {
      return;
    }
    // onKeyUp, onKeyDown 이벤트는 유지하고 isComposing 반환값을 이용
    // true인 경우 실행할 동작에 접근하지 못하도록 함수를 종료한다.

    if (e.code === 'Enter') {
      addAlpha();
      return;
    }

    // if (e.keyCode == 13) {
    //   addAlpha();
    //   return;
    // }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        //\ 한글은 마지막 글자가 두번 출력됨
        // "안녕"
        // "녕"
        // 한글은 자음과 모음의 조합으로 한 음절이 만들어지기 때문에 조합문자이며,
        // 영어는 한 음절이 하나의 알파벳으로 이루어지므로 조합문자가 아니기 때문
        // https://doqtqu.tistory.com/344
        // https://velog.io/@euji42/solved-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5%EC%8B%9C-2%EB%B2%88-%EC%9E%85%EB%A0%A5%EC%9D%B4-%EB%90%98%EB%8A%94-%EA%B2%BD%EC%9A%B0
      />
      <button onClick={addAlpha}>ADD</button>

      {/* <ol>
        {alphabet.map((value, idx) => (
          <li key={idx}>{value}</li> // key가 DOM에서는 보이지 않음
          // Warning: Each child in a list should have a unique "key" prop.

          // 반복되는 가장 바깥 태그에 key 속성 추가해야 함
          // <div key={idx}>
          //     <div>
          //         <div></div>
          //     </div>
          // </div>
        ))}
      </ol> */}

      <ol>
        {alphabet.map((value) => (
          <li
            key={value.id}
            onDoubleClick={() => {
              deleteAlpha(value.id);
            }}
          >
            {value.alpha}
          </li>
        ))}
        {/* map은 소괄호 써서 return ! */}
      </ol>
    </div>
  );
}
