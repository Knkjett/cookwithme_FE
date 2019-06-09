import React, { Component } from 'react'
import './create.css'
import preview from '../../assets/PhotoPlaceholder.png'
import { postRecipes, getUser } from '../../services/services'
import firebase from 'firebase';
import AuthContext from '../../contexts/auth'
import { Redirect } from 'react-router-dom'
import M from 'materialize-css'

class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      file: null,
      preview: null,
      ingredients: '',
      ingredientsArray: null,
      steps: '',
      stepsArray: null,
      source_url: null,
      users_id: null,
      Redirect: false
    }
  }
  handleRedirect = () =>{
    if(this.state.Redirect){
      return <Redirect to='/' />
    }
    else{
      return <></>
    }
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleAddIngred = (e) => {
    e.preventDefault();
    let arr = []
    if (!this.state.ingredientsArray) {
      arr = [];
    }
    else {
      arr = this.state.ingredientsArray
    }
    if (this.state.ingredients.trim() !== '') {
      arr.push(this.state.ingredients.trim())
      this.setState({
        ingredients: '',
        ingredientsArray: arr
      })
    }
  }
  handleAddSteps = (e) => {
    e.preventDefault();
    let arr = []
    if (!this.state.stepsArray) {
      arr = [];
    }
    else {
      arr = this.state.stepsArray
    }
    if (this.state.steps.trim() !== '') {
      arr.push(this.state.steps.trim())
      this.setState({
        steps: '',
        stepsArray: arr
      })
    }
  }
  fileUpload = (e) => {
    if (!e.target.files[0]) { return <></> }
    else {
      this.setState({
        preview: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0]
      })
    }
  }

  ImagePreview = () => {
    if (this.state.file === null) {
      return <img src={preview} className='responsive-img' alt='Preview' style={{ marginTop: '25px', paddingLeft: '20px' }} />
    }
    else {
      return <img src={this.state.preview} className='responsive-img' alt='Preview' style={{ marginTop: '25px', paddingLeft: '20px' }} />
    }
  }
  ImageUpload = () => {
    return (<form>
      <div className='file-field input-field' style={{ paddingLeft: '20px' }}>
        <div className='btn orange lighten-2'>
          <span>Upload Photo</span>
          <input type='file'
            onChange={this.fileUpload} />
        </div>
        <div className='file-path-wrapper'>
          <input className='file-path validate'
            type='text' />
        </div>
      </div>
    </form>
    )
  }
  RecipeTitle = () => {
    return (
      <form >
        <div className='input-field' style={{ marginTop: '35px' }}>
          <i className='material-icons prefix'>create</i>
          <input id='title' type='text' name='title' value={this.state.title} onChange={this.handleTitle} style={{ fontSize: '30px' }} />
          <label htmlFor='title'>Recipe Name</label>
        </div>
      </form>
    )
  }
  ListIngredients = () => {
    if (!this.state.ingredientsArray) return <></>
    else {
      return this.state.ingredientsArray.map((e, i) => {
        return <li key={i}>{e}</li>
      })
    }
  }
  ListSteps = () => {
    if (!this.state.stepsArray) return <></>
    else {
      return this.state.stepsArray.map((e, i) => {
        return <li key={i}>{e}</li>
      })
    }
  }
  demoIngred = (e) => {
    console.log(this.state.user)
    e.preventDefault();
    let ingred = ['Kosher salt',
      '8 cups finely shredded green cabbage (from a 1 1/2-pound head)',
      '1 cup distilled white vinegar',
      '1 tablespoon sugar',
      '2 tablespoons yellow mustard seeds',
      'Vegetable oil for frying',
      '5 large shallots, very thinly sliced crosswise and separated into rings',
      '1/4 cup Wondra flour',
      '1 1/2 pounds ground beef chuck, preferably 85 percent lean',
      '1 teaspoon onion powder',
      '1 teaspoon garlic powder',
      '1 teaspoon sweet smoked paprika',
      '1 tablespoon Worcestershire sauce',
      'Freshly ground pepper 6 ounces extra-sharp cheddar, shredded',
      '2 cups baby arugula',
      '4 brioche buns, split and toasted']
    let i = 0;
    let addIngred = setInterval(() => {
      let arr = []
      if (!this.state.ingredientsArray) {
        arr = [];
      }
      else {
        arr = this.state.ingredientsArray
      }
      arr.push(ingred[i])
      this.setState({
        ingredients: '',
        ingredientsArray: arr
      })
      i++;
      if (i > ingred.length-1) {
        clearTimeout(addIngred);
      }
    }, 300)
  }
  demoSteps = (e) => {
    e.preventDefault();
    let steps = ['In a large bowl, toss 1 tablespoon of kosher salt with the cabbage and massage it until it softens and releases its liquid, about 4 minutes. Drain the cabbage in a colander and rinse it.',
      'Wipe out the bowl. Add the vinegar, sugar, mustard seeds, 1 cup of water and 1 tablespoon of salt. Add the cabbage to the vinegar mixture, toss to coat and place a plate on top to keep it submerged. Let stand at room temperature for 2 hours.',
      'Meanwhile, in a large saucepan, heat 1 1/2 inches of vegetable oil to 325°. In a medium bowl, toss the shallots with the Wondra flour. Fry the shallots all at once, stirring gently, until golden, about 7 minutes. Using a slotted spoon, transfer the shallots to a paper towel–lined plate to drain. Season the shallots with salt. Reserve the cooking oil.',
      'In a medium bowl, combine the ground beef with the onion powder, garlic powder, smoked paprika, Worcestershire sauce and 2 teaspoons each of kosher salt and ground pepper. Knead gently until thoroughly mixed. Form the beef into eight 4-inch patties. Press the shredded cheese into four 2 1/2-inch disks. Sandwich the cheese disks between the patties. Pinch the edges together to seal.',
      'Heat a grill pan or griddle. Brush the burgers with some of the shallot cooking oil and cook over moderate heat until browned on the bottom, about 3 minutes. Flip the burgers, invert a large heatproof bowl over them and cook until medium within and the cheese is melted, about 3 minutes longer.',
      'Mound the arugula on the bun bottoms and top with the burgers. Drain the pickled cabbage and mound some of it on the burgers; reserve the rest of the pickled cabbage for another use. Top with the fried shallots and the bun tops and serve.']
    let i = 0;
    let addStep = setInterval(() => {
      let arr = []
      if (!this.state.stepsArray) {
        arr = [];
      }
      else {
        arr = this.state.stepsArray
      }
      arr.push(steps[i])
      this.setState({
        steps: '',
        stepsArray: arr
      })
      i++;
      if (i > steps.length - 1) {
        clearTimeout(addStep);
      }
    }, 300)
  }
  IngredContainer = () => {
    return (
      <div className='container'>
        <div className='row center-align' style={{ marginTop: '20px' }}>
          <h4>Ingredients</h4>
          <div className='col m10'>
            <form>
              <div className='row' style={{ margin: '0px' }}>
                <div className='input-field col m10'>
                  <input type='text' name='ingredients' className='validate' value={this.state.ingredients} onChange={this.handleInput} />
                </div>
                <div className='col m2'>
                  <button className='btn waves-light orange lighten-2 valign-wrapper' type='submit' name='action' onClick={this.handleAddIngred}>Add</button>
                  <button className='btn waves-light orange lighten-2 valign-wrapper' type='submit' name='action' onClick={this.demoIngred} style={{ marginTop: '5px' }}>Demo</button>
                </div>
              </div>
            </form>
            <div className='row' style={{ margin: '0px' }}>
              <ol className='list'>
                <this.ListIngredients />
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
  StepsContainer = () => {
    return (
      <div className='container'>
        <div className='row center-align'>
          <h4 style={{ marginTop: '0px' }}>Steps</h4>
          <div className='col m10'>
            <form>
              <div className='row' style={{ margin: '0px' }}>
                <div className='input-field col m10' style={{ marginTop: '0px' }}>
                  <input type='text' name='steps' className='validate' value={this.state.steps} onChange={this.handleInput} />
                </div>
                <div className='col m2'>
                  <button className='btn waves-light orange lighten-2 valign-wrapper' type='submit' name='action' onClick={this.handleAddSteps}>Add</button>
                  <button className='btn waves-light orange lighten-2 valign-wrapper' type='submit' name='action' onClick={this.demoSteps} style={{ marginTop: '5px' }}>Demo</button>
                </div>
              </div>
            </form>
            <div className='row'>
              <ol className='list'>
                <this.ListSteps />
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
  NavPage = (removePage, addPage) => {
    let currentPage = document.querySelector(`.${removePage}`)
    let newPage = document.querySelector(`.${addPage}`)
    currentPage.classList.remove('s11')
    currentPage.classList.add('hide-on-small-only')
    newPage.classList.add('s11')
    newPage.classList.remove('hide-on-small-only')
  }
  MobileNext = () => {
    return <button className='btn waves-light red valign-wrapper' type='submit' onClick={() => { this.NavPage('leftBind', 'rightBind') }} name='action'>Next Page</button>
  }
  MobilePrev = () => {
    return <button className='btn waves-light red valign-wrapper' type='submit' onClick={() => { this.NavPage('rightBind', 'leftBind') }} name='action'>Previous Page</button>
  }
  ConfirmCreate = () => {
    return <button className='btn waves-light valign-wrapper' type='submit' onClick={this.handleCreate} name='action'>Create Recipe</button>
  }
  handleCreate = async (e) => {
    e.preventDefault();
    let {users_id, title, source_url, ingredientsArray, stepsArray, file } = this.state
    if (!title || !source_url || !ingredientsArray || !stepsArray || !file) {
      M.toast({html: 'Please fill out all forms.'})
    }
    const root = firebase.storage().ref();
    const newImage = root.child(`${users_id}/${file.name}`);
    try {
      const snapshot = await newImage.put(this.state.file);
      const url = await snapshot.ref.getDownloadURL();
      postRecipes(users_id, title, url, source_url, ingredientsArray, stepsArray)
        .then(() => {
          this.setState({
            Redirect : true
          })
        })
    }
    catch (err) {
      console.log(err)
    }
  }
  handleTitle = (e) => {
    e.preventDefault()
    this.setState({ title: e.target.value })
  }
  handleUser = (props) =>{
    console.log(props.user)
    if(!this.state.users_id){
    getUser(props.user.email)
    .then((res)=>{
      console.log(res)
      this.setState({
        users_id: res
      })
    })
  }
    return <></>
  }
  LoggedIn = (props) => {
    return (
      <div className='counterTop'>
      <this.handleUser user={props.user}/>
        <div className='container ' style={{ paddingTop: '50px' }}>
          <div className='row'>
            <div className='col s11 m5 l5 leftBind center-align'>
              <this.RecipeTitle />
              <this.ImagePreview />
              <this.ImageUpload />
              <div className='row hide-on-med-and-up' style={{ position: 'fixed', bottom: '6vh', left: '2vw' }}>
                <this.MobileNext />
              </div>
            </div>
            <div className='col s1 m2 spine'>
            </div>
            <div className='col m5 rightBind hide-on-small-only'>
              <this.IngredContainer />
              <this.StepsContainer />
              <div className='row hide-on-med-and-up' style={{ position: 'fixed', bottom: '6vh', left: '2vw' }}>
                <this.MobilePrev />
              </div>
              <div style={{ position: 'fixed', bottom: '6vh', right: '2vw' }}>
                <this.ConfirmCreate />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (<>
      <AuthContext.Consumer>
        {
          user => {
            if (user) {
              return (
                <>
                  <this.handleRedirect />
                  <this.LoggedIn user={user}/>
                </>
              )
            } else {
              return (<>
                <Redirect to='/' />
              </>)
            }
          }
        }
      </AuthContext.Consumer>
    </>
    )
  }
}


export default Create