import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"


function Home() {

  useEffect(()=>{
    
fetch('')
.then(res => res.json())
.then(json => console.log(json))
            
  })
  return (
    <div className="home">
      <h1>Welcome To The Yard Management System</h1>
    
    </div>
  )
}

export default Home;
