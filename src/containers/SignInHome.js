import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignInHome.css';
import { defaultRecipes } from '../services/services'
import AuthContext from '../contexts/auth'
import M from 'materialize-css';

class SignInHome extends Component {
    state = {
        recipes: null,
        buttonActive: 'disabled',
        favs: [],
        instance:null
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

    toggleFav(i) {
        const { favs } = this.state
        favs[i] = favs[i] === 0 ? 1 : 0
        this.setState({ favs: favs })
    }

    render() {  
        return <>
            <AuthContext.Consumer>
                {
                    user => {
                        if (this.state.recipes === null) return <div style={{textAlign:'center',height:'92vh'}}>
                            <img  class='responsive-img ' src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' />
                        </div>
                        
                        else return <>
                            <div className="containerPadding">
                                <div className="row" style={{ marginBottom: '0px' }}>
                                <div class="col s12 m3" >
                                <div class="card no-shadows">
                                    <div className="card-content" style={{ height: '336.17px', textAlign: 'center',background:'white', position:'relative' }}>
                                        <span className="welcomeText">Welcome to Cook With Me</span>

                                    </div>
                                </div>
                                </div>
                                    {this.state.recipes.map((obj, i) => {
                                        let favbutton = null
                                        if (this.state.favs[i] === 0) favbutton = 'btn-floating disabled halfway-fab waves-light red'
                                        if (this.state.favs[i] === 1) favbutton = 'btn-floating halfway-fab waves-light red'
                                        
                                        return <div className="col s12 m3">
                                            <div className="card no-shadows">
                                                <div className="card-image">
                                                    <img alt='' onClick={() => this.toggleFav(i, user)} style={{ height: '236.17px' }} src={obj.image_url} />
                                                    <a href='#' className={favbutton}><i className="material-icons">add</i></a>
                                                </div>
                                                <div className="card-content" style={{ height: '100px', textAlign: 'center',background:'whitesmoke' }}>
                                                    <Link to={{
                                                        pathname: `/recipepage/${obj.title}`,
                                                        state: { url: obj.source_url, publisher: obj.publisher_url, source_img : obj.image_url }
                                                    }}>
                                                        <span className="textSize">{obj.title}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    })}
                                </div>
                            </div>
                        </>
                        
                    }
                }
            </AuthContext.Consumer>
            <div className="fixed-action-btn click-to-toggle">
                                <a className="btn-floating btn-large red">
                                    <i className="large material-icons">search</i>
                                </a>
                                <ul>
                                    <li><div className="nav-wrapper">
                                        <form>
                                            <div className="input-field">
                                                <input id="search" type="search" required style={{ background: 'aliceblue', width: '300px', height: '50px' }} />
                                            </div>
                                        </form>
                                    </div></li>
                                </ul>
                            </div>
                    </>
                }
            }

export default SignInHome