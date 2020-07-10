import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/CreateProfile/SignUp.jsx';
import Navigation from './Components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        <img src="/Logo.png" alt=""/>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/SignUp" component={SignUp}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
