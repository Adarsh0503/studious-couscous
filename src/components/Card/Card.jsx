import React from 'react'
import  './Card.css'
function Card({emoji, heading, detail,link}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button"><a href={link} >LEARN MORE</a></button>
    </div>
  )
}

export default Card