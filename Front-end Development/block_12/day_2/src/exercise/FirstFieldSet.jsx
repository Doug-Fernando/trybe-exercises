import React, { Component } from 'react';
import Input from './Input';
import SelectState from './SelectState';

export default class FirstFieldSet extends Component {
  render() {
    const { onChange, value } = this.props;
    const { name, email, cpf, address, city } = value;
    return (
      <fieldset>
        <legend>Dados Pessoais:</legend>
          <Input onChange={ onChange } value={ name }
            maxlength='40' type='text' name='name'
            id='name'>
            Nome: 
          </Input>

          <Input value={ email } onChange={ onChange } 
            maxlength='50' type='email' name='email'
            id='email'>E-mail: </Input>

          <Input value={ cpf } onChange={ onChange } 
            maxlength='11'type='number'
            name='cpf' id='cpf'>
              CPF: 
          </Input>

          <Input value={ address } onChange={ onChange } maxlength='200'type='text'
            name='address' id='address'>Endereço: </Input>
          <Input onChange={ onChange }
            value={ city }
            maxlength='28'type='text'
            name='city' id='city'>Cidade: </Input>

          <SelectState onChange={ onChange }
            name='state'>Estado: </SelectState>
      </fieldset>
    )
  }
}
