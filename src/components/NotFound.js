import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
 
class NotFound extends Component {
  render() {
    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-10 offset-1 col-sm-8 offset-sm-2">
            <h2 className="subheader col-12">404</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/placeholder.jpg?alt=media&token=5dc2a64e-01c4-4269-aad5-d2520f848859" alt="registry hero" />
          </div>
          <div className="rsvp-here col-12 text-center">
            <div className="intro col-10 offset-1">
              Whoa, you took a wrong turn somewhere...
            </div>
            <Link className="nav-link" to='/'>
              <div className="rsvp-button">TAKE ME HOME</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
 
export default NotFound;