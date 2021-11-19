import Login from './Login';
import Verify from './Verify';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
 
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/home">
          <Verify />
        </Route>          
      </Switch>
      </div>
    </Router>
  );
}

export default App;
