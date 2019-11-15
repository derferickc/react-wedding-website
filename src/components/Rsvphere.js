import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
import "./App.scss";

class Rsvphere extends Component {

  render() {
    return (
      <div className="rsvp-here col-12 text-center">
        <Link className="nav-link" to="/rsvp">
          <div className="rsvp-button">
            RSVP HERE
          </div>
        </Link>
      </div>
    );
  }
}
export default Rsvphere;