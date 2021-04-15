import React from 'react';
import List from './components/List';
import InputsList from './components/InputList';

class App extends React.Component {
  render() {
    return (
      <div>
          <InputsList />
          <List />
      </div>
    );
  }
}

export default App;
