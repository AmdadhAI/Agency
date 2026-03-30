"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cal from "@calcom/embed-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
    fullName: string;
    workEmail: string;
    whatsapp: string;
    websiteUrl: string;
    budget: string;
    projectDetails: string;
}

const BUDGET_OPTIONS = [
    { value: "5k-10k", label: "$5k - $10k" },
    { value: "10k-25k", label: "$10k - $25k" },
    { value: "25k-50k", label: "$25k - $50k" },
    { value: "50k-plus", label: "$50k+" },
];

const FAQS = [
    { question: "How do you qualify growth partners?" },
    { question: "What is the typical onboarding timeline?" },
    { question: "Do you work with global franchises?" },
    { question: "What reporting tools do you use?" },
];

// ─── Input components ────────────────────────────────────────────────────────

function GlassInput({
    label, type = "text", placeholder, value, onChange, required = false,
}: {
    label: string; type?: string; placeholder: string; value: string;
    onChange: (v: string) => void; required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                {label}{required && <span className="text-[#00F0FF] ml-1">*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:border-[#00F0FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/20 transition-all duration-300 backdrop-blur-sm shadow-inner"
            />
        </div>
    );
}

// ─── Cal Embed Component ───────────────────────────────────────────────────────

function CalEmbed({ name, email, notes }: { name: string, email: string, notes: string }) {
    return (
        <div className="w-full h-[600px] overflow-y-auto custom-scrollbar flex items-center justify-center">
            <Cal
                calLink="amdad/book-a-call"
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

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactClient({ data }: { data: any }) {
    const [form, setForm] = useState<FormData>({
        fullName: "", workEmail: "", whatsapp: "", websiteUrl: "", budget: "", projectDetails: "",
    });
    const [step, setStep] = useState<"form" | "calendly">("form");
    const [loading, setLoading] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Video Logic and Embed Detection
    const rawVideoSource = data?.videoType === 'file' 
        ? data?.videoFileUrl 
        : (data?.videoUrl || "https://res.cloudinary.com/dnb6pypqh/video/upload/v1711311025/restaureach/Founder_Video_Fallback_mvszjz.mp4");

    const isExternalEmbed = (url: string) => {
        if (!url) return false;
        return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
    };

    const getEmbedUrl = (url: string) => {
        if (!url) return "";
        let embedUrl = url;
        if (url.includes('youtube.com/watch?v=')) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`;
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`;
        } else if (url.includes('vimeo.com/')) {
            const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
            embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&loop=1&background=1`;
        }
        return embedUrl;
    };

    const videoSource = rawVideoSource;
    const isEmbed = isExternalEmbed(videoSource);
    const embedUrl = isEmbed ? getEmbedUrl(videoSource) : "";

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tier = params.get("tier");
        if (tier) {
            const formattedTier = tier.charAt(0).toUpperCase() + tier.slice(1);
            let message = "";
            if (tier === "enterprise") {
                message = "Hi, I am interested in a Custom Quote for the Enterprise plan.\n\n";
            } else {
                message = `Hi, I am interested in the ${formattedTier} plan.\n\n`;
            }

            setForm(prev => ({
                ...prev,
                projectDetails: message
            }));
        }
    }, []);

    const update = (key: keyof FormData) => (value: string) => setForm(prev => ({ ...prev, [key]: value }));

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate async submit then switch to calendly seamlessly
        await new Promise(r => setTimeout(r, 1200));
        setLoading(false);
        setStep("calendly");
    };


    return (
        <div className="bg-[#0F0F13] min-h-screen text-slate-100 font-sans selection:bg-[#7000FF]/30 pt-32 pb-20 overflow-x-hidden">

            {/* ── Hero Section ── */}
            <section className="relative px-6 text-center mb-20">
                <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-30">
                    <div className="w-[600px] h-[600px] rounded-full border border-primary/20 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(112,0,255,0.15)_0%,transparent_50%)]"></div>
                </div>
                <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.1] tracking-tighter font-black text-white mb-6 max-w-4xl mx-auto">
                    {data?.heroHeadline || (
                        <>Have A Question Or <span className="italic text-[#00F0FF]">Just Want To Chat?</span></>
                    )}
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                    {data?.heroSubtext || "High-fidelity growth agency for hospitality leaders seeking global scale."}
                </p>
            </section>

            {/* ── Main Content Card (Form -> Calendly Flow) ── */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="bg-[#111116]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden p-8 lg:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Left Column */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-black mb-8">
                                    {data?.videoHeadline || "Tell Us About Your Amazing Project Here"}
                                </h2>
                                <ul className="space-y-6 mb-12">
                                    {["Response within 24 hours", "Happy to sign an NDA", "Your data stays private"].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4">
                                            <span className="material-icons-outlined text-[#00F0FF] font-bold">check_circle</span>
                                            <span className="text-lg text-[#E2E8F0]">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Video Message */}
                            <div
                                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-video bg-[#0F0F13] border border-white/10"
                                onMouseEnter={() => {
                                    if (videoRef.current && !videoError) {
                                        videoRef.current.muted = false;
                                        setIsMuted(false);
                                        videoRef.current.play().catch(e => console.error("Video play failed:", e));
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (videoRef.current) {
                                        videoRef.current.pause();
                                        videoRef.current.muted = true;
                                        setIsMuted(true);
                                    }
                                }}
                                onClick={() => {
                                    if (videoRef.current) {
                                        const newMutedState = !videoRef.current.muted;
                                        videoRef.current.muted = newMutedState;
                                        setIsMuted(newMutedState);
                                    }
                                }}
                            >
                                {videoError ? (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 p-6 text-center">
                                        <span className="material-icons-outlined text-gray-600 text-4xl mb-2">videocam_off</span>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest leading-loose">Video could not be loaded.<br/>Please check Sanity settings.</p>
                                    </div>
                                ) : isEmbed ? (
                                    <div className="w-full h-full pointer-events-none scale-150">
                                        <iframe
                                            src={embedUrl}
                                            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                            allow="autoplay; fullscreen"
                                            frameBorder="0"
                                        />
                                    </div>
                                ) : (
                                    <video
                                        ref={videoRef}
                                        key={videoSource}
                                        src={videoSource}
                                        className="w-full h-full object-cover opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                                        loop
                                        muted
                                        playsInline
                                        disablePictureInPicture
                                        onError={() => setVideoError(true)}
                                    />
                                )}
                                
                                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isMuted && !videoError && !isEmbed ? 'opacity-100 group-hover:opacity-0' : 'opacity-0'}`}>
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                                        <span className="material-icons-outlined text-white text-3xl">play_arrow</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                                    <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl flex items-center justify-between border border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#7000FF] flex items-center justify-center font-bold text-xs text-white">GP</div>
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Video Message from the Founder</span>
                                        </div>
                                        <div>
                                            {isMuted ? (
                                                <span className="material-icons-outlined text-gray-500 text-base">volume_off</span>
                                            ) : (
                                                <span className="material-icons-outlined text-[#00F0FF] text-base animate-pulse drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">volume_up</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (The Flow) */}
                        <div className="flex flex-col gap-6 relative min-h-[500px]">
                            <AnimatePresence mode="wait">
                                {step === "form" ? (

                                    // STEP 1: Form
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        onSubmit={handleFormSubmit}
                                        className="flex flex-col gap-6 h-full justify-center"
                                    >
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <GlassInput label="Full Name" placeholder="Jane Smith" value={form.fullName} onChange={update("fullName")} required />
                                            <GlassInput label="Work Email" type="email" placeholder="jane@restaurant.com" value={form.workEmail} onChange={update("workEmail")} required />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <GlassInput label="Whatsapp / Mobile" type="tel" placeholder="+1 (555) 000-0000" value={form.whatsapp} onChange={update("whatsapp")} />
                                            <GlassInput label="Website URL (Optional)" type="url" placeholder="https://yourbrand.com" value={form.websiteUrl} onChange={update("websiteUrl")} />
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                                                Project Budget (USD)<span className="text-[#00F0FF] ml-1">*</span>
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {BUDGET_OPTIONS.map(({ value, label }) => (
                                                    <button
                                                        key={value}
                                                        type="button"
                                                        onClick={() => update("budget")(value)}
                                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${form.budget === value
                                                            ? "bg-[#7000FF]/20 border-[#7000FF] text-[#7000FF]"
                                                            : "bg-white/[0.04] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                                                            }`}
                                                    >
                                                        {label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                                                Project Details<span className="text-[#00F0FF] ml-1">*</span>
                                            </label>
                                            <textarea
                                                placeholder="Tell us about your goals, current metrics, and what you're looking to achieve."
                                                value={form.projectDetails}
                                                onChange={(e) => update("projectDetails")(e.target.value)}
                                                required
                                                rows={4}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:border-[#00F0FF]/50 focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/20 transition-all duration-300 resize-none backdrop-blur-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading || !form.fullName || !form.workEmail || !form.budget || !form.projectDetails}
                                            className="w-full bg-[#7000FF] text-white py-4 rounded-xl font-black text-lg shadow-[0_0_20px_rgba(112,0,255,0.4)] hover:shadow-[0_0_40px_rgba(112,0,255,0.6)] hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 disabled:shadow-none flex items-center justify-center gap-2 mt-2"
                                        >
                                            {loading ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                "Select a Time Now"
                                            )}
                                        </button>
                                    </motion.form>

                                ) : (

                                    // STEP 2: Calendly
                                    <motion.div
                                        key="calendly"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="w-full flex flex-col items-center justify-center bg-[#111116] rounded-2xl z-20 border border-white/5 overflow-hidden"
                                    >
                                        <div className="w-full flex justify-between items-center p-4 border-b border-white/5 bg-[#111116] z-30">
                                            <div className="flex items-center gap-2">
                                                <span className="material-icons-outlined text-[#4ADE80] text-lg">check_circle</span>
                                                <span className="text-xs font-bold uppercase tracking-widest text-[#E2E8F0]">Details Saved</span>
                                            </div>
                                            <button type="button" onClick={() => setStep("form")} className="text-xs text-gray-500 hover:text-white underline">Edit Details</button>
                                        </div>
                                        <div className="w-full h-auto bg-[#0F0F13] relative">
                                            <CalEmbed name={form.fullName} email={form.workEmail} notes={form.projectDetails} />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Business Opportunities ── */}
            <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
                <h3 className="text-2xl font-black mb-6">Get In Touch Now For Business Opportunities!</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <div className="flex flex-col items-center">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">General Inquiries</span>
                        <a href="mailto:hello@restaureach.ai" className="font-mono text-[#00F0FF] text-xl md:text-2xl hover:underline drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all">
                            hello@restaureach.ai
                        </a>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Careers</span>
                        <a href="mailto:careers@restaureach.ai" className="font-mono text-[#00F0FF] text-xl md:text-2xl hover:underline drop-shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all">
                            careers@restaureach.ai
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ── */}
            <section className="max-w-4xl mx-auto px-6 mb-32">
                <h2 className="text-3xl font-black text-center mb-12">Your Questions Answered!</h2>
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-[#111116] border border-white/10 rounded-2xl p-6 flex items-center justify-between cursor-pointer group hover:border-[#00F0FF]/30 hover:bg-white/[0.02] transition-all">
                            <span className="font-bold text-gray-200">{faq.question}</span>
                            <span className="material-icons-outlined text-gray-600 border border-white/10 rounded-full p-1 group-hover:text-[#00F0FF] group-hover:border-[#00F0FF]/30 transition-colors">expand_more</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Bottom Banner ── */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#7000FF] to-[#3b008a] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-[0_20px_50px_rgba(112,0,255,0.3)]">
                    <div className="relative z-10 flex-1">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tighter">
                            Your Brand Deserves the Next Level!
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-md font-medium leading-relaxed">
                            Unlock data-driven strategies that scale your hospitality business across continents.
                        </p>
                        <a href="/pricing" className="inline-block bg-white text-[#111116] px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                            Get Pricing
                        </a>
                    </div>
                    <div className="relative z-10 flex-1 w-full max-w-lg">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-[#0A0A0C] shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Dashboard Mockup" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#7000FF]/20 mix-blend-overlay"></div>
                        </div>
                    </div>
                    {/* Abstract deco */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
                </div>
            </section>

        </div>
    );
}
