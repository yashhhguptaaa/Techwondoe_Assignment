// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { HomePageContext } from "../../Context";
import LatestNewsOne from "../../assets/latestNewsOne.svg";
import LatestNewsTwo from "../../assets/latestNewsTwo.svg";
import LatestNewsThree from '../../assets/latestNewsThree.svg';

const LatestNewsSection = () => {
    const { latestNewsSection } = useContext(HomePageContext)
    return <div className="w-full flex justify-center flex-col items-center mt-32">
        <div className='flex flex-row items-end justify-between w-full lg:w-4/6 md:w-full sm:w-full'>
            <div>
                <span
                    className='mt-4 resize text-center ml-6 lg:ml-5 sm:ml-10 font-semibold text-base lg:text-4xl sm:text-base'
                >Latest News
                </span>
            </div>
            <div>
                <button className="flex flex-row justify-start mr-6 lg:mr-5 bg-orange-500 text-white py-2 px-4 sm:border-collapse lg:rounded-md md:rounded-md ">
                    View All
                </button>
            </div>
        </div>

        <div className="grid lg:w-4/6 md:w-3/4 sm:w-2/5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-3">
            {
                latestNewsSection?.length ?
                    latestNewsSection.map((news, index) => {
                        return (
                            <span key={index}>
                                <div
                                    className="flex flex-col max-w-sm my-5"
                                >
                                    <div className="p-4">
                                        <img

                                            src={news?.imageUrl ? news?.imageUrl : ""}
                                            className="w-full h-48"
                                        />
                                    </div>
                                    <div className="pl-4">
                                        <div className="">
                                            <div className=" text-base text-left font-semibold" style={{
                                                color: "rgba(0, 0, 0, 0.7)"
                                            }}>
                                                {news?.author ? news?.author : ""} | {news?.date ? news?.date : ""}
                                            </div>
                                            <p className="my-1 text-xl text-left font-semibold h-20" style={{ color: "#111012" }}>
                                                {news?.title ? news?.title : ""}
                                            </p>
                                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                                Read more ↪
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        )
                    })
                    : null
            }
        </div>
    </div>;
};

export default LatestNewsSection;