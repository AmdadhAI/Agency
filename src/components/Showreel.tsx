"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const SHOWREEL_DATA = [
    {
        id: 1,
        title: "Le Maison",
        location: "London, UK",
        category: "Fine Dining",
        quote: "They turned empty Tuesday nights into fully booked services.",
        metrics: ["+45% Volume", "3.2x ROAS"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#39FF14", // Neon Green
    },
    {
        id: 2,
        title: "Acme Ghost Kitchen",
        location: "New York, US",
        category: "Cloud Kitchen",
        quote: "Our map pack dominance drove a massive direct order spike.",
        metrics: ["Ranked #1", "-28% CAC"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#00F0FF", // Electric Blue
    },
    {
        id: 3,
        title: "Sakura Fusion",
        location: "Dubai, UAE",
        category: "Viral Social",
        quote: "The TikTok reels turned our best dishes into local phenomena.",
        metrics: ["12M+ Views", "+22% Traffic"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#7000FF", // Deep Purple
    },
    {
        id: 4,
        title: "Malone's Steakhouse",
        location: "Chicago, US",
        category: "AI SEO",
        quote: "We secured the #1 position across every AI search vertical.",
        metrics: ["Rank #1", "AI Answers"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#00FFFF", // Cyan
    },
    {
        id: 5,
        title: "The Golden Fork",
        location: "Miami, US",
        category: "Retention",
        quote: "Automated SMS flows brought our best customers back 3x faster.",
        metrics: ["+60% LTV", "4.5x ROI"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#FF0055", // Neon Pink
    },
    {
        id: 6,
        title: "Osteria 93",
        location: "Rome, IT",
        category: "Local Conquesting",
        quote: "Hyper-local geo-fencing filled every lunch service with nearby corporate teams.",
        metrics: ["100% Occupancy", "-40% CPA"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#FFA500", // Neon Orange
    },
    {
        id: 7,
        title: "Burger DAO",
        location: "Austin, US",
        category: "Growth Systems",
        quote: "Predictive inventory marketing pushed high-margin items right when we needed them.",
        metrics: ["+35% AOV", "Scale Stage"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#00FF00", // Acid Green
    },
    {
        id: 8,
        title: "Nairobi Coffee Co.",
        location: "Nairobi, KE",
        category: "Loyalty Operations",
        quote: "AI-driven VIP tiers transformed our one-time morning rush into cult followers.",
        metrics: ["5x Frequency", "98% Retained"],
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder
        color: "#FF00FF", // Magenta
    }
];

function VideoCard({ data }: { data: typeof SHOWREEL_DATA[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.muted = false; // Unmute on hover
            videoRef.current.play().catch(e => console.log("Video auto-play blocked:", e));
        }
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.muted = true; // Mute again on leave
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Optional: reset on leave
        }
    };

    return (
        <motion.div
            className="w-[340px] h-[600px] sm:w-[360px] sm:h-[640px] shrink-0 rounded-[32px] relative overflow-hidden cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ backgroundColor: "#111" }}
        >
            {/* Base Glow ring on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-screen transition-opacity duration-300 pointer-events-none z-0"
                style={{ boxShadow: `inset 0 0 50px ${data.color}40`, border: `2px solid ${data.color}50`, borderRadius: '2rem' }}
            />

            {/* Video Background */}
            <video
                ref={videoRef}
                src={data.videoUrl}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
                muted
                loop
                playsInline
            />

            {/* Content Container (Hides completely on Hover) */}
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none z-10 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                {/* Seamless Bottom Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-[#0F0F13]/40 to-transparent opacity-90" />

                {/* Flex Container for layout */}
                <div className="absolute inset-x-0 bottom-0 top-0 p-6 md:p-8 flex flex-col justify-between">

                    {/* Top Metrics Badges */}
                    <div className="flex w-full justify-between items-start">
                        {data.metrics.map((metric, idx) => (
                            <div
                                key={idx}
                                className="backdrop-blur-md bg-white/5 border border-white/20 rounded-full px-3 py-1 font-mono text-[10px] sm:text-xs uppercase tracking-widest shadow-md"
                                style={{ color: data.color, textShadow: `0 0 10px ${data.color}80` }}
                            >
                                {metric}
                            </div>
                        ))}
                    </div>

                    {/* Center Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl transition-transform duration-300 transform scale-100 group-hover:scale-110">
                            <span className="material-icons-outlined text-white text-3xl ml-1">play_arrow</span>
                        </div>
                    </div>

                    {/* Bottom Testimonial Info */}
                    <div className="flex flex-col justify-end relative z-20">
                        <p className="text-base md:text-lg leading-relaxed text-[#E2E8F0] mb-5 font-medium italic drop-shadow-xl">
                            "{data.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-md">
                                <span className="text-white text-sm font-bold">{data.title.charAt(0)}</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse drop-shadow-[0_0_5px_#39FF14]" />
                                    <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white drop-shadow-lg">{data.title}</h3>
                                </div>
                                <p className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#E2E8F0] drop-shadow-lg">{data.category} • {data.location}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

export default function Showreel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const isHoveredRef = useRef(false);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let targetScroll = carousel.scrollLeft;
        let isAnimating = false;
        let autoScrollInterval: NodeJS.Timeout;

        // Calculate single set width
        const getSetWidth = () => {
            const first = carousel.children[0] as HTMLElement;
            const nextSetFirst = carousel.children[SHOWREEL_DATA.length] as HTMLElement;
            if (first && nextSetFirst) {
                return nextSetFirst.offsetLeft - first.offsetLeft;
            }
            return 0;
        };

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const updateScroll = () => {
            if (!carousel) return;
            let singleSetWidth = getSetWidth();

            // Handle seamless jump
            if (singleSetWidth > 0) {
                // If we scroll too far right
                if (carousel.scrollLeft >= singleSetWidth * 2) {
                    carousel.scrollLeft -= singleSetWidth;
                    targetScroll -= singleSetWidth;
                }
                // If we scroll too far left
                else if (carousel.scrollLeft <= singleSetWidth / 2) {
                    carousel.scrollLeft += singleSetWidth;
                    targetScroll += singleSetWidth;
                }
            }

            // Lerp factor 0.08 offers a very smooth, premium inertia feel
            carousel.scrollLeft = lerp(carousel.scrollLeft, targetScroll, 0.08);

            // If we are close enough to the target, stop the animation loop to save CPU
            if (Math.abs(targetScroll - carousel.scrollLeft) > 0.5) {
                requestAnimationFrame(updateScroll);
            } else {
                isAnimating = false;
            }
        };

        const handleWheel = (e: WheelEvent) => {
            // Trackpad swipe check (horizontal scrolling)
            if (e.deltaX !== 0 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                // Keep the targetScroll synced if they swipe so it doesn't jump back
                targetScroll = carousel.scrollLeft;
                return;
            }

            // In infinite loop mode, we never reach an "end", so we always map vertical wheel to horizontal scroll
            // The user must move cursor outside the cards to scroll vertically.
            e.preventDefault();

            // Approximate card width + gap (mobile vs desktop)
            const itemWidth = window.innerWidth < 640 ? 340 + 24 : 360 + 24;

            // Map standard scroll 'click' (usually deltaY around 100) to exactly one item width
            // For continuous movement devices (trackpads), this will scale smoothly but faster
            targetScroll += (e.deltaY / 100) * itemWidth;

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(updateScroll);
            }
        };

        // Sync targetScroll if user manually drags or trackpad swipes
        const handleScroll = () => {
            if (!isAnimating) {
                targetScroll = carousel.scrollLeft;
            }
        };

        const startAutoScroll = () => {
            // Initialize start position strictly to the middle set
            setTimeout(() => {
                const singleSetWidth = getSetWidth();
                if (singleSetWidth > 0 && carousel.scrollLeft === 0) {
                    carousel.scrollLeft = singleSetWidth;
                    targetScroll = singleSetWidth;
                }
            }, 100);

            autoScrollInterval = setInterval(() => {
                if (!isHoveredRef.current && carousel) {
                    // Approximate card width + gap (mobile vs desktop)
                    const itemWidth = window.innerWidth < 640 ? 340 + 24 : 360 + 24;

                    targetScroll += itemWidth;

                    if (!isAnimating) {
                        isAnimating = true;
                        requestAnimationFrame(updateScroll);
                    }
                }
            }, 3500); // 3.5s interval
        };

        carousel.addEventListener("wheel", handleWheel, { passive: false });
        carousel.addEventListener("scroll", handleScroll, { passive: true });
        startAutoScroll();

        return () => {
            carousel.removeEventListener("wheel", handleWheel);
            carousel.removeEventListener("scroll", handleScroll);
            clearInterval(autoScrollInterval);
        };
    }, []);

    return (
        <section className="bg-[#0F0F13] py-24 relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-white mb-4">
                            Success<br />
                            <span className="italic font-light">Stories</span>
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed text-[#E2E8F0] max-w-xl">
                            We engineer viral, high-fidelity creative designed specifically for algorithmic disruption and physical foot traffic.
                        </p>
                    </div>
                    <div className="shrink-0 hidden md:flex items-center gap-2 text-gray-500 text-sm font-medium">
                        Scroll to explore <span className="material-icons-outlined animate-bounce">east</span>
                    </div>
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="w-full pl-4 sm:pl-6 lg:pl-max-w-7xl relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-[#0F0F13] to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-[#0F0F13] to-transparent z-30 pointer-events-none" />

                {/* The Carousel Container */}
                <div
                    ref={carouselRef}
                    onMouseEnter={() => { isHoveredRef.current = true; }}
                    onMouseLeave={() => { isHoveredRef.current = false; }}
                    className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 md:px-max-w-7xl scrollbar-hide"
                    // Hide webkit scrollbar via inline styles as a fallback just in case .scrollbar-hide isn't fully covering it, 
                    // though .scrollbar-hide from tailwind plugin usually handles it.
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <style jsx global>{`
                        .scrollbar-hide::-webkit-scrollbar {
                            display: none;
                        }
                    `}</style>
                    {[...SHOWREEL_DATA, ...SHOWREEL_DATA, ...SHOWREEL_DATA].map((card, idx) => (
                        <VideoCard key={`${card.id}-${idx}`} data={card} />
                    ))}
                    {/* spacer at end to allow final card to be scrolled fully into view */}
                    <div className="w-[4px] shrink-0" />
                </div>
            </div>
        </section>
    );
}
