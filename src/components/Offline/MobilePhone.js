import React, {Component} from 'react'
import './mobilePhone.css'
import Logo from '../Logo'

class MobilePhone extends Component{
  state = {
    recipes : [
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
        image_url:'https://thepioneerwoman.com/wp-content/uploads/2017/12/dsc_4476.jpg?w=2000',
        title:'Crispy Chicken Florentine Melt',
        ingredients:[
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
        steps:[
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
        ingredients:[
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
        steps:[
          'Set the Instant to “Saute” and allow to warm. ',
'Season roast generously with salt and pepper. When Instant Pot says "Hot," add in olive oil and sear roast until browned on all sides. Remove to a clean plate. ',
'Add in onions and carrots and cook for an additional 3-4 minutes, stirring occasionally. Deglaze with red wine, scraping the bottom of the pot to get all of the delicious bits. Add in the beef stock, rosemary, thyme and the beef. ',
'Lock the lid into place, place vent to sealing, push "Manual," and set time to 60 minutes. The Instant Pot will release some steam as it comes up to pressure, then it will seal automatically. ',
'When the cooking time is done, allow the Instant Pot to naturally vent for at least 10 minutes, 20 is better. Using a wooden spoon, carefully push the valve open to release the rest of the pressure. Remove lid. ',
'Skim a much fat off the top of the liquid as you can before disturbing the roast. Remove the roast to a cutting board and with two forks shred roast. Serve alongside carrots and onions, topped with the pan juices. Serve with mashed potatoes.'
        ]
      }
    ]
  }
  SliderDemo = () =>{
    return (<>
    <div className='mobileBG'>
     <div className="container">
            <div className="row" style={{marginBottom:'0px', overflow:'scroll', maxHeight:'650px', marginTop:'120px'}}>
                {this.state.recipes.map((obj,i)=>{
                    return (
                  <div className="col s12 m12" key={i}>
                        <div className="card" style={{margin:'10px'}}>
                            <div className="card-image">
                                <img style={{height:'281.17px'}} src={obj.image_url} />

                                <a className="btn-floating halfway-fab waves-light red"><i
                                        className="material-icons">add</i></a>
                            </div>
                            <div className="card-content" style={{height:'100px'}}>
                                <span className="card-title" style={{fontSize:'18px'}}>{obj.title}</span>
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
  render(){
    return(<div className='marvel-device iphone-x'>
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
    <div className='screen' >
        <Logo />
        <this.SliderDemo />
    </div>
</div>

    )
  }
}

export default MobilePhone