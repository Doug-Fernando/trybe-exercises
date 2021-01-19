import React, { Component } from 'react'

export default class SelectState extends Component {
  render() {
    
    
const states = ['Acre (AC)',
'Alagoas (AL)',
'Amapá (AP)',
'Amazonas (AM)',
'Bahia (BA)',
'Ceará (CE)',
'Distrito Federal (DF)',
'Espírito Santo (ES)',
'Goiás (GO)',
'Maranhão (MA)',
'Mato Grosso (MT)',
'Mato Grosso do Sul (MS)',
'Minas Gerais (MG)',
'Pará (PA)',
'Paraíba (PB)',
'Paraná (PR)',
'Pernambuco (PE)',
'Piauí (PI)',
'Rio de Janeiro (RJ)',
'Rio Grande do Norte (RN)',
'Rio Grande do Sul (RS)',
'Rondônia (RO)',
'Roraima (RR)',
'Santa Catarina (SC)',
'São Paulo (SP)',
'Sergipe (SE)',
'Tocantins (TO)'];

    const { name, value, children } = this.props;
    return (
      <label htmlFor="state">
        {children}
        <select name={ name } value={ value } onChange={this.props.onChange}>
          <option value=""></option>
          {states.map((state) => (<option key={ state } value={ state }>{ state }</option>))}
        </select>
      </label>
    )
  }
}
