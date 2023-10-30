import React from 'react'
import Card from '../Card/Card'
import './TrickContainer.css'
function TrickContainer({tricks}) {
    const trickCards = tricks.map(trick => {
        return (
            <Card   
            stance={trick.stance}
            name={trick.name}
            obstacle={trick.obstacle}
            tutorial={trick.tutorial}
            id={trick.id}
            key={trick.id}
            />
        )
    })
  return (
       <div className='trick-container'>
      {trickCards}
        </div>
  )
}

export default TrickContainer
