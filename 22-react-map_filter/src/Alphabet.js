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
    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

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
      </ol>
    </div>
  );
}
