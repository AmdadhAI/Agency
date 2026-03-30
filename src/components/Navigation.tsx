"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Primary links shown in the nav bar
const PRIMARY_LINKS = [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
];

// Links hidden inside the "More" dropdown
const MORE_LINKS = [
    { label: "Home", href: "/", icon: "home" },
    { label: "Blog", href: "/blog", icon: "article" },
    { label: "About Us", href: "/about", icon: "groups" },
    { label: "Contact", href: "/contact", icon: "mail" },
    { label: "FAQ", href: "/faq", icon: "help_outline" },
];

// Mobile bottom nav tabs
const MOBILE_TABS = [
    { label: "Projects", href: "/projects", icon: "grid_view" },
    { label: "Services", href: "/services", icon: "bolt" },
    { label: "Pricing", href: "/pricing", icon: "monetization_on" },
    { label: "Blog", href: "/blog", icon: "article" },
];

export default function Navigation({ globalSettings }: { globalSettings?: any }) {
    const pathname = usePathname();
    const [moreOpen, setMoreOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handler(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setMoreOpen(false);
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Close on route change (mobile)
    useEffect(() => {
        setMobileMenuOpen(false);
        setMoreOpen(false);
    }, [pathname]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <>
            {/* Top gradient fade */}
            <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0F0F13] to-transparent pointer-events-none z-40" />

            {/* ── Desktop Navigation ── */}
            <nav
                className="hidden md:flex fixed z-50 top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl rounded-full pl-6 pr-2 py-2 items-center justify-between"
                style={{
                    background: "rgba(15,15,19,0.75)",
                    backdropFilter: "blur(32px)",
                    WebkitBackdropFilter: "blur(32px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative z-10">
                    <div className="relative w-10 h-10">
                        <Image 
                            src="/logo-transparent.png" 
                            alt="RestauReach Logo" 
                            fill 
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <span className="font-sans font-black text-xl tracking-tighter text-white uppercase hidden md:block">
                        RestauReach
                    </span>
                </Link>

                {/* Center: Primary links + More dropdown */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-1">
                    {(globalSettings?.mainNav || PRIMARY_LINKS).map((link: any) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${isActive(link.href)
                                ? "bg-white/[0.08] text-white font-semibold border border-white/10"
                                : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* More dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setMoreOpen(v => !v)}
                            onMouseEnter={() => setMoreOpen(true)}
                            className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm transition-all duration-300 ${moreOpen || MORE_LINKS.some(l => isActive(l.href) && l.href !== "/")
                                ? "bg-white/[0.08] text-white font-semibold border border-white/10"
                                : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
                                }`}
                        >
                            More
                            <motion.span
                                className="material-icons-outlined text-[14px]"
                                animate={{ rotate: moreOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                expand_more
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {moreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.18 }}
                                    onMouseLeave={() => setMoreOpen(false)}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 rounded-2xl overflow-hidden"
                                    style={{
                                        background: "rgba(17,17,22,0.97)",
                                        backdropFilter: "blur(24px)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                                    }}
                                >
                                    <div className="p-2">
                                        {MORE_LINKS.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setMoreOpen(false)}
                                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${isActive(link.href) && link.href !== "/"
                                                    ? "bg-[#00F0FF]/10 text-[#00F0FF] font-semibold"
                                                    : pathname === link.href && link.href === "/"
                                                        ? "bg-[#00F0FF]/10 text-[#00F0FF] font-semibold"
                                                        : "text-[#E2E8F0] hover:bg-white/[0.06] hover:text-white"
                                                    }`}
                                            >
                                                <span className="material-icons-outlined text-[16px] opacity-60">{link.icon}</span>
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: CTA */}
                <Link
                    href="/contact"
                    className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold rounded-full transition-all hover:scale-105 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm flex-shrink-0"
                >
                    Book a Call
                    <span className="material-icons-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                    </span>
                </Link>
            </nav>

            {/* ── Mobile: Full-screen menu overlay ── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 220 }}
                        className="fixed inset-0 z-40 md:hidden"
                        style={{ background: "rgba(10,10,12,0.97)", backdropFilter: "blur(24px)" }}
                    >
                        <div className="flex flex-col h-full px-6 pt-20 pb-32 overflow-y-auto">
                            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Navigation</p>
                            <div className="flex flex-col gap-2">
                                {[...MORE_LINKS].map((link) => (
                                    <Link
                                        key={`${link.href}-mobile`}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-lg font-bold transition-all ${pathname === link.href
                                            ? "bg-white/[0.06] text-white border border-white/10"
                                            : "text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {("icon" in link) && <span className="material-icons-outlined text-[20px] opacity-50">{(link as { icon: string }).icon}</span>}
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto pt-8">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center bg-white text-black font-black py-4 rounded-full text-lg"
                                >
                                    Book a Call →
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Mobile Bottom Bar ── */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-1rem)] max-w-[420px] z-50 backdrop-blur-2xl bg-[#111116]/95 border border-white/10 rounded-full px-2 py-3 grid grid-cols-5 items-center shadow-[0_20px_40px_rgba(0,0,0,0.8)]">

                {/* Col 1 & 2: Left Items */}
                {(globalSettings?.mainNav || MOBILE_TABS).slice(0, 2).map((tab: any) => (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex flex-col items-center justify-center gap-1 transition-colors ${isActive(tab.href) ? "text-[#00F0FF]" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {tab.icon && <span className="material-icons-outlined text-[20px]">{tab.icon}</span>}
                        <span className="text-[9px] uppercase tracking-wider font-mono opacity-80">{tab.label}</span>
                    </Link>
                ))}

                {/* Col 3: Center floating Logo button */}
                <div className="flex justify-center justify-self-center h-full items-center">
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="relative -top-6 bg-gradient-to-tr from-[#111116] to-[#1A1A24] w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#0F0F13] shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:scale-105 transition-transform"
                    >
                        <Image 
                            src="/logo-transparent.png" 
                            alt="RestauReach Logo" 
                            fill 
                            className="object-contain p-2"
                        />
                    </Link>
                </div>

                {/* Col 4: Right Item */}
                {(globalSettings?.mainNav || MOBILE_TABS).slice(2, 3).map((tab: any) => (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex flex-col items-center justify-center gap-1 transition-colors ${isActive(tab.href) ? "text-[#00F0FF]" : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {tab.icon && <span className="material-icons-outlined text-[20px]">{tab.icon}</span>}
                        <span className="text-[9px] uppercase tracking-wider font-mono opacity-80">{tab.label}</span>
                    </Link>
                ))}

                {/* Col 5: More button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(v => !v)}
                    className={`flex flex-col items-center justify-center gap-1 transition-colors ${mobileMenuOpen ? "text-[#00F0FF]" : "text-gray-400 hover:text-white"
                        }`}
                >
                    <motion.span
                        className="material-icons-outlined text-[20px]"
                        animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {mobileMenuOpen ? "close" : "menu"}
                    </motion.span>
                    <span className="text-[9px] uppercase tracking-wider font-mono opacity-80">More</span>
                </button>
            </div>
        </>
    );
}
