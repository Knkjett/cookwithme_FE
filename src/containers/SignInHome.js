import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignInHome.css';
import { defaultRecipes } from '../services/services'
import AuthContext from '../contexts/auth'
import M from 'materialize-css';
import { relative } from 'path';

class SignInHome extends Component {
    state = {
        recipes: null,
        buttonActive: 'disabled',
        favs: [],
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

    toggleFav(i, user) {
        const { favs } = this.state
        favs[i] = favs[i] === 0 ? 1 : 0
        this.setState({ favs: favs })
    }
    render() {
        return (
            <><AuthContext.Consumer>
                {
                    user => {

                        if (this.state.recipes === null) return <img style={{height:'calc(100vh - 70px)'}} src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' />
                        else return (<><div>
                            <div className="containerPadding" >
                                <div className="row" style={{ marginBottom: '0px' }}>
                                <div className="col s12 m3" >
                                <div className="card blue-grey darken-1">
                                    <div className="card-content" style={{ height: '336.17px', textAlign: 'center',background:'#ee5a5a', position:'relative' }}>
                                        <span className="card-title" style={{ fontFamily: 'Futura', fontSize: '1.3vw', fontWeight: 300,position:"absolute",top:20 }}>Welcome to Cook With Me</span>
                                    </div>
                                </div>
                                </div>
                                    {this.state.recipes.map((obj, i) => {
                                        let classStr = null
                                        const font = { fontFamily: 'Futura', fontSize: '1.3vw', fontWeight: 300 }

                                        if (this.state.favs[i] === 0) classStr = 'btn-floating disabled halfway-fab waves-light red'
                                        if (this.state.favs[i] === 1) classStr = 'btn-floating halfway-fab waves-light red'
                                        //console.log(classStr)
                                        return <div className="col s12 m3" key={i}>
                                            <div className="card">
                                                <div className="card-image">

                                                    <img onClick={() => this.toggleFav(i, user)} style={{ height: '236.17px' }} src={obj.image_url} />

                                                    <a className={classStr}><i
                                                        className="material-icons">add</i></a>
                                                </div>
                                                <div className="card-content" style={{ height: '100px', textAlign: 'center',background:'whitesmoke' }}>
                                                    <Link to={{
                                                        pathname: `/recipepage/${obj.title}`,
                                                        state: { url: obj.source_url, publisher: obj.publisher_url, source_img: obj.image_url }
                                                    }}>
                                                        <span className="card-title" style={font}>{obj.title}</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    })}
                                </div>
                            </div>
                        </div>
                            <div className="fixed-action-btn click-to-toggle">
                                <a className="btn-floating btn-large red">
                                    <i className="large material-icons">mode_edit</i>
                                </a>
                                <ul>
                                    <li>
                                        <div className="nav-wrapper">
                                            <form>
                                                <div className="input-field">
                                                    <input id="search" type="search" required style={{ background: 'bisque', width: '300px', height: '50px' }} />


                                                </div>
                                            </form>
                                        </div>

                                    </li>

                                </ul>
                            </div>
                        </>

                        )
                    }

                }
            </AuthContext.Consumer>

            </>

        )
    }
}

export default SignInHome