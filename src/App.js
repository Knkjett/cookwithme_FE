import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//=====Container
import Navbar from './components/Logo'
import Home from './containers/Landing'
import Footer from './components/Footer'
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
            <Route component={Err} />
          </Switch>
          <Route path='/' component={Footer} />
      </HashRouter>
    </>);
  }
}

export default App;
