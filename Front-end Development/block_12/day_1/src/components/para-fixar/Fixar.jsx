import React, { Component } from 'react'

export default class Fixar extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
      bgColor1: 'white',
      bgColor2: 'white',
      bgColor3: 'white',
    }
  }
  
  handleClick() {
    this.setState((lastState1, _props) => {
      const IncNum1 = lastState1.clicksBtn1 + 1;
      const setColor1 = IncNum1 % 2 === 0 ? 'green' : 'white';
      console.log(setColor1);
      return {clicksBtn1: IncNum1, bgColor1: setColor1};
    });
  }

  handleClick2() {
    this.setState((lastState2, _props) => {
      const IncNum2 = lastState2.clicksBtn2 + 1;
      const setColor2 = IncNum2 % 2 === 0 ? 'cyan' : 'white';
      console.log(setColor2);
      return {clicksBtn2: IncNum2, bgColor2: setColor2};
    });
  }
  
  handleClick3() {
    this.setState((lastState3, _props) => {
      const IncNum3 = lastState3.clicksBtn3 + 1;
      const setColor3 = IncNum3 % 2 === 0 ? 'blue' : 'white';
      console.log(setColor3);
      return {clicksBtn3: IncNum3, bgColor3: setColor3};
    });
  }

  render() {
    const {clicksBtn1, clicksBtn2, clicksBtn3,
      bgColor1, bgColor2, bgColor3 } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click 1</button>
        <button onClick={this.handleClick2}>Click 2</button>
        <button onClick={this.handleClick3}>Click 3</button>
        <h3 style={{background: bgColor1}} >Button 1: {clicksBtn1}</h3>
        <h3 style={{background: bgColor2}}>Button 2: {clicksBtn2}</h3>
        <h3 style={{background: bgColor3}}>Button 3: {clicksBtn3}</h3>
      </div>
    )
  }
}
