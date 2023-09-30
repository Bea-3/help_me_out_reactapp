import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/">
        <LandingPage/>
      </Route>
      <Route path="/signup">
        <SignUpLogin/>
      </Route>
    </Switch>
    </div> 
    </Router>
  );
}

export default App;
