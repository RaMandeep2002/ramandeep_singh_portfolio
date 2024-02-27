import { motion } from 'framer-motion'
import React from 'react'
import ExperinceCard from './ExperinceCard'

type Props = {}

function Experince({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} className='h-screen flex flex-col relative  text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experince</h3>  


      <div>
        {/* Experice */}
        <ExperinceCard />
        <ExperinceCard />
  
        </div> 
    </motion.div>
  )
}

export default Experince