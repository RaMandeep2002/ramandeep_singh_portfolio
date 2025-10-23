"use client";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Projects() {
  const projects = [
    {
      name: "StopHateAb",
      summary:
        "Developed a WordPress website using Elementor to promote awareness against hate activities. Integrated Contact Form 7 and eForm for seamless communication and data collection, ensuring a user-friendly and responsive design.",
      link: "https://stophateab.ca/",
      image:
        "https://i.postimg.cc/4NmZMxnM/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375-2.png",
    },
    {
      name: "Salmon Arm Taxi",
      summary:
        "For this project, I created the frontend for both the website and the admin panel to manage operations. I also developed APIs using Node.js (TypeScript) and integrated them with Redux Toolkit for state management. Additionally, we provided APIs to the app developer to enable features such as starting and stopping shifts, as well as starting and ending rides, ensuring seamless integration between the admin panel and the driver app.",
      image:
        "https://i.postimg.cc/NFTGzV2P/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375-1.png",
      link: "https://salmonarmtaxi.ca/",
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
      {/* Swiper Slider */}
      {/* <div className="snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative z-20 flex w-full snap-mandatory overflow-y-hidden overflow-x-auto touch-auto sm:overflow-x-scroll"> */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 relative z-20 flex w-full snap-mandatory overflow-y-hidden overflow-x-auto touch-auto sm:overflow-x-scroll"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center space-y-5 p-8 sm:p-16 md:p-24 lg:p-32 text-center">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
                src={project.image}
                alt={project.name}
              />

              <div className="space-y-4 max-w-2xl">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {i + 1}/{projects.length}:
                  </span>{" "}
                  {project.name}
                </h4>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                  {project.summary}
                </p>

                {project.link && (
                  <div className="flex justify-center mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F7AB0A]/90 to-yellow-400 px-6 py-2 text-white font-semibold shadow-lg hover:from-yellow-400 hover:to-[#F7AB0A]/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A]/70"
                    >
                      <Link className="w-4 h-4 text-white" />
                      <span className="tracking-wide">Visit Project</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative background element */}
      <div className="absolute left-0 top-[30%] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </motion.div>
  );
}

export default Projects;
