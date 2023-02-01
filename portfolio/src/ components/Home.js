import React from 'react'

const Home = () => {
  return (
    <div>
      <input className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Evelyne Atieno</div>
                <div className="text-3">And I'm <span className="typing"></span></div>
                <a href="#contact">Contact Me</a>
            </div>
        </div>
    </input>
    </div>
  )
}

export default Home
