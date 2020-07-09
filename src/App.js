import React from 'react';
import logo from './logo.svg';
import './App.css';

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
}

export default App;
