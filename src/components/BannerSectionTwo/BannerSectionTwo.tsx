// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import BannerTwoImage from '../../assets/bannerTwoImage.svg';
import { HomePageContext } from "../../Context";

const BannerSectionTwo = () => {
    const { bannerSectionTwo } = useContext(HomePageContext)
    return (
        <div className=' w-full mt-32 h-auto flex flex-col lg:flex-row items-center justify-center sm:flex-col'
            style={{
                backgroundColor: "rgba(250, 225, 213, 0.3)"
            }}
        >
            <div className="md:shrink-0 grow-1 sm:grow lg:ml-60 lg:mr-12 lg:mb-1">
                <img className="h-80 w-screen lg:w-full md:w-full sm:w-screen object-cover" src={bannerSectionTwo?.imageUrl ? bannerSectionTwo?.imageUrl : ""} alt="Man looking at item at a store" />
            </div>
            <div className="p-8 lg:mt-20 mb-24 lg:mr-96 md:mr-4">
                <div className='mb-8'>
                    <div className="uppercase tracking-wide text-left text-sm text-amber-600 font-semibold">Our Team</div>
                    <p className="block mt-1 font-semibold  text-left text-4xl  text-black">{bannerSectionTwo?.title ? bannerSectionTwo?.title : ""}</p>
                    <p className="mt-2 text-black text-left">{bannerSectionTwo?.description ? bannerSectionTwo?.description : ""}</p>
                </div>
                <button className="flex flex-row justify-start bg-orange-500 text-white font-bold py-2 px-4 border rounded-lg">
                    Learn more
                </button>
            </div>
        </div>
    );
}

export default BannerSectionTwo;