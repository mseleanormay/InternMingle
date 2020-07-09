import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        <img src="/Logo.png" alt=""/>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Profile" component={Profile}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
