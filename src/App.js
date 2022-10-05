import { Route, Switch } from 'react-router-dom';
import './App.css';
import Gameboard from './components/Gameboard/Gameboard';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Options from './components/Options/Options';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Message />
          <Options />
          <Gameboard />
        </Route>
        <Route path="/stats" component={Stats} />
      </Switch>
    </div>
  );
}

export default App;
