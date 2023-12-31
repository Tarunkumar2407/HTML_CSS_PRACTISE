import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/career">Career</NavLink>
      <NavLink to="/user/Tarun">Tarun</NavLink>
      <NavLink to="/user/Ankur">Ankur</NavLink>
    </div>
  )
}

export default Navbar
