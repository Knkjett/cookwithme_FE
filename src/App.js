import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//=====Container
import Navbar from './components/Logo'
import Home from './containers/Landing'
import CreateRecipe from './containers/CreateRecipe/Create'
import RecipePage from './containers/RecipePage/RecipePage'
import Footer from './components/Footer'
import LoginSignup from './containers/LoginSignup/LoginSignup';
//====Context

const Err = () => {
  return (<>
    <h2 className='headerSpace'>404 Missing Page.</h2>
  </>)
}
class App extends Component {
  
  render() {
   return( <>
 <HashRouter>
          <Route path='/' component={Navbar} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={LoginSignup} />
            <Route path='/create' exact component={CreateRecipe} />
            <Route path='/recipepage' exact component={RecipePage} />
            <Route component={Err} />
          </Switch>
          <Route path='/' component={Footer} />
      </HashRouter>
    </>);
  }
}

export default App;
