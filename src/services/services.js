import axios from 'axios'
const recipesBaseURL = 'http://localhost:5001/webscrape/recipes'



const postRecipes = (users_id, title, source_img, source_url, ingredients, steps) => {
  return (axios({
    method:'post',
    baseURL: `${recipesBaseURL}/`,
    data:{users_id, title, source_img, source_url, ingredients, steps}
  })
  .then((res)=>{
    return res.data
  }));
}


export { postRecipes }