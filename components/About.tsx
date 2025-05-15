import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center"
        >
            {/* Heading */}
            <h3 className="absolute top-16 sm:top-20 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
                About
            </h3>

            {/* Background Design */}
            <div className="w-full absolute top-[35%] bg-[#F7AB0A]/10 left-0 h-[350px] sm:h-[400px] -skew-y-12"></div>

            {/* Image Section */}
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
                src="https://i.postimg.cc/jj0My2Cr/20230602-092726-01-1.jpg"
                alt="Ramandeep Singh"
                className="
                    flex-shrink-0
                    w-24 h-24
                    sm:w-40 sm:h-40
                    md:w-56 md:h-80
                    xl:w-[400px] xl:h-[500px]
                    2xl:w-[500px] 2xl:h-[600px]
                    rounded-full
                    object-cover z-0
                    mt-[100px]
                    mx-auto md:mx-0
                    transition-all duration-300
                "
                // style={{
                //     maxWidth: "100%",
                //     height: "auto",
                // }}
            />

            {/* Text Section */}
            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: false }}
                transition={{ duration: 1.2 }}
                className="space-y-6 px-2 sm:px-6 md:px-10 w-full"
            >
                <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-dotted decoration-[#F4B96F]">
                        Little
                    </span>{" "}
                    Background
                </h4>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-relaxed text-justify">
                    Aspiring Full Stack and Blockchain Developer with a solid foundation
                    in front-end technologies such as HTML, CSS, Bootstrap, and React.js.
                    Enthusiastic about designing and implementing responsive, visually
                    appealing user interfaces and decentralized applications. Skilled in
                    both client-side and server-side development, eager to apply knowledge
                    in creating dynamic, efficient web applications and smart contracts.
                    Quick to learn and adapt, with a passion for staying updated on the
                    latest trends and technologies in web and blockchain development.
                    Excited to collaborate with cross-functional teams to deliver
                    high-quality, innovative solutions that align with industry standards
                    and client needs. Ready to contribute fresh ideas and a strong work
                    ethic to a growing team in the evolving tech landscape.
                </p>
            </motion.div>
        </motion.div>
    );
}
