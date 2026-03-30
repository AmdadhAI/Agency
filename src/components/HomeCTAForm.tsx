"use client";

import React from "react";

export default function HomeCTAForm() {
    return (
        <form
            className="glass-card p-2 rounded-full max-w-lg mx-auto flex items-center border border-white/10 bg-white/5 backdrop-blur-md"
            onSubmit={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
            }}
        >
            <input
                className="bg-transparent border-none text-white placeholder-gray-500 focus:ring-0 flex-grow px-6 py-3"
                placeholder="enter your email address..."
                type="email"
                required
                style={{ outline: "none" }}
            />
            <button
                className="font-bold px-8 py-3 rounded-full transition-colors bg-white text-black font-sans hover:bg-gray-200 hover:scale-105"
                type="submit"
            >
                Start Now
            </button>
        </form>
    );
}
