import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignInHome.css';
import {getFood2Fork,defaultRecipes } from '../services/services'
import AuthContext from '../contexts/auth'
import EmailContext from '../contexts/email'
import M from 'materialize-css';

class SignInHome extends Component {
    static contextType = EmailContext;
    state = {
        recipes: null,
        buttonActive: 'disabled',
        instance:null,
        search: ''
    }
    componentDidMount() {
        defaultRecipes().then(recipes => {
            let favs = Array(recipes.length).fill(0, 0)
            this.setState({ recipes: recipes, favs: favs })
        })
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
        });
    }
    handleSearch = (e) =>{
        e.preventDefault()
        getFood2Fork(this.state.search)
        .then((recipes)=>{
            let favs = Array(recipes.length).fill(0, 0)
            this.setState({ recipes: recipes, favs: favs })
        })
    }
    handleChange = (e)=>{
        this.setState({
            search: e.currentTarget.value
        })
    }


    render() {  
        return <>
            <AuthContext.Consumer>
                {
                    user => {
                        if (this.state.recipes === null) return <div><img className='divElement' src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' alt='Loading'/></div>;
                        else return <>
                            <div className="containerPadding">
                                <div className="row" style={{ marginBottom: '0px' }}>
                                <div className="col s12 m3" >
                                <div className="card">
                                {/* no-shadows */}
                                    <div className="card-content" style={{ height: '336.17px', textAlign: 'center',background:'white', position:'relative' }}>
                                        <span className="welcomeText">Welcome to Cook With Me</span>
                                    </div>
                                </div>
                                </div>
                                    {this.state.recipes.map((obj, i) => {
                                        return <div className="col s12 m3" key={i}>
                                            <Link to={{
                                                        pathname: `/recipepage/${obj.title}`,
                                                        state: { url: obj.source_url, publisher: obj.publisher_url, source_img : obj.image_url }
                                                    }}>
                                            <div className="card "> 
                                            {/* no-shadows */}
                                                <div className="card-image">
                                                    <img alt='' style={{ height: '236.17px' }} src={obj.image_url} />
                                                </div>
                                                <div className="card-content" style={{ height: '100px', textAlign: 'center',background:'whitesmoke' }}>
                                                        <span className="textSize">{obj.title}</span>
                                                </div>
                                            </div>
                                            </Link>
                                        </div>

                                    })}
                                </div>
                            </div>
                        </>
                        
                    }
                }
            </AuthContext.Consumer>

            <div className="fixed-action-btn click-to-toggle">
                                <button className="btn-floating btn-large red">
                                    <i className="large material-icons">search</i>
                                </button>
                                <ul>
                                    <li style={{right:'-50px', position:'relative', top:'-18px'}}><div className="nav-wrapper">
                                        <form>
                                            <div className="input-field">
                                                <input id="search" type="search" required style={{ background: 'aliceblue', width: '300px', height: '50px', border:'1px solid black' }} value={this.state.search} onChange={this.handleChange} />

                                                <button style={{display:'none'}} className='btn waves-light' type='submit' name='action' onClick={this.handleSearch}>Search

                                 <i className='material-icons right'>send</i>
                                                        </button>
                                            </div>
                                        </form>
                                    </div></li>
                                </ul>
                            </div>
                    </>
                }
            }

export default SignInHome