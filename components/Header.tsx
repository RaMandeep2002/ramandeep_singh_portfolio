import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
// import Link from 'next/link';


type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{
                x:-500,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5,
            }}
            className='flex flex-row items-center gap-2 '>
            {/* social Icon */}
            <SocialIcon url="https://facebook.com/raman-sardar"fgColor='white' bgColor='transparent' className="hover:bg-blue-500 rounded-full"/>
            <SocialIcon url="https://instagram.com/_sardarji_15" bgColor='transparent' className="hover:bg-gradient-to-r from-fuchsia-600 to-pink-600    rounded-full"/>
            <SocialIcon url="https://twitter.com/raman2002"  bgColor='transparent' className="hover:bg-blue-300 rounded-full"/>
            <SocialIcon url="https://github.com/RaMandeep2002" bgColor='transparent' className="hover:bg-blue-300 rounded-full"/>
            <SocialIcon url="https://linkedin.com/jaketrent"  bgColor='transparent' className="hover:bg-blue-300 rounded-full"/>
        </motion.div>
        <motion.div 
            initial={{
                x:500,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}  
            transition={{
                duration:1.5,
            }} className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon className="cursor-pointer" network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 '>Get In Touch</p>
        <a href="https://drive.google.com/file/d/1LB76BmmkGn4pg2spJ0xGQJRdWXEasQh9/view?usp=drive_link" className='downloadbutton ml-3 uppercase hidden md:inline-flex text-sm text-red-400 '>Download CV</a>
       
        </motion.div>
    </header>
  )
}