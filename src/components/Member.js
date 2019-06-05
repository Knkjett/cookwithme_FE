import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../contexts/auth';
// let handleModal = () =>{
//   console.log('test')
//   return <Login />
// }
class Member extends Component {
  render(){
  return (<>
      <AuthContext.Consumer>
        {
          (user) => {
            if (user) {
              return (
                <>
              <Link to='/userprofile'>
                  <button style={{position:'fixed',right: '8vw', top:'2vh'}} className="btn-floating btn-large waves-light red"><i className="material-icons">person</i></button>
                  </Link>
                  <Link to='/logout'> <button style={{position:'fixed',right: '2vw', top:'2vh'}} className="btn-floating btn-large waves-light red"><i className="material-icons">exit_to_app</i></button></Link>
                </>
              )
            } else {
              return (<>
              <Link to='/login'>
                <button style={{position:'fixed',right: '2vw', top:'2vh'}} className="btn-floating btn-large waves-light red"><i className="material-icons">person</i></button>
                </Link>
              </>)
            }
          }
        }
      </AuthContext.Consumer>
    </>)
}

}


export default Member
