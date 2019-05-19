import React, {Component} from 'react'

class JoinToday extends Component{
  constructor(props){
    super(props)
    this.state={
      email : '',
      cEmail : '',
      password : '',
      cPassword : ''
    }
  }
  handleInput = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSumbit = (e)=>{
    e.preventDefault();

  }

  render(){
    return(
    <form className='col s12 l6 center-align' style={{paddingTop:'30px', paddingBottom:'30px'}}>
    <div className='row'>
        <div className='input-field col s12 l6'>
          <input id='email' type='email' name='email' value={this.state.email} onChange={this.handleInput} className='validate'/>
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-field col s12 l6'>
          <input id='cemail' type='email' name='cEmail' value={this.state.cEmail} onChange={this.handleInput} className='validate'/>
          <label htmlFor='cEmail'>Confirm Email</label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <input id='password' type='password' name='password' value={this.state.password} onChange={this.handleInput} className='validate'/>
          <label htmlFor='password'>Password</label>
        </div>
        <div className='input-field col s12'>
          <input id='cpassword' type='password' name='cPassword' value={this.state.cPassword} onChange={this.handleInput} className='validate'/>
          <label htmlFor='cPassword'>Confirm Password</label>
        </div>
      </div>
      <button className='btn-large' onClick={this.handleSumbit}>Sign Up</button>
    </form>
  )}
}


export default JoinToday