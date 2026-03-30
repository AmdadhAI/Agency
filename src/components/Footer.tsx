"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer({ globalSettings }: { globalSettings?: any }) {
    return (
        <footer className="w-full relative z-10 bg-[#0F0F13] border-t border-white/5 pt-28 pb-8 px-6 overflow-hidden mt-12">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-b from-[#7000FF]/5 via-[#00F0FF]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10 font-sans flex flex-col gap-20">

                {/* Section 1 — Restaurant Growth Network */}
                <section className="flex flex-col items-center text-center gap-12 relative w-full mb-8">
                    <div className="flex flex-col gap-4 max-w-2xl mx-auto z-20 relative">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mx-auto mb-2 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00F0FF] font-sans">Global Network</span>
                        </div>
                        <h2 className="font-sans font-black text-3xl md:text-5xl text-white tracking-tighter">
                            Hospitality Brands Powered by Growth Infrastructure
                        </h2>
                        <p className="text-[#9CA3AF] text-lg font-sans">
                            Restaurants using RestauReach systems capture thousands of reservations every week.
                        </p>
                    </div>

                    {/* Network Visualization */}
                    <div className="w-full max-w-5xl mx-auto relative h-[300px] md:h-[400px] flex items-center justify-center">
                        {/* Connecting Lines (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" preserveAspectRatio="none">
                            <path d="M 20% 30% L 50% 50% L 80% 20%" stroke="url(#cyan-glow)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                            <path d="M 15% 70% L 50% 50% L 85% 75%" stroke="url(#purple-glow)" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                            <path d="M 50% 10% L 50% 50% L 50% 90%" stroke="url(#cyan-glow)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                            <defs>
                                <linearGradient id="cyan-glow" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#00F0FF" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                                <linearGradient id="purple-glow" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#7000FF" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Center Node */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-2xl z-0"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-[#111116] border border-[#00F0FF]/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                            <svg className="text-[#00F0FF] w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-10 hover:z-30 transition-all duration-300 hover:scale-105 group cursor-default">
                            <div className="bg-[#111116] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#00F0FF]/50 transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                                    <span className="text-white text-sm font-bold whitespace-nowrap">Steakhouse NYC</span>
                                </div>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#00F0FF]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="absolute top-[25%] right-[20%] translate-x-1/2 -translate-y-1/2 z-10 hover:z-30 transition-all duration-300 hover:scale-105 group cursor-default">
                            <div className="bg-[#111116] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#7000FF]/50 transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#7000FF] shadow-[0_0_10px_rgba(111,0,249,0.8)]"></div>
                                    <span className="text-white text-sm font-bold whitespace-nowrap">Sushi Atelier Tokyo</span>
                                </div>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#7000FF]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-[25%] left-[15%] -translate-x-1/2 translate-y-1/2 z-10 hover:z-30 transition-all duration-300 hover:scale-105 group cursor-default">
                            <div className="bg-[#111116] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#4ADE80]/50 transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                                    <span className="text-white text-sm font-bold whitespace-nowrap">Firewood Grill Dubai</span>
                                </div>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#4ADE80]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-[20%] right-[15%] translate-x-1/2 translate-y-1/2 z-10 hover:z-30 transition-all duration-300 hover:scale-105 group cursor-default">
                            <div className="bg-[#111116] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#FF00FF]/50 transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF00FF] shadow-[0_0_10px_rgba(255,0,255,0.8)]"></div>
                                    <span className="text-white text-sm font-bold whitespace-nowrap">Coastal Kitchen Sydney</span>
                                </div>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#FF00FF]/20 to-transparent"></div>
                            </div>
                        </div>

                        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 translate-y-1/2 z-10 hover:z-30 transition-all duration-300 hover:scale-105 group cursor-default">
                            <div className="bg-[#111116] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#00F0FF]/50 transition-colors">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                                    <span className="text-white text-sm font-bold whitespace-nowrap">Trattoria Milano</span>
                                </div>
                                <div className="h-[2px] w-full bg-gradient-to-r from-[#00F0FF]/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-white/5 w-full -mx-6" />

                {/* Section 2 — Main Footer Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-20">

                    {/* Column 1: Brand Identity */}
                    <div className="lg:col-span-1 flex flex-col gap-6 relative">
                        <div className="absolute -left-10 top-0 w-32 h-32 bg-[#00F0FF]/10 blur-[50px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="relative w-8 h-8">
                                <Image 
                                    src="/logo-transparent.png" 
                                    alt="RestauReach Logo" 
                                    fill 
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="font-sans font-black text-2xl tracking-tighter text-white uppercase">{globalSettings?.companyName || "RestauReach"}</h2>
                        </div>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs pr-4">
                            Agentic growth infrastructure for modern hospitality brands.
                        </p>
                        <div className="font-mono text-[10px] tracking-[0.2em] text-[#00F0FF] uppercase mt-2 font-bold flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#00F0FF]"></span>
                            New York • London • Dubai
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-2">
                            <a href={(globalSettings?.socialLinks as any)?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#111116] border border-white/10 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href={(globalSettings?.socialLinks as any)?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#111116] border border-white/10 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href={(globalSettings?.socialLinks as any)?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#111116] border border-white/10 rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-[#00F0FF] hover:border-[#00F0FF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-1">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Revenue Engines */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-sans font-bold text-white text-xs uppercase tracking-[0.2em] border-l-2 border-[#00F0FF]/50 pl-3">Revenue Engines</h3>
                        <ul className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                            <li><Link className="inline-block relative hover:text-[#00F0FF] transition-colors after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#00F0FF] hover:after:w-full after:transition-all after:duration-300 pb-1" href="/services/website-infrastructure">Website Infrastructure</Link></li>
                            <li><Link className="inline-block relative hover:text-[#00F0FF] transition-colors after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#00F0FF] hover:after:w-full after:transition-all after:duration-300 pb-1" href="/services/local-search">Local Search Domination</Link></li>
                            <li><Link className="inline-block relative hover:text-[#00F0FF] transition-colors after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#00F0FF] hover:after:w-full after:transition-all after:duration-300 pb-1" href="/services/paid-acquisition">Paid Acquisition Systems</Link></li>
                            <li><Link className="inline-block relative hover:text-[#00F0FF] transition-colors after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-[#00F0FF] hover:after:w-full after:transition-all after:duration-300 pb-1" href="/services/ai-operations">AI Operations</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-sans font-bold text-white text-xs uppercase tracking-[0.2em] border-l-2 border-white/20 pl-3">Company</h3>
                        <ul className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                            <li><Link className="hover:text-white transition-colors" href="/about">About</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/projects">Case Studies</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/careers">Careers</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Resources */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-sans font-bold text-white text-xs uppercase tracking-[0.2em] border-l-2 border-white/20 pl-3">Resources</h3>
                        <ul className="flex flex-col gap-4 text-[#9CA3AF] text-sm">
                            <li><Link className="hover:text-white transition-colors" href="/insights">Insights</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/guide">Hospitality Growth Guide</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/playbook">Restaurant Marketing Playbook</Link></li>
                            <li><Link className="hover:text-white transition-colors" href="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Conversion Block */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#111116]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col gap-5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group hover:border-[#00F0FF]/30 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F0FF]/10 blur-[40px] pointer-events-none group-hover:bg-[#00F0FF]/25 transition-colors duration-500 -translate-y-1/2 translate-x-1/2 rounded-full"></div>

                            <h4 className="font-sans font-bold text-white text-lg leading-tight relative z-10">Get Your Growth Audit</h4>
                            <p className="text-[#9CA3AF] text-sm leading-relaxed relative z-10">
                                Discover how many reservations your restaurant is losing every month.
                            </p>
                            <Link href="/audit" className="bg-gradient-to-r from-[#00F0FF] to-[#7000FF] shadow-[0_0_20px_rgba(111,0,249,0.3)] text-white text-xs md:text-sm font-black py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] mt-2 relative z-10">
                                Request Free Audit
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 3 — Authority Strip */}
                <section className="py-12 border-y border-white/5 mt-8 flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#9CA3AF] hover:text-white transition-colors duration-300 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors shadow-lg">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                        </div>
                        <span className="font-sans font-bold text-sm tracking-wide">Google Reviews</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#00F0FF] transition-colors duration-300 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center group-hover:border-[#00F0FF]/30 transition-colors shadow-lg">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 7h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.1c.28-.5.98-1.1 1.5-1.1 1.38 0 2.5 1.12 2.5 2.5V17z" /></svg>
                        </div>
                        <span className="font-sans font-bold text-sm tracking-wide">Meta Ads Partner</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#7000FF] transition-colors duration-300 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center group-hover:border-[#7000FF]/30 transition-colors shadow-lg">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <span className="font-sans font-bold text-sm tracking-wide">Hospitality Growth Awards</span>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#9CA3AF] hover:text-[#4ADE80] transition-colors duration-300 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center group-hover:border-[#4ADE80]/30 transition-colors shadow-lg">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <span className="font-sans font-bold text-sm tracking-wide">Trusted by Restaurant Brands</span>
                    </a>
                </section>

                {/* Section 4 — Bottom Legal Bar */}
                <section className="pt-2 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left */}
                    <p className="text-gray-500 text-sm font-mono tracking-wide text-center md:text-left">
                        {globalSettings?.copyrightText || "© 2026 RestauReach AI. All rights reserved."}
                    </p>

                    {/* Right */}
                    <div className="flex gap-6 text-sm text-gray-500 justify-center md:justify-end">
                        <Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link>
                        <Link className="hover:text-white transition-colors" href="/terms">Terms of Service</Link>
                    </div>
                </section>
            </div>
        </footer>
    );
}
