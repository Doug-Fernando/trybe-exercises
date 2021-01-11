import './App.css';
import HellowWorld from './HelloWorld';
import Component from './Component';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myArray = ['React', 'HTMl', 'CSS', 'JavaScript', 'PHP'];

function App() {
  return (<div>
    <HellowWorld />
    <Component />

    <div>Exercise:</div>
    {myArray.map(item => task(item))};
  </div>);
}

export default App;
