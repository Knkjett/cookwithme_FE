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
    }
  }

  componentDidMount = () => {
      var elems = document.querySelectorAll('.carousel');
      Materialize.Carousel.init(elems, {duration: '200'});
  }

  ListItem = () =>{
    if(!this.state.groceryList) return <></>
    else{
        return this.state.groceryList.map((e, i) => {
          console.log('this is e: ', e)
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
    return (
      <div className='background'>
        <h1 style={{textAlign: 'center'}}>Welcome back, User!</h1>
        <div className="row">
          <div className="col s12 m7 top-col">
            <div className="card grocery-container">
              <div className="card-action white-text blue-grey">
                <span className="card-title">Grocery List</span>
              </div>
              <div className="card-content grocery-list">
              <this.ListItem />
              </div>
              <div className="card-action">
                <a className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
                <span>Add To List</span>
              </div>
            </div>
          </div>
          <div className="col s12 m5 top-col">
          <h5>Recently Viewed:</h5>
            <div className="carousel">
              <a className="carousel-item" href="#one!" alt='food-pic'><img
                  src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food-pic' /></a>
              <a className="carousel-item" href="#two!"><img
                  src="https://blog.bulletproof.com/wp-content/uploads/2019/01/54-of-the-Best-Whole30-Recipes-on-the-Internet-_header-752x401.jpg" alt='food-pic' /></a>
              <a className="carousel-item" href="#three!"><img
                  src="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/3/2019/01/45213b64c6d3a673141f38fc34414f9e74e5f584.jpeg" alt='food-pic' /></a>
              <a className="carousel-item" href="#four!"><img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/3/iag1a01_humus.jpg.rend.hgtvcom.826.620.suffix/1382544965184.jpeg" alt='food-pic' /></a>
              <a className="carousel-item" href="#four!"><img
                  src="https://www.skinnytaste.com/wp-content/uploads/2019/01/Instant-Pot-Chicken-Parmesan-4.jpg" alt='food-pic' /></a>
            </div>
            <div>
          <a href='#' className="waves-effect waves-light btn-large">Create Recipe</a>
        </div>
          </div>
        </div>
        <h5>Your Favorites:</h5>
          <div className="row" style={{display:'inline-flex',width:'100vw',overflow:'scroll', overflowy: 'hidden'}}>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Recipe Name</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Recipe Name</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Recipe Name</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Recipe Name</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Recipe Name</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
          <h5>Your Recipes:</h5>
          <div className="row" style={{display:'inline-flex',width:'100vw',overflow:'scroll'}}>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
            <div className="col s6 card small card-container">
              <div className="card-image">
                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" />
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>Quick blurb about this recipe, maybe.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
    </div>
    )
  }
}