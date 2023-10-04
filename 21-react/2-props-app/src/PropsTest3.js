import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PropsTest3 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }

  static defaultProps = {
    text: '이건 기본 text props입니다.',
  };

  // default도 없어야 isRequired 동작함
  static propTypes = {
    text: PropTypes.string.isRequired,
  };
}
