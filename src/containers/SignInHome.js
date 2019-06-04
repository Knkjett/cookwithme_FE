import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignInHome.css';
import axios from 'axios';

class SignInHome extends Component{
    state = {
        recipes:[]
    }
    componentDidMount(){
        axios.get('https://www.food2fork.com/api/search?key=0a689ee4c676e04aaae774935df0e3d8')
        .then(res=>{
            //console.log(res.data)
            let recipes_arr = res.data.recipes.filter(e=>{
                return e.publisher ==='Closet Cooking' || e.publisher === "The Pioneer Woman" || e.publisher === 'All Recipes'
            })
            recipes_arr = recipes_arr.slice(12)
            this.setState({recipes:recipes_arr},()=>console.log(this.state))
        })
    }
    render(){
        return <>
        <div className='signInHomePageBG'>
            <div className="container webContainer " >
            <div className="row" style={{marginBottom:'0px'}}>
                {this.state.recipes.map((obj,i)=>{
                    console.log(obj)
                    return <Link to={{ 
                    pathname: `/recipepage/${obj.title}`, 
                    state: { url: obj.source_url, publisher: obj.publisher_url, source_img: obj.image_url } 
                  }}>
                  <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img style={{height:'281.17px'}} src={obj.image_url} />

                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                                        className="material-icons">add</i></a>
                            </div>
                            <div className="card-content" style={{height:'100px'}}>
                                <span className="card-title" style={{fontSize:'18px'}}>{obj.title}</span>
                            </div>
                        </div>
                    </div> 
                    </Link>
                })}
                </div>
            </div>
        </div>
        </>
    }
}

export default SignInHome