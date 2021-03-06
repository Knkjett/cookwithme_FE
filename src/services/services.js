import axios from 'axios';
// const recipebaseURL = 'https://cookwithme.herokuapp.com/recipes'
// const usersbaseURL = 'https://cookwithme.herokuapp.com/users'
const usersbaseURL = 'https://cookwithme.herokuapp.com/users'
const recipebaseURL = 'https://cookwithme.herokuapp.com/recipes' 
const checkRecipe = async (url) => {
  return (await (axios({
    method: 'post',
    baseURL: `${recipebaseURL}/check`,
    data: { url }
  })
    .then((res) => {
      return res.data;
    })));
}
const findRecipe = async (title) => {
  return (await (axios({
    method: 'post',
    baseURL: `${recipebaseURL}/find`,
    data: { title }
  })
    .then((res) => {
      return res.data;
    })));
}

const postRecipes = (users_id = null, title, source_img, source_url = null, publisher_url = null, ingredients, steps) => {
  return (axios({
    method: 'post',
    baseURL: `${recipebaseURL}/`,
    data: { users_id, title, source_img, source_url, publisher_url, ingredients, steps }
  })
    .then((res) => {
      return res.data
    }));
}

const getUser = async(email) =>{
  return await(axios({
    method: 'get',
    baseURL: `${usersbaseURL}/${email}`
  }))
  .then((res)=>{
    return res.data
  })
}

const getFood2Fork = async(query) => {
  let recipes_arr = null
    return(await(axios({
      method:'get',
        //baseURL: `https://www.food2fork.com/api/search?key=0a689ee4c676e04aaae774935df0e3d8&q=${query}`,
        // baseURL: `https://www.food2fork.com/api/search?key=ee476d8f542bef2e97d8bf30c7f3c0ca&q=${query}`,
// baseURL: `https://www.food2fork.com/api/search?key=9e56004d7a3bc861088111ea75a9a429&q=${query}`
        // baseURL: `https://www.food2fork.com/api/search?key=a8839d03739298aec777e6819a1184c8&q=${query}`,
        baseURL: `https://www.food2fork.com/api/search?key=aa4e7ae20e1849bc4ab7eb553db7d984&q=${query}`
    })
      .then((res)=>{
        recipes_arr = res.data.recipes.filter(e=>{
          return  e.publisher === "The Pioneer Woman" || e.publisher === 'All Recipes' || e.publisher === 'Food Network'
      })
      recipes_arr.splice(2,1)
      recipes_arr.splice(8,1)
      return recipes_arr.slice(0,15)
      })));
}

const defaultRecipes = () => {
  let recipes_arr = null
  return axios.get('https://www.food2fork.com/api/search?key=a8839d03739298aec777e6819a1184c8&q=chicken')
  .then(res=>{
            recipes_arr = res.data.recipes.filter(e=>{
                return  e.publisher === "The Pioneer Woman" || e.publisher === 'All Recipes' || e.publisher === 'Food Network'
            })
            recipes_arr.splice(2,1)
            recipes_arr.splice(8,1)
            return recipes_arr.slice(0,15)
            
            })
}

const getIDfav = (users_id,recipe_id) =>{
  return axios.get(`https://cookwithme.herokuapp.com/favorites/${users_id}/favID/${recipe_id}`)
  .then(res=>res)
}

const postFav = (users_id,recipe_id) =>{
  return axios.post('https://cookwithme.herokuapp.com/favorites',{
          users_id:users_id,
          recipe_id:recipe_id
        })
        .then(res=>res.data)
}

const createUser = (email, token) => {
  return (axios({
    method: 'post',
    baseURL: `${usersbaseURL}/`,
    data: { email, token}
  }))
}
const updateUser = (user, recentlyViewed) => {
  return (axios({
    method: 'put',
    baseURL: `${usersbaseURL}/${user}`,
    data: { recentlyViewed }
  }))
}
const readRecent = async(id)=>{
  return await(axios({
    method: 'get',
    baseURL: `${usersbaseURL}/recent/${id}`
  }))
  .then((res)=>{
    return res.data
  })
}
const recentViewed = (user, id, title, source_img) =>{
  let recent = [];
  if (!localStorage.getItem('recentlyViewed')) {
    localStorage.setItem('recentlyViewed', JSON.stringify([]))
  }
  if(JSON.parse(localStorage.getItem('recentlyViewed'))!== []){
     recent = JSON.parse(localStorage.getItem('recentlyViewed'))
    recent.unshift({id: id, title:title, source_img: source_img})
    if(recent.length > 10){
      recent.pop();
    }
    localStorage.setItem('recentlyViewed', JSON.stringify(recent))
    let list = localStorage.getItem('recentlyViewed')
    updateUser(user, JSON.parse(list))
    }
}


export {postFav,getIDfav,getUser, findRecipe, postRecipes ,checkRecipe,getFood2Fork,defaultRecipes,createUser, recentViewed, readRecent}


