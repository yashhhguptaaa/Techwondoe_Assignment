// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import BannerImage from "../../assets/bannerImage.svg"
import { HomePageContext } from "../../Context";

const Banner = () => {
    const { banner } = useContext(HomePageContext);
    return (
        <div
            className="bg-cover bg-center text-white object-fill">
            <img src={banner.imageUrl} />
        </div>
    );
};

export default Banner;
