/* eslint-disable prettier/prettier */
import React from 'react';
import FacebookIcon from '../../assets/facebookIcon.svg';
import LinkedInIcon from '../../assets/linkedInIcon.svg';
import InstagramIcon from '../../assets/instagramIcon.svg';

const Footer = () => {
    return (<footer className="p-4 bg-white sm:p-6 mb-4">
        <div className="md:flex flex-row-reverse md:justify-center">
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mt-10 lg:mt-10 sm:mt-10">
                <div>
                    <ul className="text-sm font-normal text-color text-left">
                        <li className="my-2">
                            <a href="#" className="hover:underline">Home</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">Candidates</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-sm font-normal text-color text-left">
                        <li className="my-2">
                            <a href="#" className="hover:underline">Employers</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">Latest News</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-sm font-normal text-color text-left">
                        <li className="my-2">
                            <a href="#" className="underline ">+62 (0) 9 124 5470</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="underline ">careers@namespace.com</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="text-sm font-normal text-color text-left">
                        <li className="my-2">
                            <a href="#" className="hover:underline">Level 3</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">79 High Street</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">Melbourne CBD</a>
                        </li>
                        <li className="my-2">
                            <a href="#" className="hover:underline">1010</a>
                        </li>
                    </ul>
                </div>
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