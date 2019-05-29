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

const postRecipes = (users_id, title, source_img, source_url, ingredients, steps) => {
  return (axios({
    method:'post',
    // baseURL: `${recipesBaseURL}/`,
    data:{users_id, title, source_img, source_url, ingredients, steps}
  })
  .then((res)=>{
    return res.data
  }));
}

const getFood2Fork = async(query) => {
    return(await(axios({
      method:'get',
      baseURL: 'https://www.food2fork.com/api/search?key=0a689ee4c676e04aaae774935df0e3d8',
      q: query
    })
      .then((res)=>{
        return res.data;
      })));
   }
   
   

export {postRecipes ,checkRecipe,getFood2Fork}