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

    const allQuestions = data.faqGroups?.flatMap((group: any) => group.questions) || [];
    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allQuestions.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer
            }
        }))
    };

    return (
        <>
            {allQuestions.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <FAQClient data={data} />
        </>
    );
}
