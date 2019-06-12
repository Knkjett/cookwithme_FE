import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return (<>
    <div className='foodCaption'>
      <h5>{props.ele.title}</h5>
    </div>
    <Link to={{
      pathname: `/recipepage/${props.ele.title}`,
      state: { url: props.ele.source_url, publisher_url: props.ele.publisher_url, source_img: props.ele.image_url }
    }}>
      <img className='foodImg'
        src={props.ele.image_url}
        alt='recipe'/>
    </Link>
  </>)
}