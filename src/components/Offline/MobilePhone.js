import React, { Component } from 'react'
import './mobilePhone.css'
import Logo from '../Logo'
import Cook from './Cook'

class MobilePhone extends Component {
  state = {
    recipes: [
      {
        image_url: 'https://thepioneerwoman.com/wp-content/uploads/2018/11/dsc_2678.jpg?w=1000',
        title: 'Mini Turtle Cheesecakes',
        ingredients: ['Crust',
          '24 whole Chocolate Graham Crackers, Broken Into Pieces',
          '8 Tablespoons Salted Butter, Melted',
          '1/2 cup Sugar',
          'Filling',
          '3 packages (8 Ounce) Cream Cheese, Softened',
          '1 cup Sugar',
          '2 whole Large Eggs',
          '1 teaspoon Vanilla Extract',
          '1/2 cup Jarred Salted Caramel Sauce',
          '12 ounces, weight Semi-sweet Chocolate, Chopped',
          '3/4 cups Heavy Cream',
          '1 cup Pecan Halves',
          '1/2 cup Mini Chocolate Chips',
          '1/2 cup Salted Caramel Sauce]'
        ],
        steps: [
          'Preheat the oven to 350 degrees.',
          'For the crust: Line a 24-cup muffin tin with cupcake liners. Pulse the graham crackers and sugar in a food processor until fine crumbs form. Add the butter, then pulse until well combined. Distribute the crumbs among the prepared cups, about 2 tablespoons in each, and press to firm them up. Set crusts aside.',
          'For the filling: Beat the cream cheese in an electric mixer fitted with the paddle attachment until smooth. Mix in the sugar and eggs. Add the vanilla and salted caramel and mix again. Distribute the batter among the muffin cups, about 3 tablespoons per cup. Tap the tin on the counter to distribute the batter evenly.',
          'Bake, watching to make sure they dont burn, until set in the middle, 15 to 17 minutes. Cool on a wire rack, then chill for 2 hours.',
          'For the ganache: Place the chopped chocolate in a bowl and set aside. Heat the cream in a saucepan until warm and bubbles begin to form around the edges, 1 to 2 minutes. Pour over the chocolate and allow to sit for 2 minutes. Mix until smooth, then set aside to cool slightly.',
          'Place about 1 tablespoon ganache on top of each cheesecake. Add 1 pecan half and mini chocolate chips to each one. Drizzle with the remaining caramel sauce. Chill in the fridge or freeze, uncovered, for 1 hour. Transfer to an airtight freezer container and freeze for up to 3 months.',
          'Allow to thaw at room temperature for 30 minutes before serving.'],
      },
      {
        image_url: 'https://thepioneerwoman.com/wp-content/uploads/2017/12/dsc_4476.jpg?w=2000',
        title: 'Crispy Chicken Florentine Melt',
        ingredients: [
          '4 whole Boneless, Skinless Chicken Breasts Or Cutlets',
          '2 cups Panko Breadcrumbs',
          '2 whole Eggs',
          '1/4 cup Milk',
          '1-1/2 cup Flour',
          'Salt And Pepper, to taste',
          '5 Tablespoons Butter',
          '5 Tablespoons Olive Oil, More To Taste',
          '8 ounces, weight Mozzarella Cheese, Sliced',
          '2 cups Red And/or Yellow Cherry Or Grape Tomatoes',
          '3 cloves Garlic, Minced',
          '6 cups Fresh Baby Spinach'],
        steps: [
          'Preheat the oven to 375 degrees.',
          'Make a breading assembly line with three separate dishes: flour seasoned with salt and pepper, egg and milk mixed together, and panko seasoned with salt and pepper. Season the chicken then bread it by dredging in the flour, dipping in the egg mixture, and coating in the crumbs. ',
          'Melt 4 tablespoons of butter with 4 tablespoons olive oil in a large skillet over medium heat. Brown the chicken on the first side for 3 to 4 minutes, being careful not to burn it. Flip the chicken and brown for another 3 to 4 minutes. Remove to a rack placed over a sheet pan and place it in the oven for 5 minutes to finish cooking the chicken.',
          'Remove the chicken from the oven and turn on the broiler. Top the chicken with cheese slices and broil until the cheese is melted. ',
          'Heat a small skillet over medium high heat and add 1 tablespoon of butter and 1 tablespoon olive oil. Add the tomatoes, sprinkle with salt and pepper, and toss to cook quickly, until the tomatoes start to break apart, about 2 minutes. Add the spinach and garlic, then stir/toss to wilt the spinach, 2 or 3 minutes.',
          'Serve the tomato/spinach mixture over the chicken and serve immediately!'
        ],
      },
      {
        image_url: 'https://tastykitchen.com/recipes/wp-content/uploads/sites/2/2018/10/dsc_1340-420x280.jpg',
        title: 'Instant Pot PW Pot Roast',
        ingredients: [
          '1 whole Beef Chuck Roast, 3 To 4 Pounds',
          'Kosher Salt',
          'Black Pepper',
          '2 Tablespoons Olive Oil',
          '2 whole Large Yellow Onions, Peeled And Quartered',
          '6 whole Carrots, Washed, Scrubbed, And Cut Into Large Pieces',
          '1 cup Red Wine',
          '2 cups Beef Stock',
          '3 sprigs Fresh Rosemary',
          '3 sprigs Fresh Thyme'
        ],
        steps: [
          'Set the Instant to “Saute” and allow to warm. ',
          'Season roast generously with salt and pepper. When Instant Pot says "Hot, " add in olive oil and sear roast until browned on all sides. Remove to a clean plate. ',
          'Add in onions and carrots and cook for an additional 3-4 minutes, stirring occasionally. Deglaze with red wine, scraping the bottom of the pot to get all of the delicious bits. Add in the beef stock, rosemary, thyme and the beef. ',
          'Lock the lid into place, place vent to sealing, push "Manual, " and set time to 60 minutes. The Instant Pot will release some steam as it comes up to pressure, then it will seal automatically. ',
          'When the cooking time is done, allow the Instant Pot to naturally vent for at least 10 minutes, 20 is better. Using a wooden spoon, carefully push the valve open to release the rest of the pressure. Remove lid. ',
          'Skim a much fat off the top of the liquid as you can before disturbing the roast. Remove the roast to a cutting board and with two forks shred roast. Serve alongside carrots and onions, topped with the pan juices. Serve with mashed potatoes.'
        ]
      },
      {
        image_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/1/FN_Scott-Conant-Grilled-Chicken_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371616224156.jpeg',
        title: 'Grilled Chicken with Charred Lemon and Heirloom Tomatoes',
        ingredients: [
          '1 1/4 cups extra-virgin olive oil, plus more for brushing',
          '1 tablespoon Worcestershire sauce',
          '1 to 2 pinches crushed red pepper flakes',
          '2 medium onions, sliced into 1/2-inch-thick rounds',
          '2 bunches scallions, roots trimmed',
          '1 lemon, sliced',
          '2 whole chickens, 2 1/2 to 3 pounds each, cut into 8 pieces',
          'Salt and freshly ground black pepper',
          'Salt and freshly ground black pepper ',
          '1/2 cup chopped fresh parsley',
          '1 tablespoon red wine vinegar',
          '2 to 3 anchovies, well rinsed, finely chopped, optional',
          '4 to 6 slices ciabatta bread',
          '6 to 8 medium very ripe heirloom tomatoes or juicy beefsteak tomatoes, cut into wedges'
        ],
        steps: [
          'Combine 1 cup of the olive oil, the Worcestershire, red pepper flakes, onions, scallions and lemons in a large bowl or large zip-top bag. Add the chicken pieces and toss to coat. Marinate in the refrigerator for at least a few hours.',
          'Prepare the coals on an outdoor grill to medium hot or heat a gas grill. If using coals, bank them to one side of the grill so that one side is hot and the other less so. ',
          'Remove the chicken and vegetables from the marinade and transfer to 2 baking sheets. Discard the marinade. Sprinkle the chicken pieces well with salt and pepper and then place the chicken, onions, scallions and lemons onto the grill. You may lose some scallions or lemons, but hopefully most wont fall through the grates! ',
          'Put the cover on the grill to increase the heat and cook the hell out of the chicken. The grill will smoke like crazy, but try to resist opening the lid for 7 minutes or so. Open the lid, flip the chicken and continue cooking, mostly covered, until the chicken is cooked through, about 35 minutes total. If the chicken, lemon and onions are getting too charred, reduce the heat or move them to a cooler part of the grill, flipping as needed. Remove from the grill and let rest for 5 to 10 minutes before serving.',
          'Meanwhile, mix together the remaining 1/4 cup olive oil, the parsley, vinegar and anchovies, if using. ',
          'To serve, brush the bread with olive oil and grill on both sides. Divide the chicken, lemon, scallions and onions among serving plates. Place the tomato wedges alongside and drizzle with the vinaigrette. Serve with the grilled bread.'
        ]
      }
    ],
    page: 'home',
    current: null,
    currStep: 0,
  }
  Home = () => {
    return (<>
      <Logo />
      <div>
        <div className='container'>
          <div className='row' style={{ marginBottom: '0px', overflow: 'scroll', maxHeight: '650px', marginTop: '120px' }}>
            {this.state.recipes.map((obj, i) => {
              return (
                <div className='col s12 m12' key={i}>
                  <div className='card z-depth-3' style={{ margin: '10px' }}>
                    <div className='card-image' id={i} onClick={this.handleClick}>
                      <img style={{ height: '281.17px' }} id={i} src={obj.image_url} alt='Food Cover' />
                      <button className='btn-floating halfway-fab waves-light red'><i
                        className='material-icons'>add</i></button>
                    </div>
                    <div className='card-content' style={{ height: '100px' }}>
                      <span className='card-title truncate' style={{ fontSize: '18px' }}>{obj.title}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>)
  }
  Recipe = () => {
    return (<>
      <div>
        <button className='btn' onClick={this.handleBack} style={{ marginTop: '50px' }}>Back</button>
        <div className='container' style={{ paddingTop: '5px' }}>
          <img className= 'z-depth-3' src={this.state.recipes[this.state.current].image_url} alt='recipe' style={{ height: '175px' }} />
          <h5>Ingredients</h5>
          <ul className='collection recipeInfo'>
            {
              this.state.recipes[this.state.current].ingredients.map((e, i) => {
                return <li className='collection-item' key={i}>{e}</li>
              })
            }
          </ul>
          <h5>Steps</h5>
          <ul className='collection recipeInfo'>
            {
              this.state.recipes[this.state.current].steps.map((e, i) => {
                return <li className='collection-item' key={i}>{e}</li>
              })
            }
          </ul>
          <button className='btn' type='submit' name='action' onClick={this.handleCook}>Cook
    <i className='material-icons right'>send</i>
          </button>
        </div>
      </div>
    </>)
  }
  handleBack = () => {
    this.setState({
      page: 'home',
      current: null
    })
  }
  handleCook = () => {
    this.setState({
      page: 'cook'
    })
  }
  handleCookBack = () => {
    this.setState({
      page: 'recipe',
    })
  }
  handleClick = e => {
    this.setState({
      page: 'recipe',
      current: e.target.id
    })
  }
  SliderDemo = () => {
    if (this.state.page === 'home') {
      return <this.Home />
    }
    if (this.state.page === 'recipe') {
      return <this.Recipe />
    }
    if (this.state.page === 'cook') {
      return <Cook steps={this.state.recipes[this.state.current].steps} handleCookBack={this.handleCookBack} ingredients={this.state.recipes[this.state.current].ingredients} currStep={this.state.currStep} />
    }
    else {
      return <></>
    }
  }
  Phone = () => {
    return (<div className='marvel-device iphone-x'>
      <div className='notch'>
        <div className='camera'></div>
        <div className='speaker'></div>
      </div>
      <div className='top-bar'></div>
      <div className='sleep'></div>
      <div className='bottom-bar'></div>
      <div className='volume'></div>
      <div className='overflow'>
        <div className='shadow shadow--tr'></div>
        <div className='shadow shadow--tl'></div>
        <div className='shadow shadow--br'></div>
        <div className='shadow shadow--bl'></div>
      </div>
      <div className='inner-shadow'></div>
      <div className='screen mobileBG' >
        <this.SliderDemo />
      </div>
    </div>)
  }
  SpeechHome = () => {
    return (<>
      <div className='row'>
        <div className='bubble grayBubble col m8'>
         <small>Today 9:39 AM</small>
          <p className='flow-text'>Choose from a wide selection of recipes right from your device!</p>
          <small>Delivered</small>
        </div>
      </div>
      <div className='row'>
        <div className='bubble grayBubble col m8'>
          <small>Today 9:39 AM</small>
          <p className='flow-text'>Anywhere. Anytime. Get your desired recipe while on the move!</p>
          <small>Delivered</small>
        </div>
      </div>
      <div className='row'>
        <div className='bubble blueBubble col offset-m4 m8'>
        <small>Today 9:41 AM</small>
          <p className='flow-text'>I'm Starved!</p>
          <small>Delivered</small>
        </div>
      </div>
    </>)
  }
  SpeechRecipe = () =>{
    return (<>
      <div className='row'>
        <div className='bubble grayBubble col m8'>
          <p className='flow-text'>Preview the recipe's ingredients and steps with an easy to read minimalistic design!</p>
        </div>
      </div>
      <div className='row'>
        <div className='bubble blueBubble col offset-m4 m8'>
          <p className='flow-text'>Wow!</p>
        </div>
      </div>
      <div className='row'>
        <div className='bubble grayBubble col m8'>
          <p className='flow-text'>When you're ready. Press Cook to get things started with Arytom! Our Voice Assist!</p>
        </div>
      </div>
      <div className='row'>
        <div className='bubble blueBubble col offset-m4 m8'>
          <p className='flow-text'>All prepped! Lets get cooking!</p>
        </div>
      </div>
    </>)
  }
  SpeechCook = () =>{
    return(<>
    <div className='row'>
    <div className='bubble grayBubble col m8'>
      <p className='flow-text'>Start cooking with voice command! Say: 'Start' to get started!</p>
    </div>
  </div>
  <div className='row'>
    <div className='bubble blueBubble col offset-m4 m8'>
      <p className='flow-text'>Start!</p>
    </div>
  </div>
  <div className='row'>
    <div className='bubble grayBubble col m8'>
      <p className='flow-text'>Say: 'Next' for next step and 'Previous' for previous step!</p>
    </div>
  </div>
  </>)
  }
  SpeechPreview = () => {
    if (this.state.page === 'home') {
      return <this.SpeechHome />
    }
    if (this.state.page === 'recipe') {
      return <this.SpeechRecipe />
    }
    if (this.state.page === 'cook') {
      return <this.SpeechCook />
    }
    else {
      return <></>
    }
  }
  render() {
    return (<>
      <div className='col s12 m5 l5'>
        <this.Phone />
      </div>
      <div className='col s12 offset-m4 m3 offset-l2 l5'>
        <h4>Try Me!</h4>
        <span className='flow-text'>Mobile </span>
        <span className='flow-text'>Friendly</span>
        <span className='flow-text'> Design</span>
        <this.SpeechPreview />
      </div>
    </>
    )
  }
}

export default MobilePhone