import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
        <Link className='link' to='/sensores'>Sensores</Link>
        <Link className='link' to='/mediciones'>Mediciones</Link>
    </nav>
  )
}
