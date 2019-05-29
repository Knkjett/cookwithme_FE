import React from 'react'
import {Link} from 'react-router-dom'

export default() =>{
  return (<Link to='/'>
    <img className='mobileLogo' style={{zIndex:'1', position:'absolute',maxHeight:'125px'}} src={require('../assets/Logo.svg')} alt='Brand'/>
  </Link>
  )
}