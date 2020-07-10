import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import SignUp from './Components/CreateProfile/SignUp.jsx';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (   
      <div>
      <div id="createprofile" style={{display: "block"}}>
      <SignUp />
      </div>
      <div id="homepage" style={{display: "none"}}>
         <Home />
         </div>
      </div>
    );
  }
}

export default App;
