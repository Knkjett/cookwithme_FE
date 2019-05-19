import React, {Component} from 'react'
import {ingredientScrape, stepScrape} from '../../services/webscrape'
import './create.css'
import Materialize from 'materialize-css/dist/js/materialize.min.js'
class Create extends Component{
  constructor(props){
    super(props)
    this.state={
      title : '',
      // ingredients : '',
      // steps : '',
      picture : '',
      preview : '',
      ingredients: null,
      steps: null,
    }
  }

  componentDidMount = () =>{
    // ingredientScrape('https://www.allrecipes.com/','https://www.allrecipes.com/recipe/17916/german-style-weck-rolls/')
    // .then((res)=>{
    //   this.setState({
    //     ingredients : res
    //   })
    // })
    // stepScrape('https://www.allrecipes.com/','https://www.allrecipes.com/recipe/17916/german-style-weck-rolls/')
    // .then((res)=>{
    //   this.setState({
    //     steps: res
    //   })
    // })
    // this.setState({
    //   ingredients: recipe,
    //   steps: recipe
    // })
    // allrecipeIngred('https://www.allrecipes.com/recipe/17916/german-style-weck-rolls/')
    // .then((res)=>{
    //   console.log(res)
    // })
    // .then(()=>{
    //   allrecipeSteps('https://www.allrecipes.com/recipe/17916/german-style-weck-rolls/')
    //   .then((res)=>{
    //     console.log(res)
    //   })
    // })
    let elems = document.querySelectorAll('.dropdown-trigger');
     Materialize.Dropdown.init(elems, {outDuration:'150'});
  }
  handleInput = (e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleSumbit = (e)=>{
    e.preventDefault();
    console.log(this.state)
  }

  render(){
    return(
    <div className='createBackground '>
    <div className='row'> 
    <div className='col s2 m3'>
   
    </div>
    <div className='col s10 m3'>
    <div className='imgPreview'>
    <h3 onClick={this.handleSumbit}>HELLLDSADADASDa</h3>
      </div>
    </div>
    </div>
     <div className='row'>
     </div>
     <div className='row'>
  <button class='dropdown-trigger btn' data-target='dropdown1'>Drop Me!</button>

  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>
    <li><a href="#!">two</a></li>
    <li class="divider" tabindex="-1"></li>
    <li><a href="#!">three</a></li>
    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
  </ul>
     </div>
    </div>
  )}
}


export default Create