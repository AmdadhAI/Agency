import { client } from "../../../../sanity/lib/client";
import ContactClient from "./ContactClient";

export const revalidate = 60;

/**
 * Contact Page (Server Component)
 * Fetches dynamic data from Sanity Studio including video settings.
 */
export default async function ContactPage() {
    const query = `*[_type == "contactPage"][0] {
        title,
        heroHeadline,
        heroSubtext,
        videoHeadline,
        videoType,
        videoUrl,
        "videoFileUrl": videoFile.asset->url
    }`;
    
    const data = await client.fetch(query) || {};

    return <ContactClient data={data} />;
}
