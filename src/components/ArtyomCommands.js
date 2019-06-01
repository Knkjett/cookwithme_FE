import { createSecureContext } from "tls";

export default class ArtyomCommandsManager{
  constructor(ArtyomInstance, state){
    this.artyom = ArtyomInstance

    this.steps = state.steps;
    this.currentStepIndex = state.currentStepIndex
  }


  loadCommands(){
    let Artyom = this.artyom;

    return Artyom.addCommands([
      {
        indexes:['start', 'star', 'tar', 'tart', 'art'],
        action: (i) => {
          Artyom.say(this.steps[this.currentStepIndex], {
            onEnd (){
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Artyom.ArtyomWebkitSpeechRecognition.abort();
            }
        });
         
        }
      },
    //   {
    //     indexes: [/How are you/, /Regular expressions supported/],
    //     smart:true,
    //     action: () =>{
    //       Artyom.say("I'm fine, thanks for asking !")
    //     } 
    //   },
    //   {
    //     indexes: ["Generate reports of * of this year"],
    //     smart: true,
    //     action: (i, month) => {
    //         let year = new Date().getFullYear();
            
    //         Artyom.say(`Generating reports of ${month} ${year} `);

    //         Artyom.say("Ready ! What were you expecting? write some code you lazy bear !");
    //     }
    // },
    ])
  }
}