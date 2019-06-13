import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//=====Container
import Navbar from './components/Logo'
import Cookmode from './containers/cookmode'
import CreateRecipe from './containers/CreateRecipe/Create'
import RecipePage from './containers/RecipePage/RecipePage'
import Footer from './components/Footer'
import Member from './components/Member'
import LoginSignup from './containers/LoginSignup/LoginSignup';
import UserProfile from './components/UserProfile';
import Landing from './containers/Landing';
import Logout from './containers/Logout/Logout';

//====Context
import firebase from './firebase';
import AuthContext from './contexts/auth';
import EmailContext from './contexts/email'
import AboutUs from './components/AboutUs';

const Err = () => {
  return (<>
    <h2 style={{ marginTop: '0px', paddingTop: '150px', paddingBottom: 'calc(100vh - 330px' }}>404 Missing Page.</h2>
  </>)
}
class App extends Component {
  state = {
    user: null,
    email: null
  }


  componentDidMount = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, email: user.email });
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  render() {
    return (<>
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <EmailContext.Provider value={this.state.email}>
            <Route path='/' component={Navbar} />
            <Route path='/' component={Member} />
            <Switch>
              <Route path='/' exact component={Landing} />
              <Route path='/login' exact component={LoginSignup} />
              <Route path='/create' exact component={CreateRecipe} />
              <Route path='/recipepage/:id' exact component={RecipePage} />
              <Route path='/userprofile' exact component={UserProfile} />
              <Route path='/cookmode' exact component={Cookmode} />
              <Route path='/logout' exact component={Logout} />
              <Route path='/Aboutus' exact component={AboutUs} />
              <Route component={Err} />
            </Switch>
            <Route path='/' component={Footer} />
          </EmailContext.Provider>
        </AuthContext.Provider>
      </HashRouter>
    </>);
  }
}


export default App;
