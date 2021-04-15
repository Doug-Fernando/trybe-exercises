import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About'

export default class ReactRouter extends Component {
  render() {
    return (
      <div>
        Home
        <Route path='/about' component={About} />
      </div>
    )
  }
}
