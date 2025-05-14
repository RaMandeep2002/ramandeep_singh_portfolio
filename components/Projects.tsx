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
        "I contributed to the development of the Salmon Arm Taxi project, a real-time taxi booking platform. My work focused on building scalable backend APIs with Node.js and TypeScript, implementing driver-vehicle management, fare calculation, and shift scheduling features. I also integrated Redux Toolkit in the frontend using Next.js to manage real-time data flow and improve user experience. This project highlights my skills in full-stack development and building production-ready systems.",
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
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500 ">
        Projects
      </h3>

      <div className="sanp-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative z-20 flex w-full snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44 ${project.style}`}
          >
            <motion.img
              initial={{ y: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`h-42 ${project.style}`}
              src={project.image}
              alt={project.name}
            />

            <div className="space-y-18 max-w-6xl px-0 md:px-10">
              <h4 className="text-center text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Projects {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>

              <p className="text-center mt-4 text-xl md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  );
}

export default Projects;
