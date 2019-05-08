import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery'
import 'foundation-sites'

//=====Container

//====Context

const Err = () => {
  return (<>
    <h2 className='headerSpace'>404 Missing Page.</h2>
  </>)
}
// WHEN USING FOUNDATION USE THIS JQUERY SELECTOR FOR ANY JAVASCRIPT FEATURES PULLED FROM FOUNDATION LOOK A THE EXAMPLE BELOW!
class App extends Component {
  componentDidMount=()=>{
    $(document).foundation();
  }
  render() {
   return( <>

<div class="row">
  <div class="columns">
    <h2>Dropdown Pane</h2>
    <p>Dropdown panes are little happy sprites which can be revealed on click or hover.</p>
  </div>
</div>

<div class="row">
  <div class="columns">
    <button class="button" type="button" data-toggle="example-dropdown">Toggle Dropdown</button>
    <div class="dropdown-pane" id="example-dropdown" data-dropdown>
      Just some junk that needs to be said. Or not. Your choice.
    </div>
  </div>
</div>
    </>);
  }
}

export default App;
