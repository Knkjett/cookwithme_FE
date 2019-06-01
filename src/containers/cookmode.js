import React, { Component } from 'react';
import './cookmode.css'
import Axios from 'axios';
class Cookmode extends Component {

  state={
    steps: ['1. prep stuff', '2. cook stuff', '3. cool food', '4. serve food', '5. Rinse and Repeat'], // for testing purposes
    currentStepIndex:0,
    stepsLength:0,
  }

  componentDidMount(){
    // const { ingredients, steps } = this.props.location.cook  //object with two arrays
    const { steps, currentStepIndex, stepsLength} = this.state;
    this.setState({stepsLength:steps.length-1})
  }

  HandleBackClick = (e) => {
    const {currentStepIndex} = this.state;

    if (currentStepIndex -1 < 0) alert('No Previous Step')
    else this.setState({currentStepIndex: currentStepIndex-1});
  }

  HandleForwardClick = (e) => {
    const {currentStepIndex, stepsLength} = this.state;

    if (currentStepIndex + 1 > stepsLength ) alert('No Next Steps')
    else this.setState({currentStepIndex: currentStepIndex + 1});
  }


  render() {
    const { steps, currentStepIndex, stepsLength} = this.state;
    return <>
      <div className='cookBG'>
        <div class="row container">
          <div class="col s12 m8">
            <div class="card-panel white opacitywebmobile" style={{ maxHeight: '610px', overflow: 'scroll' }}>
              <span class="black-text fontwebmobile" style={{ fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif', opacity: 1 }}>
                {steps[currentStepIndex]}
            </span>
            </div>
          </div>
          <div class="col s12 m4">
            <ul class="collapsible" data-collapsible="accordion">
              <li>
                <div class="collapsible-header">
                  <i class="material-icons">dehaze</i>Ingredients</div>
                <div class="collapsible-body">
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
        <div class='row container'>
          <div class='col s4 m4' style={{ paddingLeft: 'auto' }}>
            <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.HandleBackClick}><i class="material-icons">arrow_back</i></a>
          </div>
          <div class='col s4 m4'>
            <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">play_arrow</i></a>
          </div>
          <div class='col s4 m4'>
            <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.HandleForwardClick}><i class="material-icons">arrow_forward</i></a>
          </div>
        </div>
      </div>
    </>
  }
}

export default Cookmode