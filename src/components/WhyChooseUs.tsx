interface USP {
    title: string;
    description: string;
}

export default function WhyChooseUs({ usps = [] }: { usps?: USP[] }) {
    // If no data from Sanity, fallback to hardcoded
    const displayUsps = usps?.length > 0 ? usps : [
        {
            title: "AI-First, Not Template-First",
            description: "We don't use dragging-and-dropping. We build custom, agentic workflows and OmniSearch data structures that future-proof your brand."
        },
        {
            title: "Real Revenue, Not Vanity",
            description: "Likes don't pay the bills. Everything we build is reverse-engineered to drive seated diners, private event bookings, and direct orders."
        },
        {
            title: "100% Hospitality Focused",
            description: "We only work with restaurants, hospitality groups, and cloud kitchens. We integrate directly with Toast, Square, and your existing POS."
        }
    ];

    const icons = ["memory", "trending_up", "restaurant"];
    const colors = ["#00F0FF", "#39FF14", "#7000FF"];

    return (
        <section className="relative w-full bg-[#0F0F13] py-20 md:py-32 px-4 overflow-hidden border-t border-white/5">
            {/* PART 1: The New Section Header */}
            <div className="max-w-7xl mx-auto relative z-20">
                <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-tight font-bold text-white tracking-tighter text-center mb-6">
                    Why Restaurants Choose Us.
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-center mb-16 md:mb-20">
                    We don't use dragging-and-dropping or sell vanity metrics. We engineer custom, data-driven revenue engines exclusively for modern hospitality.
                </p>

                {/* PART 2: The 3 Premium Bento Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 md:mb-32">
                    {displayUsps.map((usp, i) => {
                        const icon = icons[i % icons.length];
                        const color = colors[i % colors.length];

                        return (
                            <div key={i} className="group bg-[#111116] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 hover:-translate-y-2 transition-transform duration-500 flex flex-col">
                                {/* Visual Header */}
                                <div className="h-48 relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent border-b border-white/5 flex items-center justify-center shrink-0">
                                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>
                                    <div className={`relative transition-all duration-500 group-hover:scale-125 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm z-10`} style={{ backgroundColor: `${color}1A`, borderColor: `${color}4D`, borderWidth: '1px', boxShadow: `0 0 40px ${color}4D` }}>
                                        <span className={`material-icons-outlined text-3xl transition-transform duration-500 group-hover:rotate-12`} style={{ color }}>{icon}</span>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-8 flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{usp.title}</h3>
                                    <p className="text-base text-gray-400 leading-relaxed">
                                        {usp.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* PART 3: The Competitor Comparison Matrix */}
                <div className="max-w-5xl mx-auto">
                    <h3 className="text-center text-3xl md:text-4xl font-bold mt-16 mb-12 text-white tracking-tight">
                        RestauReach vs. The Rest
                    </h3>

                    {/* TABLE LAYOUT FOR DESKTOP */}
                    <div className="hidden lg:block w-full overflow-hidden pb-8">
                        <div className="w-full mx-auto">
                            {/* Table Header */}
                            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 mb-4 px-6 items-end">
                                <div className="text-left text-xs font-mono uppercase tracking-widest text-[#00F0FF]">Provider</div>
                                <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">Hospitality Focus</div>
                                <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">AI Automation</div>
                                <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">Execution Speed</div>
                                <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">Cost Efficiency</div>
                                <div className="text-center text-xs font-mono uppercase tracking-widest text-gray-400">Revenue Scaling</div>
                            </div>

                            {/* Row 1 (RestauReach) */}
                            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 bg-white/[0.04] border border-[#00F0FF]/40 rounded-xl p-6 items-center mb-4 transition-transform hover:scale-[1.01] shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                                <div className="pl-2">
                                    <div className="font-bold text-white text-xl tracking-tight">RestauReach</div>
                                    <div className="text-sm text-gray-400 mt-1 pr-4">Expert-driven, AI-powered growth systems tailored entirely for the restaurant industry.</div>
                                </div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">check_circle</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">check_circle</span></div>
                                <div className="text-center text-[#39FF14] font-bold drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">Fast (2 Weeks)</div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">check_circle</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]">check_circle</span></div>
                            </div>

                            {/* Row 2 (In-House Marketing) */}
                            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 border-b border-white/5 p-6 items-center hover:bg-white/[0.01] transition-colors rounded-xl">
                                <div className="pl-3">
                                    <div className="font-semibold text-[#E2E8F0] text-xl">In-House Marketing</div>
                                    <div className="text-sm text-gray-500 mt-1 pr-4">Complete brand control, but high overhead, payroll taxes, and limited specialized tech expertise.</div>
                                </div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="text-center text-[#E2E8F0] font-medium">Slow (Months)</div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                            </div>

                            {/* Row 3 (Traditional Agencies) */}
                            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 border-b border-white/5 p-6 items-center hover:bg-white/[0.01] transition-colors rounded-xl">
                                <div className="pl-3">
                                    <div className="font-semibold text-[#E2E8F0] text-xl">Traditional Agencies</div>
                                    <div className="text-sm text-gray-500 mt-1 pr-4">High-quality creative and structured processes, but plagued by slow execution and generic vanity metrics.</div>
                                </div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="text-center text-[#E2E8F0] font-medium">Slow (3-6 Months)</div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                            </div>

                            {/* Row 4 (Freelancers) */}
                            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 border-b border-white/5 p-6 items-center hover:bg-white/[0.01] transition-colors rounded-xl">
                                <div className="pl-3">
                                    <div className="font-semibold text-[#E2E8F0] text-xl">Freelancers</div>
                                    <div className="text-sm text-gray-500 mt-1 pr-4">Cost-effective for one-off tasks, but lacks strategic alignment, reliability, and full-stack capabilities.</div>
                                </div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="text-center text-[#E2E8F0] font-medium">Fast (Varies)</div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                            </div>

                            {/* Row 5 (DIY / Templates) */}
                            <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 p-6 items-center hover:bg-white/[0.01] transition-colors rounded-xl border-b border-transparent">
                                <div className="pl-3">
                                    <div className="font-semibold text-[#E2E8F0] text-xl">DIY / Templates</div>
                                    <div className="text-sm text-gray-500 mt-1 pr-4">Cheap and accessible, but generic, unoptimized for search, and requires your own time to manage.</div>
                                </div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="text-center text-[#E2E8F0] font-medium">Fast (Immediate)</div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                                <div className="flex justify-center"><span className="material-icons-outlined text-rose-500">close</span></div>
                            </div>
                        </div>
                    </div>

                    {/* CARD LAYOUT FOR MOBILE/TABLET */}
                    <div className="block lg:hidden w-full flex flex-col gap-6">
                        {/* Mobile Card 1 (RestauReach) */}
                        <div className="bg-white/[0.04] border border-[#00F0FF]/40 rounded-xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>
                            <h4 className="font-bold text-white text-xl tracking-tight mb-2">RestauReach</h4>
                            <p className="text-sm text-gray-400 mb-6">Expert-driven, AI-powered growth systems tailored entirely for the restaurant industry.</p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between items-center"><span className="text-gray-400">Hospitality Focus</span><span className="material-icons-outlined text-[#39FF14]">check_circle</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">AI Automation</span><span className="material-icons-outlined text-[#39FF14]">check_circle</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Execution Speed</span><span className="text-[#39FF14] font-bold">Fast (2w)</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Cost Efficiency</span><span className="material-icons-outlined text-[#39FF14]">check_circle</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Revenue Scaling</span><span className="material-icons-outlined text-[#39FF14]">check_circle</span></div>
                            </div>
                        </div>

                        {/* Mobile Card 2 */}
                        <div className="bg-[#111116] border border-white/5 rounded-xl p-6">
                            <h4 className="font-semibold text-[#E2E8F0] text-xl mb-2">In-House Marketing</h4>
                            <p className="text-sm text-gray-500 mb-6">Complete brand control, but high overhead, payroll taxes, and limited specialized tech expertise.</p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between items-center"><span className="text-gray-400">Hospitality Focus</span><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">AI Automation</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Execution Speed</span><span className="text-[#E2E8F0]">Slow (Mo)</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Cost Efficiency</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Revenue Scaling</span><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                            </div>
                        </div>

                        {/* Mobile Card 3 */}
                        <div className="bg-[#111116] border border-white/5 rounded-xl p-6">
                            <h4 className="font-semibold text-[#E2E8F0] text-xl mb-2">Traditional Agencies</h4>
                            <p className="text-sm text-gray-500 mb-6">High-quality creative, but plagued by slow execution and generic metrics.</p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between items-center"><span className="text-gray-400">Hospitality Focus</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">AI Automation</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Execution Speed</span><span className="text-[#E2E8F0]">Slow (3-6m)</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Cost Efficiency</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Revenue Scaling</span><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                            </div>
                        </div>

                        {/* Mobile Card 4 */}
                        <div className="bg-[#111116] border border-white/5 rounded-xl p-6">
                            <h4 className="font-semibold text-[#E2E8F0] text-xl mb-2">Freelancers</h4>
                            <p className="text-sm text-gray-500 mb-6">Cost-effective for one-off tasks, but lacks strategic alignment and full-stack capabilities.</p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between items-center"><span className="text-gray-400">Hospitality Focus</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">AI Automation</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Execution Speed</span><span className="text-[#E2E8F0]">Fast</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Cost Efficiency</span><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Revenue Scaling</span><span className="material-icons-outlined text-rose-500">close</span></div>
                            </div>
                        </div>

                        {/* Mobile Card 5 */}
                        <div className="bg-[#111116] border border-white/5 rounded-xl p-6">
                            <h4 className="font-semibold text-[#E2E8F0] text-xl mb-2">DIY / Templates</h4>
                            <p className="text-sm text-gray-500 mb-6">Cheap and accessible, but generic and requires your own time to manage.</p>

                            <div className="space-y-3 font-mono text-sm">
                                <div className="flex justify-between items-center"><span className="text-gray-400">Hospitality Focus</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">AI Automation</span><span className="material-icons-outlined text-rose-500">close</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Execution Speed</span><span className="text-[#E2E8F0]">Fast</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Cost Efficiency</span><span className="material-icons-outlined text-[#39FF14] opacity-80">check_circle</span></div>
                                <div className="flex justify-between items-center"><span className="text-gray-400">Revenue Scaling</span><span className="material-icons-outlined text-rose-500">close</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

