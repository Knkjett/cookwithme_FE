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
      // console.log("HERE2")
      // checkRecipe(url)
    }
    else{
      console.log("HERE")
    // let {publisher, url, source_img} = this.props.location.state
    let url = "https://www.foodnetwork.com/recipes/food-network-kitchen/grilled-steak-with-greek-corn-salad-3562019"
    let publisher = "http://foodnetwork.com"
   let source_img = 'http://static.food2fork.com/icedcoffee5766.jpg'
      checkRecipe(url)
      .then((res)=> {
        if(!res){
          ingredientScrape(publisher,url)
          .then((res)=>{
            this.setState({
              ingredients : res
            })
          })
          .then(()=>{
            if(this.state.steps && this.state.ingredients){
              console.log('stes', this.state.steps)
              console.log('ingredi' , this.state.ingredients)
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
              console.log('stes', this.state.steps)
              console.log('ingredi' , this.state.ingredients)
              postRecipes(null, title, source_img, url, this.state.ingredients, this.state.steps)
            }
          })
        }
        else {
          this.setState({ingredients: res[0].ingredients, steps: res[0].steps})
           console.log('has data', res)
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
  if(!this.state.ingredients || !this.state.steps){
    return(<h1 style={{marginTop:'0px', paddingTop:'150px', height:'calc(100vh - 150px)'}} onClick={this.handleOnClick}>Loading</h1>);
  } 
  else {
    return(<React.Fragment>
      <div className="row">
        <img className="col s12 m7 materialboxed hoverable" src={require('../../assets/fish.jpg')} alt='' />
        <div className="col s12 m5">
          <div className="card-panel grey">
            <form action="#">
              <h5>Ingredients</h5>
              <p>
                <label for="chk">
                  <input type="checkbox" id="chk" />
                  <span className="white-text">1lbs salmon</span>
                </label>
              </p>
              <p>
                <label for="chk">
                  <input type="checkbox" id="chk" />
                  <span className="white-text">1 lemon</span>
                </label>
              </p>
              <p>
                <label for="chk">
                  <input type="checkbox" id="chk" />
                  <span className="white-text">pepper</span>
                </label>
              </p>
              <p>
                <label for="chk-demo4">
                  <input type="checkbox" id="chk-demo4" />
                  <span className="white-text">1 slice onion</span>
                </label>
              </p>
            </form>
          </div>
          <div className="card-panel grey">
            <span className="white-text">Preheat oven to 350°.
            1.Line a large rimmed baking sheet with foil and grease with cooking spray. To the center of the foil, lay lemon slices in an even layer.
            2. Season both sides of the salmon with salt and pepper and place on top of lemon slices.
            3. In a small bowl, whisk together butter, honey, garlic, thyme, and oregano. Pour over salmon then fold up foil around the salmon. Bake until the salmon is cooked through, about 25 minutes. Switch the oven to broil, and broil for 2 minutes, or until the butter mixture has thickened.
            4. Garnish with parsley before serving.
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