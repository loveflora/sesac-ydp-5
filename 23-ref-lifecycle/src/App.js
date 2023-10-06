import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample3';

function App() {
  return (
    <div className="App">
      <h1>useRef() </h1>
      <h3>1. 함수형 컴포넌트 (1) : DOM 요소에 직접 접근</h3>
      <RefSample1 />
      <hr />
      <h3>2. 함수형 컴포넌트 (2) : 로컬변수로 사용</h3>
      <RefSample2 />
      <hr />
      <h3>3. 클래스형 컴포넌트 (1) : 콜백 함수</h3>
      <RefSample3 />
      <hr />
      <h3>4. 클래스형 컴포넌트 (2) : 내장 함수 createRef</h3>
      <RefSample4 />
      <hr />
      <hr />
      <h1>LifeCycle</h1>
      <h3>1. 함수형 - 부모 컴포넌트</h3>
      <LifeCycleFunc />
      <hr />
      <h1>LifeCycle</h1>
      <h3>2. 클래스형 - 부모 컴포넌트</h3>
      <LifeCycleClass />
    </div>
  );
}

export default App;
