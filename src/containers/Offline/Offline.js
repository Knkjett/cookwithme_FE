import React, { Component } from 'react'
import ExampleRecipe from '../../components/Offline/ExampleRecipe'
import JoinToday from '../../components/Offline/JoinToday'
import './offline.css'
import MobilePhone from '../../components/Offline/MobilePhone'

class Offline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {
        image_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/22/3/FNM090116_Grilled-Steak-and-Greek-Corn-Salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1469255050835.jpeg",
        publisher_url: 'http://foodnetwork.com',
        source_url: 'https://www.foodnetwork.com/recipes/food-network-kitchen/grilled-steak-with-greek-corn-salad-3562019',
        title:'Grilled Steak with Greek Corn Salad',
      },
      {
        image_url: "https://images.media-allrecipes.com/userphotos/560x315/4521371.jpg",
        publisher_url: 'http://allrecipes.com',
        source_url: 'www.allrecipes.com/recipe/256653/on-the-farm-scrambled-eggs/',
        title: 'On-the-Farm Scrambled Eggs'
      },
      {
        image_url:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/14/0/0181847_pork-chops_s4x3.jpg.rend.hgtvcom.826.620.suffix/1393206943617.jpeg.jpg',
        publisher_url:'http://foodnetwork.com',
        source_url:'https://www.foodnetwork.com/recipes/sunny-anderson/easy-grilled-pork-chops-recipe-2106547',
        title:'Easy Grilled Pork Chops'
      },
      {
        image_url: 'https://images.media-allrecipes.com/userphotos/720x405/2606852.jpg',
        publisher_url: 'http://allrecipes.com',
        source_url: 'www.allrecipes.com/recipe/229960/shrimp-scampi-with-pasta/',
        title: 'Shrimp Scampi with Pasta'
      },
      {
        image_url: 'http://static.food2fork.com/4515542dbb.jpg',
        publisher_url:'http://allrecipes.com',
        source_url: 'http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx',
        title: 'Zesty Slow Cooker Chicken Barbeque',
      },
      {
        image_url: 'http://static.food2fork.com/roastchicken2feab.jpg',
        publisher_url: "http://thepioneerwoman.com",
        source_url: "http://thepioneerwoman.com/cooking/2012/08/roast-chicken/",
        title: "Roast Chicken"
      },
      {
        image_url: "http://static.food2fork.com/cajun0676.jpg",
        publisher_url: "http://thepioneerwoman.com",
        source_url: "http://thepioneerwoman.com/cooking/2011/09/cajun-chicken-pasta/",
        title: "Cajun Chicken Pasta"
      },
      {
        image_url: "http://static.food2fork.com/4024225151_5f477f16caabf9.jpg",
        publisher_url: "http://thepioneerwoman.com",
        source_url: "http://thepioneerwoman.com/cooking/2009/10/chicken-parmigiana/",
        title: "Chicken Parmigiana"
      }
    ]
    }
  }
  

  Recipes = () => {
    return this.state.recipes.map((e, i) => {
      return (
        <div className='foodContainer' key={i}>
          <ExampleRecipe ele={e}/>
        </div>
      )
    })
  }
  PhonePreview = () => {
    return (<>
    <div className='bgDisplay'>
      <div className='container hide-on-small-only '>
        <div className='row'>
         <MobilePhone />
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
            <h5 style={{ textAlign: 'center' }}> Simply </h5>
            <h5 className='flavorText' style={{ textAlign: 'center' }}><i>You.</i></h5>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row' style={{ textAlign: 'center' }}>
          <div className='col s12 l4 noPadding'>
            <div className=' orange lighten-4' style={{ borderRadius: '25px', border: '1px solid black', margin: '0 10px' }}>
              <h3>Search</h3>
              <div className=' valign-wrapper'>
                <p className='flow-text' style={{ padding: '10px', height: '200px' }}>
                  Search recipes with Ingredients you have and cook your favorites!
            </p>
              </div>
            </div>
          </div>
          <div className='col s12 l4 noPadding'>
            <div className=' orange lighten-3' style={{ borderRadius: '25px', border: '1px solid black', margin: '0 10px' }}>
              <h3>Chat</h3>
              <div className='valign-wrapper'>
                <p className='flow-text' style={{ padding: '10px', height: '200px' }}>
                  Voice assisted controls to navigate the recipe. Never lift a finger again.
            </p>
              </div>
            </div>
          </div>
          <div className='col s12 l4 noPadding' >
            <div className=' orange lighten-2' style={{ borderRadius: '25px', border: '1px solid black', margin: '0 10px' }}>
              <h3>Cook</h3>
              <div className='valign-wrapper'>
                <p className='flow-text' style={{ padding: '10px', height: '200px' }}>
                  No jumbling up steps, minimalistic display shows what you need exactly when you need them.
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <this.PhonePreview />
      <div className='orange lighten-3' style={{textAlign: 'center'}}>
        <h3>Wide selection of Recipes</h3>
      </div>
      <div className='foodSlider' >
        <this.Recipes />
      </div>
      <div className='container z-depth-5' style={{ marginTop: '40px', backgroundColor: '#F1F1F1' }}>
        <div className='row' >
          <div className='col s12 l6'>
            <h3 style={{ textAlign: 'center' }}>Join Today!</h3>
            <img src='https://cdn.shopify.com/s/files/1/0543/1257/products/savor-recipe_buy-square_variants_01.jpg?v=1550781962'
              alt='Join'
              style={{ width: '100%' }} />
          </div>
          <JoinToday />
        </div></div>
    </>)
  }
}

export default Offline;