import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <>
        <section className='showDeBola'>
          <h1>Pokedex</h1>
          <section className='pokedex'>
            <Pokemon pokemons={ pokemons } />
          </section>
        </section>
      </>
    );
  }
}


export default Pokedex;
