import { motion } from 'framer-motion'
import React from 'react'


type Props = {}

function ExperinceCard({}: Props) {
  return (
    <article> 
        <motion.img
        initial={{y:-100,
        opacity:0,}}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="https://dev.anryton.com/assets/images/footer-logo.svg" alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light '>BLockChain Developer</h4>
            <p className='font-bold text-2xl mt-1'>Virtual It tech</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used*/}
                {/* Tech used*/}
                {/* Tech used*/}
            </div>
            <p>Started work.. - Ended...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summery Point</li>
                <li>Summery Point</li>
                <li>Summery Point</li>
                <li>Summery Point</li>
                <li>Summery Point</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperinceCard