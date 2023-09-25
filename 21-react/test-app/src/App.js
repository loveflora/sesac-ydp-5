import logo from './logo.svg';
import './App.css';

function App() {
  const name = '세화';
  const student = 'sesac';
  const style = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };

  return (
    <div className="App">
      {/* 자동 생성 코드 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* === JSX 문법 === */}
      {/* 1. 하나로 감싼 요소 */}
      <>
        {/* 
        2. JS 문법 사용 
        - { } 로 감싸면, js 표현식 사용 가능
        - { } 안에서 삼항 연산자 사용 가능 => if, for문 사용 불가 !
      */}
        <div>{name} 안녕</div>
        <div>
          {student === 'sesac' ? <span>새싹인</span> : <span>일반인</span>}
        </div>

        {/* 3. 스타일 적용 */}
        <div style={style}>스타일 적용1</div>
        <div
          style={{ backgroundColor: 'red', color: 'white', fontSize: '30px' }}
        >
          스타일 적용2
        </div>

        {/* 4. className 사용 */}

        {/* 
            5. 종료 태그가 없는 태그 
            - opening tag(빈 태그)도 closing tag 필요 : <input></input>
            - self closing tag : <input/>
        */}

        <input />
      </>
    </div>
  );
}

export default App;
