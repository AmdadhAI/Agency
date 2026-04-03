export interface CompetitorRow {
    providerName: string;
    description: string;
    isHospitalityFocused: boolean;
    hasAiAutomation: boolean;
    executionSpeed: string;
    isCostEfficient: boolean;
    scalesRevenue: boolean;
}

export interface USP {
    title: string;
    description: string;
}

export default function WhyChooseUs({ 
    cards = [],
    competitorRows = [],
    title,
    subtext 
}: { 
    cards?: USP[],
    competitorRows?: CompetitorRow[],
    title?: string,
    subtext?: string 
}) {
    // If no data from Sanity, fallback to hardcoded
    const displayUsps = cards?.length > 0 ? cards : [
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

    const defaultTitle = "Why Choose Us";
    const defaultSubtext = "The old agency model is dead. You don't need *ideas*, you need *execution*. We are operators who built our own restaurants before building this infrastructure.";

    return (
        <section className="relative w-full bg-[#0F0F13] py-20 md:py-32 px-4 overflow-hidden border-t border-white/5">
            {/* PART 1: The New Section Header */}
            <div className="max-w-7xl mx-auto relative z-20">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <div className="inline-block border border-gray-700 rounded-full px-4 py-1 text-[10px] sm:text-xs uppercase tracking-widest font-mono mb-6 bg-gray-800/50 text-gray-300">
                        {title || defaultTitle}
                    </div>
                    <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] leading-snug font-medium text-white">
                        {(subtext || defaultSubtext).split('*').map((part, i) => 
                            i % 2 !== 0 ? (
                                <i key={i} className="font-serif italic text-cyan-400">{part}</i>
                            ) : (
                                <span key={i}>{part}</span>
                            )
                        )}
                    </h2>
                </div>

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

                            {competitorRows && competitorRows.length > 0 ? competitorRows.map((row, i) => {
                                const isFirst = i === 0; // Highlight the first element normally RestauReach
                                return (
                                    <div key={i} className={`grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr] gap-4 p-6 items-center rounded-xl transition-all ${isFirst ? 'bg-white/[0.04] border border-[#00F0FF]/40 mb-4 hover:scale-[1.01] shadow-[0_0_30px_rgba(0,240,255,0.1)] relative overflow-hidden' : 'border-b border-white/5 hover:bg-white/[0.01]'}`}>
                                        {isFirst && <div className="absolute top-0 left-0 w-1 h-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>}
                                        <div className={isFirst ? "pl-2" : "pl-3"}>
                                            <div className={`text-xl ${isFirst ? 'font-bold text-white tracking-tight' : 'font-semibold text-[#E2E8F0]'}`}>{row.providerName}</div>
                                            <div className={`text-sm mt-1 pr-4 ${isFirst ? 'text-gray-400' : 'text-gray-500'}`}>{row.description}</div>
                                        </div>
                                        <div className="flex justify-center">
                                            <span className={`material-icons-outlined ${row.isHospitalityFocused ? (isFirst ? 'text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.isHospitalityFocused ? 'check_circle' : 'close'}</span>
                                        </div>
                                        <div className="flex justify-center">
                                            <span className={`material-icons-outlined ${row.hasAiAutomation ? (isFirst ? 'text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.hasAiAutomation ? 'check_circle' : 'close'}</span>
                                        </div>
                                        <div className={`text-center ${isFirst ? 'text-[#39FF14] font-bold drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'text-[#E2E8F0] font-medium'}`}>{row.executionSpeed}</div>
                                        <div className="flex justify-center">
                                            <span className={`material-icons-outlined ${row.isCostEfficient ? (isFirst ? 'text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.isCostEfficient ? 'check_circle' : 'close'}</span>
                                        </div>
                                        <div className="flex justify-center">
                                            <span className={`material-icons-outlined ${row.scalesRevenue ? (isFirst ? 'text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.scalesRevenue ? 'check_circle' : 'close'}</span>
                                        </div>
                                    </div>
                                );
                            }) : (
                                <div className="text-center text-gray-500 py-12">Configure Comparison Rows in Sanity CMS</div>
                            )}
                        </div>
                    </div>

                    {/* CARD LAYOUT FOR MOBILE/TABLET */}
                    <div className="block lg:hidden w-full flex flex-col gap-6">
                        {competitorRows && competitorRows.length > 0 ? competitorRows.map((row, i) => {
                            const isFirst = i === 0;
                            return (
                                <div key={i} className={`rounded-xl p-6 relative ${isFirst ? 'bg-white/[0.04] border border-[#00F0FF]/40 overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.1)]' : 'bg-[#111116] border border-white/5'}`}>
                                    {isFirst && <div className="absolute top-0 left-0 w-1 h-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF]"></div>}
                                    <h4 className={`text-xl mb-2 ${isFirst ? 'font-bold text-white tracking-tight' : 'font-semibold text-[#E2E8F0]'}`}>{row.providerName}</h4>
                                    <p className={`text-sm mb-6 ${isFirst ? 'text-gray-400' : 'text-gray-500'}`}>{row.description}</p>

                                    <div className="space-y-3 font-mono text-sm">
                                        <div className="flex justify-between items-center"><span className="text-gray-400">Hospitality Focus</span><span className={`material-icons-outlined ${row.isHospitalityFocused ? (isFirst ? 'text-[#39FF14]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.isHospitalityFocused ? 'check_circle' : 'close'}</span></div>
                                        <div className="flex justify-between items-center"><span className="text-gray-400">AI Automation</span><span className={`material-icons-outlined ${row.hasAiAutomation ? (isFirst ? 'text-[#39FF14]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.hasAiAutomation ? 'check_circle' : 'close'}</span></div>
                                        <div className="flex justify-between items-center"><span className="text-gray-400">Execution Speed</span><span className={isFirst ? 'text-[#39FF14] font-bold' : 'text-[#E2E8F0]'}>{row.executionSpeed}</span></div>
                                        <div className="flex justify-between items-center"><span className="text-gray-400">Cost Efficiency</span><span className={`material-icons-outlined ${row.isCostEfficient ? (isFirst ? 'text-[#39FF14]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.isCostEfficient ? 'check_circle' : 'close'}</span></div>
                                        <div className="flex justify-between items-center"><span className="text-gray-400">Revenue Scaling</span><span className={`material-icons-outlined ${row.scalesRevenue ? (isFirst ? 'text-[#39FF14]' : 'text-[#39FF14] opacity-80') : 'text-rose-500'}`}>{row.scalesRevenue ? 'check_circle' : 'close'}</span></div>
                                    </div>
                                </div>
                            );
                        }) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}

