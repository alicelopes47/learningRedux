import logo from './logo.svg';
import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício react/redux Simples</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
        <Soma></Soma>
      </div>
    </div>
  );
}

export default App;
