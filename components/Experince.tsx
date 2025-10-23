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
          title="Mern Stack Student"
          company="Solitaire Infosys"
          skill={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          ]}
          startDate="2022-06-01"
          endDate="2022-07-31"
          summaryPoints={[
            "Completed hands-on training in the MERN stack, including MongoDB, Express.js, React, and Node.js.",
            "Developed and deployed multiple CRUD web applications independently.",
            "Gained experience working in a collaborative team environment using Git and GitHub.",
            "Built RESTful APIs and integrated them with front-end applications.",
            "Learned fundamentals of modern front-end and back-end web development workflows."
          ]}
        />
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
          startDate="2023-07-01"
          endDate="2023-11-01"
          summaryPoints={[
            "Completed comprehensive training in blockchain fundamentals and smart contract development using Solidity.",
            "Built and tested smart contracts using Hardhat and Mocha in development projects.",
            "Worked on decentralized application (dApp) prototypes with hands-on experience in JavaScript, Node.js, and web3 concepts.",
            "Collaborated in a team to design token systems and implement contract logic.",
            "Developed problem-solving and debugging skills within the blockchain development life-cycle."
          ]}
        />

        <ExperinceCard
          image="https://i.postimg.cc/bJB4Pr1f/vit-logo-dark-1-1.png"
          title="Blockchain Developer"
          company="Virtual IT Tech"
          skill={[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg"
          ]}
          startDate="2023-11-24"
          endDate="2023-03-31"
          summaryPoints={[
            "Developed and deployed blockchain solutions, including writing smart contracts in Solidity for enterprise clients.",
            "Collaborated with cross-functional teams to integrate blockchain features with full-stack applications.",
            "Used Hardhat and Mocha to test and optimize smart contracts for security and efficiency.",
            "Implemented APIs and backend logic in Node.js to enable decentralized features.",
            "Helped troubleshoot and debug blockchain-based platforms through full development lifecycle.",
            "Wrote documentation and technical specifications for blockchain projects."
          ]}
        />
      </div>
    </motion.div>
  );
}

export default Experince;
