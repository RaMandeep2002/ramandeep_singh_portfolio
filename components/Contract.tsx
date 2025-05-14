import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = {};

const Contract = ({ }: Props) => {
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">

            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact Me
            </h3>



            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I Have Got Just What You Need.
                    <span className="underline decoration-[#F7AB0A]/50 ">
                        Lets Talk..
                    </span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl '>+91 9592935755</p>
                    </div>
                    {/* <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl '>#123, Street, Conutry</p>
                    </div> */}
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl '>ramandeepsingh1511@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
