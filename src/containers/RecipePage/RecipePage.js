import React from 'react';
import {ingredientScrape, stepScrape} from '../../services/webscrape';
import './RecipePage.css'
import {postFav,getIDfav,findRecipe, checkRecipe, recentViewed, postRecipes,getUser} from '../../services/services';
import EmailContext from '../../contexts/email'
import { Link } from 'react-router-dom'
import Axios from 'axios';
import firebase from '../../firebase'


export default class RecipePage extends React.Component {
  static contextType = EmailContext
  constructor(props) {
    super(props)
    this.state = {
      users_id:null,
      title:null,
      ingredients: null,
      steps: null,
      source_img:null,
      favorite:'btn-floating disabled halfway-fab red',
      favid:null
    }

  }
  componentDidMount = (props) => {
    // NEED A MIDDLE PAGE THAT WILL REDIRECT TO RECIPE FROM HOME PAGE
    
    let title = this.props.location.pathname.split('/recipepage/')[1]
    this.setState({title})
    // getUser(this.context)
    // .then(res=>{
    //   this.setState({users_id:res.id});
    // })
    this.unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      console.log(user)
      getUser(user.email)
      .then(res=>this.setState({users_id:res.id}))
    })
    if (!this.props.location.state){
      const recipe_object = JSON.parse(window.localStorage.getItem('recipe'))
      findRecipe(title)
      .then((res)=>{
        
        this.setState({recipe_id:res[0].id,ingredients: res[0].ingredients, steps: res[0].steps, source_img: res[0].source_img})
        recentViewed(res[0].id)
      })
      if(recipe_object.favid){
        this.setState({favorite:'btn-floating halfway-fab red',favid:recipe_object.favid})
      } 

      

    }
    else{
    let {id,publisher_url, url, source_img} = this.props.location.state
    this.setState({id,publisher_url, url, source_img})
  //   let url = "https://www.foodnetwork.com/recipes/food-network-kitchen/grilled-steak-with-greek-corn-salad-3562019"
  //   let publisher_url = "http://foodnetwork.com"
  //  let source_img = 'http://static.food2fork.com/icedcoffee5766.jpg'
      if(url){

      
      checkRecipe(url)
        .then((res) => {
          if (!res) {
            ingredientScrape(publisher_url, url)
              .then((res) => {
                this.setState({
                  ingredients: res,
                  source_img: source_img
                })
              })
              .then(() => {
                if (this.state.steps && this.state.ingredients) {
                  postRecipes(null, title, source_img, url, publisher_url, this.state.ingredients, this.state.steps)
                  .then(res=>{
                    this.setState({recipe_id:res.id})
                    recentViewed(res.id)
                  })
                } 
              })
            stepScrape(publisher_url, url)
              .then((res) => {
                this.setState({
                  steps: res
                })
              })
              .then(() => {
                if (this.state.steps && this.state.ingredients) {
                  postRecipes(null, title, source_img, url, publisher_url, this.state.ingredients, this.state.steps)
                  .then(res=>{
                    this.setState({recipe_id:res.id})
                    recentViewed(res.id)
                  })
                }
              })
          }
          else {
            this.setState({recipe_id:res[0].id, ingredients: res[0].ingredients, steps: res[0].steps, source_img: res[0].source_img })
            getIDfav(this.state.users_id,res[0].id)
            .then(res=>{
              if(res) {
                recentViewed(res.data.id)
                window.localStorage.setItem('recipe',JSON.stringify({favid:res.data.id}))
                this.setState({favorite:'btn-floating halfway-fab red',favid:res.data.id})
              
              }
            })
          }
        })

      }
      else{
        Axios.get(`https://cookwithme.herokuapp.com/recipes/${id}`)
        .then(res=>{
          const {id,ingredients,steps,source_img} = res.data
          this.setState({recipe_id:id,ingredients,steps,source_img})
        })
        
      }
    }
  }

  componentWillUnmount(){
    //this.unsubscribe()
  }

  toggleFav = () =>{
    if(this.state.favorite === 'btn-floating disabled halfway-fab red'){
      postFav(this.state.users_id,this.state.recipe_id)
      .then(res=>{
        window.localStorage.setItem('recipe',JSON.stringify({favid:res.id}))
        this.setState({favorite:'btn-floating halfway-fab red',favid:res.id})
      })
    }
    else{
      Axios.delete(`https://cookwithme.herokuapp.com/favorites/${this.state.favid}`)
      .then(()=>{
        this.setState({favorite:'btn-floating disabled halfway-fab red'})
        window.localStorage.setItem('recipe',JSON.stringify({favid:null}))
      })
    }
  }
  render() {
    const { title,ingredients, steps } = this.state
    const {id,publisher_url, url, source_img } = this.state
    if (!ingredients || !steps) {
      return (<div style={{textAlign:'center',height:'92vh'}}><img alt='loader' className='divElement' src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' alt='Loading'/></div>);
       // <h1 style={{ marginTop: '0px', paddingTop: '150px', height: 'calc(100vh - 150px)', width: '60%' }} onClick={this.handleOnClick}>Loading</h1>);
    }
    else {
      return (<React.Fragment>
        <div className="row pageHeight" style={{paddingRight:'0.75rem !important'}}>
          {/* <img className="col s12 m7 materialboxed hoverable" src={this.state.source_img} alt='' /> */}
          <div className="col s12 m7" style={{padding:0,paddingRight:'0.75rem !important'}}>
            <div className="card" style={{margin:0}}>
              <div className="card-image" onClick={e=>this.toggleFav()}>
                <img alt='Recipe' src={this.state.source_img} style={{maxHeight: '500px'}} />
                
                <a className={this.state.favorite} ><i className="material-icons">favorite</i></a>
              </div>
              <div className="card-content">
                <span className="card-title">{title}</span>
              </div>
            </div>
          </div>
          <div className="col s12 m5" style={{padding:0,padding:'0.25rem'}}>
            <div className="card-panel" style={{ maxHeight: '300px', overflow: 'scroll',backgroundColor:'mediumseagreen',margin:0 }}>
              <form action="#">
                <h5>Ingredients</h5>
                {
                  ingredients.map((ingred, i) => {
                    return (
                      <React.Fragment key={i}>
                        <p >
                        <span className="white-text">{ingred}</span>
                          
                        </p>
                      </React.Fragment>
                    );
                  })
                }
              </form>
            </div>
            <div className="card-panel" style={{ maxHeight: '300px', overflow: 'scroll',backgroundColor:'mediumseagreen' }}>
            <h5>Instructions</h5>
              <span className="white-text">
                {
                  steps.map((steps, i) => {
                    return (
                      <React.Fragment key={i}>
                        <li>
                          {steps}
                        </li>
                      </React.Fragment>
                    );
                  })
                }
              </span>
            </div>
            <Link to={{
              pathname: `/cookmode/`,
              cook: { ingredients: this.state.ingredients, steps: this.state.steps, id, publisher_url, url, source_img,title:this.state.title }
            }}> <div className='btn' style={{color:'crimson'}}>Cook Now
                </div> </Link>
                
          </div>
        </div>
      </React.Fragment>
      );
    }


  }
}