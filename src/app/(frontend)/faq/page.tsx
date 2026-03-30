import { client } from "../../../../sanity/lib/client";
import FAQClient from "./FAQClient";

export const revalidate = 60;

export default async function FAQPage() {
    const query = `*[_type == "faqPage"][0] {
        heroHeadline,
        heroSubtext,
        faqGroups[] {
            category,
            "questions": faqs[]->{question, answer}
        }
    }`;
    const data = await client.fetch(query) || {};

    return <FAQClient data={data} />;
}
