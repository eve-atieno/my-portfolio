import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js';

import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiHtml5, SiJavascript } from "react-icons/si";

const LeftBanner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Graphic Designer", "Front-End Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
      <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
      <h1 className="text-6xl font-bold text-white">
        Hi, I'm <span className="text-designColor capitalize">Evelyne Atieno</span>
      </h1>
      <h2 className="text-4xl font-bold text-white">
        a <span ref={el}></span>
      
      </h2>
      <p className="text-base font-bodyFont leading-6 tracking-wide">
      As a graphic designer and fullstack developer, 
      I harness the power of animation to bring an 
      added level of dimension and simplicity to user experiences. 
      My goal is not just to add visual interest, but to incorporate motion 
      in a strategic manner that guides users seamlessly through interactions.
      </p>
    </div>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/eve-atieno" target="_blank"><FaGithub /></a>

          </span>
          <span className="bannerIcon">
          <a href="https://twitter.com/Atieno_Ever" target="_blank"><FaTwitter /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/evelyne-atieno-a52ab0235/" target="_blank"><FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiJavascript  />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiHtml5/>
          </span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner
