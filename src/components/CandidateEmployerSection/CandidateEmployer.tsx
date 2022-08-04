// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { HomePageContext } from "../../Context";
import CandidateImage from '../../assets/candidateImage.svg';
import EmployersImage from '../../assets/employersImage.svg';

const CandidateEmployersSection = () => {
    const { candidateEmployersSection } = useContext(HomePageContext)
    return <div className="w-full flex justify-center flex-col items-center mt-20 lg:mt-32 sm:mt-20" style={{
        backgroundColor: "#EDEDED"
    }}>
        <div className="grid gap-4 mt-12 lg:mt-28 sm:mt-12 lg:w-4/6 md:w-3/4 sm:w-2/5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2 mb-12 lg:mb-28 sm:mb-12">
            {
                candidateEmployersSection?.length ?
                    candidateEmployersSection.map((candiEmp, index) => {
                        return (
                            <span key={index} className=" bg-white border  border-gray-200 my-5 shadow-2xl overflow-hidden">
                                <div
                                    className="flex flex-col my-5"
                                >
                                    <div className="p-4">
                                        <img
                                            src={candiEmp?.title === "Candidates" ? CandidateImage : candiEmp?.title === "Employers" ? EmployersImage : ""}
                                            className="w-14"
                                        />
                                    </div>
                                    <div className="pl-4">
                                        <div className="">
                                            <div className="text-black text-3xl text-left font-semibold">
                                                {candiEmp?.title ? candiEmp?.title : ""}
                                            </div>
                                            <p className="text-black my-1 text-lg text-left font-normal h-28 mt-6 overflow-clip">
                                                {candiEmp?.description ? candiEmp?.description : ""}
                                            </p>
                                            <p className="my-4 text-lg text-left font-medium" style={{ color: "#E6692E" }}>
                                                Learn more
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

export default CandidateEmployersSection;