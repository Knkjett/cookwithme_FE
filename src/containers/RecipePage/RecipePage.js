import React from 'react';
import {ingredientScrape, stepScrape} from '../../services/webscrape';
import {checkRecipe, getFood2Fork, postRecipes} from '../../services/services';
import { Link } from 'react-router-dom'


export default class RecipePage extends React.Component {
      constructor(props) {
        super(props)
      this.state  = { 
          ingredients: null,
          steps: null
        } 

      }
  componentDidMount = (props) => {
    // NEED A MIDDLE PAGE THAT WILL REDIRECT TO RECIPE FROM HOME PAGE
    // console.log(this.props.location.state)
    let title = this.props.location.pathname.split('/recipepage/')[1]
    if (!this.props.location.state){
      // checkRecipe(url)
    }
    else{
      console.log("HERE")
    let {publisher, url, source_img} = this.props.location.state
  //   let url = "https://www.foodnetwork.com/recipes/food-network-kitchen/grilled-steak-with-greek-corn-salad-3562019"
  //   let publisher = "http://foodnetwork.com"
  //  let source_img = 'http://static.food2fork.com/icedcoffee5766.jpg'
      checkRecipe(url)
      .then((res)=> {
        if(!res){
          ingredientScrape(publisher,url)
          .then((res)=>{
            this.setState({
              ingredients : res,
              source_img : source_img
            })
          })
          .then(()=>{
            if(this.state.steps && this.state.ingredients){
              postRecipes(null, title, source_img, url, this.state.ingredients, this.state.steps)
            }
          })
          stepScrape(publisher,url)
          .then((res)=>{
            this.setState({
              steps: res
            })
          })
          .then(()=>{
            if(this.state.steps && this.state.ingredients){
              postRecipes(null, title, source_img, url, this.state.ingredients, this.state.steps)
            }
          })
        }
        else {
          this.setState({ingredients: res[0].ingredients, steps: res[0].steps, source_img: res[0].source_img})
        }
      })
      
    }
 }

 handleOnClick = () => {
   getFood2Fork('chicken')
    .then((res )=> {
      console.log(res)
    })
 } 
 
 render() {
   const { ingredients, steps} = this.state
  //  const { source_img} = this.props.location.state
  if(!ingredients || !steps){
    return( 
    <div style={{height:'calc(100vh - 70px)'}}>
    <div className='progress' style={{top:'50%'}}>
    <h1 style={{ paddingTop:'150px', height:'calc(100vh - 150px)', width: '60%'}} className="indeterminate" onClick={this.handleOnClick}>Loading</h1>
    </div>
    </div>
    );
  } 
  else {
    return(<React.Fragment>
      <div className="row">
        <img className="col s12 m7 materialboxed hoverable" src={this.state.source_img} alt='' />
        <div className="col s12 m5">
          <div className="card-panel grey">
            <form action="#">
              <h5>Ingredients</h5>
              {
               ingredients.map((ingred,i)=>{
                 return(
                   <React.Fragment>
                     <p>
                  <label for="chk">
                    <input type="checkbox" id="chk" />
                    <span className="white-text">{ingred}</span>
                  </label>
                </p>
                   </React.Fragment>
                 ); 
                })
              }
            </form>
          </div>
          <div className="card-panel grey">
            <span className="white-text">
            {
              steps.map((steps,i)=>{
                return(
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
                    cook: { ingredients : this.state.ingredients, steps: this.state.steps } 
                  }}> <div className='btn'>Cook Now
                </div> </Link>
        </div>
      </div>
    </React.Fragment>
  );
  }
  
    
}
}