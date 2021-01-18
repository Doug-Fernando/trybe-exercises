import React, { Component } from 'react'

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const styles = {
  color: 'blue',
  fontWeight: '700',
  fontSize: '15px'
}

const myArray = ['React', 'HTMl', 'CSS', 'JavaScript', 'PHP', 'MongoDB'];

export default class Exercise extends Component {
  render() {
    return (
      <div style={styles}>
        {myArray.map(item => task(item))}
      </div>
    )
  }
}
