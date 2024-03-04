import { motion } from 'framer-motion'
import React from 'react'
import BackgroundCircle from './BackgroundCircle'



type Props = {}

export default function About({ }: Props) {
    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 ' />
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                viewport={{
                    once: false
                }}
                transition={{ duration: 1.2 }}
                src="https://i.postimg.cc/jj0My2Cr/20230602-092726-01-1.jpg"
                className=' -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] z-0'
            />



            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: false
                }}
                transition={{ duration: 1.2 }} className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className="underline decoration-dotted decoration-[#F4B96F] ">Little</span> Background</h4>
                <p className='text-base'>Hello, I'm Ramandeep Singh, a proficient Blockchain Developer currently undergoing training at the Antire School of Blocktech. I've secured a position at Virtual IT Technology, showcasing expertise in programming languages such as Solidity , Hardhat, and React. Eager to contribute my skills to innovative blockchain solutions and technological advancements.</p>
            </motion.div>

        </motion.div>
    )
}