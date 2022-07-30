/* eslint-disable prettier/prettier */
import React from "react";
import BannerImage from "../../assets/bannerImage.svg"

const Banner = () => {
    return (
        <div
            className="bg-cover bg-center  h-auto text-white object-fill">
            <img src={BannerImage} />
        </div>
    );
};

export default Banner;
