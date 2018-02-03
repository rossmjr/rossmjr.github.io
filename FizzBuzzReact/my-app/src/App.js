import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
      // fizz: false,
      // buzz: false
    };
  }

  Increment = () => {
    this.setState({clicks: this.state.clicks +1});
    // this.check();
  }
  Decrement = () => {
    this.setState({clicks: this.state.clicks -1});
    // this.check();
  }
  // check() {
  //   if (this.state.clicks % 3 === 0) {
  //     this.setState({ fizz: true });
  //   }
  //   else {
  //     this.setState({ fizz: false });
  //   }
  //   if (this.state.clicks % 5 === 0) {
  //     this.setState({ buzz: true });
  //   }
  //   else {
  //     this.setState({ buzz: false });
  //   }
  

  render() {
    return (
      <div>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <h2> {this.state.clicks}</h2>
    {this.state.clicks % 3 === 0 ? (this.state.clicks % 5 === 0 ? <h3>FizzBuzz</h3> : <h3>Fizz</h3>) : (this.state.clicks % 5 === 0 ? <h3>Buzz</h3> : '')};
        </div>
    );
  }
}
export default App;
