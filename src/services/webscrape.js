import axios from 'axios'
const allrecipe = 'http://localhost:5001/webscrape/allrecipe'

const allrecipeIngred = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${allrecipe}/ingredients`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}
const allrecipeSteps = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${allrecipe}/steps`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}


const ingredientScrape = (baseurl, sourceurl) => {
  if (baseurl === 'http://allrecipes.com') {
    return allrecipeIngred(sourceurl)
  }
  if (baseurl === 'http://foodnetwork.com') {
    return allrecipeIngred(sourceurl)
  }
  if (baseurl === 'http://closetcooking.com') {
    return allrecipeIngred(sourceurl)
  }
  if (baseurl === 'http://thepioneerwoman.com'){
    return allrecipeIngred(sourceurl)
  }
}
const stepScrape = (baseurl, sourceurl) => {
  if (baseurl === 'http://allrecipes.com') {
    return allrecipeSteps(sourceurl)
  }
  if (baseurl === 'http://foodnetwork.com') {
    return allrecipeSteps(sourceurl)
  }
  if (baseurl === 'http://closetcooking.com') {
    return allrecipeSteps(sourceurl)
  }
  if (baseurl === 'http://thepioneerwoman.com'){
    return allrecipeIngred(sourceurl)
  }
}


export { ingredientScrape, stepScrape }