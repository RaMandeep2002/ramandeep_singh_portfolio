import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'


type Props = {}

export default function Hero({}: Props) {
    const[text,count] =useTypewriter({
        words:["Hi, The Name's Ramandeep singh","Guys-who-Loves-Coffee.sol","<ButLovesToCodeMore />"],
        loop:true,
        delaySpeed:1000,  
       
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://i.postimg.cc/jj0My2Cr/20230602-092726-01-1.jpg" alt="sdfas" />
        <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[10px]'>BlockChain DevloPer</h2>
        <h1 className='text-5xl lg:text-6xl md:text-3xl *:font-semibold px-10'>
        <span className="mr-3">{text}<Cursor cursorColor='#F7AB0A' cursorStyle="_"/></span>
        </h1>
        <div className='pt-5'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#Experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#Skills"><button className='heroButton'>Education</button></Link>
            <Link href="#Skills"><button className='heroButton'>Skills</button></Link>
            <Link href="#Projects"><button className='heroButton'>Projects</button></Link>
        </div>
        </div>
    </div>
  )
}