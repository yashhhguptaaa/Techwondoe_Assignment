// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { HomePageContext } from "../../Context";
import { WhyChooseUsTemplateOne } from '../../stories/WhyChooseUs.stories'

export default function WhyChooseUs() {
    const { whyChooseUs } = useContext(HomePageContext)
    return (<div className="w-full flex justify-center flex-col items-center mt-12 lg:mt-32 md:mt-20 sm:mt-12">
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
            <WhyChooseUsTemplateOne title="Highly experienced Team" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .' />
            <WhyChooseUsTemplateOne title="Large Client Networks" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .' />
            <WhyChooseUsTemplateOne title="Face-to-face interviews" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .' />
            <WhyChooseUsTemplateOne title="Legal Services" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .' />
            <WhyChooseUsTemplateOne title="Accounting Servies" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .' />
            <WhyChooseUsTemplateOne title="Design & Build Services" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .' />
        </div>
    </div>);
};