import { motion } from "framer-motion";
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
    <article
      className="flex flex-col items-center space-y-7 flex-shrink-0 snap-center rounded-lg bg-[#292929] p-10 "

    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="object-center"
        style={{ width: "250px", height: "150px" }} // Control image size
        src={image}
        alt=""
      />

      <div className="px-0 md:px-5">
        <h4 className="text-2xl font-light">{title}</h4>
        <p className="font-bold text-xl mt-1">{company}</p>

        <div className="flex space-x-2 my-2">
          {skill && skill.length > 0 ? (
            <div className="flex space-x-2">
              {skill.map((img, index) => (
                <img
                  className="w-8 h-8"
                  src={img}
                  alt=""
                  key={index}
                  style={{ borderRadius: "50%" }} // Optional: make skills circular
                />
              ))}
            </div>
          ) : (
            // <p>No skills available</p>
            <p></p>
          )}
        </div>

        <p className="uppercase py-3 text-gray-300">
          {`Started: ${startDate} - Ended: ${endDate}`}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-sm">
          {summaryPoints && summaryPoints.length > 0 ? (
            summaryPoints.map((point, index) => <li key={index}>{point}</li>)
          ) : (
            <p>No summary points available</p>
          )}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
