import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import Axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import '../components/UserProfile.css'


export default class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users_id: null,
      favorites: [],
      yourRecipes: [],
      recentlyViewed: [],
    }
  }

  componentDidUpdate = () => {
    // Scroll to top of page upon loading

    window.scrollTo(0, 0);

    // Carousel Initialization
    let elems = document.querySelectorAll('.carousel');
    Materialize.Carousel.init(elems, { duration: '200' });

    // Collapsible Initialization
    let elems2 = document.querySelectorAll('.collapsible');
    Materialize.Collapsible.init(elems2, { accordion: true });
  }

  componentDidMount = () => {
    const users_id = window.localStorage.getItem('users_id');
    const recentlyViewed = JSON.parse(window.localStorage.getItem('recentlyViewed'));
    this.setState({ users_id, recentlyViewed }, () => {
      this.GetFavorites()
      this.GetYourRecipes();
    })
  }

  GetFavorites = () => {
    const { users_id } = this.state;

    Axios.get(`https://cookwithme.herokuapp.com/favorites/users/${users_id}`)
      .then(res => {
        const promises = [];
        for (let i = 0; i < res.data.length; i++) {
          let favRecID = res.data[i].recipe_id
          promises.push(Axios.get(`https://cookwithme.herokuapp.com/recipes/${favRecID}`))
        }
        return promises;
      })
      .then(promises => {
        return Promise.all(promises)
      })
      .then(results => {
        const favorites = results.map(e => e.data);
        this.setState({ favorites });
      })
      .catch(err => console.log(err))
  }

  makeRequestsFromArray = (arr) => {
    const { users_id } = this.state;
    let index = 0;
    function request() {
      Axios.get(`https://cookwithme.herokuapp.com/recipes/users/${users_id[index]}`).then(() => {
        index++;
        if (index >= arr.length) {
          return 'done'
        }
        return request();
      });
    }
    return request();
  }


  GetYourRecipes = () => {
    //console.log('reading GetYourRecipes Func')
    const { users_id } = this.state;

    Axios.get(`https://cookwithme.herokuapp.com/recipes/users/${users_id}`)
      .then(res => {
        //console.log('RES is: ', res)
        //console.log('recipe date: ', res.data)
        this.setState({ yourRecipes: res.data })
      })
      .catch(err => console.log(err))
  }


  ListFavorites = () => {
    const { favorites } = this.state;
    if (!favorites) return <><h3>There are no Faves!</h3></>
    return (
      <>
        {/* MOBILE APP */}
        {
          favorites.map((e, i) => {
            return (<>
              {/* Mobile App  */}
              <div className="show-on-small hide-on-med-and-up col s12 m3 card no-shadows card-container" key={i}>
                <Link to={{
                  pathname: `/recipepage/${e.title}`,
                  state: { url: e.source_url, publisher: e.publisher_url, source_img: e.image_url }
                }}>
                  <div className="card-image">
                    <img src={e.source_img} alt='food pic' />
                  </div>
                  <div className="card-content" >
                    <p>{e.title}</p>
                  </div>
                </Link>
              </div>
              {/* Web App  */}
              <div className="show-on-large hide-on-small-only col s12 m3 card no-shadows card-container">
                <Link to={{
                  pathname: `/recipepage/${e.title}`,
                  state: { url: e.source_url, publisher: e.publisher_url, source_img: e.image_url }
                }}>
                  <div className="card-image">
                    <img src={e.source_img} alt='food pic' style={{ height: '180px', }} />
                  </div>
                  <div className="card-content" style={{ height: '75px', textAlign: 'center', background: 'whitesmoke' }}>
                    <p>{e.title}</p>
                  </div>
                </Link>
              </div>
            </>
            )
          })
        }
      </>
    )
  }


  ListNewFav = () => {
    const { favorites } = this.state;
    return <>
      <h4 style={{ color: 'red', paddingLeft: 'calc(3.5%)', paddingBottom: '0px' }}>Favorites</h4>
      <ul className='hs'>
        {
          favorites.map((e, i) => {
            return <li className='item'>
              <div className="show-on-large hide-on-small-only col s12 m3 card no-shadows card-container" key={i}>
                <Link to={{
                  pathname: `/recipepage/${e.title}`,
                  state: { url: e.source_url, publisher: e.publisher_url, source_img: e.image_url }
                }}>
                  <div className="card-image">
                    <img src={e.source_img} alt='food pic' style={{ height: '180px', }} />
                  </div>
                  <div className="card-content" style={{ height: '75px', textAlign: 'center', background: 'whitesmoke' }}>
                    <p>{e.title}</p>
                  </div>
                </Link>
              </div>
            </li>
          })
        }
      </ul>

    </>
  }

  ListYourRecipes = () => {
    const { yourRecipes } = this.state;
    if (!yourRecipes) return <><p>Time to Create!</p></>
    return (
      <>
        {
          yourRecipes.map((e, i) => {
            return (<>
              {/* Mobile App  */}
              <div className="show-on-small hide-on-med-and-up col s12 m3 card no-shadows card-container">
                <Link to={{
                  pathname: `/recipepage/${e.title}`,
                  state: { url: e.source_url, publisher: e.publisher_url, source_img: e.image_url }
                }}>
                  <div className="card-image">
                    <img src={e.source_img} alt='food pic' />
                  </div>
                  <div className="card-content" >
                    <p>{e.title}</p>
                  </div>
                </Link>
              </div>
              {/* Web App  */}
              <div className="show-on-large hide-on-small-only col s12 m3 card no-shadows card-container" key={i}>
                <Link to={{
                  pathname: `/recipepage/${e.title}`,
                  state: { url: e.source_url, publisher: e.publisher_url, source_img: e.image_url }
                }}>
                  <div className="card-image">
                    <img src={e.source_img} alt='food pic' style={{ height: '180px', }} />
                  </div>
                  <div className="card-content" style={{ height: '75px', textAlign: 'center', background: 'whitesmoke' }}>
                    <p>{e.title}</p>
                  </div>
                </Link>
              </div>
            </>
            )
          })
        }
      </>
    )
  }


  ListRecentlyViewed = () => {
    const { recentlyViewed } = this.state;
    console.log(recentlyViewed)
    // console.log('imListFunc' ,recentlyViewed)
    if (recentlyViewed===[] || recentlyViewed===[{}]) return <><p>None To Show Yet...</p></>
    console.log('we got here!')
    return <>
    {console.log('we got here')}
      <h5>Recently Viewed:</h5>
      <div className="carousel">
        {
          recentlyViewed.map((e, i) => {
            if (e==={}) console.log('e is empty')
            return <>
              <div className="carousel-item" key={i}>
                <div className="card sticky-action">
                  <div className="card-image ">
                    <img src={e.source_img} alt='food-pic' />
                    <span className="card-title">{e.title}</span>
                  </div>
                </div>
              </div>
            </>
          })
        }
      </div>
    </>
  }


  render() {
    const { favorites } = this.state
    console.log('in state: ', this.state.recentlyViewed)
    // console.log(favorites)
    return (<>
      <AuthContext.Consumer>
        {
          user => {
            if (!user) {
              return (
                <div style={{ height: '96vh' }}>
                  <img className='divElement' src='https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif' alt='loading' />);
                </div>
              )
            }
            else {
              return (
                <div className='background'>
                  {/* <this.handleUser user={user} /> */}
                  {/* -------------------------- Styling for Mobile App ----------------------------*/}
                  <div className="show-on-small hide-on-med-and-up" style={{ backgroundColor: 'orange' }}>
                    <h3 style={{ marginTop: '0px', textAlign: 'center', paddingTop: '150px' }}>{`Welcome back, ${user.email}!`}</h3>
                    <ul className="collapsible" style={{ marginTop: '125px' }}>
                      <li>
                        <div className="collapsible-header">Favorites</div>
                        <div className="collapsible-body">
                          <div className="row userSlider" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
                            {/* FAVORITES CARD */}
                            <this.ListFavorites />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="collapsible-header">Your Recipes</div>
                        <div className="collapsible-body">
                          <div className="row" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
                            {/* YOUR RECIPES CARD */}
                            <this.ListYourRecipes />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="collapsible-header">Recently Viewed</div>
                        <div className="collapsible-body">
                          <this.ListRecentlyViewed />
                          {/* <div className="row userSlider" style={{ display: 'inline-flex', width: '100vw', overflow: 'scroll' }}>
                            RECENTLY VIEWED CARD
                            <div className="col s6 card small card-container">
                              <div className="card-image">
                                <img src="http://baliindiancuisine.com/wp-content/uploads/2014/12/Indian-fast-food-recipes.jpg" alt='food pic' />
                              </div>
                              <div className="card-content">
                                <p>Quick blurb about this recipe, maybe.</p>
                              </div>
                              <div className="card-action">
                                <a href="/#">This is a link</a>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* -------------------------- Styling for Web App ----------------------------*/}
                  <div className="show-on-large hide-on-small-only">
                    <h1 style={{ marginTop: '0px', textAlign: 'center', paddingTop: '50px' }}>{`Welcome back, ${user.email}!`}</h1>
                    {/* FAVORTITES */}

                    {/* <this.ListFavorites /> */}
                    {this.ListNewFav()}

                    {/* YOUR RECIPES  */}
                    <div className="row">
                      <div className="row" style={{ display: 'inline-flex', width: '80%', overflow: 'scroll' }}>
                        {/* YOUR REICPES CARD */}
                        <div className="show-on-large hide-on-small-only col s12 m3 card no-shadows card-container">
                          <div className="card-content" style={{ height: '180px', textAlign: 'center', background: 'white', position: 'relative' }} >
                            <span style={{ color: 'red', fontSize: '30px', position: 'relative', top: '20px', }}>Your Recipes</span>
                            <div className='createRecipe-container' style={{ position: 'relative', top: '50px' }}>
                              <a href='/#/create' className="waves-effect waves-light btn-large">Create New Recipe</a>
                            </div>
                          </div>
                        </div>
                        <this.ListYourRecipes />
                      </div>
                    </div>
                    {/* RECENTLY VIEWED CAROUSEL */}
                    <this.ListRecentlyViewed />
                  </div>
                </div>
              )
            }
          }
        }
      </AuthContext.Consumer>
    </>
    )
  }
}