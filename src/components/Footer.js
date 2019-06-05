import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Materialize from 'materialize-css/dist/js/materialize.min.js'

class Footer extends Component {
  componentDidMount = () => {
    let elems = document.querySelectorAll('.sidenav');
    Materialize.Sidenav.init(elems, { inDuration: '250' });
  }
  render() {
    return (<>
      <nav className='footer' style={{position:'absolute',zIndex:'2'}}>
        <div className='nav-wrapper' >
          <button data-target='mobile-demo' style={{ padding: '0', border: 'none', background: 'none' }} className='sidenav-trigger hide-on-large-only'><i className='material-icons'>menu</i></button>
          <Link to='/' className='brand-logo'>CookWithMe</Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><a href='/#/userprofile'>User Profile</a></li>
            <li><a href='!#'>About Us</a></li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
        <li><a href='/#/userprofile'>User Profile</a></li>
        <li><a href='!#'>About Us</a></li>
      </ul>
    </>)
  }
}

export default Footer;