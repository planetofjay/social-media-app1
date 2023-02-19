import React from "react";

export default class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      lastAction: 'none'
    }
  }

  render() {
    const handleIncrementClick = () => {
      // this.state.counter = 15; // Wrong
      this.setState({ 
        counter: this.state.counter + 1,
        lastAction: 'Increased'
      });
    }

    const handleDecrementClick = () => {
      this.setState({
        counter: this.state.counter - 1,
        lastAction: 'Decreased'
      });
    }

    return (
      <div>
        Counter: {this.state.counter}
        <div>Last Action: {this.state.lastAction}</div>
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Increase</button>
      </div>
    );
  }
}