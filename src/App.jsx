import Boton from './components/Boton';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h3>Basic Interactive Calculator</h3>
      </div>
      <div className="calculator-container">
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
