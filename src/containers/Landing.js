import React from 'react'
import Offline from './Offline/Offline'
import SignInHome from './SignInHome'

export default(props) =>{
  if(props.user){
    return <SignInHome />
  }
  else{
    return <Offline />
  }
}