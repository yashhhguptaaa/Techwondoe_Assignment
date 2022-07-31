/* eslint-disable prettier/prettier */
import React from 'react';

const CarrerExpertSection = () => {
    return <div className="w-full flex justify-center flex-col items-center" style={{
        backgroundColor: "#E6692E"
    }}>
        <p className='mt-14 lg:mt-24 sm:mt-14 font-semibold text-white text-4xl '
        >
            Speak to a Career Expert
        </p>
        <div className='mt-4 resize text-center  text-white flex flex-row justify-center font-normal text-lg'>
            <p
                className='ml-4 mr-4 w-4/6'
            >We have are dedicated to finding the best fit for you. Get in touch to organise a face-to-face cactch up with somone from our team
            </p>

        </div>
        <button className="mt-11 mb-14 lg:mb-24 sm:mb-14 mr-6 lg:mr-5 bg-white text-orange-500 py-2 px-4 sm:border-collapse lg:rounded-md md:rounded-md ">
            Get in touch
        </button>


    </div>;
};

export default CarrerExpertSection;
