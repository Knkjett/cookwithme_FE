import axios from 'axios'; 

const recipebaseURL = 'http://localhost:5001/recipes'
const checkRecipe = async(url) => {
 return(await(axios({
   method:'post',
   baseURL: `${recipebaseURL}/check`,
   data: {url}
 })
   .then((res)=>{
     return res.data;
   })));
}

const postRecipes = (users_id=null, title, source_img, source_url=null, ingredients, steps) => {
  return (axios({
    method:'post',
    baseURL: `${recipebaseURL}/`,
    data:{users_id, title, source_img, source_url, ingredients, steps}
  })
  .then((res)=>{
    return res.data
  }));
}

const getFood2Fork = async(query) => {
    return(await(axios({
      method:'get',
      // baseURL: 'https://www.food2fork.com/api/search?key=0a689ee4c676e04aaae774935df0e3d8',
        // baseURL: 'https://www.food2fork.com/api/search?key=ee476d8f542bef2e97d8bf30c7f3c0ca',
        // baseURL: 'https://www.food2fork.com/api/search?key=a8839d03739298aec777e6819a1184c8',
        // baseURL: 'https://www.food2fork.com/api/search?key=100badb571d2bc0c4ab6c3f6545f843f&q=chicken'
      q: query
    })
      .then((res)=>{
        return res.data;
      })));
}

const defaultRecipes = () =>{
  let recipes_arr = null
  return axios.get('https://www.food2fork.com/api/search?key=a8839d03739298aec777e6819a1184c8')
        .then(res=>{
            console.log(res.data)
            recipes_arr = res.data.recipes.filter(e=>{
                return e.publisher ==='Closet Cooking' || e.publisher === "The Pioneer Woman" || e.publisher === 'All Recipes'
            })
            recipes_arr.splice(2,1)
            recipes_arr.splice(8,1)
            return recipes_arr.slice(0,15)
            
            })
            
        }
   
   

export {postRecipes ,checkRecipe,getFood2Fork,defaultRecipes}