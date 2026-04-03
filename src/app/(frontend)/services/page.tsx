import { client } from "../../../../sanity/lib/client";
import ServicesClient from "./ServicesClient";

export const revalidate = 60;

export default async function ServicesPage() {
    const pageQuery = `*[_type == "servicesPage"][0] {
        heroHeadline,
        heroSubtext,
        testimonials[] {
            name,
            role,
            quote,
            metric,
            color
        }
    }`;
    const servicesQuery = `*[_type == "service"] | order(_createdAt asc) {
        title,
        shortDescription,
        features,
        "image1Url": image1.asset->url,
        "image2Url": image2.asset->url
    }`;

    const [pageData, servicesData] = await Promise.all([
        client.fetch(pageQuery).then(res => res || {}),
        client.fetch(servicesQuery).then(res => res || [])
    ]);

    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": servicesData.map((service: any) => ({
            "@type": "Service",
            "name": service.title,
            "description": service.shortDescription,
            "provider": {
                "@type": "Organization",
                "@id": "https://restaureach.com/#organization"
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServicesClient pageData={pageData} servicesData={servicesData} />
        </>
    );
}
