/* eslint-disable prettier/prettier */
import React from "react";
import LatestNewsOne from "../../assets/latestNewsOne.svg";
import LatestNewsTwo from "../../assets/latestNewsTwo.svg";
import LatestNewsThree from "../../assets/latestNewsThree.svg";

const LatestNewsSection = () => {
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
            <span >
                <div
                    className="flex flex-col max-w-sm my-5"
                >
                    <div className="p-4">
                        <img
                            src={LatestNewsOne}
                            className="w-full"
                        />
                    </div>
                    <div className="pl-4">
                        <div className="">
                            <div className=" text-base text-left font-semibold" style={{
                                color: "rgba(0, 0, 0, 0.7)"
                            }}>
                                by John Doe | Oct 11, 2021
                            </div>
                            <p className="my-1 text-xl text-left font-semibold h-20" style={{ color: "#111012" }}>
                                Risk & Compliance market
                            </p>
                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                Read more ↪
                            </p>
                        </div>
                    </div>
                </div>
            </span>

            <span >
                <div
                    className="flex flex-col max-w-sm my-5"
                >
                    <div className="p-4">
                        <img
                            src={LatestNewsTwo}
                            className="w-full"
                        />
                    </div>
                    <div className="pl-4">
                        <div className="">
                            <div className=" text-base text-left font-semibold" style={{
                                color: "rgba(0, 0, 0, 0.7)"
                            }}>
                                by Jane Doe | Oct 4, 2021
                            </div>
                            <p className="my-1 text-xl text-left font-semibold h-20" style={{ color: "#111012" }}>
                                How can you break the burnout cycle?
                            </p>
                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                Read more ↪
                            </p>
                        </div>
                    </div>
                </div>
            </span>

            <span >
                <div
                    className="flex flex-col  max-w-sm my-5 "
                >
                    <div className="p-4">
                        <img
                            src={LatestNewsThree}
                            className="w-full"
                        />
                    </div>
                    <div className="pl-4">
                        <div className="">
                            <div className=" text-base text-left font-semibold" style={{
                                color: "rgba(0, 0, 0, 0.7)"
                            }}>
                                by Lisa Ray | Sep 28, 2021 |
                            </div>
                            <p className="my-1 text-xl text-left font-semibold h-20" style={{ color: "#111012" }}>
                                Look for a legal job opportunity for 2022
                            </p>
                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                Read more ↪
                            </p>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>;
};

export default LatestNewsSection;