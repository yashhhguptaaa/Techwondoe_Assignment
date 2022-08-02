/* eslint-disable prettier/prettier */
import { createClient } from "contentful";
const useContentful = () => {
    const client = createClient({
        space: "wtmhaajbkkra",
        accessToken: "nmvVfQOIjQNY8eyxWUsCM-R6fO2akBLSO0C03cBPD-U",
        host: "preview.contentful.com"
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