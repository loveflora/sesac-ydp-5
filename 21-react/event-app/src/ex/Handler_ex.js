import { Component } from 'react';

class Handler_ex extends Component {
  constructor(props) {
    super(props);

    console.log('constructor this : ', this);

    this.state = {
      message: 'Hello World!',
    };
  }

  handler = () => {
    this.setState({
      message: 'Goodbye World!',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handler}>Click</button>
      </div>
    );
  }
}

export default Handler_ex;
