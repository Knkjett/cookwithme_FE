import React, { Component } from 'react'
import './mobilePhone.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import Artyom from 'artyom.js';
let Jarvis = new Artyom();
class Cook extends Component {
  constructor(props) {
    super(props)
    this.startAssistant = this.startAssistant.bind(this);
    this.stopAssistant = this.stopAssistant.bind(this);
    this.loadCommands = this.loadCommands.bind(this)
    
    this.jarvis = null
  this.state = {
    currStep: 0,
    play_arrow:'block',
    pause:'none',
    stepsLength: 0
  }
}
componentDidMount = () =>{
  let elems = document.querySelectorAll('.collapsible');
  Materialize.Collapsible.init(elems, {accordion:true});
  this.setState({
    stepsLength: this.props.steps.length-1
  })
  this.loadCommands()
}
loadCommands() {
  
  const {currStep} = this.state
  const steps = this.props.steps
  const stepsLength = steps.length-1
  return Jarvis.addCommands([
    {
      indexes: ['start', 'star', 'tar', 'tart', 'art','repeat'],
      action: (i) => {
        Jarvis.say(steps[currStep], {
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
        if (currStep - 1 >= 0) {
          this.setState({currStep:currStep - 1},()=>{
            Jarvis.say(steps[this.state.currStep], {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Jarvis.ArtyomWebkitSpeechRecognition.abort();
              }
            })
            Jarvis.emptyCommands();
            this.loadCommands()
            // console.log(this.state)
          })
          
        }
        else {
          // console.log('updated state is: ', this.state)
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
        if(currStep < stepsLength) {
          this.setState({currStep:currStep + 1},()=>{
            Jarvis.say(steps[this.state.currStep], {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Jarvis.ArtyomWebkitSpeechRecognition.abort();
              }
            })
            Jarvis.emptyCommands();
            this.loadCommands()
            // console.log(this.state)
          })
          
          
        }
        else {
          // console.log('updated state is: ', this.state)
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
  // console.log("Artyom succesfully started !");
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

componentWillUnmount = () =>{
    this.stopAssistant()
}

stopAssistant() {
  let _this = this;
  Jarvis.fatality().then(() => {
    // console.log("Jarvis has been succesfully stopped");
    
    _this.setState({
      play_arrow: 'block', pause: 'none'
    });

  }).catch((err) => {
    console.error("Oopsy daisy, this shouldn't happen neither!", err);

  });
}


  ListIngredients = () =>{
    return this.props.ingredients.map((e,i)=>{
      return <li key={i}>{e}</li>
    })
  }
  HandleForwardClick = () => {
    const { currStep, stepsLength } = this.state;
    if (currStep + 1 > stepsLength) alert("You're finished cooking!")
    else this.setState({ currStep: currStep + 1 },()=>{
      Jarvis.emptyCommands();
      this.loadCommands()
      // console.log('forward click',this.state)
    });
  }
  HandleBackClick = () => {
    const { currStep } = this.state;
    if (currStep - 1 < 0) alert('This is the first step!')
    else this.setState({ currStep: currStep - 1 },()=>{
      // console.log('back click',this.state)
      Jarvis.emptyCommands();
      this.loadCommands()
    });
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