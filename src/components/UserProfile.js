import React, { Component } from 'react';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import '../components/UserProfile.css'

export default class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      input: '',
      groceryList: ['Eggs', 'Milk', 'Butter', 'Sugar', 'Salt', 'Flour', 'Chicken', 'Beef', 'Pork Chops', 'BBQ Sauce', 'Broccoli', 'Green Beans', 'Black Beans'],
      favorites: [],
      yourRecipes: [],
    }
  }

  componentDidMount = () => {
    window.scrollTo(0,0);
    // Carousel Initialization
    let elems = document.querySelectorAll('.carousel');
    Materialize.Carousel.init(elems, { duration: '200' });

    // Collapsible Initialization
    let elems2 = document.querySelectorAll('.collapsible');
    Materialize.Collapsible.init(elems2, { accordion: true });

    // Parallax Initialization
    // var elems3 = document.querySelectorAll('.parallax');
    // Materialize.Parallax.init(elems3, {responsiveThreshold: 0});
  }

  ListItem = () => {
    if (!this.state.groceryList) return <></>
    else {
      return this.state.groceryList.map((e, i) => {
        return (
          <p key={i}>
            <label>
              <input type="checkbox" />
              <span>{e}</span>
            </label>
          </p>)
      })
    }
  }

  // AddItem = (e) => {
  //   const {input} = this.state;
  //   input = e.target.value;
  //   this.setState({input})
  // }

  render() {
    return (<>
      <div className='background'>
        {/* -------------------------- Styling for Mobile App ----------------------------*/}
        <div className="show-on-small hide-on-med-and-up" style={{ backgroundColor: 'orange' }}>
          <h3 style={{ marginTop: '0px', textAlign: 'center', paddingTop: '150px' }}>Welcome back, User!</h3>
          <ul className="collapsible" style={{ marginTop: '125px' }}>
            <li>
              <div className="collapsible-header">Grocery List</div>
              <div className="collapsible-body">
                <div className="card">
                  <div className="card-action white-text blue-grey">
                    <span className="card-title">Grocery List</span>
                  </div>
                  <div className="card-content grocery-list">
                    <this.ListItem />
                  </div>
                  <div className="card-action">
                    <a className="btn-floating btn-small waves-effect waves-light red" ><i className="material-icons">add</i></a>
                    <span>Add To List</span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Recently Viewed</div>
              <div className="collapsible-body">
                <div className="carousel">
                  <a className="carousel-item" href="#one!">
                    <div className='card'><img
                      src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food-pic' />
                    </div></a>
                  <a className="carousel-item" href="#one!">
                    <div className='card'><img
                      src="https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-400x400.jpg" alt='food-pic' />
                    </div></a>
                  <a className="carousel-item" href="#one!">
                    <div className='card'><img
                      src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2019/01/45213b64c6d3a673141f38fc34414f9e74e5f584.jpeg" alt='food-pic' />
                    </div></a>
                  <a className="carousel-item" href="#one!">
                    <div className='card'><img
                      src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/3/iag1a01_humus.jpg.rend.hgtvcom.400.400.suffix/1382544965184.jpeg" alt='food-pic' />
                    </div></a>
                  <a className="carousel-item" href="#one!">
                    <div className='card'><img
                      src="https://www.skinnytaste.com/wp-content/uploads/2019/01/Instant-Pot-Chicken-Parmesan-4.jpg" alt='food-pic' />
                    </div></a>
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header">Favorites</div>
              <div className="collapsible-body">
                <div className="row userSlider" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
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
          </ul>
        </div>

        {/* -------------------------- Styling for Web App ----------------------------*/}
        <div className="show-on-large hide-on-small-only">
          <h1 style={{ marginTop: '0px', textAlign: 'center', paddingTop: '50px' }}>Welcome back, User!</h1>
            {/* FAVORTITES */}
            <div className="row">
            <h5>Your Favorites:</h5>
            <div className="row userSlider" style={{ display: 'inline-flex', width: '80%', overflow: 'scroll' }}>
              <div className="col s6 card small card-container">
                <div className="card-image">
                  <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                  <span className="card-title">Recipe Name</span>
                </div>
                <div className="card-content">
                  <p>Quick blurb about this recipe, maybe.</p>
                </div>
              </div>
              <div className="col s6 card small card-container">
                <div className="card-image">
                  <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                  <span className="card-title">Recipe Name</span>
                </div>
                <div className="card-content">
                  <p>Quick blurb about this recipe, maybe.</p>
                </div>
              </div>
              <div className="col s6 card small card-container">
                <div className="card-image">
                  <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                  <span className="card-title">Recipe Name</span>
                </div>
                <div className="card-content">
                  <p>Quick blurb about this recipe, maybe.</p>
                </div>
              </div>
              <div className="col s6 card small card-container">
                <div className="card-image">
                  <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                  <span className="card-title">Recipe Name</span>
                </div>
                <div className="card-content">
                  <p>Quick blurb about this recipe, maybe.</p>
                </div>
              </div>
              <div className="col s6 card small card-container">
                <div className="card-image">
                  <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                  <span className="card-title">Recipe Name</span>
                </div>
                <div className="card-content">
                  <p>Quick blurb about this recipe, maybe.</p>
                </div>
              </div>
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
            {/* GROCERY LIST CARD */}
            <div className="card grocery-container">
              <div className="card-action white-text blue-grey">
                <span className="card-title">Grocery List</span>
              </div>
              <div className="card-content grocery-list">
                <this.ListItem />
              </div>
              <div className="card-action">
                <a className="btn-floating btn-small waves-effect waves-light red" href='/'><i className="material-icons">add</i></a>
                <span>Add To List</span>
              </div>
            </div>
            {/* YOUR RECIPES  */}
            <div className="row" style={{ display: 'inline-flex', width: '80%', overflow: 'scroll' }}>
            <h5>Your Recipes:</h5>
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
            <div className="col s12 m5 top-col">
            </div>
            <div className="col s12 m6 top-col">
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
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div class="card-image">
                  <img src="https://images.pexels.com/photos/160933/girl-rabbit-friendship-love-160933.jpeg?h=350&auto=compress&cs=tinysrgb" alt='food-pic' />
                  <span class="card-title">
                    This is a Title
                        </span>
                </div>
                <span class="card-content">
                  This is a content
                      </span>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div class="card-image">
                  <img src="https://images.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg?h=350&auto=compress&cs=tinysrgb" alt='food-pic' />
                  <span class="card-title">
                    This is a Title
                          </span>
                </div>
                <span class="card-content">
                  This is a content
                        </span>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card">
                <div class="card-image">
                  <img src="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?h=350&auto=compress&cs=tinysrgb" alt='food-pic' />
                  <span class="card-title">
                    This is a Title
                            </span>
                </div>
                <span class="card-content">
                  This is a content
                          </span>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}