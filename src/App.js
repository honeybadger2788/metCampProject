import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Game from './views/Game'

function App() {
  return (
    <Router>
    <div className="App">
      Quizgamet
    </div>
    <div style={{display:'flex',flexDirection:'column'}}>
      <Link to="/">Home</Link>
      <Link to="/game">Juego</Link>
    </div>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/game">
        <Game/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
