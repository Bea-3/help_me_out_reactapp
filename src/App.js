import LandingPage from './components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import SignUpLogin from './components/SignUpLogin/SignUpLogin';
import VideoRepository from './components/VideoRepository/VideoRepository';
import SingleVideoRepo from './components/SingleVideoRepo/SingleVideoRepo';
import VideoPlayback from './components/VideoPlayback/VideoPlayback';

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
      <Route path="/video-repo">
        <VideoRepository/>
      </Route>
      <Route path="/single-video/:id">
        <SingleVideoRepo/>
      </Route>
      <Route path="/video-playback">
        <VideoPlayback/>
      </Route>
    </Switch>
    </div> 
    </Router>
  );
}

export default App;
