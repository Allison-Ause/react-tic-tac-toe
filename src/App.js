import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import Header from './components/Header/Header';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Gameboard />
    </div>
  );
}

export default App;
