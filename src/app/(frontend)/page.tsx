import React from "react";
import Link from "next/link";
import ProvenGrowth from "@/components/ProvenGrowth";
import Showreel from "@/components/Showreel";
import GrowthBlueprint from "@/components/GrowthBlueprint";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomeHero from "@/components/HomeHero";
import HomeCTAForm from "@/components/HomeCTAForm";
import { client } from "../../../sanity/lib/client";

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  const projectsQuery = `*[_type == "project" && isFeaturedOnHomepage == true] | order(_createdAt desc) [0...4] {
    title,
    clientName,
    slug,
    "heroImage": heroImage.asset->url,
    projectDetails,
    cardLabel,
    badgeColor,
    metric1Value,
    metric1Label,
    metric2Value,
    metric2Label,
    clientLocation,
    clientIndustry
  }`;
  const projects = await client.fetch(projectsQuery) || [];

  const servicesQuery = `*[_type == "service"] {
    title,
    slug,
    shortDescription,
    "image1": image1.asset->url,
    "image2": image2.asset->url
  }`;
  const services = await client.fetch(servicesQuery) || [];

  const homeQuery = `*[_type == "homePage"][0] {
    heroHeadline,
    heroSecondaryHeadline,
    heroSubtext,
    primaryCtaText,
    "trustedLogos": trustedLogos[].asset->url,
    marqueeTitle,
    provenGrowthPill,
    provenGrowthTitle,
    blueprintTitle,
    blueprintSubtext,
    showreelTitle,
    showreelSubtext,
    whatWeDoTitle,
    whatWeDoSubtext,
    whyChooseUsTitle,
    whyChooseUsSubtext,
    pricingTitle,
    pricingSubtext,
    bottomCtaTitle,
    bottomCtaSubtext,
    provenGrowthCards,
    blueprintSteps,
    whatWeDoBlocks[] {
      title,
      description,
      slug,
      "image1": image1.asset->url,
      "image2": image2.asset->url
    },
    whyChooseUsCards,
    competitorRows
  }`;
  const homeData = await client.fetch(homeQuery) || {};

  const pricingQuery = `*[_type == "pricingPage"][0] {
    tiers
  }`;
  const pricingData = await client.fetch(pricingQuery) || {};

  return (
    <div className="bg-[#0F0F13] min-h-screen text-[#E2E8F0] [overflow-x:clip] font-sans">
      {/* Background blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter opacity-40"
          style={{
            background: "rgba(112, 0, 255, 0.2)",
            filter: "blur(128px)",
            animation: "blob 7s infinite",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter opacity-30 animation-delay-2000"
          style={{
            background: "rgba(0, 240, 255, 0.2)",
            filter: "blur(128px)",
            animation: "blob 7s infinite",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full mix-blend-screen filter opacity-30 animation-delay-4000"
          style={{
            background: "rgba(57, 255, 20, 0.1)",
            filter: "blur(128px)",
            animation: "blob 7s infinite",
          }}
        />
      </div >

      <main className="relative z-10 pt-16 md:pt-32">
        {/* ── HERO ── */}
        <HomeHero
          headline={homeData?.heroHeadline}
          secondaryHeadline={homeData?.heroSecondaryHeadline}
          subtext={homeData?.heroSubtext}
          ctaText={homeData?.primaryCtaText}
        />

        {/* ── MARQUEE ── */}
        <section className="py-12" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.2)", backdropFilter: "blur(8px)" }}>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-center text-gray-500 mb-8">
            {homeData?.marqueeTitle || "Trusted by data-driven brands"}
          </p>
          <div className="marquee-container overflow-hidden flex relative w-full">
            <div className="flex whitespace-nowrap gap-16 px-8 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" style={{ animation: "marquee 25s linear infinite" }}>
              {homeData?.trustedLogos && homeData.trustedLogos.length > 0 ? (
                // Sanity logos
                [...homeData.trustedLogos, ...homeData.trustedLogos, ...homeData.trustedLogos, ...homeData.trustedLogos].map((url: string, i: number) => (
                  <img key={i} src={url} alt="Trusted Brand" className="h-8 md:h-12 w-auto object-contain" />
                ))
              ) : (
                // Fallback text
                ["TOAST", "UBEREATS", "Google Omni", "OPENTABLE", "RESY", "SQUARE", "CLOVER", "TOAST", "UBEREATS", "Google Omni", "OPENTABLE", "RESY", "SQUARE", "CLOVER"].map((name, i) => (
                  <span key={i} className="text-2xl font-bold text-white">{name}</span>
                ))
              )}
            </div>
          </div>
        </section>

        {/* ── PROVEN GROWTH IN HOSPITALITY (Case Studies) ── */}
        {/* Hide for now until we have projects/case studies to show */}
        {/* <ProvenGrowth 
              provenGrowthCards={homeData?.provenGrowthCards}
              pill={homeData?.provenGrowthPill}
              title={homeData?.provenGrowthTitle}
            /> */}

        {/* ── HOW IT WORKS (Neural Pathway) ── */}
        <GrowthBlueprint 
          blueprintSteps={homeData?.blueprintSteps} 
          title={homeData?.blueprintTitle}
          subtext={homeData?.blueprintSubtext}
        />

        {/* ── SCROLL-STOPPING VISUALS (Video Showreel / Success Stories) ── */}
        {/* Hide for now until we have more projects/case studies */}
        {/* <Showreel 
              title={homeData?.showreelTitle}
              subtext={homeData?.showreelSubtext}
            /> */}

        {/* ── WHAT WE DO (Sticky Scroll) ── */}
        <WhatWeDo 
          blocks={homeData?.whatWeDoBlocks} 
          title={homeData?.whatWeDoTitle}
          subtext={homeData?.whatWeDoSubtext}
        />

        {/* ── WHY CHOOSE US (Differentiators Grid) ── */}
        <WhyChooseUs 
          cards={homeData?.whyChooseUsCards} 
          competitorRows={homeData?.competitorRows}
          title={homeData?.whyChooseUsTitle}
          subtext={homeData?.whyChooseUsSubtext}
        />

        {/* ── PRICING ── */}
        <section id="pricing" className="py-24 relative bg-[#0F0F13] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight font-bold text-white tracking-tighter text-center mb-6">
                Choose Your Revenue Engine.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-center mb-16">
                Productized growth infrastructure engineered exclusively for modern hospitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 items-center">
              {(pricingData?.tiers?.length > 0 ? pricingData.tiers : [
                {
                  name: "The Starter", price: "$399", isPopular: false,
                  features: ["Basic Local SEO Setup", "Social Media Strategy", "1 Ad Campaign Setup"], ctaText: "Start Here"
                },
                {
                  name: "The Growth Engine", price: "$999", isPopular: true,
                  features: ["High-Converting Website Design", "Full Local SEO & Schema", "Social Media Mgmt (Strategy & Posts)", "Content Creation & Graphics", "5 Ad Campaign Setups"], ctaText: "Accelerate Growth"
                },
                {
                  name: "Scale & Dominate", price: "$2,999", isPopular: false,
                  features: ["Everything in Growth Engine", "Agentic AI Reputation Ops", "Professional Photo/Video Shoots", "Influencer & PR Management", "Dedicated Account Manager"], ctaText: "Dominate Market"
                }
              ]).map((tier: any, i: number) => (
                tier.isPopular ? (
                  <div key={i} className="relative flex flex-col md:scale-110 z-20">
                    <div className="bg-[#111116] border border-cyan-500/50 rounded-2xl p-10 flex flex-col relative z-10 shadow-2xl shadow-black/50 backdrop-blur-md transition-transform h-full">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-[10px] sm:text-xs uppercase tracking-widest font-mono rounded-full bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/50 backdrop-blur-md whitespace-nowrap" style={{ boxShadow: "0 0 10px rgba(0,240,255,0.3)" }}>
                        MOST POPULAR
                      </div>
                      <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white">
                        {tier.name}
                      </h3>
                      <div className="my-6">
                        <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                        {tier.price.toLowerCase() !== "custom" && <span className="text-gray-400 text-sm ml-2">/ month</span>}
                      </div>
                      <div className="text-left space-y-4 mb-8 flex-grow">
                        {tier.features?.map((f: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="text-cyan-400 material-icons-outlined text-sm">check</span>
                            <span className={idx === 0 ? "text-white text-sm font-medium" : "text-[#E2E8F0] text-sm"}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={"/contact?tier=" + tier.name.toLowerCase().replace(" ", "")} className="w-full py-4 rounded-xl transition-all hover:scale-[1.02] mt-auto font-sans border-none bg-white text-black font-bold hover:bg-gray-200 text-center inline-block">
                        {tier.ctaText || "Accelerate Growth"}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div key={i} className="glass-card bg-[#111116] border border-white/10 rounded-2xl p-8 flex flex-col relative z-10 backdrop-blur-xl transition-all hover:bg-[#15151A] hover:-translate-y-1 h-full shadow-2xl shadow-black/50">
                    <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white">
                      {tier.name}
                    </h3>
                    <div className="my-6">
                      <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                      {tier.price.toLowerCase() !== "custom" && <span className="text-gray-400 text-sm ml-2">/ month</span>}
                    </div>
                    <div className="text-left space-y-4 mb-8 flex-grow">
                      {tier.features?.map((f: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="text-cyan-400 material-icons-outlined text-sm">check</span>
                          <span className={idx === 0 && i !== 0 ? "text-[#E2E8F0] text-sm font-medium text-white" : "text-[#E2E8F0] text-sm"}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href={"/contact?tier=" + tier.name.toLowerCase().replace(" ", "")} className={`w-full py-4 rounded-xl font-bold transition-all hover:scale-[1.02] font-sans mt-auto text-center inline-block ${i === 0 ? "bg-white/10 text-white border border-white/20 hover:bg-white/20" : "bg-white text-black"}`}>
                      {tier.ctaText || "Start Here"}
                    </Link>
                  </div>
                )
              ))}
            </div>

            {/* Tier 4: Enterprise AI Banner */}
            <div className="mt-16 w-full max-w-7xl mx-auto z-10 relative">
              <div className="bg-[#111116] border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center glass-card relative overflow-hidden transition-all hover:border-cyan-500/50 hover:bg-[#15151A]">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                <div className="text-center md:text-left mb-6 md:mb-0 ml-0 md:ml-4">
                  <h3 className="text-2xl md:text-3xl leading-snug font-semibold text-white mb-2">
                    Enterprise AI <span className="text-gray-500 font-normal hidden md:inline-block">| <span className="text-white">Custom Quote</span></span>
                  </h3>
                  <div className="md:hidden text-white font-bold text-xl my-2">Custom Quote</div>
                  <p className="text-gray-400 text-sm md:text-base max-w-2xl">
                    Full-stack Agentic AI deployment, OmniSearch, and High-End Lead Gen.
                  </p>
                </div>
                <Link href="/contact?tier=enterprise" className="w-full md:w-auto px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] bg-transparent border border-gray-700 text-white font-sans hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] text-center block">
                  Request Custom Audit
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "rgba(112,0,255,0.05)" }} />
          <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight font-bold text-white mb-8">
              {(homeData?.bottomCtaTitle || "Ready to scale *beyond limits?*").split('*').map((part: string, i: number) => 
                  i % 2 !== 0 ? (
                      <span key={i} className="text-[#00F0FF] italic">{part}</span>
                  ) : (
                      <React.Fragment key={i}>{part}</React.Fragment>
                  )
              )}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#E2E8F0] mb-12 max-w-2xl mx-auto">
              {homeData?.bottomCtaSubtext || "We only work with restaurants ready to handle a 30% increase in order volume. If that's you, let's talk."}
            </p>
            <HomeCTAForm />
          </div>
        </section>
      </main>

    </div >
  );
}
