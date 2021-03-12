import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar: React.FC = () => {
    return (
        <nav>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">Logo</NavLink>
          <ul className="right">
            <li><NavLink to="/">To-do</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
 