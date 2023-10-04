import { useState } from 'react';
import Input from './Input';
import Result from './Result';
import Select from './Select';

function App() {
  // const [msg, setMsg] = useState('결과결과');
  // const [img, setImg] = useState('apple');
  // const [bgColor, setBgColor] = useState('black');
  // const [color, setColor] = useState('white');

  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });

  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* <Select setImg={setImg} setBgColor={setBgColor} setColor={setColor} /> */}
        <Select setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* <Input setMsg={setMsg} /> */}
        <Input setData={setData} />
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      >
        {/* <Result msg={msg} img={img} bgColor={bgColor} color={color} /> */}
        <Result data={data} />
        {/* data2={data}: data2는 정의한 이름 */}
      </div>
    </>
  );
}

export default App;
