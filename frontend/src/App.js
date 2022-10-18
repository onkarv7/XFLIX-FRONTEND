import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Videopage from './components/Videopage';
import { Route, Switch } from "react-router";
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
const endpoint = "https://8ea560cf-d096-4965-928f-07f0c06fe93b.mock.pstmn.io/v1/videos"


function App() {
  return (
    
    <Router>
    <React.StrictMode>
    <div className="App">
      <Switch>
      <Route path="/video/:id" >
        <Videopage />
      </Route>
      <Route exact path="/" >
        <Main />
      </Route>
      </Switch>
    </div>
    </React.StrictMode>
    </Router>
  );
}

export default App;
