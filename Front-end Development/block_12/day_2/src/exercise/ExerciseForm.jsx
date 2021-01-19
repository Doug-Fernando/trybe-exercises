import React, { Component } from 'react';
import FirstFieldSet from './FirstFieldSet';
import SecondFieldSet from './SecondFieldSet';

export default class ExerciseForm extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: '',
        resumeCur: '',
        jobArea: '',
        descJob: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitBtn = this.submitBtn.bind(this);
    this.removeSpecialChar = this.removeSpecialChar.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    if(name === 'name') value = value.toUpperCase();
    if(name === 'address') value = this.removeSpecialChar(value);
    this.setState({
      [name]: value
    });
  }

  submitBtn(event) {
    event.preventDefault();
  }

  removeSpecialChar(address) {
    return address.replace(/[^\w\s.-]/gi, '');
  } 


  render() {
    const values = this.state;
    return (
      <form autoComplete='off'>
        <FirstFieldSet value={ values } onChange={ this.handleChange } />
        <SecondFieldSet onChange={this.handleChange} />
        <button type='submit' onClick={ this.submitBtn }>Enviar</button>
      </form>
    )
  }
}
