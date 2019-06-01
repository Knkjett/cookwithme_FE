import React, { Component } from 'react';
import './cookmode.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import Axios from 'axios';
import Artyom from 'artyom.js';
import ArtyomCommandsManager from '../components/ArtyomCommands';

const Jarvis = new Artyom();


class Cookmode extends Component {

  constructor(props, context) {
    super(props, context)
    // Add `this` context to the handler functions
    this.startAssistant = this.startAssistant.bind(this);
    this.stopAssistant = this.stopAssistant.bind(this);
    // this.speakText = this.speakText.bind(this);

    this.state = {
      artyomActive: false,
      textareaValue: "",
      artyomIsReading: false,
      steps: ['boil five cups of water for 15 minutes', 'dice tomaotes', 'add pasta to boiling water and cover the pot', 'drain pasta and save half a cup of pasta water', 'Rinse and Repeat'], // for testing purposes
      currentStepIndex: 0,
      stepsLength: 0,
      play_arrow:'block',
      pause:'none'
    }

    let CommandsManager = new ArtyomCommandsManager(Jarvis, this.state);
    CommandsManager.loadCommands();
  }

  startAssistant() {
    let _this = this;
    console.log("Artyom succesfully started !");
    Jarvis.initialize({
      lang: "en-US",
      debug: true,
      continuous: true,
      soundex: true,
      listen: true,
      speed: 0.9
    }).then(() => {
      // Display loaded commands in the console
      console.log(Jarvis.getAvailableCommands());

      Jarvis.say("Welcome there, how are you?");

      _this.setState({
        artyomActive: true, play_arrow: 'none', pause: 'block'
      });
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });
  }

  stopAssistant() {
    let _this = this;

    Jarvis.fatality().then(() => {
      console.log("Jarvis has been succesfully stopped");

      _this.setState({
        artyomActive: false, play_arrow: 'block', pause: 'none'
      });

    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);

      _this.setState({
        artyomActive: false
      });
    });
  }


  componentDidMount() {
    let elems = document.querySelectorAll('.collapsible');
    Materialize.Collapsible.init(elems, { accordion: true });
    // const { ingredients, steps } = this.props.location.cook  //object with two arrays
    const { steps } = this.state;
    this.setState({ stepsLength: steps.length - 1 })
  }

  HandleBackClick = (e) => {
    const { currentStepIndex } = this.state;

    if (currentStepIndex - 1 < 0) alert('This is the first step!')
    else this.setState({ currentStepIndex: currentStepIndex - 1 });
  }

  HandleForwardClick = (e) => {
    const { currentStepIndex, stepsLength } = this.state;

    if (currentStepIndex + 1 > stepsLength) alert("You're finished cooking!")
    else this.setState({ currentStepIndex: currentStepIndex + 1 });
  }

  HandlePlayClick = (e) => {
    const {play_arrow} = this.state;
    this.setState({play_arrow: 'none'})
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
            <a className="btn-floating btn-large waves-light red" onClick={this.HandleBackClick}><i className="material-icons">arrow_back</i></a>
          </div>
          <div className='col s4 m4' style={{display:this.state.play_arrow}}>
            <a className="btn-floating btn-large waves-light red" ><i className="material-icons" onClick={this.startAssistant}>play_arrow</i></a>
          </div>
          <div className='col s4 m4' style={{display:this.state.pause}}>
            <a className="btn-floating btn-large waves-light red" ><i className="material-icons" onClick={this.stopAssistant}>pause</i></a>
          </div>
          <div className='col s4 m4'>
            <a className="btn-floating btn-large waves-light red" onClick={this.HandleForwardClick}><i className="material-icons">arrow_forward</i></a>
          </div>
        </div>
      </div>
    </>
  }
}

export default Cookmode