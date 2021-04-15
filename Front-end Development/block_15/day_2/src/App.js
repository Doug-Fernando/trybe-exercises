// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       joke: '',
//     }
//   }

//   async componentDidMount() {
//     const API_URL = 'https://icanhazdadjoke.com/';
//     const req = await fetch(API_URL, { headers: { Accept: 'application/json' } });
//     const { joke } = await req.json();
//     this.setState({joke})
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.joke}
//       </div>
//     );
//   }
// }

// export default App;

/// Testando input em react

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            onChange={(e) => this.handleInput(e)}
            name='nome'
            data-testid='input-nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            onChange={(e) => this.handleInput(e)}
            name='email'
            data-testid='input-email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}

export default App;
