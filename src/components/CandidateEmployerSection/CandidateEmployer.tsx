/* eslint-disable prettier/prettier */
import React from "react";
import CandidateImage from '../../assets/candidateImage.svg';
import EmployersImage from '../../assets/employersImage.svg';

const CandidateEmployersSection = () => {
    return <div className="w-full flex justify-center flex-col items-center mt-32" style={{
        backgroundColor: "#EDEDED"
    }}>
        <div className="grid gap-4 mt-12 lg:mt-28 sm:mt-12 lg:w-4/6 md:w-3/4 sm:w-2/5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 mb-12 lg:mb-28 sm:mb-12">
            <span className=" bg-white border  border-gray-200 my-5 shadow-2xl overflow-hidden">
                <div
                    className="flex flex-col my-5"
                >
                    <div className="p-4">
                        <img
                            src={CandidateImage}
                            className="w-14"
                        />
                    </div>
                    <div className="pl-4">
                        <div className="">
                            <div className="text-black text-3xl text-left font-semibold">
                                Candidates
                            </div>
                            <p className="text-black my-1 text-lg text-left font-normal h-28 mt-6 overflow-clip">
                                We are dedicated to matching highly skilled professionals to the right business, with the right team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                            </p>
                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                Learn more
                            </p>
                        </div>
                    </div>
                </div>
            </span>

            <span className=" bg-white border border-gray-200 my-5 shadow-2xl overflow-hidden">
                <div
                    className="flex flex-col my-5"
                >
                    <div className="p-4">
                        <img
                            src={EmployersImage}
                            className="w-14"
                        />
                    </div>
                    <div className="pl-4">
                        <div className="">
                            <div className="text-black text-3xl text-left font-semibold">
                                Employers
                            </div>
                            <p className="text-black my-1 text-lg text-left font-normal h-28 mt-6 overflow-clip">
                                We exist because businesses want to hire the best people.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vulputate aliquam arcu .
                            </p>
                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                Learn more
                            </p>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </div>;
};

export default CandidateEmployersSection;