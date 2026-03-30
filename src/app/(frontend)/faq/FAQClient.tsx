"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function FAQClient({ data }: { data: any }) {
    const [openItem, setOpenItem] = useState<string | null>("0-0");

    const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

    const fallbackFaqs = [
        {
            category: "Getting Started",
            questions: [
                {
                    q: "How fast will we see a return on investment?",
                    a: "Most partners see positive ROI within the first 45 days. Our infrastructure is built to capture 'low hanging fruit' like automated review recovery and database reactivation within the first 72 hours of going live.",
                },
                {
                    q: "What do I need to get started?",
                    a: "Just your restaurant's online presence details (website, Google Business Profile, social handles) and a 30-minute onboarding call. We handle everything else — setup, integrations, and launch.",
                },
                {
                    q: "How quickly can you launch?",
                    a: "Our standard onboarding takes 14 days from signed agreement to fully live infrastructure. Enterprise deployments with custom integrations may take up to 21 days.",
                },
            ],
        },
        {
            category: "Technology & Integrations",
            questions: [
                {
                    q: "Does this require our POS credentials?",
                    a: "We use official API integrations for major POS systems (Toast, Square, Clover, Aloha, etc.) to securely read data. We never require root passwords, and our systems are strictly read-only for analytics and trigger events.",
                },
                {
                    q: "Which platforms do you integrate with?",
                    a: "We integrate with Toast, Square, Clover, Aloha, OpenTable, Resy, SevenRooms, Google Business Profile, Meta Ads Manager, and all major review platforms. Custom integrations are available at the Enterprise tier.",
                },
                {
                    q: "Is my data secure?",
                    a: "All data is encrypted at rest and in transit. We are SOC 2 compliant and operate under strict data processing agreements. We never sell or share your customer data.",
                },
            ],
        },
        {
            category: "Pricing & Contracts",
            questions: [
                {
                    q: "Is there a long-term contract?",
                    a: "No hostage 12-month retainers. All plans are month-to-month and can be cancelled with 30 days' notice. We earn your business every single month through performance.",
                },
                {
                    q: "Is video production included in the plans?",
                    a: "Basic viral content strategy and templates are included. Full on-location cinematic production is available as an add-on or included in custom Enterprise tiers depending on your market.",
                },
                {
                    q: "Do you offer a free trial?",
                    a: "We offer a complimentary Growth Audit — a full analysis of your current digital infrastructure, identifying exact revenue leaks and growth opportunities. This is a genuine $2,500 value delivered at no cost.",
                },
            ],
        },
        {
            category: "Results & Guarantees",
            questions: [
                {
                    q: "What results can I realistically expect?",
                    a: "Our tracked results across partners include an average of 34% increase in direct bookings, 2.1x Google ranking improvement within 90 days, and $4.20 returned for every $1 spent on ads. Results vary based on market, starting baseline, and tier.",
                },
                {
                    q: "Do you work with any restaurant type?",
                    a: "We exclusively work with restaurants, bars, lounges, and hospitality groups. We do not work with dentists, plumbers, or any non-hospitality businesses. This focus is our unfair advantage.",
                },
                {
                    q: "What if I'm not satisfied?",
                    a: "If you don't see measurable improvement in your agreed KPIs within 60 days, we will refund your most recent month's retainer. Our track record speaks for itself — we've never had to invoke this.",
                },
            ],
        },
    ];

    const displayFaqs = data?.faqGroups?.length > 0 ? data.faqGroups.map((group: any) => ({
        category: group.category,
        questions: group.questions?.map((q: any) => ({
            q: q.question,
            a: q.answer
        })) || []
    })) : fallbackFaqs;

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] overflow-x-hidden">

            {/* Ambient glow */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#7000FF]/8 blur-[120px]" />
            </div>

            {/* ── Hero ── */}
            <section className="relative px-6 pt-36 pb-16 text-center max-w-4xl mx-auto z-10">
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-6"
                >
                    Knowledge Base
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.95] tracking-tighter font-black text-white mb-6 whitespace-pre-line"
                >
                    {data?.heroHeadline || (
                        <>Frequently Asked <span className="text-[#00F0FF] italic">Questions</span></>
                    )}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                >
                    {data?.heroSubtext || "Everything you need to know about RestauReach, our infrastructure, and how we generate results for modern hospitality brands."}
                </motion.p>
            </section>

            {/* ── FAQ Grid ── */}
            <section className="relative z-10 px-6 pb-32 max-w-5xl mx-auto">
                <div className="space-y-12">
                    {displayFaqs.map((section: any, si: number) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: si * 0.08, ease: "easeOut" }}
                        >
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#7000FF] mb-5 pl-1">
                                {section.category}
                            </h2>
                            <div className="space-y-3">
                                {section.questions.map((faq: any, qi: number) => {
                                    const key = `${si}-${qi}`;
                                    const isOpen = openItem === key;
                                    return (
                                        <div
                                            key={key}
                                            className={`bg-[#111116] border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-[#7000FF]/40 shadow-[0_0_20px_rgba(112,0,255,0.08)]" : "border-white/8 hover:border-white/15"}`}
                                        >
                                            <button
                                                onClick={() => toggle(key)}
                                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                                aria-expanded={isOpen}
                                            >
                                                <h3 className={`font-semibold text-base pr-8 transition-colors ${isOpen ? "text-white" : "text-[#E2E8F0] group-hover:text-white"}`}>
                                                    {faq.q}
                                                </h3>
                                                <span className={`material-icons-outlined text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#7000FF]" : ""}`}>
                                                    expand_more
                                                </span>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    >
                                                        <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 whitespace-pre-line">
                                                            {faq.a}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Still Have Questions CTA ── */}
            <section className="relative z-10 px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-3xl mx-auto bg-[#111116] border border-white/10 rounded-3xl p-10 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.06),transparent_60%)]" />
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center mx-auto mb-5">
                            <span className="material-icons-outlined text-[#00F0FF] text-2xl">chat</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-2">Still have questions?</h3>
                        <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                            Speak directly with a RestauReach strategist. We respond to every inquiry within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-[#7000FF] text-white font-black px-8 py-4 rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(112,0,255,0.3)]"
                            >
                                <span className="material-icons-outlined">mail</span>
                                Contact Us
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all"
                            >
                                <span className="material-icons-outlined">video_call</span>
                                Book a Call
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
