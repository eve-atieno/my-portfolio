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
          title="Denco Movers Web Application"
          des="This project involves creating a movers website App . The frontend of the app will be developed using Reactjs, Tailwind CSS, and JavaScript, while the data will be fetched from a back-end server using Ruby on Rails. The app  communicates with the beck-end server to retrieve Services information and display it in a user-friendly manner.
          https://denco-mover.vercel.app/
          "
          src={projectOne}
        />
        <ProjectsCard
          title="Solar System Web Application"
          des=" This is a web application that enables a user to search for planets in the solar system, publish comments on different planet cards and access learning materials about the solar system.
          https://github.com/keithkiama/phase-2-group-2-nasa-group-project
          "
          
          src={projectTwo}
        />
        <ProjectsCard
          title="Donate It Web Application"
          des=" This project is a simple web application that allows users to to view,add and post their donatins. The donations data is stored in a ruby on rails server file and served by a local server using the json-server package.
          https://github.com/randy-development-work/phase-3-project-react-client/pull/14
          "
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects