import React from 'react';
import {Redirect} from 'react-router-dom';
import '../LoginSignup/loginsignup.css'
import firebase from '../../firebase'; 
import $ from 'jquery';
import AuthContext from '../../contexts/auth';

//--- JQUERY FOR ROTATING CARDS 
$(document).ready(function(){
    $("#bt").click(function(){
      if ($('.rotate').length > 0) {
        $("#iwp").removeClass("rotate");
    }  
  if ($('.rotateb').length > 0) {
        $("#iwp").removeClass("rotateb");
   
  }  
      $("#iwp").addClass("rotate");
   
    });
    $("#bt2").click(function(){
     
       if ($('.rotate').length > 0) {
        $("#iwp").removeClass("rotate");
       }
       if ($('.rotateb').length > 0) {
        $("#iwp").removeClass("rotateb");
  }  
       $("#iwp").addClass("rotateb");
    });
  });

  export default class LoginSignup extends React.Component {
      constructor(props){
          super(props)
          this.state = {
            email: '',
            password: '',
            error: '',
            regEmail: '',
            regPassword: ''
          }

      }

      handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('this is handle change', e)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res)=>{
            console.log('this handle submit', res)
        })
        .catch(err => {
            const { message} = err;
            this.setState({error: message});
        })
    }
    handleRegSubmit = (e) => {
        e.preventDefault();
        const {regEmail, regPassword} = this.state;
        firebase.auth().createUserWithEmailAndPassword(regEmail,regPassword)
        .then((res)=>{
            console.log('Returns:', res);
        })
        .catch(err => {
            const { message } = err;
            this.setState({error: message});
        })
    }
    render() {

        const {email, password, error , regEmail, regPassword} = this.state;
        const displayError = error === '' ? '' :  window.alert(JSON.stringify(error))
        const displayForm = 
            <React.Fragment>
                <div class="container">
     <div class="row">
     {displayError}
         <form>
           <div class="row">   
               <div class="col s12 m6 offset-m3">
                   <div class="wrapper" id="wp">
                     <div class="iwrapper" id="iwp">  
                     <div class="card center-align mg front">
                         <div class="card-content">
                             <span class="card-title">Login</span>
                              <a class="btn-floating halfway-fab waves-effect waves-light red" id="bt"><i class="material-icons">person_add</i></a>
                             <div class="input-field">
                                 <input id="email" type="email" class="validate" aria-describedby='emailHelp' name='email' value={email} onChange={this.handleChange} />
                                 <label htmlFor="email">Email</label>
                             </div>
                             <div class="input-field" >
                                 <input id="password" type="password" class="validate" name='password' autoComplete='new-password' value={password} onChange={this.handleChange}/>
                                 <label htmlFor="password">Password</label>
                             </div>
                              <div className = 'input-field'>
                                <label htmlFor="chk">
                                <input type="checkbox" id="chk" />
                                <span >Remember me</span>
                                </label>
                               </div> <br></br><br></br>
                             <button class="btn  waves-effect waves-light" type="submit" name="action" onClick={this.handleSubmit}>Submit
                                 <i class="material-icons right">send</i>
                             </button>
                         </div>
                       
                       </div>   
                         <div class="card center-align mg back"> 
                         <div class="card-content ">
                             <span class="card-title">Registration</span>
                              <a class="btn-floating halfway-fab waves-effect waves-light red" id="bt2"><i class="material-icons">person</i></a>
                             {/* <div class="input-field">
                                 <input id="name" type="text" class="validate" name='name' onc />
                                 <label htmlFor="name">Name</label>
                             </div> */}
                             <div class="input-field" >
                                 <input id="email" type="email" class="validate" name='email' value={email} onChange={this.handleChange}/>
                                 <label htmlFor="email">Email</label>
                              
                             </div>
                              <div class="input-field" >
                                 <input id="password" type="password" class="validate" name='password'/>
                                 <label htmlFor="password">Password</label>
                              
                             </div>
                              <div class="input-field" >
                                 <input id="password" type="password" class="validate" name='confirm password'/>
                                 <label htmlFor="password">Confirm Password</label>
                              
                             </div>
                             <button class="btn  waves-effect waves-light" type="submit" name="action">Submit
                                 <i class="material-icons right">send</i>
                             </button>
                         </div>
                       
                       </div>   
                       </div> 
                       </div>
                     </div>
               </div> 
         </form>  
     
     </div>
    </div>
                </React.Fragment>
     return (
         <AuthContext.Consumer>
             {
                 user => {
                     if(user){
                         return <Redirect to='/' />
                     }
                     else {
                         return displayForm;
                     }
                 }
             }
         </AuthContext.Consumer>
     )
    }
  }

