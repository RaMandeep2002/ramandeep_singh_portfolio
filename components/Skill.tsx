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
                className="rounded-full border border-gray-300 shadow-lg 
                    w-16 h-16 
                    sm:w-20 sm:h-20 
                    md:w-28 md:h-28 
                    xl:w-36 xl:h-36 
                    flex items-center justify-center"
            >
                {/* Motion animation for the image */}
                <img
                    src={image}
                    alt={technology}
                    className="object-cover 
                        w-8 h-8 
                        sm:w-12 sm:h-12 
                        md:w-16 md:h-16 
                        xl:w-20 xl:h-20 
                        filter group-hover:grayscale duration-300 ease-in-out"
                />
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute top-0 left-0 flex items-center justify-center 
                w-16 h-16 
                sm:w-20 sm:h-20 
                md:w-28 md:h-28 
                xl:w-36 xl:h-36 
                bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 ease-in-out z-10"
            >
                <div className="text-center px-1">
                    <p className="text-xs sm:text-sm md:text-lg xl:text-xl font-medium text-white break-words">{technology}</p>
                    <p className="text-base sm:text-lg md:text-2xl xl:text-3xl font-bold text-white mt-1 md:mt-2">
                        {prof}%
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
