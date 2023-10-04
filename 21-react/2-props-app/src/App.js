import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import ClassTest1 from './ClassTest1';
import ClassTest2 from './ClassTest2';
import FunctionComponent from './FunctionComponent';
import PropsTest1 from './PropsTest1';
import PropsTest2 from './PropsTest2';
import PropsTest3 from './PropsTest3';

function App() {
  const validFunction = () => {
    console.log('콘솔 띄우기 성공!');
  };

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
      <ClassComponent name={'새싹'}></ClassComponent>

      {/* 1. defaultProps */}
      <ClassComponent></ClassComponent>

      {/* 2. propTypes */}
      {/* propTypes를 string으로 설정했으나, prop의 타입이 boolean이므로 콘솔창에 에러 뜸  */}
      {/* <ClassComponent name={true}></ClassComponent> */}

      <hr />

      <Button link="https://www.google.com">Google</Button>
      {/* props.children */}

      <hr />
      <h1> 컴포넌트 실습하기 </h1>
      <ClassTest1 />
      <ClassTest2 />
      <hr />
      <h1> Props 실습하기 </h1>
      <PropsTest1 />
      <PropsTest2
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />
      <PropsTest3
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid={validFunction}
      />
    </div>
  );
}

export default App;
