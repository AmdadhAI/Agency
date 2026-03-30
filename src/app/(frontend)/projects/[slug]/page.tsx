import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "../../../../../sanity/lib/client";
import { urlForImage } from "../../../../../sanity/lib/image";
import ScrollTextReveal from "@/components/ScrollTextReveal";

// Sanity query to get a project by its slug
const query = `
  *[_type == "project" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    subtitle,
    heroMediaType,
    "heroVideoUrl": heroVideo.asset->url,
    heroImage,
    projectDetails,
    image1,
    problemText,
    problemCards,
    image2,
    solutionText,
    solutionCards,
    image3,
    image4,
    processText,
    processCards,
    workflowText,
    workflowCards,
    resultsText,
    resultsList,
    customSections
  }
`;

export default async function ProjectDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    console.log("PROJECT PAGE DEBUG: requested slug:", resolvedParams.slug);
    const project = await client.fetch(query, { slug: resolvedParams.slug });
    console.log("PROJECT PAGE DEBUG: found project?", !!project);

    if (!project) {
        return notFound();
    }

    // Fetch related projects (excluding current, limited to 3)
    const relatedProjectsQuery = `*[_type == "project" && slug.current != $slug] | order(_createdAt desc) [0...3] {
        title,
        "slug": slug.current,
        "heroImage": heroImage.asset->url,
        cardLabel
    }`;
    const relatedProjects = await client.fetch(relatedProjectsQuery, { slug: resolvedParams.slug }) || [];

    // Safely get image URLs using the localized sanity hook, fallback to dummy images if not present
    const heroImageUrl = project.heroImage ? urlForImage(project.heroImage).url() : "https://lh3.googleusercontent.com/aida-public/AB6AXuBoB0-Y3a2diBCrR1jybjitxkEMz-bH9AS32DRUUHpLtVTNc_xFb82Wz8gAycdzCk8VCB9oX6yxLwBTCjHOG_u6X4_CusfT78tA3K78AJQSAJCvkL6wr215RKsKI6VputgQd7Na_XlzxhvhNyLxL0jYMB3dPm7p8b9UQvTdtP3tEUaWImULW8J4GcTBmdi7Cp782_IQ09AGE2ukqqQm4yb2t83GN9d7VyIWQfkte4blp9HbqzYHbHKFUDiSPDF8Uvmown7qDbMU6A";
    const heroImageAlt = project.heroImage?.alt || project.title || "Project hero image";

    const image1Url = project.image1 ? urlForImage(project.image1).url() : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
    const image1Alt = project.image1?.alt || "Project detail view 1";

    const image2Url = project.image2 ? urlForImage(project.image2).url() : "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop";
    const image2Alt = project.image2?.alt || "Problem visualization";

    const image3Url = project.image3 ? urlForImage(project.image3).url() : "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop";
    const image3Alt = project.image3?.alt || "Solution visualization";

    const image4Url = project.image4 ? urlForImage(project.image4).url() : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";
    const image4Alt = project.image4?.alt || "Process and workflow visualization";

    // Helper functions for cards
    const problemCards = project.problemCards || [];
    const solutionCards = project.solutionCards || [];

    return (
        <main className="flex-1 flex flex-col items-center w-full bg-[#0F0F13] text-white">
            {/* Hero Section */}
            <section className="w-full max-w-[1200px] px-6 py-20 md:py-32 flex flex-col items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00F0FF]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
                <div className="z-10 text-center flex flex-col items-center gap-6">
                    {project.subtitle && (
                        <span className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase bg-[#00F0FF]/10 px-4 py-1 rounded-full border border-[#00F0FF]/20">
                            {project.subtitle}
                        </span>
                    )}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter text-white font-sans text-center">
                        {project.title}
                    </h1>
                </div>

                <div className="mt-16 w-full max-w-4xl relative z-10 aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-[#00F0FF]/20 border border-white/10 flex items-center justify-center bg-gradient-to-br from-[#111116] to-[#0F0F13]">
                    {project.heroMediaType === 'video' && project.heroVideoUrl ? (
                        <video
                            src={project.heroVideoUrl}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                        />
                    ) : (
                        <Image
                            alt={heroImageAlt}
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                            src={heroImageUrl}
                            fill
                            unoptimized
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-transparent"></div>
                </div>
            </section>

            {/* Project Details */}
            {project.projectDetails && (
                <section className="w-full max-w-[1000px] px-6 py-20 text-center z-10 relative mt-12 mb-12 mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 font-sans tracking-tight">
                        <span className="italic font-medium">Project</span> Details
                    </h2>
                    <ScrollTextReveal className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] text-white">
                        {project.projectDetails}
                    </ScrollTextReveal>
                </section>
            )}

            {/* Image 1: Full width short */}
            <section className="w-full max-w-[1920px] px-6 mx-auto mb-24 z-10 relative">
                <div className="w-full h-[500px] md:h-[700px] relative rounded-[2rem] overflow-hidden">
                    <Image
                        src={image1Url}
                        alt={image1Alt}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </section>

            {/* Problem */}
            {(project.problemText || problemCards.length > 0) && (
                <section className="w-full max-w-[1200px] px-6 py-24 mb-12 z-10 relative mx-auto">
                    {project.problemText && (
                        <div className="max-w-[1000px] mx-auto text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-white mb-10 font-sans tracking-tight">
                                Problem
                            </h2>
                            <ScrollTextReveal className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] text-white">
                                {project.problemText}
                            </ScrollTextReveal>
                        </div>
                    )}

                    {problemCards.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[1200px] mx-auto text-left">
                            {problemCards.map((card: any, index: number) => (
                                <div key={index} className="bg-[#1A1114] border border-[#FF4F64]/20 rounded-3xl p-8 flex flex-col items-start shadow-xl shadow-black/20 hover:border-[#FF4F64]/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-6 h-6 rounded-full bg-[#FF4F64] text-white flex items-center justify-center font-serif italic text-sm font-bold">i</div>
                                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-lg text-left">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* Image 2: Contained standard */}
            <section className="w-full max-w-[1200px] px-6 mx-auto mb-24 z-10 relative">
                <div className="w-full aspect-[4/3] md:aspect-video relative rounded-[2rem] overflow-hidden">
                    <Image
                        src={image2Url}
                        alt={image2Alt}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </section>

            {/* Solution */}
            {(project.solutionText || solutionCards.length > 0) && (
                <section className="w-full max-w-[1200px] px-6 py-24 mb-12 z-10 relative mx-auto">
                    {project.solutionText && (
                        <div className="max-w-[1000px] mx-auto text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-white mb-10 font-sans tracking-tight">
                                Solution
                            </h2>
                            <ScrollTextReveal className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] text-white">
                                {project.solutionText}
                            </ScrollTextReveal>
                        </div>
                    )}

                    {solutionCards.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[1200px] mx-auto text-left">
                            {solutionCards.map((card: any, index: number) => (
                                <div key={index} className="bg-[#111A13] border border-[#22C55E]/20 rounded-3xl p-8 flex flex-col items-start shadow-xl shadow-black/20 hover:border-[#22C55E]/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center">
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* Image 3: Full width (720x1920 ratio) */}
            <section className="w-full max-w-[1920px] px-6 mx-auto mb-24 z-10 relative">
                <div className="w-full h-[500px] md:h-[720px] relative rounded-[2rem] overflow-hidden">
                    <Image
                        src={image3Url}
                        alt={image3Alt}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </section>

            {/* Work Process */}
            {(project.processText || (project.processCards && project.processCards.length > 0)) && (
                <section className="w-full max-w-[1200px] px-6 py-24 mb-12 z-10 relative mx-auto border-t border-white/10">
                    {project.processText && (
                        <div className="max-w-[1000px] mx-auto text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-[#a970ff] mb-10 font-sans tracking-tight">
                                Work Process
                            </h2>
                            <ScrollTextReveal className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] text-white">
                                {project.processText}
                            </ScrollTextReveal>
                        </div>
                    )}

                    {project.processCards && project.processCards.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[1200px] mx-auto text-left">
                            {project.processCards.map((card: any, index: number) => (
                                <div key={index} className="bg-[#111116] border border-white/10 rounded-3xl p-8 flex flex-col items-start shadow-xl shadow-black/20 relative overflow-hidden group hover:border-[#a970ff] transition-colors">
                                    <div className="absolute -top-10 -right-10 text-[8rem] font-black italic text-white/5 group-hover:text-[#a970ff]/10 transition-colors pointer-events-none">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">{card.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base relative z-10">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* Workflow Scenario */}
            {(project.workflowText || (project.workflowCards && project.workflowCards.length > 0)) && (
                <section className="w-full max-w-[1200px] px-6 py-24 mb-12 z-10 relative mx-auto border-t border-white/10">
                    {project.workflowText && (
                        <div className="max-w-[1000px] mx-auto text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-[#00F0FF] mb-10 font-sans tracking-tight">
                                Workflow Scenario
                            </h2>
                            <ScrollTextReveal className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] text-white">
                                {project.workflowText}
                            </ScrollTextReveal>
                        </div>
                    )}

                    {project.workflowCards && project.workflowCards.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[1200px] mx-auto text-left">
                            {project.workflowCards.map((card: any, index: number) => (
                                <div key={index} className="bg-[#111116] border border-white/10 rounded-3xl p-8 flex flex-col items-start shadow-xl shadow-black/20 hover:border-[#00F0FF]/30 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-6 h-6 rounded-full bg-[#00F0FF] flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-white">{card.title}</h4>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-lg">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* Image 4: Full width (700x1920 ratio) */}
            <section className="w-full max-w-[1920px] px-6 mx-auto mb-24 z-10 relative">
                <div className="w-full h-[500px] md:h-[700px] relative rounded-[2rem] overflow-hidden">
                    <Image
                        src={image4Url}
                        alt={image4Alt}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </section>

            {/* Results & Impact */}
            {(project.resultsText || (project.resultsList && project.resultsList.length > 0)) && (
                <section className="w-full max-w-[1200px] px-6 py-24 mb-12 z-10 relative mx-auto border-t border-white/10">
                    {project.resultsText && (
                        <div className="max-w-[1000px] mx-auto text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic text-[#4ADE80] mb-10 font-sans tracking-tight">
                                Results & Impact
                            </h2>
                            <ScrollTextReveal className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.6] text-white">
                                {project.resultsText}
                            </ScrollTextReveal>
                        </div>
                    )}

                    {project.resultsList && project.resultsList.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-[1200px] mx-auto text-left">
                            {project.resultsList.map((card: any, index: number) => (
                                <div key={index} className="bg-[#111A13] border border-[#4ADE80]/20 rounded-3xl p-8 flex flex-col items-start shadow-xl shadow-black/20 hover:border-[#4ADE80]/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-6 h-6 rounded-full bg-[#4ADE80] flex items-center justify-center shrink-0">
                                            <svg className="w-3.5 h-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                        </div>
                                        <h4 className="text-xl font-bold text-white">{card.title}</h4>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed text-lg">{card.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            )}

            {/* Custom Flex Sections */}
            {project.customSections && project.customSections.length > 0 && (
                <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col gap-16 mb-12">
                    {project.customSections.map((section: any, idx: number) => (
                        <section key={idx} className="w-full z-10 relative border-t border-white/10 pt-24">
                            {section.sectionTitle && (
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black italic text-[#FF0055] mb-8 font-sans tracking-tight">
                                    {section.sectionTitle}
                                </h3>
                            )}

                            {section.sectionText && (
                                <p className="text-xl md:text-2xl text-[#E2E8F0] leading-relaxed max-w-4xl mb-12">
                                    {section.sectionText}
                                </p>
                            )}

                            {section.sectionCards && section.sectionCards.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {section.sectionCards.map((card: any, cardIdx: number) => (
                                        <div key={cardIdx} className="bg-[#111116] border border-white/10 rounded-2xl p-8 hover:border-[#FF0055]/50 transition-colors shadow-2xl">
                                            <h4 className="text-xl font-bold text-white mb-4 line-clamp-2">{card.title}</h4>
                                            <p className="text-gray-400 leading-relaxed text-sm">{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            )}

            {/* Typographic Banner */}
            <section className="w-full overflow-hidden py-10 my-10 border-y border-white/5 bg-[#111116]/50">
                <div className="flex whitespace-nowrap justify-center">
                    <h2
                        className="text-[12vw] font-black leading-none tracking-tighter text-transparent font-sans uppercase"
                        style={{ WebkitTextStroke: "2px #4ADE80", opacity: 0.8 }}
                    >
                        {project.title} {project.title} {project.title}
                    </h2>
                </div>
            </section>

            {/* Related Projects */}
            {relatedProjects && relatedProjects.length > 0 && (
                <section className="w-full max-w-[1200px] px-6 py-24 mx-auto z-10 relative">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-black text-white font-sans tracking-tight">
                                Explore <span className="italic text-[#00F0FF]">More</span>
                            </h2>
                            <p className="text-gray-400 mt-4 text-lg">
                                Discover how we've helped other brands dominate their market and scale their operations.
                            </p>
                        </div>
                        <Link href="/projects" className="shrink-0 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-bold transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
                            View All Projects
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedProjects.map((rp: any, index: number) => {
                            const fallbackImage = "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop";
                            return (
                                <Link href={`/projects/${rp.slug}`} key={index} className="group relative rounded-3xl overflow-hidden bg-[#111116] border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-[#00F0FF]/10 transition-all aspect-[4/5] flex flex-col justify-end p-8">
                                    <div className="absolute inset-0 z-0 bg-[#0F0F13]">
                                        <Image
                                            src={rp.heroImage || fallbackImage}
                                            alt={rp.title || "Related Project"}
                                            fill
                                            className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-[#0F0F13]/80 to-transparent"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-start gap-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                        {rp.cardLabel && (
                                            <span className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest backdrop-blur-md bg-black/20">
                                                {rp.cardLabel}
                                            </span>
                                        )}
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">{rp.title}</h3>
                                        <div className="flex items-center gap-2 text-[#00F0FF] text-sm uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Read Case Study</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="w-full max-w-[1200px] px-6 py-24">
                <div className="bg-[#111116] rounded-[3rem] p-10 md:p-16 border border-white/5 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-[#00F0FF]/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="flex-1 z-10">
                        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight font-sans">
                            Ready to Start<br />
                            your project?
                        </h2>
                        <p className="text-gray-400 mt-6 text-lg max-w-md">
                            Let's build something extraordinary together. Reach out to discuss
                            your next digital venture.
                        </p>
                    </div>

                    <div className="w-full max-w-md z-10 bg-[#0F0F13] rounded-2xl p-8 border border-white/10 shadow-2xl">
                        <form className="flex flex-col gap-4">
                            <input
                                className="bg-[#111116] border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] outline-none"
                                placeholder="Your Name"
                                type="text"
                            />
                            <input
                                className="bg-[#111116] border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] outline-none"
                                placeholder="Your Email"
                                type="email"
                            />
                            <textarea
                                className="bg-[#111116] border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF] outline-none resize-none"
                                placeholder="Tell us about your project"
                                rows={3}
                            ></textarea>
                            <Link href="/contact" className="mt-2 w-full bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-black font-black py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                                Book a Call
                            </Link>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

