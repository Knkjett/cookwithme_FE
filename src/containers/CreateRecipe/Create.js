import React, { Component } from 'react'
import './create.css'
import preview from '../../assets/PhotoPlaceholder.png'
import { postRecipes } from '../../services/services'
import firebase from 'firebase';

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
    }
  }

  componentDidMount = () => {
    // PULL USER ID
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
  IngredContainer = () => {
    return (
      <div className='container'>
        <div className='row center-align' style={{ marginTop: '20px' }}>
          <h4>Ingredients</h4>
          <div className='col m10'>
            <form>
              <div className='row' style={{ margin: '0px' }}>
                <div className='input-field col m10' >
                  <input type='text' name='ingredients' className='validate' value={this.state.ingredients} onChange={this.handleInput} />
                </div>
                <div className='col m2'>
                  <button className='btn waves-light orange lighten-2 valign-wrapper' type='submit' name='action' onClick={this.handleAddIngred}>Add</button>
                </div>
              </div>
            </form>
            <div className='row' style={{ margin: '0px' }}>
              <ul className='list'>
                <this.ListIngredients />
              </ul>
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
              <div className='row'>
                <div className='input-field col m10' style={{ marginTop: '0px' }}>
                  <input type='text' name='steps' className='validate' value={this.state.steps} onChange={this.handleInput} />
                </div>
                <div className='col m2'>
                  <button className='btn waves-light orange lighten-2 valign-wrapper' type='submit' name='action' onClick={this.handleAddSteps}>Add</button>
                </div>
              </div>
            </form>
            <div className='row'>
              <ul className='list'>
                <this.ListSteps />
              </ul>
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
    let { users_id, title, source_url, ingredientsArray, stepsArray, file } = this.state
    if (!title || !source_url || !ingredientsArray || !stepsArray || !file) {
      console.log("EMPTY")
    }
    const root = firebase.storage().ref();
    const newImage = root.child(`${users_id}/${file.name}`);
    try {
      const snapshot = await newImage.put(this.state.file);
      const url = await snapshot.ref.getDownloadURL();
      postRecipes(users_id, title, url, source_url, ingredientsArray, stepsArray)
        .then((res) => {

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
  render() {
    return (
      <div className='counterTop'>
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
}


export default Create