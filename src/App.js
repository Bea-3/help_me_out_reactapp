import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';
import VideoRepository from './components/VideoRepository/VideoRepository';

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
      <Route path="/videoRepo">
        <VideoRepository/>
      </Route>
    </Switch>
    </div> 
    </Router>
  );
}

export default App;
