import { client } from "../../../../sanity/lib/client";
import PricingClient from "./PricingClient";

export const revalidate = 60; // revalidate every 60 seconds

export default async function PricingPage() {
    const pricingQuery = `*[_type == "pricingPage"][0] {
        heroHeadline,
        heroSubtext,
        tiers,
        "faqs": faqs[]->{question, answer}
    }`;
    const pricingData = await client.fetch(pricingQuery) || {};

    return (
        <PricingClient data={pricingData} />
    );
}
