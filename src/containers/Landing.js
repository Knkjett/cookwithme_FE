import React from 'react'
import Offline from './Offline/Offline'
import SignInHome from './SignInHome'
import AuthContext from '../contexts/auth';

export default (props) => {
  return (<>
  <AuthContext.Consumer>
    {
      (user) => {
        if (user) {
          return <SignInHome />
        } else {

          return <Offline />
        }
      }
    }
  </AuthContext.Consumer>
  </>)
}