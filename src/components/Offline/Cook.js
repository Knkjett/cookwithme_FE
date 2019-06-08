import React, { Component } from 'react'
import './mobilePhone.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js';

class Cook extends Component {
  constructor(props) {
    super(props)
  this.state = {
    currStep: 0,
    play_arrow:'block',
    pause:'none',
    stepsLength: null
  }
}
componentDidMount = () =>{
  let elems = document.querySelectorAll('.collapsible');
  Materialize.Collapsible.init(elems, {accordion:true});
  this.setState({
    stepsLength: this.props.steps.length-1
  })
}
  ListIngredients = () =>{
    return this.props.ingredients.map((e,i)=>{
      return <li key={i}>{e}</li>
    })
  }
  stopAssistant = () =>{
    this.setState({
      play_arrow: 'block', pause: 'none'
    });
  }
  startAssistant = () =>{
    this.setState({
      play_arrow: 'none', pause: 'block'
    });
  }
  HandleForwardClick = () => {
  if (this.state.currStep + 1 > this.state.stepsLength) alert("You're finished cooking!")
    else this.setState({currStep: this.state.currStep + 1 });
  }
  HandleBackClick = () => {
    if (this.state.currStep - 1 < 0) alert("This is the first step!")
      else this.setState({currStep: this.state.currStep - 1 });
    }
  Cook = () => {
    return (<>
     <button className='btn' onClick={this.props.handleCookBack} style={{ marginTop: '50px' }}>Back</button>
    <div className="row">
    <div className="col m12">
      <div className="card-panel white opacitywebmobile" style={{ maxHeight: '405px', overflow: 'scroll' }}>
        <span className="black-text fontwebmobile" style={{ fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif', opacity: 1 }}>
          {this.props.steps[this.state.currStep]}
        </span>
      </div>
    </div>
    <div className="col m12" style={{width:'50%'}}>
      <ul className="collapsible" data-collapsible="accordion">
        <li>
          <div className="collapsible-header" style={{opacity:0.6}}>
            <i className="material-icons">dehaze</i>Ingredients</div>
          <div className="collapsible-body">
            <ul style={{backgroundColor:'white', overflow:'scroll', maxHeight:'145px'}}>
              <this.ListIngredients />
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div className='row button-container' style={{bottom:'0'}}>
    <div className='col s4 m4' style={{ paddingLeft: 'auto' }}>
      <button className="btn-floating btn-large waves-light red" onClick={this.HandleBackClick}><i className="material-icons">arrow_back</i></button>
    </div>
    <div className='col s4 m4' style={{display:this.state.play_arrow}}>
      <button className="btn-floating btn-large waves-light red" ><i className="material-icons" onClick={this.startAssistant}>play_arrow</i></button>
    </div>
    <div className='col s4 m4' style={{display:this.state.pause}}>
      <button className="btn-floating btn-large waves-light red" ><i className="material-icons" onClick={this.stopAssistant}>pause</i></button>
    </div>
    <div className='col s4 m4'>
      <button className="btn-floating btn-large waves-light red" onClick={this.HandleForwardClick}><i className="material-icons">arrow_forward</i></button>
    </div>
  </div>
  </>)
  }

  render() {
    return (<>
      <this.Cook />
    </>
    )
  }
}

export default Cook