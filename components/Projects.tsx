import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      name: "StopHateAb",
      summary:
        "Developed a WordPress website using Elementor to promote awareness against hate activities. Integrated Contact Form 7 and eForm for seamless communication and data collection, ensuring a user-friendly and responsive design.",
      image:
        "https://i.postimg.cc/4NmZMxnM/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375-2.png",
    },
    {
      name: "Salmon Arm Taxi",
      summary:
        "For this project, I created the frontend for both the website and the admin panel to manage operations. I also developed APIs using Nodejs (Typescript) and integrated them with Redux Toolkit for state management. Additionally, we provided APIs to the app developer to enable features such as starting and stopping shifts, as well as starting and ending rides, ensuring seamless integration between the admin panel and the driver app.",
      image:
        "https://i.postimg.cc/NFTGzV2P/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375-1.png",
      style: "", // example style
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex min-h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left"
    >
      <h3 className="absolute top-16 sm:top-24 text-xl sm:text-2xl uppercase tracking-[12px] sm:tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative z-20 flex w-full snap-mandatory overflow-y-hidden overflow-x-auto touch-auto sm:overflow-x-scroll">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
          >
            <motion.img
              initial={{ y: -200 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`w-18 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain rounded-lg ${project.style}`}
              src={project.image}
              alt={project.name}
            />

            <div className="space-y-4 max-w-2xl px-2 sm:px-4 md:px-8">
              <h4 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>

              <p className="text-center mt-2 text-base sm:text-lg md:text-xl">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  );
}

export default Projects;
