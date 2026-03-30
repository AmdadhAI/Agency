"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../../../../sanity/lib/image";
import BlogCard from "@/components/BlogCard";

export type BlogPostProps = {
    post: {
        title: string;
        publishedAt: string;
        author?: string;
        mainImage?: any;
        body: any;
        category?: string;
    };
    relatedPosts: any[];
};

const ptComponents = {
    block: {
        h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-black text-[#FFFFFF] mt-20 mb-6 tracking-tight italic">{children}</h2>,
        h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mt-16 mb-4 tracking-tight">{children}</h3>,
        normal: ({ children }: any) => <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">{children}</p>,
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-[#00F0FF] pl-8 my-12 italic text-[#FFFFFF] text-xl md:text-2xl font-medium bg-[#111116] p-6 rounded-r-2xl shadow-xl">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => <ul className="list-disc list-inside mb-8 space-y-4 text-[#9CA3AF] text-lg">{children}</ul>,
        number: ({ children }: any) => <ol className="list-decimal list-inside mb-8 space-y-4 text-[#9CA3AF] text-lg">{children}</ol>,
    },
};

export default function BlogPostClient({ post, relatedPosts }: BlogPostProps) {
    const [copied, setCopied] = React.useState(false);

    const shareUrl = typeof window !== "undefined" ? window.location.href : "";
    const shareTitle = post.title;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareLinks = [
        {
            name: "X (Twitter)",
            icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4" />
                </svg>
            ),
            href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
        },
        {
            name: "LinkedIn",
            icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        },
        {
            name: "Copy Link",
            icon: (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
            ),
            onClick: copyToClipboard,
        },
    ];
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const imageUrl = post.mainImage 
        ? urlForImage(post.mainImage).url() 
        : null;

    return (
        <main className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] pt-32 pb-24">
            <article className="max-w-7xl mx-auto px-6">
                {/* ── Article Header (GEO Optimized) ── */}
                <header className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#7000FF] border border-white/10 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-[0.4em] shadow-lg"
                    >
                        {post.category || "Hospitality Intelligence"}
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] tracking-tighter font-black text-[#FFFFFF] mb-8"
                    >
                        {post.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-6"
                    >
                        <div className="flex flex-col items-center">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#6B7280] font-bold mb-1">Authenticated By</p>
                            <p className="text-[#FFFFFF] font-bold text-sm">{post.author || "RestauReach AI"}</p>
                        </div>
                        <div className="w-[1px] h-8 bg-white/10" />
                        <div className="flex flex-col items-center">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#6B7280] font-bold mb-1">Published On</p>
                            <p className="text-[#FFFFFF] font-bold text-sm">{formattedDate}</p>
                        </div>
                    </motion.div>
                </header>

                {/* ── Banner Image/Gradient ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative aspect-video w-full rounded-[3rem] overflow-hidden border border-[rgba(255,255,255,0.08)] mb-20 shadow-2xl"
                >
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover opacity-60 mix-blend-luminosity"
                            priority
                            unoptimized
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#111116] via-[#0A0A0C] to-[#7000FF]/20" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-transparent opacity-80" />
                </motion.div>

                {/* ── Content Layout ── */}
                <div className="relative flex flex-col lg:flex-row gap-16">
                    {/* Sticky Share (Desktop) */}
                    <aside className="hidden lg:block w-24 sticky top-40 h-fit">
                        <div className="flex flex-col gap-4 items-center">
                            <p className="text-[9px] uppercase tracking-[0.4em] text-[#6B7280] font-black rotate-180 [writing-mode:vertical-lr] mb-4">Transmit</p>
                            {shareLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.href ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-2xl bg-[#111116] border border-white/10 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all flex items-center justify-center shadow-xl hover:-translate-y-1"
                                            title={link.name}
                                        >
                                            {link.icon}
                                        </a>
                                    ) : (
                                        <button
                                            onClick={link.onClick}
                                            className="w-12 h-12 rounded-2xl bg-[#111116] border border-white/10 hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all flex items-center justify-center shadow-xl hover:-translate-y-1"
                                            title={link.name}
                                        >
                                            {link.icon}
                                        </button>
                                    )}
                                    {link.name === "Copy Link" && copied && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#00F0FF] text-[#0F0F13] text-[10px] font-bold py-1 px-3 rounded-md shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                                        >
                                            Copied!
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </aside>

                    {/* Main Body */}
                    <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
                        <div className="prose prose-invert max-w-none">
                            <PortableText value={post.body} components={ptComponents} />
                        </div>

                        {/* Article Footer */}
                        <footer className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <span className="text-[#6B7280] text-[10px] font-bold uppercase tracking-[0.3em]">End of Transmission.</span>
                            </div>
                            
                            {/* Mobile Share (Horizontal) */}
                            <div className="flex lg:hidden items-center gap-4">
                                {shareLinks.map((link) => (
                                    <div key={link.name} className="relative">
                                        {link.href ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#00F0FF]"
                                            >
                                                {link.icon}
                                            </a>
                                        ) : (
                                            <button
                                                onClick={link.onClick}
                                                className="w-10 h-10 rounded-xl bg-[#111116] border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#00F0FF]"
                                            >
                                                {link.icon}
                                            </button>
                                        )}
                                        {link.name === "Copy Link" && copied && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-[#00F0FF] text-[#0F0F13] text-[9px] font-bold py-1 px-2 rounded"
                                            >
                                                Copied!
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <Link href="/blog" className="text-[11px] font-black uppercase tracking-[0.4em] text-[#FFFFFF] hover:text-[#00F0FF] transition-all flex items-center gap-3 group">
                                <span className="material-icons-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                Return to Hub
                            </Link>
                        </footer>
                    </div>
                </div>

                {/* ── Related Intelligence ── */}
                {relatedPosts.length > 0 && (
                    <section className="mt-40 pt-24 border-t border-white/10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tighter">
                                    Deepen your <span className="italic text-[#00F0FF]">Knowledge.</span>
                                </h2>
                                <p className="text-[#9CA3AF] mt-4 text-lg max-w-xl font-medium border-l-2 border-[#7000FF]/30 pl-6">
                                    Continue your research into hospitality dominance.
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((rp, i) => (
                                <BlogCard key={rp._id} post={rp} index={i} />
                            ))}
                        </div>
                    </section>
                )}
            </article>

            {/* Ambient Background Effects */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#7000FF]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-[#00F0FF]/5 blur-[120px] rounded-full" />
            </div>
        </main>
    );
}
