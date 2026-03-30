"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { urlForImage } from "../../../../sanity/lib/image";

export type SanityBlogPost = {
    _id: string;
    title: string;
    slug: string;
    publishedAt: string;
    author?: string;
    mainImage?: any;
    excerpt?: string;
    category?: string;
};

export default function BlogClient({ initialPosts }: { initialPosts: SanityBlogPost[] }) {
    const featuredPost = initialPosts[0];
    const recentPosts = initialPosts.slice(1);

    const featuredImageUrl = featuredPost?.mainImage 
        ? urlForImage(featuredPost.mainImage).url() 
        : null;

    return (
        <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] overflow-x-hidden pt-32 pb-24">
            {/* ── Header ── */}
            <section className="px-6 max-w-7xl mx-auto mb-20">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[clamp(3rem,8vw,6rem)] font-black text-[#FFFFFF] leading-[0.95] tracking-tighter mb-4"
                >
                    RESTAUREACH <span className="text-[#00F0FF] italic">INSIGHTS.</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[#E2E8F0] text-xl md:text-2xl max-w-2xl leading-relaxed font-medium border-l-2 border-[#00F0FF]/30 pl-6"
                >
                    Data-driven strategies and GEO tactics for modern hospitality.
                </motion.p>
            </section>

            {/* ── Featured Post ── */}
            {featuredPost && (
                <section className={`px-6 max-w-7xl mx-auto ${recentPosts.length > 0 ? 'mb-24' : 'mb-12'}`}>
                    <Link href={`/blog/${featuredPost.slug}`} className="group">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex flex-col lg:flex-row bg-[#111116] border border-[rgba(255,255,255,0.08)] rounded-[3rem] overflow-hidden group-hover:border-[#00F0FF]/30 transition-all duration-500 shadow-2xl"
                        >
                            {/* Left: Thumbnail/Gradient */}
                            <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto min-h-[400px] overflow-hidden">
                                {featuredImageUrl ? (
                                    <Image 
                                        src={featuredImageUrl} 
                                        alt={featuredPost.title} 
                                        fill 
                                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0C] via-[#111116] to-[#7000FF]/10" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111116] hidden lg:block" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent lg:hidden" />
                            </div>

                            {/* Right: Content */}
                            <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start relative z-10">
                                <span className="mb-6 px-4 py-1.5 rounded-full bg-[#4ADE80] border border-[#4ADE80]/30 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-widest shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                                    Featured
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-[#FFFFFF] mb-6 leading-tight group-hover:text-[#00F0FF] transition-colors tracking-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-[#9CA3AF] text-lg leading-relaxed mb-10 line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-[#00F0FF] font-black uppercase tracking-[0.2em] text-sm group-hover:gap-4 transition-all duration-300">
                                    Read Article <span className="material-icons-outlined">arrow_forward</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </section>
            )}

            {/* ── Recent Posts Grid ── */}
            {recentPosts.length > 0 && (
                <section className="px-6 max-w-7xl mx-auto pb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-[1px] flex-1 bg-white/10" />
                        <h3 className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.4em]">Latest Intelligence</h3>
                        <div className="h-[1px] w-12 bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentPosts.map((post, i) => (
                            <BlogCard key={post._id} post={post} index={i} />
                        ))}
                    </div>
                </section>
            )}

            {/* Ambient background glow */}
            <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00F0FF]/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7000FF]/5 blur-[150px] rounded-full" />
            </div>
        </div>
    );
}
