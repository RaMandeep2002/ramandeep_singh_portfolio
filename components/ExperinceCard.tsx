import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  company: string;
  skill: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
};

function ExperienceCard({
  image,
  title,
  company,
  skill,
  startDate,
  endDate,
  summaryPoints,
}: Props) {
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 snap-center rounded-lg bg-[#292929] p-5 sm:p-7 md:p-8 lg:p-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      {/* <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="object-center"
        style={{ width: "250px", height: "150px" }} // Control image size
        src={image}
        alt=""
      /> */}

      {/* <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="object-center"
      >
        <Image src={image} alt="" width={250} height={0} />
      </motion.div> */}

      <div className="px-0 md:px-5">
        <h4 className="text-2xl font-light text-[#F7AB0A] tracking-wide">{title}</h4>
        <p className="font-bold text-xl mt-1 text-gray-200 italic">{company}</p>

        <div className="flex space-x-2 my-2">
          {skill && skill.length > 0 ? (
            <div className="flex space-x-2">
              {skill.map((img, index) => (
                <Image
                  className="w-8 h-8"
                  src={img}
                  width={150} height={150}
                  alt=""
                  key={index}
                  style={{ borderRadius: "50%" }} // Optional: make skills circular
                />
              ))}
            </div>
          ) : (
            <p>No skills available</p>
            // <p></p>
          )}
        </div>

        <p className="uppercase py-3 text-gray-300">
          {`Started: ${startDate} - Ended: ${endDate}`}
        </p>

        <div className="bg-[#232323] rounded-lg p-4 mt-4 shadow-inner border border-[#444444]">
          <h5 className="font-semibold text-lg text-[#F7AB0A] mb-2 tracking-wide">Highlights & Achievements</h5>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-100">
            {summaryPoints && summaryPoints.length > 0 ? (
              summaryPoints.map((point, index) => (
                <li key={index} className="leading-relaxed">
                  {point}
                </li>
              ))
            ) : (
              <li className="text-gray-400 italic">No summary points available</li>
            )}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
