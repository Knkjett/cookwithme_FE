import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Materialize from 'materialize-css/dist/js/materialize.min.js'
import AuthContext from '../contexts/auth';

class Footer extends Component {
  componentDidMount = () => {
    let elems = document.querySelectorAll('.sidenav');
    Materialize.Sidenav.init(elems, { inDuration: '250' });
  }
  LoggedIn = () =>{
    return (<>
      <nav className='footer' style={{position:'absolute',zIndex:'2',backgroundColor:'tomato'}}>
        <div className='nav-wrapper' >
          <button data-target='mobile-demo' style={{ padding: '0', border: 'none', background: 'none' }} className='sidenav-trigger hide-on-large-only'><i className='material-icons'>menu</i></button>
          <Link to='/' className='brand-logo'>CookWithMe</Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><Link to='/'>Home</Link></li>
            <li><Link to='/userprofile'>User Profile</Link></li>
            <li><Link to='/AboutUs'>About Us</Link></li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
      <li><Link to='/'>Home</Link></li>
        <li><Link to='/#/userprofile'>User Profile</Link></li>
        <li><Link to='/#/AboutUs'>About Us</Link></li>
      </ul>
    </>)
  }
  LoggedOut = () =>{
    return (<>
      <nav className='footer' style={{position:'absolute',zIndex:'2',backgroundColor:'tomato'}}>
        <div className='nav-wrapper' >
          <button data-target='mobile-demo' style={{ padding: '0', border: 'none', background: 'none' }} className='sidenav-trigger hide-on-large-only'><i className='material-icons'>menu</i></button>
          <Link to='/' className='brand-logo'>CookWithMe</Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Sign Up</Link></li>
            <li><Link to='/AboutUs'>About Us</Link></li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
       <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Sign Up</Link></li>
        <li><Link to='/AboutUs'>About Us</Link></li>
      </ul>
    </>)
  }
  render() {
    return (<>
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return <this.LoggedIn />
            } else {
              return <this.LoggedOut />
            }
          }
        }
      </AuthContext.Consumer>
      </>)
  }
}

export default Footer;