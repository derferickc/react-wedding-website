import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./Navigation";
import Welcome from "./Welcome";
import Moments from "./Moments";
import Ourstory from "./Ourstory";
import Registry from "./Registry";
import Rsvp from "./Rsvp";
import Dialog from "./Dialog";
import "./App.scss";
 
class App extends Component {
  constructor(props) {
    super(props)

     this.state = {
        overlayIsOpen: false
      }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <div className="navigation text-center">
            <h1 className="header">Frederick &amp; Grace</h1>
            <Navigation />

            <div className="trigger-wrapper">
              <span onClick={(e) => this.setState({ overlayIsOpen: true })} className="trigger-button">MENU</span>
            </div>
            <Dialog overlayIsOpen={this.state.overlayIsOpen} onClose={(e) => this.setState({ overlayIsOpen: false })} />
          </div>
          
          <div className="content">
            <Route exact path="/" component={Welcome}/>
            <Route path="/ourstory" component={Ourstory}/>
            <Route path="/rsvp" component={Rsvp}/>
            <Route path="/moments" component={Moments}/>
            <Route path="/registry" component={Registry}/>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}
 
export default App;