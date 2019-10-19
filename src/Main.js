import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from "./Welcome";
import Moments from "./Moments";
import Ourstory from "./Ourstory";
import Registry from "./Registry";
import Rsvp from "./Rsvp";
import "./Main.scss";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">

          <div className="navigation text-center">
            <h1 class="header">Frederick &amp; Grace</h1>

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
            
          </div>
          
          <div className="content">
            <Route exact path="/" component={Welcome}/>
            <Route path="/ourstory" component={Ourstory}/>
            <Route path="/rsvp" component={Rsvp}/>
            <Route path="/moments" component={Moments}/>
            <Route path="/registry" component={Registry}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;