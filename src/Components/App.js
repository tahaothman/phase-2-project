import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import CheckOut from "./CheckOut";
import Yard from "./Yard";
import CheckIn from './CheckIn';

function App() {
  return (
    <div>
    <div className='navbar'><NavBar /></div>
    <div className='App'> 
      <Switch>
        <Route path='/Yard' >
          <Yard/>
        </Route>
        <Route path='/checkin' >
          <CheckIn/>
        </Route>
        <Route path='/checkout' >
          <CheckOut/>
        </Route>
        <Route path='/' >
          <Home/>
        </Route>
      </Switch>
    </div>
  </div>  
  )
}

export default App;
