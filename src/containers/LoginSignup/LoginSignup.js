import React from 'react';
import { Redirect } from 'react-router-dom';
import '../LoginSignup/loginsignup.css'
import firebase from '../../firebase';
import $ from 'jquery';
import AuthContext from '../../contexts/auth';
import Materialize from 'materialize-css'



export default class LoginSignup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            regEmail: '',
            regPassword: ''
        }
    }
    componentDidMount = () => {

        //--- JQUERY FOR ROTATING CARDS 
        $(document).ready(function () {
            $('#bt').click(function () {
                if ($('.rotate').length > 0) {
                    $('#iwp').removeClass('rotate');
                }
                if ($('.rotateb').length > 0) {
                    $('#iwp').removeClass('rotateb');

                }
                $('#iwp').addClass('rotate');

            });
            $('#bt2').click(function () {

                if ($('.rotate').length > 0) {
                    $('#iwp').removeClass('rotate');
                }
                if ($('.rotateb').length > 0) {
                    $('#iwp').removeClass('rotateb');
                }
                $('#iwp').addClass('rotateb');
            });
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log('this is handle change', e)
        
    }

    // regHandleChange = (e) => {
    //     this.setState({ [e.target.regname]: e.target.regvalue });
    //     console.log('this is reg handle change', e)
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('this handle submit', res)
            })
            .catch(err => {
                const { message } = err;
                Materialize.toast({html: message})
            })
    }
    handleRegSubmit = (e) => {
        e.preventDefault();
        const { regEmail, regPassword } = this.state;
        firebase.auth().createUserWithEmailAndPassword(regEmail, regPassword)
            .then((res) => {
                console.log('Returns:', res);
            })
            .catch(err => {
                const { message } = err;
                console.log(this.setState)
                Materialize.toast({html: message})
            })
    }

    render() {

        const { email, password, regEmail, regPassword } = this.state;
        const displayForm =
            <React.Fragment>
                <div style={{ height: 'calc(100vh - 64px)' }}>
                    <div className='container'>
                        <div className='row'>
                            <form>
                                <div className='row'>
                                    <div className='col s12 m6 offset-m3'>
                                        <div className='wrapper' id='wp'>
                                            <div className='iwrapper' id='iwp'>
                                                <div className='card center-align mg front'>
                                                    <div className='card-content'>
                                                        <span className='card-title login-title'>Login</span>
                                                        <a className='btn-floating halfway-fab  waves-light red' id='bt'><i className='material-icons'>person_add</i></a>
                                                        <div className='input-field'>
                                                            <input id='email' type='email' className='validate' aria-describedby='emailHelp' name='email' value={email} onChange={this.handleChange} />
                                                            <label htmlFor='email'>Email</label>
                                                        </div>
                                                        <div className='input-field' >
                                                            <input id='password' type='password' className='validate' name='password' autoComplete='new-password' value={password} onChange={this.handleChange} />
                                                            <label htmlFor='password'>Password</label>
                                                        </div>
                                                        <div className='input-field'>
                                                            <label htmlFor='chk'>
                                                                <input type='checkbox' id='chk' />
                                                                <span >Remember me</span>
                                                            </label>
                                                        </div> <br></br><br></br>
                                                        <button className='btn   waves-light' type='submit' name='action' onClick={this.handleSubmit}>Submit
                                 <i className='material-icons right'>send</i>
                                                        </button>
                                                    </div>

                                                </div>
                                                <div className='card center-align mg back'>
                                                    <div className='card-content '>
                                                        <span className='card-title login-title'>Registration</span>
                                                        <a className='btn-floating halfway-fab  waves-light red' id='bt2'><i className='material-icons'>person</i></a>
                                                    
                                                        <div className='input-field' >
                                                            <input id='regemail' type='email' className='validate' name='regEmail' value={regEmail} onChange={this.handleChange} />
                                                            <label htmlFor='regemail'>Email</label>

                                                        </div>
                                                        <div className='input-field' >
                                                            <input id='password' type='password' className='validate' name='regPassword' value={regPassword} onChange={this.handleChange} />
                                                            <label htmlFor='password'>Password</label>

                                                        </div>
                                                        {/* <div className='input-field' >
                                                            <input id='password' type='password' className='validate' name='confirm password' />
                                                            <label htmlFor='password'>Confirm Password</label>

                                                        </div> */}
                                                        <button className='btn   waves-light' type='submit' name='action' onClick={this.handleRegSubmit}>Submit
                                 <i className='material-icons right'>send</i>
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
                </div>
            </React.Fragment>
        return (
            <AuthContext.Consumer>
                {
                    user => {
                        if (user) {
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

