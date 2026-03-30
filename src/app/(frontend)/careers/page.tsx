"use client";
import React from "react";

export default function CareersPage() {
    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] font-sans flex flex-col items-center justify-center relative overflow-hidden pt-32">
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#00F0FF]/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Join the Revolution</h1>
                <p className="text-gray-400 mb-10 text-xl font-light">We are always looking for elite engineers, creatives, and growth strategists.</p>
                <div className="bg-[#111116] border border-white/10 p-12 rounded-3xl backdrop-blur-xl shadow-2xl">
                    <h2 className="text-3xl text-white font-bold mb-4">Open Positions</h2>
                    <p className="text-gray-500 italic">No roles are currently open. Check back soon for updates.</p>
                </div>
            </div>
        </div>
    );
}
