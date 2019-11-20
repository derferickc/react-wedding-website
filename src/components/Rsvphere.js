import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
import "./App.scss";

class Rsvphere extends Component {

  render() {
    return (
      <div className="rsvp-here col-12 text-center">
        <NavLink className="nav-link" to="/rsvp">
          <div className="rsvp-button">
            RSVP HERE
          </div>
        </NavLink>
      </div>
    );
  }
}
export default Rsvphere;