import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignInHome.css';
import axios from 'axios';

class SignInHome extends Component{
    state = {
        recipes:[]
    }
    componentDidMount(){
        axios.get('https://www.food2fork.com/api/search?key=b3ea659f1dcf2f54cf62f52de6d01cc6')
        .then(res=>{
            console.log(res.data)
            const recipes_arr = res.data.recipes.slice(0,12)
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