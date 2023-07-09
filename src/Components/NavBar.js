import React from "react";
import { NavLink } from "react-router-dom";
import './App.css'

function NavBar() {
  return (
    <div className="navbar">
      <NavLink className="nav" exact to='/'>Home</NavLink>
      <NavLink className="nav" exact to='/yard'>Yard</NavLink>
      <NavLink className="nav" exact to='/checkin'>CheckIn</NavLink>
      <NavLink className="nav" exact to='/checkout'>CheckOut</NavLink>
    
    
    </div>
  )
}

export default NavBar;
