import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <section className='nav'>
        <NavLink 
          to='/'
          className='nav-button'
          style={{textDecoration: 'none'}}>
          Home
        </NavLink>
        <NavLink
          to='/'
          className='nav-button'
          style={{textDecoration: 'none'}}>
          Contact
        </NavLink>
        <NavLink 
          to='/'
          className='nav-button'
          style={{textDecoration: 'none'}}>
          Blog
        </NavLink>
        <NavLink 
          to='/'
          className='nav-button'
          style={{textDecoration: 'none'}}>
          Projects
        </NavLink>
      </section>
    </header>
  )
}

export default Header