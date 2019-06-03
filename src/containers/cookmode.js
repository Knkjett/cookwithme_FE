import React, { Component } from 'react';
import './cookmode.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import Axios from 'axios';
import Artyom from 'artyom.js';
import {Redirect} from 'react-router-dom'
//import ArtyomCommandsManager from '../components/ArtyomCommands';

let Jarvis = new Artyom();


class Cookmode extends Component {

  constructor(props, context) {
    super(props, context)
    // Add `this` context to the handler functions
    this.startAssistant = this.startAssistant.bind(this);
    this.stopAssistant = this.stopAssistant.bind(this);
    this.loadCommands = this.loadCommands.bind(this)
    
    this.jarvis = null
    this.state = {
      redirect: false,
      ingredients: [],
      steps: [], // for testing purposes
      currentStepIndex: 0,
      stepsLength: 0,
      play_arrow:'block',
      pause:'none'
    }
  }
  componentWillMount = () =>{
    if(this.props.location.cook){
      let mySteps = this.props.location.cook.steps
      this.setState({
        steps: mySteps,
        stepsLength: mySteps.length,
        ingredients: this.props.location.cook.ingredients
      })
    }
    else{
     this.setState({
       redirect: true
     })
    }
  }

  letRedirect = () =>{
    if(this.state.redirect){
      return <Redirect to='/' />
    }
    else{return<></>}
  }
  loadCommands() {
    const {currentStepIndex,steps,stepsLength} = this.state
    return Jarvis.addCommands([
      {
        indexes: ['start', 'star', 'tar', 'tart', 'art'],
        action: (i) => {
          Jarvis.say(steps[currentStepIndex], {
            onEnd() {
              // Abort the speech recognition when artyom stops talking !
              // Then, the command won't be triggered when artyom says hello !
              Jarvis.ArtyomWebkitSpeechRecognition.abort();
            }
          });

        }
      },
      {
        indexes: ['previous', 'back', 'past', 'ack', 'prev'],
        action: () => {
          if (currentStepIndex - 1 >= 0) {
            this.setState({currentStepIndex:currentStepIndex - 1},()=>{
              Jarvis.say(steps[this.state.currentStepIndex], {
                onEnd() {
                  // Abort the speech recognition when artyom stops talking !
                  // Then, the command won't be triggered when artyom says hello !
                  Jarvis.ArtyomWebkitSpeechRecognition.abort();
                }
              })
              Jarvis.emptyCommands();
              this.loadCommands()
              console.log(this.state)
            })
            
          }
          else {
            console.log('updated state is: ', this.state)
            Jarvis.say('There is no previous step', {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Jarvis.ArtyomWebkitSpeechRecognition.abort();
              }
            })
          }
        }
      },
      {
        indexes: ['next', 'text'],
        action: () => {
          if(currentStepIndex < stepsLength) {
            this.setState({currentStepIndex:currentStepIndex + 1},()=>{
              Jarvis.say(steps[this.state.currentStepIndex], {
                onEnd() {
                  // Abort the speech recognition when artyom stops talking !
                  // Then, the command won't be triggered when artyom says hello !
                  Jarvis.ArtyomWebkitSpeechRecognition.abort();
                }
              })
              Jarvis.emptyCommands();
              this.loadCommands()
              console.log(this.state)
            })
            
            
          }
          else {
            console.log('updated state is: ', this.state)
            Jarvis.say('There is no next step', {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Jarvis.ArtyomWebkitSpeechRecognition.abort();
              }
            })
          }
        }
      }
    ])
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
      speed: 0.8
    }).then(() => {
      // Display loaded commands in the console
      //console.log(Jarvis.getAvailableCommands());

      //Jarvis.say("Welcome to Cook With Me");

      _this.setState({
        play_arrow: 'none', pause: 'block'
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
        play_arrow: 'block', pause: 'none'
      });

    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);

    });
  }


  componentDidMount() {
    let elems = document.querySelectorAll('.collapsible');
    Materialize.Collapsible.init(elems, { accordion: true });
    // const { ingredients, steps } = this.props.location.cook  //object with two arrays
    const { steps } = this.state;
    this.setState({ stepsLength: steps.length - 1 })
    this.loadCommands()
  }

  HandleBackClick = (e) => {
    const { currentStepIndex } = this.state;
    if (currentStepIndex - 1 < 0) alert('This is the first step!')
    else this.setState({ currentStepIndex: currentStepIndex - 1 },()=>{
      console.log('back click',this.state)
      Jarvis.emptyCommands();
      this.loadCommands()
    });
  }

  HandleForwardClick = (e) => {
    const { currentStepIndex, stepsLength } = this.state;

    if (currentStepIndex + 1 > stepsLength) alert("You're finished cooking!")
    else this.setState({ currentStepIndex: currentStepIndex + 1 },()=>{
      Jarvis.emptyCommands();
      this.loadCommands()
      console.log('forward click',this.state)
    });
  }

  ListIngredients = () =>{
    return this.state.ingredients.map((e,i)=>{
      return <li key={i}>{e}</li>
    })
  }

  render() {
    const { steps, currentStepIndex } = this.state;
    return <>
    <this.letRedirect />
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
                  <ul style={{backgroundColor:'white'}}>
                    <this.ListIngredients />
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