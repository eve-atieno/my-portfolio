import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Food Recipes"
          des="This project involves creating a food recipe app. The frontend of the app will be developed using HTML, CSS, and JavaScript, while the data will be fetched from a public API. The app  communicates with the API to retrieve recipe information and display it in a user-friendly manner."
          src={projectOne}
        />
        <ProjectsCard
          title="Solar System Web Application"
          des=" This is a web application that enables a user to search for planets in the solar system, publish comments on different planet cards and access learning materials about the solar system."
          src={projectTwo}
        />
        <ProjectsCard
          title="Bank Of Flatiron"
          des=" This project is a simple web application that allows users to view, add, and filter transactions. The transactions data is stored in a JSON file and served by a local server using the json-server package."
          src={projectThree}
        />
        
        
      </div>
    </section>
  );
}

export default Projects