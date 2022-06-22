import imagem from './everton.jpg';
import './App.css';

function App() {
  function mensagem() {
    alert("MDS POR QUE VOCÊ APERTOU O BOTÃO?!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá! Eu sou o Everton Garcia!</h1>
        <img src={imagem} className="Everton" alt="Everton fazendo evertices" />
        <p>
         Este é o meu primeiro site React
        </p>
      
        <button onClick={mensagem}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
