import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// import Link from "next/link";

type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center gap-2 "
      >
        {/* social Icon */}
        <SocialIcon
          url="https://facebook.com/raman-sardar"
          fgColor="white"
          bgColor="transparent"
          className="rounded-full hover:bg-blue-500"
        />
        <SocialIcon
          url="https://instagram.com/_sardarji_15"
          bgColor="transparent"
          className="rounded-full from-fuchsia-600 to-pink-600    hover:bg-gradient-to-r"
        />
        <SocialIcon
          url="https://twitter.com/raman2002"
          bgColor="transparent"
          className="rounded-full hover:bg-blue-300"
        />
        <SocialIcon
          url="https://github.com/RaMandeep2002"
          bgColor="transparent"
          className="rounded-full hover:bg-blue-300"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ramandeep-singh-849a121bb/"
          bgColor="transparent"
          className="rounded-full hover:bg-blue-300"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex cursor-pointer flex-row items-center text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden text-sm uppercase text-gray-400 md:inline-flex ">
          Get In Touch
        </p>

        <a
          href="https://drive.google.com/file/d/1LB76BmmkGn4pg2spJ0xGQJRdWXEasQh9/view?usp=drive_link"
          className="downloadbutton ml-3 hidden text-sm uppercase text-red-400 md:inline-flex "
        >
          Download CV
        </a>
      </motion.div>
    </header>
  );
}
