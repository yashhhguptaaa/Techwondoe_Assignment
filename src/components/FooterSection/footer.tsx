// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { HomePageContext } from "../../Context";
import FacebookIcon from '../../assets/facebookIcon.svg';
import LinkedInIcon from '../../assets/linkedInIcon.svg';
import InstagramIcon from '../../assets/instagramIcon.svg';

const Footer = () => {
    const { footerDesc } = useContext(HomePageContext);
    return (<footer className="p-4 bg-white sm:p-6 mb-4">
        <div className="md:flex flex-row-reverse md:justify-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mt-10 lg:mt-10 sm:mt-10">
                {
                    footerDesc?.length ?
                        footerDesc.map((footer, footerindex) => {
                            return (
                                <div key={footerindex}>
                                    <ul className="text-sm font-normal text-color text-left">
                                        {
                                            footer.map((footerName, index) => {
                                                return (
                                                    <li key={footerName + index} className="my-2">
                                                        <a href="#" className={`hover:underline ${footerindex === 2 ? "underline" : ""}`}>{footerName}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                        : null
                }
            </div>
            <div className="flex mt-10 lg:mt-24 mr-0 lg:mr-16 sm:mr-0 justify-end lg:justify-center sm:justify-end h-5 sm:mt-10">
                <img className="mx-2" src={FacebookIcon} />
                <img className="mx-2" src={LinkedInIcon} />
                <img className="mx-2" src={InstagramIcon} />
            </div>
        </div>
    </footer>)

}

export default Footer;