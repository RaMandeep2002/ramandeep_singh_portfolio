import { color, motion } from 'framer-motion'
// import Image from 'next/image';
import React from 'react'


type Props = {
  image: string,
  title: string;
  company: string;
  skill: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
}

function ExperinceCard({ image, title, company, skill, startDate, endDate, summaryPoints }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[200px] md:w-[600px] xl:w-[600px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[350px] xl:h-[150px] object-center"
        src={image}
        alt="" />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{title}</h4>
        <p className='font-bold text-2xl mt-1'>{company}</p>
        <div className='flex space-x-2 my-2'>
          {skill && skill.length > 0 ? (
            <div className='flex space-x-2 my-2'>
              {skill.map((img, index) => (
                <img className='w-10 h-10' src={img} alt="" key={index}></img>
              ))}
            </div>
          ) : (
            // <p>No summary points available</p>
            <p></p>
          )}
        </div>
        <p className='uppecase py-5 text-gray-300 '>{`Started: ${startDate} - Ended: ${endDate}`}</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {summaryPoints && summaryPoints.length > 0 ? (
            <ul className='list-disc space-y-4 ml-5 text-lg'>
              {summaryPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            // <p>No summary points available</p>
            <p></p>
          )}
        </ul>
      </div>
    </article>
  )
}

export default ExperinceCard