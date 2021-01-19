import React, { Component } from 'react';

export default class SecondFieldSet extends Component {
  render() {
    const { onChange } = this.props;
    
    return (
      <fieldset>
        <legend>Dados do seu último emprego: </legend>
        <label htmlFor="resumeCur">
          Resumo do currículo:
          <textarea onChange={ onChange } maxLength='1000'
            name="resumeCur" id="resumeCur" cols="30" rows="5"></textarea>
        </label>

        <label htmlFor="jobArea">
          Cargo:
          <textarea onChange={ onChange } name="jobArea"
            id="jobArea" cols="30" rows="5" maxLength='40'></textarea>
        </label>

        <label htmlFor="descJob">
          Descrição do cargo:
          <textarea onChange={ onChange } maxLength='500'
            name="descJob" id="descJob" cols="30" rows="5"></textarea>
        </label>
      </fieldset>
    )
  }
}
