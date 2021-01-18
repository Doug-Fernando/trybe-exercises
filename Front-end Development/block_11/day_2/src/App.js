import Greetings from './para-fixar/Greetings';
import Image from './para-fixar/Image';
import AppForUserProfile from './para-fixar/AppForUserProfile';
import AppForOrder from './para-fixar/AppForOrder';
import Pokemons from './exercise/data';
import './exercise/Pokemon.css';
import Pokedex from './exercise/Pokedex';



function App() {
  return (
    <div>
      {/* <h1>Para Fixar: </h1>
      <Greetings firstName={'Douglas'} lastName='Fernando' />
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
      <hr />
      <AppForUserProfile />
      <hr />
      <AppForOrder />
      <hr />  */}

      <Pokedex pokemons={ Pokemons } />

    </div>
  );
}

export default App;
