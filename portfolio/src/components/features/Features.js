import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="As a front-end web developer, I design and build the user-facing side of websites and web apps using HTML, CSS,JavaScript and React js. My goal is to create a visually appealing and functional user experience."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="As an SEO online marketer, I help businesses rank higher in search engine results by utilizing effective SEO strategies and techniques. My goal is to increase visibility, reach, and traffic for my clients' websites."
          icon={<SiProgress />}
        />

        <Card
          title="UX Design"
          des="As a UX designer, I create intuitive and user-friendly digital experiences by conducting research, prototyping, and user testing. My goal is to design seamless and satisfying products that meet both user and business needs."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
};

export default Features;
