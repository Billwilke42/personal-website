import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2 className='title-name'>Bill Wilke</h2>
        <div className='nav-button-container'>
          <NavLink 
            exact to='/'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Home
          </NavLink>
          <NavLink
            to='/contact/'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Contact
          </NavLink>
          <NavLink 
            to='/blog'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Blog
          </NavLink>
          <NavLink 
            to='/projects'
            className='nav-button'
            activeClassName='nav-button-active'
            style={{textDecoration: 'none'}}>
            Projects
          </NavLink>
        </div>
    </header>
  )
}

export default Header