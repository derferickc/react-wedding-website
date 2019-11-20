import React, { Component } from "react";

class Rsvp extends Component {
  render() {

    return (
      <div className="partial text-center">
        <div className="row">
          <div className="headerImage col-10 offset-1 col-sm-8 offset-sm-2">
             <img src="https://firebasestorage.googleapis.com/v0/b/choesenbygrace-wedding-website.appspot.com/o/placeholder.jpg?alt=media&token=5dc2a64e-01c4-4269-aad5-d2520f848859" alt="ourstory hero" />
          </div>
          <div className="rsvp-here col-12 text-center">
            <p className="intro">If you were not invited with a guest, please do not indicate with a plus one on the RSVP!</p>
            <a href="http://choesenbygrace.rsvpify.com">
              <div className="rsvp-button">
                RSVP ON RSVPify
              </div>
            </a>
            <p className="intro">Please contact Fred or Grace for other questions</p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Rsvp;