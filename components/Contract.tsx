import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = {};

const Contract = ({ }: Props) => {
    return (
        <div className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 sm:px-6 md:px-10 justify-center mx-auto items-center">
            <h3 className="absolute top-16 sm:top-20 md:top-24 uppercase tracking-[10px] sm:tracking-[16px] md:tracking-[20px] text-gray-500 text-lg sm:text-xl md:text-2xl">
                    Contact Me
            </h3>

            <div className="flex flex-col w-full max-w-xl space-y-8 sm:space-y-10 mt-32 sm:mt-36 md:mt-40">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center bg-gradient-to-r from-[#F7AB0A]/80 via-[#FFD700]/70 to-[#F7AB0A]/80 bg-clip-text text-transparent drop-shadow-sm py-2 px-4">
                    I Have Got Just What You Need.
                    <span className="underline decoration-[#F7AB0A] decoration-4 underline-offset-4 ml-2 font-bold transition-colors duration-200 hover:text-[#F7AB0A]/80">
                        Let&apos;s Talk..
                    </span>
                </h4>

                <div className="space-y-6 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                        <PhoneIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
                        <p className="text-lg sm:text-xl md:text-2xl break-all">+91 9592935755</p>
                    </div>
                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                        <MapPinIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
                        <p className="text-lg sm:text-xl md:text-2xl break-all">#123, Street, Country</p>
                    </div> */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                        <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
                        <p className="text-lg sm:text-xl md:text-2xl break-all">ramandeepsingh1511@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
