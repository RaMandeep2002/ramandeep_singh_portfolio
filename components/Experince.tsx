import { motion } from 'framer-motion';
import React from 'react';
import ExperinceCard from './ExperinceCard';

type Props = {};

function Experince({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full px-4 sm:px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 sm:top-24 uppercase tracking-[15px] sm:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Experience
      </h3>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />

      <div className="w-full relative flex space-x-5 overflow-x-auto p-4 sm:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperinceCard
          image="https://i.postimg.cc/nL7RHSTN/Group-67387.png"
          title="Blockchain Student"
          company="ASB (Antier School of BlockTech)"
          skill={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg"
          ]}
          startDate="2022-01-01"
          endDate="2022-12-31"
          summaryPoints={[]}
        />

        <ExperinceCard
          image="https://i.postimg.cc/bJB4Pr1f/vit-logo-dark-1-1.png"
          title="Blockchain Developer"
          company="Virtual IT Tech"
          skill={[]}
          startDate="2022-01-01"
          endDate="2022-12-31"
          summaryPoints={[]}
        />
      </div>
    </motion.div>
  );
}

export default Experince;
