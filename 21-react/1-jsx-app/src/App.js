import logo from './logo.svg';
import './App.css';
import Larva from './Larva';

function App() {
  const name = '부기';
  const student = 'sesac';
  const style = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };

  const animal = '거북이';

  const a = 2;
  const b = 1;

  const title = 'Hello World';

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
      <div>
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
        {/* 문제 1. */}
        <div>
          이것은 div입니다.
          <h3>이것은 div 안에 있는 h3 태그 입니다.</h3>
        </div>
        {/* 문제 2. */}
        {/* 
        1. App.js 에서 name 과 animal 이라는 변수를 선언해주세요.
        2. name 에는 본인이 키우는 반려동물의 이름을(없다면 아무 이름이나 넣어주세요),
          animal 에는 본인이 키우는 반려동물의 종(없다면 아무 동물이나 넣어주세요)을 써주세요.
        3. h2 태그를 작성하고 다음 사진과 같이 나오도록 해주세요. 
        */}
        <h2>제 반려 동물의 이름은 {name}입니다.</h2>
        <h2>
          {name}은 {animal}입니다.
        </h2>
        {/* 문제 3. */}
        {/* 삼항 연산자를 사용하여 3 + 5 == 8 이란 수식이 맞으면 "정답입니다!" 를, 틀리면 "오답입니다!" 를 출력하도록 해주세요 */}
        {3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}
        <br />
        {/* 문제 4. */}
        {/* 1. a라는 변수와 b라는 변수를 만들고 각각에 숫자(정수)를 넣어주세요.
            2. &&연산자를 이용하여 a가 b보다 크다면 "a가 b보다 큽니다"를 출력하도록 해주세요. */}
        {a > b && 'a가 b보다 큽니다'}
        {/* 문제 5. */}
        {/* 1. App.css 에 test라는 클래스를 작성하고 배경색상, 글자색, 글자크기, 마진을 다음 사진처럼 나오도록 설정해주세요.
        2. input이라는 클래스를 작성하고 마진과 정렬 속성을 설정해주세요.
        3. App.js 에서 div 태그에 test 클래스를 적용해주세요.
        4. title 이라는 변수를 만들고 원하는 제목을 넣어주세요.
        5. input 태그를 이용하여 다음 결과물처럼 만들어주세요.
        6. input 태그가 있는 곳에 input 클래스를 적용해주세요. */}
        <div className="test">{title}</div>
        아이디 : <input className="input"></input>
        <br />
        비밀번호 : <input className="input"></input>
        {/* 문제 6. */}
        {/* 1. App.css 에 red, orange, yellow, green, blue, navy, purple 이라는 클래스를 만들어주세요.
            2. 각 클래스에 이름에 맞는 배경색상을 지정하고 가로와 세로 길이를 지정해주세요.
            3. 다음 사진과 같이 무지개색을 띄도록 div를 나열해주세요. */}
        <div class="rainbow">
          <div class="red"></div>
          <div class="orange"></div>
          <div class="yellow"></div>
          <div class="green"></div>
          <div class="blue"></div>
          <div class="navy"></div>
          <div class="purple"></div>
        </div>
        <Larva />
      </div>
    </div>
  );
}

export default App;
