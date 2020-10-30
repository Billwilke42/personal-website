import React from 'react'
import './BodyContainer.css'
import profilepic from '../assets/profilepic1.JPG'

const BodyContainer = () => {
  return (
    <img src={`${profilepic}`} alt='headshot' className='profile-pic'></img>
  )
}

export default BodyContainer