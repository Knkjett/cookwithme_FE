import React from 'react'
import Offline from './Offline/Offline'

export default(props) =>{
  if(props.user){
    return <></>
  }
  else{
    return <Offline />
  }
}