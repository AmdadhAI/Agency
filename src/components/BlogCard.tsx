"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";

export type BlogCardProps = {
    post: {
        _id: string;
        title: string;
        slug: string;
        publishedAt: string;
        author?: string;
        mainImage?: any;
        excerpt?: string;
        category?: string;
    };
    index: number;
};

export default function BlogCard({ post, index }: BlogCardProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const imageUrl = post.mainImage 
        ? urlForImage(post.mainImage).url() 
        : "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80";

    return (
        <Link href={`/blog/${post.slug}`} className="block group h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-full flex flex-col bg-[#111116] border border-[rgba(255,255,255,0.08)] rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-[#00F0FF]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
            >
                {/* Image Section (16:9 thumb) */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-60" />
                    
                    {/* Category Pill (Deep Violet) */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-[#7000FF] border border-white/10 text-[10px] font-bold text-[#FFFFFF] uppercase tracking-widest shadow-lg">
                            {post.category || "Hospitality"}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1 relative z-10">
                    {/* Level 4 Metadata (Date) */}
                    <p className="text-[#6B7280] text-[10px] font-bold uppercase tracking-widest mb-3">
                        {formattedDate}
                    </p>

                    {/* Level 1 Title */}
                    <h3 className="text-xl md:text-2xl font-black text-[#FFFFFF] mb-3 group-hover:text-[#00F0FF] transition-colors leading-tight">
                        {post.title}
                    </h3>

                    {/* Level 3 Excerpt */}
                    {post.excerpt && (
                        <p className="text-[#9CA3AF] text-sm leading-relaxed line-clamp-2 mb-6">
                            {post.excerpt}
                        </p>
                    )}

                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#00F0FF]">Read More</span>
                            <span className="material-icons-outlined text-[#00F0FF] text-[14px]">arrow_forward</span>
                        </div>
                    </div>
                </div>

                {/* Hover Glow (Electric Cyan) */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF]/0 via-[#00F0FF]/5 to-[#7000FF]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
        </Link>
    );
}
