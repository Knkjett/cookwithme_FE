import React, { Component } from 'react';
import './cookmode.css'
class Cookmode extends Component{
    render(){
        return <>
        <div className='cookBG'>
        <div class="row container">
        <div class="col s12 m8">
          <div class="card-panel white opacitywebmobile" style={{maxHeight:'610px',overflow:'scroll'}}>
            <span class="black-text fontwebmobile" style={{fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',opacity:1}}>
                1. Preheat the oven to 450 degrees Fahrenheit. Scrub and peel the sweet potatoes. Chop them into large, bite-sized chunks, about 1 to 1 ½-inches wide/long and ½-inch deep. Toss the sweet potatoes with the olive oil, cumin, smoked hot paprika, cayenne pepper and salt and pepper. Make sure they are lightly coated in oil on all sides. Pour the sweet potatoes onto a large baking sheet lined with parchment paper. Arrange the sweet potatoes evenly in a single layer. Do not overcrowd. Bake for about 45 minutes, flipping the sweet potato chunks halfway, until they are golden and caramelized around the edges.
            </span>
          </div>
        </div>
        <div class="col s12 m4">
                <ul class = "collapsible" data-collapsible = "accordion">
                        <li>
                           <div class = "collapsible-header">
                              <i class = "material-icons">dehaze</i>Ingredients</div>
                           <div class = "collapsible-body">
                               <ul>
                                    <li>2 medium sweet potatoes</li>
                                    <li>1 1/2 to 2 tablespoons extra-virgin olive oil</li>
                                    <li>1/2 teaspoon cumin</li>
                                    <li>1/2 teaspoon smoked hot paprika (or chipotle powder)</li>
                                    
                                </ul>
                        </div>
                        </li>
                        
                     </ul>
            
        </div>
      </div>
      <div class='row container'>
          <div class='col s4 m4' style={{paddingLeft: 'auto'}}>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">arrow_back</i></a>
                
          </div>
          <div class='col s4 m4'>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">play_arrow</i></a>
                
          </div>
          <div class='col s4 m4'>
                <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">arrow_forward</i></a>
                
          </div>
            
      </div>
      </div>
      </>
    }
}

export default Cookmode