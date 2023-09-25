import React, { Component } from 'react';
import pic from './img.jpeg';

export default class ClassTest2 extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20px',
  };
  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요</h2>
        <img src={pic} alt="사진" />
      </div>
    );
  }
}
