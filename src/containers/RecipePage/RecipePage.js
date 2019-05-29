import React from 'react';
import {ingredientScrape, stepScrape} from '../../services/webscrape';
import {checkRecipe, getFood2Fork} from '../../services/services';


export default class RecipePage extends React.Component {
      constructor(props) {
        super(props)
      this.state  = { 
          ingredients: null,
          steps: null
        } 

      }
  componentDidMount = (props) => {
    checkRecipe("https://www.allrecipes.com/recipe/10549/best-brownies/")
    .then((res)=> {
      if(!res){
        ingredientScrape('https://www.allrecipes.com/',"https://www.allrecipes.com/recipe/10549/best-brownies/")
        .then((res)=>{
          this.setState({
            ingredients : res
           
          })
        })
        stepScrape('https://www.allrecipes.com/',"https://www.allrecipes.com/recipe/10549/best-brownies/")
        .then((res)=>{
          this.setState({
            steps: res
          })
        })
      }
      else {
        this.setState({ingredients: res[0].ingredients, steps: res[0].steps})
         console.log('has data', res)
      }
    })
 }

 handleOnClick = () => {
   getFood2Fork('chicken')
    .then((res )=> {
      console.log(res)
    })
 } 
 
 render() {
  if(!this.state.ingredients || !this.state.steps){
    return(<h1 onClick={this.handleOnClick}>test</h1>);
  } 
  else {
    return(<React.Fragment>
      <nav>
        <div className="nav-wrapper">
          <button className="brand-logo" onClick={this.handleOnClick}><i className="material-icons">cloud</i>Logo</button>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
            <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
            <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
          </ul>
        </div>
      </nav>
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
        </div>
      </div>
    </React.Fragment>
  );
  }
  
    
}
}