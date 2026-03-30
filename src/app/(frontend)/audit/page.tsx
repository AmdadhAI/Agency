"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";

// ─── Cal Embed Component ───────────────────────────────────────────────────────

function CalEmbed({ name, email, notes }: { name: string, email: string, notes: string }) {
    return (
        <div className="w-full h-[600px] overflow-y-auto custom-scrollbar flex items-center justify-center">
            <Cal
                calLink="amdad/free-growth-audit"
                config={{
                    theme: "dark",
                    layout: "month_view",
                    name: name,
                    email: email,
                    notes: notes,
                    hideEventTypeDetails: "true"
                }}
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
            />
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AuditPage() {
    const [step, setStep] = useState<"form" | "calendly">("form");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", details: "" });

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 1000));
        setLoading(false);
        setStep("calendly");
    };

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] font-sans flex flex-col items-center py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#7000FF]/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 size-96 bg-[#00F0FF]/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10 max-w-3xl w-full mx-auto px-6 text-center mt-12">
                <div className="inline-block border border-[#00F0FF]/30 bg-[#00F0FF]/10 text-[#00F0FF] px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                    Get Your Free Audit
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Uncover Hidden Revenue</h1>
                <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
                    Tell us exactly what's holding you back. We'll analyze your current setup and show you exactly how to fix it—100% free.
                </p>

                <div className="relative min-h-[600px] w-full bg-[#111116] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        {step === "form" ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="p-8 md:p-12 text-left flex flex-col gap-6"
                                onSubmit={handleFormSubmit}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[#E2E8F0] text-sm font-bold mb-2 uppercase tracking-wide">First Name</label>
                                        <input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F0FF] outline-none transition-all" type="text" placeholder="John" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required />
                                    </div>
                                    <div>
                                        <label className="block text-[#E2E8F0] text-sm font-bold mb-2 uppercase tracking-wide">Last Name</label>
                                        <input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F0FF] outline-none transition-all" type="text" placeholder="Doe" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[#E2E8F0] text-sm font-bold mb-2 uppercase tracking-wide">Restaurant / Concept Name</label>
                                    <input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F0FF] outline-none transition-all" type="text" placeholder="The Golden Skillet" required />
                                </div>

                                <div>
                                    <label className="block text-[#E2E8F0] text-sm font-bold mb-2 uppercase tracking-wide">Work Email</label>
                                    <input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F0FF] outline-none transition-all" type="email" placeholder="john@restaurant.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                                </div>

                                <div>
                                    <label className="block text-[#E2E8F0] text-sm font-bold mb-2 uppercase tracking-wide">Website URL (if applicable)</label>
                                    <input className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F0FF] outline-none transition-all" type="url" placeholder="https://www..." />
                                </div>

                                <div>
                                    <label className="block text-[#E2E8F0] text-sm font-bold mb-2 uppercase tracking-wide">
                                        What specific areas do you want audited?<span className="text-[#00F0FF] ml-1">*</span>
                                    </label>
                                    <p className="text-xs text-gray-500 mb-3">e.g. Ad spend ROI, Local SEO rankings, Website conversions, etc.</p>
                                    <textarea rows={4} className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F0FF] outline-none transition-all placeholder:text-gray-600" placeholder="Please describe your challenges in detail..." value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} required></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-[#7000FF] to-[#00F0FF] text-white font-bold py-4 rounded-xl mt-4 hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(112,0,255,0.4)] text-lg uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:scale-100"
                                >
                                    {loading ? (
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Request Free Audit
                                            <span className="material-icons-outlined text-xl">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-xs text-gray-500 uppercase tracking-widest mt-2">100% Free. No Commitment.</p>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="calendly"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex flex-col bg-[#111116] rounded-3xl z-20 overflow-hidden"
                            >
                                <div className="w-full flex justify-between items-center p-4 border-b border-white/5 bg-[#111116] z-30">
                                    <div className="flex items-center gap-2">
                                        <span className="material-icons-outlined text-[#4ADE80] text-lg">check_circle</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#E2E8F0]">Audit Request Saved</span>
                                    </div>
                                    <button type="button" onClick={() => setStep("form")} className="text-xs text-gray-500 hover:text-white underline">Edit Details</button>
                                </div>
                                <div className="w-full h-auto bg-[#0F0F13] relative">
                                    <CalEmbed name={`${form.firstName} ${form.lastName}`} email={form.email} notes={form.details} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
