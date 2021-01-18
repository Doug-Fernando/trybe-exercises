import React, { Component } from 'react'
import propTypes from 'prop-types';

class Greetings extends Component {
  render() {
    return <h3>Hello, {this.props.firstName} {this.props.lastName}</h3>;
  }
}


Greetings.propTypes = {
  firstName: propTypes.string.isRequired
}

export default Greetings;
