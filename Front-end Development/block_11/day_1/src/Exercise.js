import React, { Component } from 'react'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myArray = ['React', 'HTMl', 'CSS', 'JavaScript', 'PHP', 'MongoDB'];

export default class Exercise extends Component {
  render() {
    return (
      <div>
        {myArray.map(item => task(item))}
      </div>
    )
  }
}
