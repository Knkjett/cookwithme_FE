import React, { Component } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import '../components/UserProfile.css'
import AuthContext from '../contexts/auth';

export default class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      favorites: [],
      yourRecipes: [],
      // recentlyViewed: [], --> Need Local Storage?
    }
  }

  componentDidMount = () => {
    // Scroll to top of page upon loading
    window.scrollTo(0, 0);

    // Carousel Initialization
    let elems = document.querySelectorAll('.carousel');
    Materialize.Carousel.init(elems, { duration: '200' });

    // Collapsible Initialization
    let elems2 = document.querySelectorAll('.collapsible');
    Materialize.Collapsible.init(elems2, { accordion: true });

  }




  render() {
    return (<>
      <AuthContext.Consumer>
        <div className='background'>
          {/* -------------------------- Styling for Mobile App ----------------------------*/}
          <div className="show-on-small hide-on-med-and-up" style={{ backgroundColor: 'orange' }}>
            <h3 style={{ marginTop: '0px', textAlign: 'center', paddingTop: '150px' }}>Welcome back, User!</h3>
            <ul className="collapsible" style={{ marginTop: '125px' }}>
              <li>
                <div className="collapsible-header">Favorites</div>
                <div className="collapsible-body">
                  <div className="row userSlider" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
                    {/* FAVORITES CARD */}
                    <div className="col s6 card small card-container">
                      <div className="card-image">
                        <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                        <span className="card-title">Recipe Name</span>
                      </div>
                      <div className="card-content">
                        <p>Quick blurb about this recipe, maybe.</p>
                      </div>
                      <div className="card-action">
                        <a href="/#">This is a link</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">Your Recipes</div>
                <div className="collapsible-body">
                  <div className="row" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
                    {/* USER CREATED RECIPE CARD */}
                    <div className="col s6 card small card-container">
                      <div className="card-image">
                        <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                        <span className="card-title">Card Title</span>
                      </div>
                      <div className="card-content">
                        <p>Quick blurb about this recipe, maybe.</p>
                      </div>
                      <div className="card-action">
                        <a href="/#">This is a link</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="collapsible-header">Recently Viewed</div>
                <div className="collapsible-body">
                  <div className="row userSlider" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
                    {/* RECENTLY VIEWED CARD */}
                    <div className="col s6 card small card-container">
                      <div className="card-image">
                        <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                        <span className="card-title">Recipe Name</span>
                      </div>
                      <div className="card-content">
                        <p>Quick blurb about this recipe, maybe.</p>
                      </div>
                      <div className="card-action">
                        <a href="/#">This is a link</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* -------------------------- Styling for Web App ----------------------------*/}
          <div className="show-on-large hide-on-small-only">
            <h1 style={{ marginTop: '0px', textAlign: 'center', paddingTop: '50px' }}>Welcome back, User!</h1>
            {/* FAVORTITES */}
            <div className="row">
              <h5>Your Favorites:</h5>
              <div className="row userSlider" style={{ display: 'inline-flex', width: '80%', overflow: 'scroll' }}>
                {/* FAVORITES CARD */}
                <div className="col s6 card small card-container">
                  <div className="card-image">
                    <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                    <span className="card-title">Recipe Name</span>
                  </div>
                  <div className="card-content">
                    <p>Quick blurb about this recipe, maybe.</p>
                  </div>
                </div>
              </div>
              {/* YOUR RECIPES  */}
              <h5>Your Recipes:</h5>
              <div className="row" style={{ display: 'inline-flex', width: '80%', overflow: 'scroll' }}>
                {/* USER CREATED REICPES CARD */}
                <div className="col s6 card small card-container">
                  <div className="card-image">
                    <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>Quick blurb about this recipe, maybe.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='createRecipe-container'>
              <a href='/#/create' className="waves-effect waves-light btn-large">Create Recipe</a>
            </div>
            {/* RECENTLY VIEWED CAROUSEL */}
            <h5>Recently Viewed:</h5>
            <div class="carousel">
              <div class="carousel-item">
                <div class="card sticky-action">
                  <div class="card-image ">
                    <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg?h=350" alt='food-pic' />
                    <span class="card-title">Recipe Name</span>
                  </div>
                  <div class="card-content">
                    <p>This is a content.</p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <div class="card-image">
                    <img src="https://images.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg?h=350&auto=compress&cs=tinysrgb" alt='food-pic' />
                    <span class="card-title">This is a Title</span>
                  </div>
                  <span class="card-content">This is a content</span>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <div class="card-image">
                    <img src="https://images.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg?h=350&auto=compress&cs=tinysrgb" alt='food-pic' />
                    <span class="card-title">This is a Title</span>
                  </div>
                  <span class="card-content">This is a content</span>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card">
                  <div class="card-image">
                    <img src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?h=350&auto=compress&cs=tinysrgb" alt='food-pic' />
                    <span class="card-title">This is a Title</span>
                  </div>
                  <span class="card-content">This is a content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthContext.Consumer>
    </>
    )
  }
}