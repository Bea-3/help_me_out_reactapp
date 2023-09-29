import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUp_Login from './components/SignUpLogin/SignUp_Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route path="/signup">
        <SignUp_Login/>
      </Route>
    </Switch>
    </div> 
    </Router>
  );
}

export default App;
