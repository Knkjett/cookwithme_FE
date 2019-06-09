import React from 'react';
import {ingredientScrape, stepScrape} from '../../services/webscrape';
import {findRecipe, checkRecipe, getFood2Fork, postRecipes,getUser} from '../../services/services';
import EmailContext from '../../contexts/email'
import { Link } from 'react-router-dom'
import Axios from 'axios';


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
    // console.log(this.props.location.state)
    getUser(this.context)
    .then(res=>this.setState({users_id:res.id}))
    
    let title = this.props.location.pathname.split('/recipepage/')[1]
    this.setState({title})
    
    if (!this.props.location.state){
      findRecipe(title)
      .then((res)=>{
        Axios.get(`http://localhost:5001/favorites/${this.state.users_id}/favID/${res[0].id}`)
        .then(res=>{
          if(res) this.setState({favorite:'btn-floating halfway-fab red'})
        })
        this.setState({ingredients: res[0].ingredients, steps: res[0].steps, source_img: res[0].source_img})
      })
    }
    else{
    let {publisher, url, source_img} = this.props.location.state
  //   let url = "https://www.foodnetwork.com/recipes/food-network-kitchen/grilled-steak-with-greek-corn-salad-3562019"
  //   let publisher = "http://foodnetwork.com"
  //  let source_img = 'http://static.food2fork.com/icedcoffee5766.jpg'
      checkRecipe(url)
        .then((res) => {
          if (!res) {
            ingredientScrape(publisher, url)
              .then((res) => {
                this.setState({
                  ingredients: res,
                  source_img: source_img

                })
              })
              .then(() => {
                if (this.state.steps && this.state.ingredients) {
                  postRecipes(null, title, source_img, url, this.state.ingredients, this.state.steps)
                  .then(res=>{
                    this.setState({recipe_id:res.id})
                  })
                }
                
              })
            stepScrape(publisher, url)
              .then((res) => {
                this.setState({
                  steps: res
                })
              })
              .then(() => {
                if (this.state.steps && this.state.ingredients) {
                  postRecipes(null, title, source_img, url, this.state.ingredients, this.state.steps)
                  .then(res=>{
                    this.setState({recipe_id:res.id})
                  })
                }
              })
          }
          else {
            this.setState({recipe_id:res[0].id, ingredients: res[0].ingredients, steps: res[0].steps, source_img: res[0].source_img })
            Axios.get(`http://localhost:5001/favorites/${this.state.users_id}/favID/${res[0].id}`)
            .then(res=>{
              if(res) this.setState({favorite:'btn-floating halfway-fab red'})
            })
          }
        })

    }
  }

  handleOnClick = () => {
    getFood2Fork('chicken')
      .then((res) => {
        console.log(res)
      })
  }

  toggleFav = () =>{
    if(this.state.favorite === 'btn-floating disabled halfway-fab red'){
      getUser(this.context)
      .then(res=>{
        return Axios.post('http://localhost:5001/favorites',{
          users_id:res.id,
          recipe_id:this.state.recipe_id
        })
      })
      .then(fav=>{
        console.log(fav.data.id)
        this.setState({favorite:'btn-floating halfway-fab red',favid:fav.data.id})
      })
    }
    else{
      console.log(this.state.favid)
      Axios.delete(`http://localhost:5001/favorites/${this.state.favid}`)
      .then(()=>this.setState({favorite:'btn-floating disabled halfway-fab red'}))
    }
  }

  render() {
    const { title,ingredients, steps } = this.state
    console.log('render title',title)
    if (!ingredients || !steps) {
      return (<img class='divElement' src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' alt='' onClick={this.handleOnClick}/>);
       // <h1 style={{ marginTop: '0px', paddingTop: '150px', height: 'calc(100vh - 150px)', width: '60%' }} onClick={this.handleOnClick}>Loading</h1>);
    }
    else {
      return (<React.Fragment>
        <div className="row">
          {/* <img className="col s12 m7 materialboxed hoverable" src={this.state.source_img} alt='' /> */}
          <div class="col s12 m7">
            <div class="card" style={{margin:0}}>
              <div class="card-image" onClick={e=>this.toggleFav()}>
                <img src={this.state.source_img} />
                <span class="card-title">{title}</span>
                <a class={this.state.favorite} ><i class="material-icons">favorite</i></a>
              </div>
            </div>
          </div>
          <div className="col s12 m5">
            <div className="card-panel" style={{ maxHeight: '300px', overflow: 'scroll',backgroundColor:'indianred' }}>
              <form action="#">
                <h5>Ingredients</h5>
                {
                  ingredients.map((ingred, i) => {
                    return (
                      <React.Fragment>
                        <p>
                        <span className="black-text">{ingred}</span>
                          
                        </p>
                      </React.Fragment>
                    );
                  })
                }
              </form>
            </div>
            <div className="card-panel" style={{ maxHeight: '300px', overflow: 'scroll',backgroundColor:'indianred' }}>
              <span className="black-text">
                {
                  steps.map((steps, i) => {
                    return (
                      <React.Fragment>
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
              cook: { ingredients: this.state.ingredients, steps: this.state.steps }
            }}> <div className='btn' style={{color:'crimson'}}>Cook Now
                </div> </Link>
                
          </div>
        </div>
      </React.Fragment>
      );
    }


  }
}