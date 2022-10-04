import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import Header from './components/Header/Header';
import { useGame } from './context/gameContext';

function App() {
  // endGame conditions checked and active switched to false

  return (
    <div className="App">
      <Header />
      {/* <Message /> */}
      <Gameboard />
    </div>
  );
}

export default App;
