import React, { createRef } from "react";

export default class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 3,
      lastAction: 'none',
      maxNumber: null,
      primeNumbers: null,
      isCalculating: false
    }
    this.inputIncrease = createRef();
    this.inputDecrease = createRef();

    console.log('--- Class component constructed ---');
  }

  // Mounting: 
  // When an instance of a component is being created and inserted into the DOM. 
  componentDidMount() {
    // setTimeout(() => {
    //   const maxNumber = 200;
    //   const primeNumbers = countPrimeNumbers(maxNumber);
    //   this.setState({
    //     isCalculating: false,
    //     maxNumber: maxNumber,
    //     primeNumbers: primeNumbers
    //   });
    // }, 10);

    let count = 0;
    this.timer = setInterval(() => {
      count++;
      console.log('Count:', count);
    }, 1000);
    
    console.log('Class component mounted');
  }

  // Unmounting:
  // When the component instance is being removed from the DOM.
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('Class component destroyed');
  }

  render() {
    const handleIncrementClick = () => {
      // this.state.counter = 15; // Wrong
      this.setState({ 
        counter: this.state.counter + 1,
        lastAction: 'Increased'
      });
      this.inputIncrease.current.focus();
    }

    const handleDecrementClick = () => {
      this.setState({
        counter: this.state.counter - 1,
        lastAction: 'Decreased'
      });
      this.inputDecrease.current.focus();
    }
  
    console.log('Class component rendered');

    return (
      <div>
        {this.state.isCalculating && (
          <div><strong>Calculating prime numbers. Please, wait...</strong></div>
        )}

        {this.state.primeNumbers !== null && (
          <div>
            There are {this.state.primeNumbers} prime numbers 
            between 2 and {this.state.maxNumber}.
          </div>
        )}

        <div>Counter for {this.props.userName}: {this.state.counter}</div>
        <div>Last Action: {this.state.lastAction}</div>
        <input 
          type='text' 
          placeholder='Focus on increase' 
          ref={this.inputIncrease}
        />
        <button onClick={handleIncrementClick}>Increase</button>
        <button onClick={handleDecrementClick}>Decrease</button>
        <input 
          type='text' 
          placeholder='Focus on decrease' 
          ref={this.inputDecrease}
        />
      </div>
    );
  }

  // Updating:
  // When a component is re-rendered as a result of changes to its state or props.
  componentDidUpdate(prevProps, prevState) {
    console.log('Class component updated');
    if (this.state.lastAction !== prevState.lastAction) {
      console.log('TODO: Save data...');
    }
  }

}