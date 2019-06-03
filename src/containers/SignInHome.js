import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignInHome.css';
import axios from 'axios';
import {defaultRecipes} from '../services/services'
import AuthContext from '../contexts/auth'
import M from 'materialize-css';

class SignInHome extends Component{
    state = {
        recipes:null,
        buttonActive:'disabled',
        favs:[],
    }
    componentDidMount(){

        defaultRecipes().then(recipes=>{
            let favs = Array(recipes.length).fill(0,0)
            this.setState({recipes:recipes,favs:favs})
        })
        var elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
          });
    }

    toggleFav(i,user){
        const {favs} = this.state
        favs[i] = favs[i] === 0 ? 1 : 0
        this.setState({favs:favs})
    }
    render(){ return (
            <><AuthContext.Consumer>
                {
                    user => {
                        if(this.state.recipes === null) return <img class='divElement' src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' />
                        else return (<div className='signInHomePageBG'>
                        <div className=" webContainer " >
                        <div className="row" style={{marginBottom:'0px'}}>
                            {this.state.recipes.map((obj,i)=>{
                                let classStr = null
                                const font = {fontFamily:'Futura',fontSize: '20px',fontWeight:300}
                                if(obj.title.length > 35) font.fontSize = '20px'
                                
                                if(this.state.favs[i] ===  0) classStr = 'btn-floating disabled halfway-fab waves-light red'
                                if(this.state.favs[i] === 1) classStr = 'btn-floating halfway-fab waves-light red'
                                //console.log(classStr)
                                return <div className="col s12 m3">
                                    <div className="card">
                                        <div className="card-image">
                                        
                                            <img onClick={()=>this.toggleFav(i,user)} style={{height:'236.17px'}} src={obj.image_url} />
                                            
                                            <a className={classStr}><i 
                                                    className="material-icons">add</i></a>
                                        </div>
                                        <div className="card-content" style={{height:'100px',textAlign:'center'}}>
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
                    </div>)
                    }
                }
            </AuthContext.Consumer>
            <div class="fixed-action-btn click-to-toggle">
            <a class="btn-floating btn-large red">
              <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
              <li>
              <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required style={{background:'bisque',width:'300px',height:'50px'}}/>
          
          
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

export default SignInHome