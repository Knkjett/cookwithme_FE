import axios from 'axios'
const allrecipe = 'http://localhost:5001/webscrape/allrecipe'

const allrecipeIngred = (sourceurl) => {
  return (axios({
    method:'post',
    baseURL: `${allrecipe}/ingredients`,
    data:{sourceurl}
  })
  .then((res)=>{
    return res.data
  }));
}
const allrecipeSteps = (sourceurl) => {
  return(axios({
    method:'post',
    baseURL: `${allrecipe}/steps`,
    data:{sourceurl}
  })
  .then((res)=>{
    return res.data
  }));
}


const ingredientScrape = (baseurl, sourceurl) =>{
    if(baseurl === 'https://www.allrecipes.com/'){
    return allrecipeIngred(sourceurl)
  }
  // if(baseurl==)
}
const stepScrape = (baseurl, sourceurl) =>{
  if(baseurl === 'https://www.allrecipes.com/'){
  return allrecipeSteps(sourceurl)
}
}


export {ingredientScrape, stepScrape}