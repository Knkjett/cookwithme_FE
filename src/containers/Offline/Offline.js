import React, { Component } from 'react'
import ExampleRecipe from '../../components/Offline/ExampleRecipe'
import JoinToday from '../../components/Offline/JoinToday'
import './offline.css'
import MobilePhone from '../../components/Offline/MobilePhone'

class Offline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [1, 2, 3, 4, 5, 6, 7]
    }
  }

  Recipes = () => {
    return this.state.recipes.map((e, i) => {
      return (
        <div className='foodContainer' key={i}>
          <ExampleRecipe />
        </div>
      )
    })
  }
  PhonePreview = () =>{
    return (<>
    <div className='container hide-on-small-only'>
      <div className='row'>
        <div className='col s12 m5'>
    <MobilePhone />
        </div>
        <div className='col s12 offset-m2 m5'>
          <h4>Try Me!</h4>
          <span className='flow-text'>Mobile </span>
          <span className='flow-text flavorText'>Friendly</span>
          <span className='flow-text'> Design</span>
          
        </div>
      </div>
    </div>
     
    </>)
  }
  render() {
    return (<>
      <div className='row banner'>
        <div className='col offset-s7 offset-l7 s5 l5 bannerContainer'>
          <div className='bannerText'>
            <h4><i>Search. Chat. Cook.</i></h4>
            <span className='flow-text'>Find the perfect recipe from a wide selection fit for </span>
            <span className='flow-text flavorText'>You</span>
            <span className='flow-text'>r needs. </span>
            <span className='flow-text flavorText'>You</span>
            <span className='flow-text'>r Ingredients. </span>
            <span className='flow-text flavorText'>You</span>
            <span className='flow-text'>r Styles. </span>
            <span className='flow-text flavorText'>You</span>
            <span className='flow-text'>r Favorites.</span>
            <h5 style={{ textAlign: 'right' }}> Simply </h5>
            <h5 className='flavorText' style={{ textAlign: 'right' }}>You.</h5>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row' style={{ textAlign: 'center' }}>
          <div className='col s12 l4 noPadding' >
            <h3>Search</h3>
            <div className='orange lighten-4 valign-wrapper'>
              <p className='flow-text' style={{ padding: '10px', height: '200px' }}>
                Search recipes with Ingredients you have and cook your favorites!
            </p>
            </div>
          </div>
          <div className='col s12 l4 noPadding'>
            <h3>Chat</h3>
            <div className='orange lighten-3 valign-wrapper'>
              <p className='flow-text' style={{ padding: '10px', height: '200px' }}>
                Voice assisted controls to navigate the recipe. Never lift a finger again.
            </p>
            </div>
          </div>
          <div className='col s12 l4 noPadding' >
            <h3>Cook</h3>
            <div className='orange lighten-2 valign-wrapper'>
              <p className='flow-text' style={{ padding: '10px', height: '200px' }}>
                No jumbling up steps, minimalistic display shows what you need exactly when you need them.
            </p>
            </div>
          </div>
        </div>
      </div>
      <this.PhonePreview />
      <form>
        <div className='container'>
        <div className='row lighten-3 orange searchBar' style={{borderRadius:'25px',paddingLeft:'25px',paddingRight:'25px'}}>
        <div className='col s12 m12' >
        <input style={{borderBottom:'0'}}/>
        </div>
        </div>
        </div>
      </form>
      <div className='foodSlider' >
        <this.Recipes />
      </div>
      <div className='container z-depth-5' style={{ marginTop: '40px', backgroundColor:'#F1F1F1'}}>
        <div className='row' >
          <div className='col s12 l6'>
            <h3 style={{textAlign:'center'}}>Join Today!</h3>
            <img src='https://cdn.shopify.com/s/files/1/0543/1257/products/savor-recipe_buy-square_variants_01.jpg?v=1550781962' 
            alt='Join'
            style={{width:'100%'}}/>
          </div>
          <JoinToday />
        </div></div>
    </>)
  }
}

export default Offline;