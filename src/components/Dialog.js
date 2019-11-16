import React, { Component } from 'react';
import {
  Link,
} from "react-router-dom";

let dialogStyles = {
    width: '100%',
    margin: '0 auto',
    position: 'fixed',
    height: '100%',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '1',
    backgroundColor: '#ffffff',
    padding: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
};

let dialogCloseButtonStyles = {
    marginBottom: '0px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: '20px'
};


class Dialog extends Component {
    render() {
    	const mobileNavigation = [
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

        let dialog = (
            <div className="navbar-overlay" style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>
				
                <h1 className="header">Frederick &amp; Grace</h1>

				<ul className="navbar-nav">
		            <li className="nav-item" key="Welcome">
		              <Link className="nav-link" to='/' onClick={this.props.onClose}>Welcome</Link>
		            </li>

		          { mobileNavigation.map((nav) => (
		            <li className="nav-item" key={nav.cta}>
		              <Link className="nav-link" to={nav.url} onClick={this.props.onClose}>{nav.cta}</Link>
		            </li>
		          ))}
		          
		        </ul>
            </div>
        );

        if (! this.props.overlayIsOpen) {
            dialog = null;
        }

        return (
            <div className="overlay-wrapper">
                {dialog}
            </div>
        );
    }
}

export default Dialog;
