import React from 'react'
import NavBar from './components/NavBar'
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <div  className="w-full h-auto bg-bodyColor text-lightText px-4">
      <NavBar/>
      <Banner/>
    </div>
  )
}

export default App
