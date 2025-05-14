import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import { motion } from 'framer-motion'



type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name's Ramandeep singh", "Guys-who-Loves-Coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 1000,

  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <motion.img

        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://i.postimg.cc/jj0My2Cr/20230602-092726-01-1.jpg" alt="sdfas" />
      <div className='z-20'>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }} className='text-sm uppercase text-gray-500 tracking-[10px]'>Full Stack DevloPer</motion.h2>
        <h1 className='text-5xl lg:text-6xl md:text-3xl *:font-semibold px-10'>
          <span className="mr-3">{text}<Cursor cursorColor='#F7AB0A' cursorStyle="_" /></span>
        </h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001
            }
          }} className='pt-5'>
          <Link href="#about"><button className='heroButton'>About</button></Link>
          <Link href="#Experience"><button className='heroButton'>Experience</button></Link>
          {/* <Link href="#Skills"><button className='heroButton'>Educattrmion</button></Link> */}
          <Link href="#Skills"><button className='heroButton'>Skills</button></Link>
          <Link href="#Projects"><button className='heroButton'>Projects</button></Link>
          <Link href="#Contact"><button className='heroButton'>Contact Us</button></Link>
        </motion.div>
      </div>
    </div>
  )
}