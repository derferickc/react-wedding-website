import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
 
class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navigation: [
        {
          cta: 'Our Story',
          url: '/ourstory'
        },
        {
          cta: 'RSVP',
          url: 'rsvp'
        },
        {
          cta: 'Moments',
          url: '/moments'
        },
        {
          cta: 'Registry',
          url: '/registry'
        },
      ]
    }
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
            <li className="nav-item" key="Welcome">
              <Link className="nav-link" to='/'>Welcome</Link>
            </li>

          { this.state.navigation.map((nav) => (
            <li className="nav-item" key={nav.cta}>
              <Link className="nav-link" to={nav.url}>{nav.cta}</Link>
            </li>
          ))}
          
        </ul>
      </nav>
    );
  }
}
 
export default Navigation;