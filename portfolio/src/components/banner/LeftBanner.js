import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
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
        I use animation as a third dimension by which to simplify experiences
        and kuiding thro each and every interaction. I'm not adding motion
        just to spruce things up, but doing it in ways that.
      </p>
    </div>
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF  href="https://github.com/Guantai001/DiceRoller" target="_blank"/>
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
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
