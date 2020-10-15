import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Timeline from './components/timeline/timeline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path="/">
          <Link to={"/timeline"}>Timeline</Link>
        </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
