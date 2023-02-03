import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
     
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Evelyne Atieno</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-End Web Developer
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 705000456</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">atienoevelyne53@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft