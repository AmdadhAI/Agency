import { client } from "../../../../sanity/lib/client";
import AboutClient from "./AboutClient";

export const revalidate = 60;

export default async function AboutPage() {
    const query = `*[_type == "aboutPage"][0] {
        heroHeadline,
        heroSubtext,
        "galleryImages": galleryImages[].asset->url,
        teamMembers[] {
            name,
            role,
            "imageUrl": image.asset->url,
            color
        }
    }`;
    const data = await client.fetch(query) || {};

    return <AboutClient data={data} />;
}
