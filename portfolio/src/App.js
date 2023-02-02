import React from 'react'
import NavBar from './components/NavBar'
import Banner from "./components/banner/Banner";
import Features from './components/features/Features';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import FooterBottom from './components/footer/FooterBottom';


const App = () => {
  return (
    <div  className="w-full h-auto bg-bodyColor text-lightText px-4">
      <NavBar/>
      <div className="max-w-screen-xl mx-auto">
      <Banner/>
     <Features/>
     <Projects/>
     <Contact/>
     <FooterBottom/>
      </div>
    
    </div>
  )
}

export default App
