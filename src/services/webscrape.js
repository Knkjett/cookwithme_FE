import axios from 'axios'
// const allrecipe = 'https://cookwithme.herokuapp.com/webscrape/allrecipe'
// const network = 'https://cookwithme.herokuapp.com/webscrape/foodnetwork'
// const closet = 'https://cookwithme.herokuapp.com/webscrape/closetcooking'
// const pioneer = 'https://cookwithme.herokuapp.com/webscrape/pioneerwoman'
const allrecipe = 'http://localhost:5001/webscrape/allrecipe'
const network = 'http://localhost:5001/webscrape/foodnetwork'
const closet = 'http://localhost:5001/webscrape/closetcooking'
const pioneer = 'http://localhost:5001/webscrape/pioneerwoman'
const allrecipeIngred = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${allrecipe}/ingredients`,
    data: { sourceurl }
  })
    .then((res) => {
      console.log(res)
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
const networkIngred = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${network}/ingredients`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}
const networkSteps = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${network}/steps`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}

const closetIngred = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${closet}/ingredients`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}
const closetSteps = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${closet}/steps`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}

const pioneerIngred = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${pioneer}/ingredients`,
    data: { sourceurl }
  })
    .then((res) => {
      return res.data
    }));
}
const pioneerSteps = (sourceurl) => {
  return (axios({
    method: 'post',
    baseURL: `${pioneer}/steps`,
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
    return networkIngred(sourceurl)
  }
  if (baseurl === 'http://closetcooking.com') {
    return closetIngred(sourceurl)
  }
  if (baseurl === 'http://thepioneerwoman.com'){
    return pioneerIngred(sourceurl)
  }
}
const stepScrape = (baseurl, sourceurl) => {
  if (baseurl === 'http://allrecipes.com') {
    return allrecipeSteps(sourceurl)
  }
  if (baseurl === 'http://foodnetwork.com') {
    return networkSteps(sourceurl)
  }
  if (baseurl === 'http://closetcooking.com') {
    return closetSteps(sourceurl)
  }
  if (baseurl === 'http://thepioneerwoman.com'){
    return pioneerSteps(sourceurl)
  }
}


export { ingredientScrape, stepScrape }