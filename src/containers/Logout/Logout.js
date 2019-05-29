import React from 'react';
import firebase from '../../firebase';


export default class Logout extends React.Component {

  componentDidMount() {
    firebase.auth().signOut()
     
  }

  render() {
    return (
      
        <React.Fragment>
        <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src={require('../../assets/baker.png')}  alt="" class="circle responsive-img"/> 
            </div>
            <div class="col s10">
              <span class="black-text">
                You are logged out
              </span>
            </div>
          </div>
        </div>
      </div>
            
       
        </React.Fragment>
     
    );
  }
}