import React, { Component } from "react";
import {
  NavLink,
  // Route,
  // HashRouter
} from "react-router-dom";
 
class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav">
          <li className="nav-item">
           <NavLink className="nav-link" exact to="/">Welcome</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ourstory">Our Story</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/rsvp">RSVP</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/moments">Moments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/registry">Registry</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
 
export default Navigation;