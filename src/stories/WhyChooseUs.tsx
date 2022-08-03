/* eslint-disable prettier/prettier */
import React from 'react';
import './button.css';

interface IWhyChooseUsProps {
    title: string;
    description: string;
}

export const WhyChooseUs = ({
    title = "Highly experienced Team",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .",
    ...props
}: IWhyChooseUsProps) => {
    return (
        <span className="flex mx-2">
            <span className='mr-4' >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="orange" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </span>
            <span>
                <p className='font-semibold text-lg text-left mb-3'>
                    {title}
                </p>
                <p className='text-left'>
                    {description}
                </p>
            </span>
        </span>
    );
};
