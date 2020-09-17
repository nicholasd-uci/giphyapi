import React from 'react'

const Card = props => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.gif.images.original.url} className="card-img-top" alt={props.gif.title} />
      <div className="card-body">
        <h5 className="card-title">{props.gif.title}</h5>
      </div>
    </div>
  )
}

export default Card