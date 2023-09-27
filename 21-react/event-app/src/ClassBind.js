import { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log('constructor this : ', this);

    this.state = {
      name: 'sesac',
    };

    //] 1. 클래스 컴포넌트에서 이벤트 사용
    //; 1) this를 쓰기 위해서 bind 사용
    //  - js에서는 this를 호출하는 방법에 의해 결정
    //    (함수가 호출될 때마다 this가 다를 수 있음)
    // - bind() 메서드는 호출되는 방법과 무관하게 this를 묶어버림
    this.printConsole = this.printConsole.bind(this);
  }

  //-- bind
  printConsole() {
    console.log('this', this);
    console.log('state: ', this.state);
  }

  //] 2. 클래스 컴포넌트에서 이벤트 사용
  //; 2) 화살표 함수
  // 화살표 함수는 this가 아예 없음 !
  // 선언될 시점에 상위 스코프가 this로 바인딩
  //   printConsole = () => {
  //     console.log('this', this);
  //   };

  printConsole2 = (msg, e) => {
    console.log('msg : ', msg);
    console.log(e.target);
  };

  printConsole3(msg, e) {
    console.log(this);
    console.log(msg);
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>print Console (인자 X)</button>
        <br />
        <button onClick={(e) => this.printConsole2('msg', e)}>
          {/* bind(this, '인자1', '인자2', ... , e) : e를 제일 뒤에 적으므로, 
           this도 e를 제일 뒤에
            (e) => this.printConsole2('msg', e) */}
          print Console (인자 O)
        </button>
        <br />
        <button onClick={this.printConsole3.bind(this, 'msg')}>
          {/* bind(this, '인자1', '인자2', ... , e)  */}
          {/* bind(null, '인자1', '인자2', ... , e)  */}
          print Console (인자 O, bind)
        </button>
      </div>
    );
  }
}

export default ClassBind;
