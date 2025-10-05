import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav  className="navbar">
      <Link to = "/" className="text-4xl font-extrabold text-violet-500 text-gradient">
        <p>AIRAA</p>
      </Link>
      <Link to = "/" className="text-4xl font-extrabold text-violet-500 text-gradient">
       <p className='pl-0
       '>🏠</p >
      </Link>
      <Link to = "/upload" className='primary-button w-fit'>
        <p>Upload Resume/CV</p>
        
      </Link>
    </nav>
  )
}

export default Navbar
