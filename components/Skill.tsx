import { motion } from "framer-motion";
import React from "react";

type Props = {
    directionLeft?: boolean;
    image: string;
    technology?: string;
    prof: number;
};

function Skill({ directionLeft, image, technology, prof }: Props) {
    return (
        <div className="group relative flex cursor-pointer items-center justify-center">
            {/* Wrapper with outer border */}
            <motion.div
                initial={{
                    x: directionLeft ? -100 : 100,
                    opacity: 0,
                }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="rounded-full border border-gray-300 shadow-lg w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 flex items-center justify-center">
                {/* Motion animation for the image */}
                <img

                    src={image}
                    alt={technology}
                    className="object-cover w-14 h-14 md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale duration-300 ease-in-out"
                />
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute top-0 left-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 ease-in-out z-10">
                <div className="text-center">
                    <p className="text-lg md:text-xl font-medium text-white">{technology}</p>
                    <p className="text-2xl md:text-3xl font-bold text-white mt-2">
                        {prof}%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
