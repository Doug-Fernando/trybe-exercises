import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const { type, name, id, children, maxlength, value,
      onChange } = this.props;

    return (
      <label htmlFor={ id }>
        {children}
        <input value={ value } onChange={ onChange } required
          maxLength={ maxlength } type={ type } name={ name } id={ id }
        />
      </label>
    )
  }
}
