import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Navigation from './components/Navigation';

<<<<<<< HEAD
import Homepage from '../src/Components/Homepage/Homepage';

/*

This is our root component, so when we call start, this gets rendered first

Make sure when we want to use another component to import it, like I did with Homepage


*/
function App() {
  return (
   <div>
     <Homepage/>
   </div>
  );
=======
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
>>>>>>> Caelen-1
}

export default App;
