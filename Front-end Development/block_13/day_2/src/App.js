import './App.css';
import ReactRouter from './components/ReactRouter';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <main>
      <BrowserRouter>
        <ReactRouter />
      </BrowserRouter>
    </main>
  );
}

export default App;
