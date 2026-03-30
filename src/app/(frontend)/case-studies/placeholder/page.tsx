"use client";
import React from "react";
import Link from "next/link";

export default function CaseStudyPlaceholder() {
    return (
        <div className="bg-[#0F0F13] min-h-screen flex flex-col items-center justify-center text-white p-6 relative">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7000FF]/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl">
                <div className="size-20 bg-[#111116] border border-white/10 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl">
                    <span className="material-icons-outlined text-[#00F0FF] text-3xl">analytics</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Full Breakdown Compiling</h1>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                    We are currently structuring the granular data, ROI charts, and specific system architecture for this case study. Check back soon for the full analytical breakdown.
                </p>
                <Link href="/case-studies" className="inline-flex px-8 py-4 bg-[#111116] border border-white/10 rounded-xl font-bold hover:scale-105 transition-transform hover:bg-[#7000FF] hover:border-transparent group">
                    <span className="material-icons-outlined mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back to Case Studies
                </Link>
            </div>
        </div>
    );
}
