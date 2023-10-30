import React from 'react'
import './Card.css'

function Card({stance, name, obstacle, tutorial}) {
  return (
    <div className='card'>
        <p>{stance} {name}</p>
        <p>{obstacle}</p>
        <p>Link to Tutorial</p>
        <p>{tutorial}</p>
    </div>
  )
}

export default Card
