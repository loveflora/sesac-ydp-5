import React, { Component } from 'react';

export default class ClassTest1 extends Component {
  name = '세화';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12px',
  };
  render() {
    return <div style={this.my_style}>{this.name}</div>;
  }
}
