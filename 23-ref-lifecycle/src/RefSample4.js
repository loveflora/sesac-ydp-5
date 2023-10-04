import React, { Component } from 'react';

export default class RefSample4 extends Component {
  // 컴포넌트 내부에서 변수에 React.createRef() 담기
  inputRef = React.createRef();

  handleFocus = () => {
    console.log(this);
    // 3과 다른 점 : ref 설정 후, DOM 접근 위해서는, this.inputRef.current까지 접근
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        {' '}
        <p>클래스형 컴포넌트에서 버튼 클릭 시, input에 focusing 처리</p>
        {/* ref props 사용해서 ref 설정 */}
        <input
          type="text"
          ref={
            // inputRef : ref로 사용될 변수 이름
            this.inputRef
          }
        />
        <button onClick={this.handleFocus}>Focus</button>
      </div>
    );
  }
}
