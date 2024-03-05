import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500 ">
        Projects
      </h3>

      <div className="sanp-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative z-20 flex w-full snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project, i) => (
          <>
            <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 ">
              <motion.img
                initial={{ y: -300 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-24 w-24"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt=""
              />

              <div className="space-y-18 max-w-6xl px-0 md:px-10 ">
                <h4 className="text-center text-4xl font-semibold">
                  {" "}
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  Project name
                </h4>

                <p className="text-center text-lg md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
                  quaerat ea! Repudiandae vel dicta officiis eum qui,
                  necessitatibus ipsa laudantium quaerat, doloribus sunt
                  repellendus veritatis aut. Ratione, fugit! Repellendus,
                  voluptates.
                </p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  );
}

export default Projects;
