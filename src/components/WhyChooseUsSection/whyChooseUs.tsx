// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { HomePageContext } from "../../Context";

const WhyChooseUs = () => {
    const { whyChooseUs } = useContext(HomePageContext)
    return <div className="w-full flex justify-center flex-col items-center mt-32">
        <p className='font-semibold text-4xl'
            style={{
                lineHeight: "60px"
            }}
        >
            {whyChooseUs?.title ? whyChooseUs?.title : ""}
        </p>
        <div className='mt-4 resize text-center flex flex-row justify-center font-normal text-lg'>
            <p
                className='ml-4 mr-4'
            >{whyChooseUs?.description ? whyChooseUs?.description : ""}
            </p>
        </div>

        <div className="grid gap-y-8  mt-10 lg:w-4/6 md:w-3/4 sm:w-2/5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-2 md:grid-rows-3 sm:grid-rows-6">
            <span className="flex mx-2">
                <span className='mr-4' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span>
                    <p className='font-semibold text-lg text-left mb-3'>
                        Highly experienced Team
                    </p>
                    <p className='text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                    </p>
                </span>
            </span>

            <span className="flex mx-2">
                <span className='mr-4' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span>
                    <p className='font-semibold text-lg text-left mb-3'>
                        Highly experienced Team
                    </p>
                    <p className='text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                    </p>
                </span>
            </span>

            <span className="flex mx-2">
                <span className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span>
                    <p className='font-semibold text-lg text-left mb-3'>
                        Highly experienced Team
                    </p>
                    <p className='text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                    </p>
                </span>
            </span>

            <span className="flex mx-2">
                <span className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span>
                    <p className='font-semibold text-lg text-left mb-3'>
                        Highly experienced Team
                    </p>
                    <p className='text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                    </p>
                </span>
            </span>

            <span className="flex mx-2">
                <span className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span>
                    <p className='font-semibold text-lg text-left mb-3'>
                        Highly experienced Team
                    </p>
                    <p className='text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                    </p>
                </span>
            </span>

            <span className="flex mx-2">
                <span className='mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span>
                    <p className='font-semibold text-lg text-left mb-3'>
                        Highly experienced Team
                    </p>
                    <p className='text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                    </p>
                </span>
            </span>
        </div>
    </div>;
};

export default WhyChooseUs;
