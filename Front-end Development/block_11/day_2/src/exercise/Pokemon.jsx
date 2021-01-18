import React, { Component } from 'react'
import pokemons from './data';

export default class Pokemon extends Component {
  constructor () {
    super();

    this.showPokemons = this.showPokemons.bind(this);
  }
  showPokemons = () => {
    return pokemons.map((pokemon) => {
      const { name, type, moreInfo, image,
      averageWeight } = pokemon;
      return (
        <section className="square">
        <div className='pokemonInfo'>
        <h4>{ name }</h4>
        <span>{ type }</span>
        <span>Average wight: { averageWeight.value } { averageWeight.measurementUnit }</span>
        <a href={moreInfo}>More Info</a>
        </div>
        <img src={image} alt=""/>
        </section>
      );
    });
  }

  render() {
    return (
        this.showPokemons()
    );
  }
}
