import React from 'react'
import Home from './Home'
import NavBar from './NavBar'
import About from './About'

const NavHome = () => {
  return (
    <div className='nav'>
        <NavBar/>

      <Home/>
      <About/>
    
    </div>
  )
}

export default NavHome
