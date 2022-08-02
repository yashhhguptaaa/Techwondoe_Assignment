// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable prettier/prettier */
import React, { useState, createContext, useEffect } from 'react';
import useContentful from './useContentful';

const HomePageContext = createContext(null);

export interface IBannerProps {
    title: string;
    description: string;
    imageUrl: string;
}
export interface IBannerSectionTwoProps {
    title: string;
    description: string;
    imageUrl: string;
}
export interface ILatestNewsSectionProps {
    title: string;
    date: string;
    author: string;
    imageUrl: string;
}
export interface ICandidateEmployersSectionProps {
    title: string;
    description: string;
}
export interface ICarrerExpertSectionProps {
    title: string;
    description: string;
}
export interface IWhyChooseUsProps {
    title: string;
    description: string;
}


const HomePageProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [banner, setBanner] = useState<IBannerProps>({});
    const [whyChooseUs, setWhyChooseUs] = useState<IWhyChooseUsProps>(null);
    const [bannerSectionTwo, setBannerSectionTwo] = useState<IBannerSectionTwoProps>(null);
    const [latestNewsSection, setLatestNewsSection] = useState<ILatestNewsSectionProps[]>(null);
    const [candidateEmployersSection, setCandidateEmployersSection] = useState<ICandidateEmployersSectionProps[]>(null);
    const [carrerExpertSection, setCarrerExpertSection] = useState<ICarrerExpertSectionProps>(null);
    const [footerDesc, setFooterDesc] = useState(null);
    const { getHomePageDetails } = useContentful();



    useEffect(() => {
        getHomePageDetails().then((response) => {
            setCandidateEmployersSection(response.CandidateEmployersSection["details"]);
            setBanner({
                title: response.banner.fields.title,
                description: response.banner.fields.description,
                imageUrl: response.banner.fields.file.url,
            });
            setFooterDesc(response.footerDesc.details);
            setCarrerExpertSection({
                title: response.carrerExpertSection.title,
                description: response.carrerExpertSection.description
            });
            setWhyChooseUs({
                title: response.whyChooseUs.title,
                description: response.whyChooseUs.description,
            });
            setBannerSectionTwo({
                title: response.bannerSectionTwoTitle.title,
                description: response.bannerSectionTwoTitle.description,
                imageUrl: response.bannerSectionTwoImage.fields.file.url
            });
            const newsDetails = [];
            response.latestNewsSectionImages.forEach((newsImage, index) => {
                const obj = {
                    imageUrl: newsImage.fields.file.url
                }
                newsDetails.push(obj);
            })
            const latestNewsDetails = []
            newsDetails.forEach((newsImg, index) => {
                const obj = {
                    title: response.latestNewsSectionDesc.details[index].title,
                    author: response.latestNewsSectionDesc.details[index].author,
                    date: response.latestNewsSectionDesc.details[index].date,
                    imageUrl: newsImg.imageUrl
                }
                latestNewsDetails.push(obj);
            })
            setLatestNewsSection(latestNewsDetails);
        });
    });
    return (
        <HomePageContext.Provider value={{ banner, whyChooseUs, bannerSectionTwo, latestNewsSection, candidateEmployersSection, carrerExpertSection, footerDesc }}>
            {children}
        </HomePageContext.Provider>
    )
}

export { HomePageProvider, HomePageContext };
