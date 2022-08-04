// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Primary } from "../../stories/Button.stories";
import { HomePageContext } from "../../Context";

const CarrerExpertSection = () => {
    const { carrerExpertSection } = useContext(HomePageContext);
    return <div className="w-full flex justify-center flex-col items-center" style={{
        backgroundColor: "#E6692E"
    }}>
        <p className='mt-14 lg:mt-24 sm:mt-14 font-semibold text-white text-4xl '
        >
            {carrerExpertSection?.title ? carrerExpertSection?.title : ""}
        </p>
        <div className='mt-4 resize text-center  text-white flex flex-row justify-center font-normal text-lg'>
            <p
                className='ml-4 mr-4 w-4/6'
            >{carrerExpertSection?.description ? carrerExpertSection?.description : ""}
            </p>

        </div>
        <div className='mt-11 mb-14 lg:mb-24 sm:mb-14 mr-6 lg:mr-5 font-bold '>
            <Primary label="Get in touch" backgroundColor="white" color="#F87431" size="large" fontSize="15px" />
        </div>
    </div>;
};

export default CarrerExpertSection;
