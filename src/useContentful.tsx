/* eslint-disable prettier/prettier */
import { createClient } from "contentful";
const useContentful = () => {
    const client = createClient({
        space: `${process.env.REACT_APP_CONTENTFUL_SPACE_KEY}`,
        accessToken: `${process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN}`,
        host: `${process.env.REACT_APP_CONTENTFUL_HOST}`
    });

    const getHomePageDetails = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "homePage",
                select: "fields"
            })
            return entries.items[0].fields;
        } catch (error) {
            console.log(`Error while fetching details ${error}`);
        }
    }
    return { getHomePageDetails };
}

export default useContentful;