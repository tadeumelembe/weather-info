import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Views/Weather'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Views/Home';


function App() {
  return (
    <>
      <Router>
       

        <Switch>
          <Route path="/weather/:address/:lat/:lng">
            <Weather />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;


