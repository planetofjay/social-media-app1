import React from "react";

export default class CounterClass extends React.Component {
  constructor() {
    super();
    this.handleOneMoreClickEvent = this.handleOneMoreClickEvent.bind(this);
  }

  render() {
    // const { name, age } = this.props;

    const handleClickEvent = function () {
      console.log('Fn Expression:', this);
      // console.log('Fn Expression called by', name);
    } 


    const handleAnotherClickEvent = () => {
      console.log('Arrow Fn:', this);
      // console.log('Arrow Fn called by', name);
    }
    
    return (
      <div>
        Class: {this.props.name}, {this.props.age}
        <button onClick={handleClickEvent}>
          Click here
        </button>
        <button onClick={handleAnotherClickEvent}>
          Click here too
        </button> 
        <button onClick={this.handleOneMoreClickEvent}>
          One more click
        </button>
      </div>
    );
  }

  handleOneMoreClickEvent = () => {
    console.log('Method called by', this.props.name);
  }
}