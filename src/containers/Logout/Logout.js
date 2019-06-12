import React from 'react';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom'

export default class Logout extends React.Component {
  constructor(props){
    super(props)
    this.state={
      redirect: false,
    }
  }

  componentWillMount = () => {
    firebase.auth().signOut()
  }
  handleTimer = () =>{
    setInterval(()=>{ 
     this.setState({redirect : true})
     }, 3000);
  }
  handleRedirect = () =>{
    if(this.state.redirect){
      return <Redirect to='/'/>
    }
    else{return <></>}
  }

  render() {
    return (
        <React.Fragment>
          <this.handleRedirect />
          {this.handleTimer()}
        <div className="col s12 m8 offset-m2 l6 offset-l3" style={{paddingTop:'200px',height:'calc(100vh - 64px)'}}>
        <div className="card-panel grey lighten-5 z-depth-1" style={{margin:'0px'}}>
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src='https://media.giphy.com/media/xULW8DcQMhlZFs6baU/giphy.gif' alt="" className="circle responsive-img margin " style={{marginLeft: '70px'}}/> 
            </div>
            <div className="col s10">
              <span className="black-text center">
                <h4>Come back again it's food o'clock!</h4>
                <p>You are successfully logged out</p>
              </span>
            </div>
          </div>
        </div>
      </div>
            
       
        </React.Fragment>
     
    );
  }
}