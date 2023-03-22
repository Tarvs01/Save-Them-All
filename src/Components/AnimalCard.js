import React from 'react'
import { Link } from 'react-router-dom'

function AnimalCard({props}) {
  return (
    <Link to={`/${props.id}`} className='card-cont'>
        <img src={props.img[0]} alt={props.name} />
        <h1>{props.name}</h1>
        <div className='card-dark-cover'></div>
    </Link>
  )
}

export default AnimalCard