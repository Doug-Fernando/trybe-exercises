import React, { Component } from 'react';
import './Form.css'


class Form extends Component {
  constructor() {
    super();
    
    this.state = {
      comida: '',
      nome: '',
      email: '',
      miniText: '',
      vaiOuNao: false
    }
    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFile({ target }) {
    console.log(this.fileInput.current.files[0]) // .name 
  }

  render() {
    return (
      <form autoComplete='off'>
        <fieldset className='form'>
          <legend>Algumas informações</legend>
          <label htmlFor="comida">
            Comida:
          <select value={ this.state.comida } name="comida" onChange={ this.handleChange }>
            <option></option>
            <option value='pizza'>Pizza</option>
            <option value='sorvete'>Sorvete</option>
          </select>
          </label>
          <label htmlFor="nome">
            Nome:
            <input onChange={ this.handleChange } type="text" name="nome" />
          </label>
          <label htmlFor="email">
            email:
            <input value={this.state.email} type="email" onChange={ this.handleChange } name="email"/>
          </label>
          <label htmlFor="miniText">
            <textarea onChange={ this.handleChange }
              name="miniText" cols="30" rows="10"
              placeholder='Digite algo...'></textarea>
          </label>
          <label htmlFor="checkBox">
            CheckBox:
            <input onClick={this.handleChange} type="checkbox" name="vaiOuNao" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Outra informações</legend>
          <input ref={this.fileInput} type="file" name="file" onChange={ this.handleFile } />
        </fieldset>
      </form>
    );
  }
}


export default Form;
