import React, { Component } from 'react';
import PropTypes from 'prop-types';

// export default class ClassComponent extends React.Component {
export default class ClassComponent extends Component {
  student = '학생';

  // 클래스형 컴포넌트는 render 함수 필수 !
  render() {
    const { name } = this.props;
    return (
      <div>
        {/* this 추가해야 함 ! */}
        <h1>Hi! {this.student}</h1>
        <p>여기는 Class Component</p>
        <p>
          {/* this 추가해야 함 ! */}
          {/* 새로운 컴포넌트의 이름은 <b>{this.props.name}</b> */}
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }

  static defaultProps = {
    name: '기본 Props',
  };

  // default도 없어야 isRequired 동작함
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
}
