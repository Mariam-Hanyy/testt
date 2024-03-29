import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default class Navpar extends Component {
  render() {
    return (
      <>
  

     
<nav id="navbar-example" className="navbar navbar-expand-lg   w-100">
  <div className="container">
    <Link className="navbar-brand" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={`${({ isActive }) =>(isActive ? 'active': '') } nav-link`} to="/about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-capitalize  " to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-capitalize " to="/contact">CONTACT
          </NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>

  





      </>
    )
  }
}
