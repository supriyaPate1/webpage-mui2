import React from 'react'
import './science.css'
import { Outlet, Link } from "react-router-dom";
// import { Route,Routes } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <div className='Nav'>
                <div className='icon'>
                  <img src='logo.png' alt="no IMG"/>
                </div>   
                <div className='abv'>
                    
                </div>
                <div >
                   <h5><Link to ="/">Home</Link></h5>
                </div>
                <div>
                   <h5><Link to="/about">About</Link></h5>
                </div>
                <div>
                   <h5><Link to="/service">Service</Link></h5>
                </div>
                <div>
                   <h5><Link to="/contact">Contact </Link></h5>
                </div>
                <div>
                  <button id="lgin">Login</button>
                </div>
                <div className='space'></div>
            </div>  
            <Outlet/>
    </>
  )
}
