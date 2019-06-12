import React, { Component } from 'react';
import './cookmode.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import Artyom from 'artyom.js';
import {Redirect,Link} from 'react-router-dom'


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
        indexes: ['start', 'star', 'tar', 'tart', 'art','repeat'],
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
              
            })
            
          }
          else {
            
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
        indexes: ['next', 'text', 'test'],
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
              
            })
            
            
          }
          else {
            
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

    Jarvis.initialize({
      lang: "en-US",
      debug: true,
      continuous: true,
      soundex: true,
      listen: true,
      speed: 1
    }).then(() => {

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
      <div className='cookBG contentmiddle'>
        <div className="row container " style={{marginTop: '25px'}}>
          <div className="">
            <div className="card-panel white opacitywebmobile" style={{ maxHeight: '300px', overflow: 'scroll',borderRadius:'38px' }}>
              <span className="black-text fontwebmobile" style={{ fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif', opacity: 1 }}>
                {steps[currentStepIndex]}
              </span>
            </div>
          </div>
          <div className="" style={{width:'50%'}}>
            <ul className="collapsible" data-collapsible="accordion"  >
              <li>
                <div className="collapsible-header" style={{opacity:0.9}}>
                  <i className="material-icons">dehaze</i>Ingredients</div>
                <div className="collapsible-body ingredient-scroll" >
                  <ul style={{backgroundColor:'white',opacity:0.7}}>
                    <this.ListIngredients />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='row container' style={{textAlign:'center'}}>
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
        <Link to='/'><div><i className="medium material-icons">highlight_off</i></div></Link>
      </div>
    </>
  }
}

export default Cookmode