"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ─── Animation helpers ─────────────────────────────────────────────────────────

const FU = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const FL = (delay = 0) => ({
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

const FR = (delay = 0) => ({
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function ServicesClient({ pageData, servicesData }: { pageData: any, servicesData: any[] }) {

    const safeServicesData = (servicesData || []).map((s: any) => ({
        ...s,
        features: s.features || []
    }));

    const s1 = safeServicesData[0] || {
        title: "Facebook & Instagram Ad Management",
        shortDescription: "Deploying high-fidelity creative that converts casual scrollers into consistent diners at a positive ROAS.",
        features: ["Algorithmic A/B Testing", "Omni-Channel Retargeting", "High-Ticket Funnels", "POS Revenue Matching"],
        image1Url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    };

    const s2 = safeServicesData[1] || {
        title: "Web Design & Development",
        shortDescription: "Frictionless booking systems designed for the modern diner. We build digital front-doors that convert casual browsers into guaranteed reservations.",
        features: ["Mobile-First Menu UI", "POS Integration"],
        image1Url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    };

    const s3 = safeServicesData[2] || {
        title: "OmniSearch & AI Visibility",
        shortDescription: "Dominate Google Maps and AI answer engines. When someone asks GPT-4 for the 'best omakase near me,' we ensure your brand is the only answer.",
        features: ["Search Dominance", "AI Recommendation Engine"],
        image1Url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    };

    const s4 = safeServicesData[3] || {
        title: "Agentic AI Operations",
        shortDescription: "Automate reviews and guest retention with intelligent agents. Our AI agents don't just reply; they resolve guest issues and re-engage lost customers.",
        features: ["24/7 AI Concierge for Booking Inquiries", "Automated Review Management & Response", "Predictive Guest Loyalty Workflows"]
    };

    const s5 = safeServicesData[4] || {
        title: "Viral Content Production",
        shortDescription: "We capture the soul of your kitchen. High-fidelity TikTok and Reels production featuring aesthetic, professionally shot food b-roll that stops the scroll and fills the seats.",
        features: [],
        image1Url: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        image2Url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    };

    const extraServices = safeServicesData.slice(5);

    const fallbackTestimonials = [
        { name: "Marco Rossi", role: "Executive Chef, L'Anima", quote: "\"The AI infrastructure they deployed saved us 40 hours a week in manual admin. The ROI was visible in 14 days.\"", metric: "+45%", color: "#4ADE80" },
        { name: "Sarah Jenkins", role: "Owner, The Hearth", quote: "\"We went from invisible to #1 on Google Maps in Soho within two months. Our direct bookings are at an all-time high.\"", metric: "+112%", color: "#00F0FF" },
        { name: "Leo Zhang", role: "Marketing Dir, Silk Road", quote: "\"The content quality is cinema-grade. Our Reels are consistently hitting over 500k views without any ad spend.\"", metric: "+2.1M", color: "#7000FF" },
    ];
    const testimonials = pageData?.testimonials?.length > 0 ? pageData.testimonials : fallbackTestimonials;

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] overflow-x-clip">
            {/* Background blobs */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-40" style={{ background: "rgba(112,0,255,0.2)", filter: "blur(128px)", animation: "blob 7s infinite" }} />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30" style={{ background: "rgba(0,240,255,0.2)", filter: "blur(128px)", animation: "blob 7s infinite" }} />
            </div>

            <main className="relative z-10 pt-24 md:pt-40">

                {/* ── Hero ── */}
                <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 overflow-hidden">
                    <div className="text-center max-w-5xl mx-auto">
                        <motion.h1 {...FU(0)} className="text-[clamp(3rem,8vw,6rem)] font-black leading-[1.05] tracking-tighter mb-8 text-white whitespace-pre-line">
                            {pageData?.heroHeadline || (
                                <>Systems That Speak To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Dining Intent</span></>
                            )}
                        </motion.h1>
                        <motion.p {...FU(0.15)} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 whitespace-pre-line">
                            {pageData?.heroSubtext || "We don't sell hours. We deploy productized, AI-driven infrastructure designed to turn local search volume into guaranteed seated diners."}
                        </motion.p>
                        <motion.div {...FU(0.3)}>
                            <Link href="/audit" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F0FF]/10 to-transparent border border-[#00F0FF]/50 text-[#00F0FF] hover:bg-[#00F0FF]/20 px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:-translate-y-1">
                                Get Your Free Audit
                                <span className="material-icons-outlined text-[18px]">arrow_forward</span>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ── 01: Ads ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto mb-16 relative">
                    <div className="absolute inset-0 bg-[#7000FF]/10 blur-[120px] rounded-full z-0" />
                    <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                        <motion.div {...FL(0)}>
                            <span className="text-[#7000FF] font-mono text-sm tracking-widest uppercase mb-4 block">01. Service</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{s1.title}</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                {s1.shortDescription}
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {s1.features[0] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#7000FF] text-3xl">science</span>
                                        <h4 className="font-bold text-lg text-white">{s1.features[0]}</h4>
                                    </div>
                                )}
                                {s1.features[1] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#7000FF] text-3xl">all_inclusive</span>
                                        <h4 className="font-bold text-lg text-white">{s1.features[1]}</h4>
                                    </div>
                                )}
                                {s1.features[2] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#7000FF] text-3xl">filter_alt</span>
                                        <h4 className="font-bold text-lg text-white">{s1.features[2]}</h4>
                                    </div>
                                )}
                                {s1.features[3] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#7000FF] text-3xl">point_of_sale</span>
                                        <h4 className="font-bold text-lg text-white">{s1.features[3]}</h4>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                        <motion.div {...FR(0.15)} className="relative group flex justify-center items-center h-[500px]">
                            <div className="relative w-64 h-auto bg-[#111116] border border-white/10 rounded-2xl shadow-2xl overflow-hidden -rotate-6 z-10 pb-4">
                                <img src={s1.image1Url || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"} alt="Ad creative" className="w-full h-56 object-cover" />
                                <div className="px-4 py-3">
                                    <h5 className="text-white font-bold text-sm mb-1">Velvet Room Lounge</h5>
                                    <p className="text-gray-400 text-xs mb-3">Truffle pasta so good it's criminal. Book your table now. 🍝</p>
                                    <div className="w-full py-2 bg-[#7000FF] text-white text-xs font-bold text-center rounded-lg uppercase tracking-widest">Book Table</div>
                                </div>
                            </div>
                            <div className="absolute right-0 bottom-10 w-64 h-auto bg-[#0A0A0C] border border-[#7000FF]/50 rounded-xl shadow-[0_0_40px_rgba(112,0,255,0.3)] p-4 rotate-3 z-20">
                                <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-3">
                                    <span className="material-icons-outlined text-[#00F0FF] text-sm">trending_up</span>
                                    <span className="text-white text-xs font-bold uppercase tracking-wider">Meta Ads Manager</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between text-xs"><span className="text-gray-400">Campaign A</span><span className="text-[#4ADE80] font-mono font-bold">14.2x ROAS</span></div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#4ADE80]" style={{ width: "90%" }} /></div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between text-xs"><span className="text-gray-400">Campaign B</span><span className="text-[#4ADE80] font-mono font-bold">8.5x ROAS</span></div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#4ADE80]" style={{ width: "60%" }} /></div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex justify-between text-xs"><span className="text-gray-400">Retargeting</span><span className="text-[#00F0FF] font-mono font-bold">21.4x ROAS</span></div>
                                        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-[#00F0FF]" style={{ width: "95%" }} /></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── 02: Web Dev ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...FL(0)} className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-[#00F0FF]/20 blur-[100px] rounded-full" />
                            <div className="relative flex justify-center items-center h-[500px]">
                                <div className="absolute left-8 lg:left-0 w-64 bg-black border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                                    <img src={s2.image1Url || "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt="Service feature" className="w-full h-48 object-cover opacity-80" />
                                    <div className="p-6 bg-[#111116]">
                                        <div className="font-bold text-white text-lg mb-4">Select a Time</div>
                                        <div className="grid grid-cols-2 gap-3 mb-6">
                                            <div className="py-2 bg-white/10 rounded flex items-center justify-center text-sm text-white border border-white/5">7:00 PM</div>
                                            <div className="py-2 bg-white/10 rounded flex items-center justify-center text-sm text-white border border-white/5">7:30 PM</div>
                                            <div className="py-2 bg-[#00F0FF] text-black font-bold rounded flex items-center justify-center text-sm shadow-[0_0_15px_rgba(0,240,255,0.4)]">8:00 PM</div>
                                            <div className="py-2 bg-white/10 rounded flex items-center justify-center text-sm text-white border border-white/5">8:30 PM</div>
                                        </div>
                                        <div className="h-12 w-full bg-white text-black font-bold flex items-center justify-center rounded-xl text-sm">Confirm</div>
                                    </div>
                                </div>
                                <div className="absolute right-0 lg:-right-6 bottom-16 w-64 bg-white border border-gray-200 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-5 z-20 rotate-3">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 bg-[#FF6B00] rounded-md flex items-center justify-center text-white font-bold text-xs">S</div>
                                        <span className="text-black font-bold text-sm">System Sync</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-xs text-gray-800"><span>Guest</span><span className="font-bold">John Doe</span></div>
                                        <div className="flex justify-between text-xs text-gray-800"><span>Size</span><span className="font-bold text-lg">4</span></div>
                                        <div className="flex justify-between text-xs text-gray-800 border-t border-gray-100 pt-3"><span>Est. Rev</span><span className="font-bold text-green-600">$380.00</span></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...FR(0)} className="order-1 lg:order-2">
                            <span className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-4 block">02. Service</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{s2.title}</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                {s2.shortDescription}
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {s2.features[0] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#00F0FF] text-3xl">smartphone</span>
                                        <h4 className="font-bold text-lg text-white">{s2.features[0]}</h4>
                                    </div>
                                )}
                                {s2.features[1] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#00F0FF] text-3xl">sync_alt</span>
                                        <h4 className="font-bold text-lg text-white">{s2.features[1]}</h4>
                                    </div>
                                )}
                                {s2.features[2] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#00F0FF] text-3xl">bolt</span>
                                        <h4 className="font-bold text-lg text-white">{s2.features[2]}</h4>
                                    </div>
                                )}
                                {s2.features[3] && (
                                    <div className="space-y-3">
                                        <span className="material-icons-outlined text-[#00F0FF] text-3xl">dashboard</span>
                                        <h4 className="font-bold text-lg text-white">{s2.features[3]}</h4>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── 03: OmniSearch ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto relative">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...FL(0)}>
                            <span className="text-[#7000FF] font-mono text-sm tracking-widest uppercase mb-4 block">03. Service</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{s3.title}</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                {s3.shortDescription}
                            </p>
                            <div className="flex flex-col gap-4">
                                {s3.features[0] && (
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#7000FF]/50 transition-colors">
                                        <span className="material-icons-outlined text-[#7000FF]">search</span>
                                        <div>
                                            <h4 className="font-bold text-white">{s3.features[0]}</h4>
                                        </div>
                                    </div>
                                )}
                                {s3.features[1] && (
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#7000FF]/50 transition-colors">
                                        <span className="material-icons-outlined text-[#7000FF]">psychology</span>
                                        <div>
                                            <h4 className="font-bold text-white">{s3.features[1]}</h4>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                        <motion.div {...FR(0.15)} className="relative flex justify-center items-center h-[500px]">
                            <div className="absolute inset-0 bg-[#7000FF]/20 blur-[100px] rounded-full pointer-events-none" />
                            <div className="relative w-full max-w-sm lg:max-w-md bg-white rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] z-10 border border-gray-200">
                                <div className="bg-white px-4 py-4 flex items-center gap-4 border-b border-gray-100 shadow-sm">
                                    <span className="material-icons-outlined text-gray-600">arrow_back</span>
                                    <div className="bg-gray-100 px-4 py-2 rounded-full w-full text-sm text-gray-800 font-medium flex items-center gap-2">
                                        <span className="material-icons-outlined text-gray-400 text-sm">search</span>
                                        best options near me
                                    </div>
                                </div>
                                <div className="bg-white">
                                    <div className="flex items-start gap-4 p-5 border-l-4 border-[#7000FF] bg-gradient-to-r from-[#7000FF]/5 to-transparent relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-[#7000FF] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">Ranked #1</div>
                                        <img src={s3.image1Url || "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"} alt="Service Place" className="w-24 h-24 rounded-lg object-cover shadow-sm" />
                                        <div className="flex-1 mt-1">
                                            <h4 className="text-gray-900 font-bold text-lg leading-tight">Velvet Room</h4>
                                            <div className="flex items-center gap-1 mt-1">
                                                <span className="text-yellow-500 text-sm font-bold">4.9</span>
                                                <div className="flex text-yellow-500">
                                                    {[...Array(5)].map((_, i) => <span key={i} className="material-icons-outlined text-sm">star</span>)}
                                                </div>
                                                <span className="text-gray-500 text-xs ml-1">(1,204)</span>
                                            </div>
                                            <p className="text-gray-500 text-xs mt-2 italic border-t border-gray-100 pt-2">"Absolutely the best in the city!"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── 04: Agentic AI ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...FL(0)} className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-[#4ADE80]/10 blur-[80px] rounded-full" />
                            <div className="relative bg-[#111116] border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-[#4ADE80] rounded-full animate-pulse" />
                                        <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">AGENT_STATUS: ACTIVE</span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-[#050505] p-4 rounded-lg rounded-tl-none border border-white/5 max-w-[80%]">
                                        <p className="text-sm text-[#E2E8F0]">"Hi! I'd like to book a table for 6 tonight at 8 PM. Do you have any vegetarian options?"</p>
                                    </div>
                                    <div className="bg-[#4ADE80]/10 p-4 rounded-lg rounded-tr-none border border-[#4ADE80]/20 max-w-[80%] ml-auto text-right">
                                        <p className="text-sm text-[#4ADE80]">"We have a booth available! Our menu has 12 vegetarian plates. Shall I confirm the reservation?"</p>
                                    </div>
                                    <div className="h-px bg-white/10 w-full" />
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>Conversion Rate: 82%</span>
                                        <span>Resolution Time: 0.4s</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...FR(0)} className="order-1 lg:order-2">
                            <span className="text-[#4ADE80] font-mono text-sm tracking-widest uppercase mb-4 block">04. Service</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{s4.title}</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                {s4.shortDescription}
                            </p>
                            <ul className="space-y-4">
                                {s4.features.map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-3 text-[#E2E8F0]">
                                        <span className="material-icons-outlined text-[#4ADE80]">check_circle</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* ── 05: Viral Content ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...FL(0)}>
                            <span className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-4 block">05. Service</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{s5.title}</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                {s5.shortDescription}
                            </p>
                            <div className="flex gap-12">
                                {s5.features[0] && (
                                    <div>
                                        <div className="text-3xl lg:text-4xl font-black mb-2 text-white">{s5.features[0]}</div>
                                    </div>
                                )}
                                {s5.features[1] && (
                                    <div>
                                        <div className="text-3xl lg:text-4xl font-black mb-2 text-white">{s5.features[1]}</div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                        <motion.div {...FR(0.15)} className="flex justify-center gap-4 relative">
                            <div className="absolute inset-0 bg-[#00F0FF]/10 blur-[90px] rounded-full pointer-events-none z-0" />
                            <div className="relative w-32 md:w-40 h-72 md:h-80 bg-black rounded-[2rem] border-[4px] border-gray-800 shadow-2xl overflow-hidden mt-6 rotate-[-5deg] opacity-70">
                                <img src={s5.image1Url || "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt="Service creative" className="w-full h-full object-cover opacity-60" />
                            </div>
                            <div className="relative w-40 md:w-48 h-80 md:h-96 bg-black rounded-[2.5rem] border-[4px] border-gray-600 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 ring-2 ring-[#00F0FF]/30">
                                <img src={s5.image2Url || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"} alt="Service creative main" className="w-full h-full object-cover" />
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Extra Dynamic Services  ── */}
                {extraServices.map((es: any, index: number) => {
                    const idx = index + 6;
                    const isEven = idx % 2 === 0;
                    return (
                        <section key={idx} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <motion.div {...FL(0)} className={isEven ? "order-2 lg:order-1" : ""}>
                                    <span className="text-[#00F0FF] font-mono text-sm tracking-widest uppercase mb-4 block">0{idx}. Service</span>
                                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">{es.title}</h2>
                                    <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                        {es.shortDescription}
                                    </p>
                                    <ul className="space-y-4">
                                        {es.features?.map((item: string, i: number) => (
                                            <li key={i} className="flex items-center gap-3 text-[#E2E8F0]">
                                                <span className="material-icons-outlined text-[#00F0FF]">check_circle</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div {...FR(0.15)} className={`relative group flex justify-center items-center h-[500px] ${isEven ? "order-1 lg:order-2" : ""}`}>
                                    <div className="relative w-full max-w-sm h-72 md:h-96 bg-[#111116] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10">
                                        {es.image1Url ? (
                                            <img src={es.image1Url} alt={es.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-[#1A1A22] flex items-center justify-center text-gray-500">
                                                <span className="material-icons-outlined text-5xl">image</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    );
                })}

                {/* ── Disruption Statement ── */}
                <section className="py-32 my-12 bg-black flex items-center justify-center text-center px-6">
                    <motion.h2 {...FU(0)} className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-none text-gray-800">
                        We Don't Work With <br />
                        <span className="text-white">Dentists or Plumbers.</span>
                    </motion.h2>
                </section>

                {/* ── Proof ── */}
                <section className="py-24 px-6 max-w-7xl mx-auto">
                    <motion.h3 {...FU(0)} className="text-3xl font-black mb-16 text-center text-white tracking-tight">Engineered for Results</motion.h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t: any, i: number) => (
                            <motion.div key={i} {...FU(i * 0.1)} className="bg-[#111116] border border-white/10 p-8 rounded-2xl relative overflow-hidden backdrop-blur-xl" style={{ borderColor: `${t.color || '#4ADE80'}20` }}>
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="font-bold" style={{ color: t.color || '#4ADE80' }}>{t.metric}</span>
                                </div>
                                <p className="text-[#E2E8F0] italic mb-8 leading-relaxed whitespace-pre-line">{t.quote}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-800" />
                                    <div>
                                        <h5 className="font-bold text-white">{t.name}</h5>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Audit CTA ── */}
                <section className="py-32 px-6">
                    <div className="max-w-4xl mx-auto bg-[#111116] border border-white/10 rounded-[2rem] p-12 relative overflow-hidden backdrop-blur-xl text-center shadow-2xl">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#7000FF]/20 blur-[100px] rounded-full" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00F0FF]/10 blur-[100px] rounded-full" />
                        <div className="relative z-10">
                            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-tight mb-4 text-white leading-tight">
                                Enhance Your Brand Potential. <br /><span className="text-[#7000FF]">At No Cost!</span>
                            </h2>
                            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Request a free infrastructure audit. We'll show you exactly where your digital leaks are and how to plug them with AI.</p>
                            <form className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); window.location.href = "/contact"; }}>
                                <input required className="bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:border-[#7000FF] outline-none transition-all text-white placeholder:text-gray-600" placeholder="Business Name" type="text" />
                                <input required className="bg-[#050505] border border-white/10 rounded-xl px-4 py-4 focus:border-[#7000FF] outline-none transition-all text-white placeholder:text-gray-600" placeholder="Work Email" type="email" />
                                <button type="submit" className="sm:col-span-2 bg-[#7000FF] hover:bg-[#7000FF]/80 text-white font-black py-5 rounded-xl shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all uppercase tracking-widest text-sm mt-2">
                                    Request System Audit
                                </button>
                            </form>
                            <p className="text-xs text-gray-500 mt-6 tracking-widest uppercase">Limited to 3 new infrastructure deployments per month.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
