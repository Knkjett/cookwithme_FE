import { createSecureContext } from "tls";

export default class ArtyomCommandsManager {
  constructor(ArtyomInstance, state, UpdateStepIndex) {
    this.artyom = ArtyomInstance

    this.state = state
    this.steps = state.steps;
    this.currentStepIndex = state.currentStepIndex;
    this.stepsLength = state.stepsLength;
    this.UpdateStepIndex = UpdateStepIndex;
  }


  loadCommands() {
    let Artyom = this.artyom;

    return Artyom.addCommands([
      {
        indexes: ['start', 'star', 'tar', 'tart', 'art'],
        action: (i) => {
          Artyom.say(this.steps[this.currentStepIndex], {
            onEnd() {
              // Abort the speech recognition when artyom stops talking !
              // Then, the command won't be triggered when artyom says hello !
              Artyom.ArtyomWebkitSpeechRecognition.abort();
            }
          });

        }
      },
      {
        indexes: ['previous', 'back', 'past', 'ack', 'prev'],
        action: (i) => {
          if (this.currentStepIndex - 1 >= 0) {
            this.UpdateStepIndex(this.currentStepIndex - 1);
            console.log('updated state is: ', this.state)
            Artyom.say(this.steps[this.currentStepIndex - 1], {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Artyom.ArtyomWebkitSpeechRecognition.abort();
              }
            })
          }
          else {
            console.log('updated state is: ', this.state)
            Artyom.say('There is no previous step', {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Artyom.ArtyomWebkitSpeechRecognition.abort();
              }
            })
          }
        }
      },
      {
        indexes: ['next', 'text'],
        action: (i) => {
          if(this.currentStepIndex + 1 <= this.stepsLength) {
            this.UpdateStepIndex(this.currentStepIndex + 1);
            console.log('updated state is: ', this.state)
            Artyom.say(this.steps[this.currentStepIndex + 1], {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Artyom.ArtyomWebkitSpeechRecognition.abort();
              }
            })
          }
          else {
            console.log('updated state is: ', this.state)
            Artyom.say('There is no next step', {
              onEnd() {
                // Abort the speech recognition when artyom stops talking !
                // Then, the command won't be triggered when artyom says hello !
                Artyom.ArtyomWebkitSpeechRecognition.abort();
              }
            })
          }
        }
      }
    ])
  }
}