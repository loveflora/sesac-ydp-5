import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      {/*=== 함수형 컴포넌트 ===*/}
      <FunctionComponent name={'새싹'} />

      {/* 1. defaultProps */}
      <FunctionComponent />

      {/* 2. propTypes */}
      {/* propTypes를 string으로 설정했으나, prop의 타입이 boolean이므로 콘솔창에 에러 뜸  */}
      {/* <FunctionComponent name={true} /> */}

      <hr />

      {/*=== 클래스형 컴포넌트 ===*/}
      <ClassComponent></ClassComponent>

      {/* 1. defaultProps */}
      <ClassComponent name></ClassComponent>

      {/* 2. propTypes */}
      {/* propTypes를 string으로 설정했으나, prop의 타입이 boolean이므로 콘솔창에 에러 뜸  */}
      <ClassComponent name={true}></ClassComponent>

      <hr />

      <Button link="https://www.google.com">Google</Button>
      {/* props.children */}
    </div>
  );
}

export default App;
