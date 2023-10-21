import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.imageUrl} alt="image" />
        <h2>{props.title}</h2>
        <h3>{props.price}</h3>
    </div>
  )
}

export default Card