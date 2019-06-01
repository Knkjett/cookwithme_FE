import React, { Component } from 'react';
import './cookmode.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import Axios from 'axios';
class Cookmode extends Component {

  state={
    steps: ['1. prep stuff. This is also where I now I will ramble so that this is much longer to test how the styling may change when I make this super long. So long, in fact, that this div will get huge. Seriously, I want to test this bad boy out. I want to make sure the buttons stay right above the footer on this page. Fingers crossed. I;M TYPING MORE STUFF NOW TO MAKE THIS EVEN BIGGER THAN IT WAS. HHHKBB;G;UG;U OUUO;;;OUG;OUG ;OU;OUGO ;OUG;OGU O LIG;IG;IG ;UG;G;GU ;UGUGH;', '2. cook stuff', '3. cool food', '4. serve food', '5. Rinse and Repeat'], // for testing purposes
    currentStepIndex:0,
    stepsLength:0,
  }

  componentDidMount(){
    let elems = document.querySelectorAll('.collapsible');
    Materialize.Collapsible.init(elems, { accordion: true });
    // const { ingredients, steps } = this.props.location.cook  //object with two arrays
    const { steps } = this.state;
    this.setState({stepsLength:steps.length-1})
  }

  HandleBackClick = (e) => {
    const {currentStepIndex} = this.state;

    if (currentStepIndex -1 < 0) alert('This is the first step!')
    else this.setState({currentStepIndex: currentStepIndex-1});
  }

  HandleForwardClick = (e) => {
    const {currentStepIndex, stepsLength} = this.state;

    if (currentStepIndex + 1 > stepsLength ) alert("You're finished cooking!")
    else this.setState({currentStepIndex: currentStepIndex + 1});
  }


  render() {
    const { steps, currentStepIndex } = this.state;
    return <>
      <div className='cookBG'>
        <div className="row container">
          <div className="col s12 m8">
            <div className="card-panel white opacitywebmobile" style={{ maxHeight: '500px', overflow: 'scroll' }}>
              <span className="black-text fontwebmobile" style={{ fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif', opacity: 1 }}>
                {steps[currentStepIndex]}
            </span>
            </div>
          </div>
          <div className="col s12 m4">
            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header">
                  <i className="material-icons">dehaze</i>Ingredients</div>
                <div className="collapsible-body">
                  <ul>
                    <li>2 medium sweet potatoes</li>
                    <li>1 1/2 to 2 tablespoons extra-virgin olive oil</li>
                    <li>1/2 teaspoon cumin</li>
                    <li>1/2 teaspoon smoked hot paprika (or chipotle powder)</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='row container button-container'>
          <div className='col s4 m4' style={{ paddingLeft: 'auto' }}>
            <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.HandleBackClick}><i className="material-icons">arrow_back</i></a>
          </div>
          <div className='col s4 m4'>
            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
          </div>
          <div className='col s4 m4'>
            <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.HandleForwardClick}><i className="material-icons">arrow_forward</i></a>
          </div>
        </div>
      </div>
    </>
  }
}

export default Cookmode