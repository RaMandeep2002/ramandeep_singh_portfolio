import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

const Skills = ({ }: Props) => {
  // Array of skills data
  const skills = [
    { image: "https://devicon-website.vercel.app/api/html5/original.svg", technology: "HTML5", prof: 90 },
    { image: "https://devicon-website.vercel.app/api/css3/original.svg", technology: "CSS3", prof: 80 },
    { image: "https://devicon-website.vercel.app/api/javascript/original.svg", technology: "JavaScript", prof: 85 },
    { image: "https://devicon-website.vercel.app/api/react/original.svg", technology: "React", prof: 75 },
    { image: "https://devicon-website.vercel.app/api/typescript/plain.svg", technology: "TypeScript", prof: 70 },
    { image: "https://devicon-website.vercel.app/api/bootstrap/original.svg", technology: "Bootstrap", prof: 70 },
    { image: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg", technology: "Tailwind css", prof: 65 },
    { image: "https://devicon-website.vercel.app/api/nodejs/plain.svg", technology: "Nodejs", prof: 60 },
    { image: "https://devicon-website.vercel.app/api/express/original.svg", technology: "Express", prof: 55 },
    { image: "https://devicon-website.vercel.app/api/mongodb/plain.svg", technology: "MongoDB", prof: 50 },
    { image: "https://devicon-website.vercel.app/api/redux/original.svg", technology: "Redux", prof: 75 },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg", technology: "Wordpress", prof: 25 },
    // { image: "https://i.postimg.cc/nL7RHSTN/Group-67387.png", technology: "Git", prof: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 md:flex-row min-h-screen xl:space-y-0 mx-auto justify-evenly items-center"
    >
      {/* Section Headers */}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3
        className="absolute top-36 uppercase tracking-[3px] text-sm 
                   bg-gradient-to-r from-[#F7AB0A] via-pink-500 to-purple-500 
                   bg-[length:200%_100%] bg-clip-text text-transparent
                   animate-gradient-x"
        style={{
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          backgroundSize: "200% 100%",
          animation: "gradientMove 3s linear infinite"
        }}
      >
        Hover Over a Skill for Current Proficiency
      </h3>
      <style>
        {`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradientMove 3s linear infinite;
        }
        `}
      </style>

      {/* Background decoration */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />

      {/* Skills Grid */}
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            image={skill.image}
            technology={skill.technology}
            prof={skill.prof}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
