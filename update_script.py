import re

with open('src/components/ProvenGrowth.tsx', 'r') as f:
    code = f.read()

# Replace interface
code = re.sub(
    r'export interface ProjectItem \{.*?\n\}',
    '''export interface ProjectItem {
    title: string;
    clientName?: string;
    slug: { current: string };
    heroImage: string;
    projectDetails?: string;
    cardLabel?: string;
    badgeColor?: string;
    metric1Value?: string;
    metric1Label?: string;
    metric2Value?: string;
    metric2Label?: string;
    clientLocation?: string;
    clientIndustry?: string;
}''',
    code,
    flags=re.DOTALL
)

mapping = '''    type CardData = {
        title: string; label: string; desc: string; Component: React.FC; badgeColor: string;
        dynamicSlug?: string; dynamicImage?: string;
        m1V: string; m1L: string; m2V: string; m2L: string;
        clientName: string; location: string; industry: string;
    };
    const defaultData: CardData[] = [
        { title: "Scaling High-Ticket Reservations", label: "Fine Dining", desc: "We overhauled their booking funnel and launched targeted Meta ads, turning empty Tuesday nights into fully booked services.", Component: PhoneFineDining, badgeColor: "#39FF14", m1V: "+45%", m1L: "Reservation Volume", m2V: "3.2x", m2L: "Ad ROAS", clientName: "Le Maison Fine Dining", location: "London, UK", industry: "Fine Dining" },
        { title: "Dominating Local Delivery Search", label: "Cloud Kitchen / QSR", desc: "By monopolizing the Google Map Pack and deploying high-fidelity food reels, we drove a massive spike in direct-to-consumer orders.", Component: PhoneMapPack, badgeColor: "#00F0FF", m1V: "#1", m1L: "Map Pack Rank", m2V: "-28%", m2L: "Acquisition Cost", clientName: "Acme Ghost Kitchen", location: "New York, US", industry: "Cloud Kitchen" },
        { title: "Viral Social Footprint", label: "Social Growth", desc: "We engineered a TikTok and Instagram Reel strategy that turned their best dishes into local phenomena, driving unprecedented foot traffic.", Component: DashboardSocial, badgeColor: "#7000FF", m1V: "12M+", m1L: "Views", m2V: "+22%", m2L: "Foot Traffic", clientName: "Sakura Fusion Bistro", location: "Dubai, UAE", industry: "Casual Dining" },
        { title: "OmniSearch Domination", label: "AI-Powered SEO", desc: "We optimized for Google's AI Overview and next-gen answer engines, securing the #1 position across every AI search vertical that matters.", Component: DashboardOmniSearch, badgeColor: "#00FFFF", m1V: "Rank #1", m1L: "Local Pack", m2V: "AI Answers", m2L: "Featured Engine", clientName: "Malone's Steakhouse", location: "Chicago, US", industry: "Fine Dining" },
    ];

    const displayProjects = defaultData.map((def, i) => {
        const dp = projects[i];
        if (dp) {
            return {
                ...def,
                title: dp.title || def.title,
                label: dp.cardLabel || def.label,
                desc: dp.projectDetails ? dp.projectDetails.substring(0, 150) + "..." : def.desc,
                dynamicSlug: dp.slug?.current,
                dynamicImage: dp.heroImage,
                badgeColor: dp.badgeColor || def.badgeColor,
                m1V: dp.metric1Value || def.m1V,
                m1L: dp.metric1Label || def.m1L,
                m2V: dp.metric2Value || def.m2V,
                m2L: dp.metric2Label || def.m2L,
                clientName: dp.clientName || def.clientName,
                location: dp.clientLocation || def.location,
                industry: dp.clientIndustry || def.industry,
            };
        }
        return def;
    });'''

code = re.sub(
    r'    type CardData = \{.*?\n    \}\);\n',
    mapping + '\n',
    code,
    flags=re.DOTALL
)

def build_dynamic_metrics(i):
    return f'''                                    <div className="border-t border-white/10 pt-3 flex gap-8 mb-4">
                                        <div>
                                            <p className="font-bold text-2xl mb-1" style={{color: displayProjects[{i}].badgeColor, textShadow: `0 0 10px ${{displayProjects[{i}].badgeColor}}66`}} >{{displayProjects[{i}].m1V}}</p>
                                            <p className="text-[9px] text-[#A0AAB4] uppercase tracking-widest">{{displayProjects[{i}].m1L}}</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-2xl mb-1" style={{color: displayProjects[{i}].badgeColor, textShadow: `0 0 10px ${{displayProjects[{i}].badgeColor}}66`}} >{{displayProjects[{i}].m2V}}</p>
                                            <p className="text-[9px] text-[#A0AAB4] uppercase tracking-widest">{{displayProjects[{i}].m2L}}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-3 p-2.5 rounded-xl bg-white/5 border border-white/8 w-fit">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{backgroundColor: `${{displayProjects[{i}].badgeColor}}33`}}>
                                            <span className="text-[10px] font-bold" style={{color: displayProjects[{i}].badgeColor}}>★</span>
                                        </div>
                                        <div>
                                            <p className="text-white text-[11px] font-semibold leading-none mb-0.5">{{displayProjects[{i}].clientName}}</p>
                                            <p className="text-gray-500 text-[10px]">{{displayProjects[{i}].location}} • {{displayProjects[{i}].industry}}</p>
                                        </div>
                                    </div>'''

# Sub Card 1 Stats
code = re.sub(
    r'<div className="border-t border-white/10 pt-3 flex gap-8 mb-4">.*?London, UK • Fine Dining</p>\s*</div>\s*</div>',
    build_dynamic_metrics(0),
    code,
    flags=re.DOTALL
)

# Sub Card 2 Stats
code = re.sub(
    r'<div className="border-t border-white/10 pt-3 flex gap-8 mb-4">.*?New York, US • Cloud Kitchen</p>\s*</div>\s*</div>',
    build_dynamic_metrics(1),
    code,
    flags=re.DOTALL
)

# Sub Card 3 Stats
code = re.sub(
    r'<div className="border-t border-white/10 pt-3 flex gap-8 mb-4">.*?Dubai, UAE • Casual Dining</p>\s*</div>\s*</div>',
    build_dynamic_metrics(2),
    code,
    flags=re.DOTALL
)

# Sub Card 4 Stats
code = re.sub(
    r'<div className="border-t border-white/10 pt-3 flex gap-8 mb-4">.*?Chicago, US • Fine Dining</p>\s*</div>\s*</div>',
    build_dynamic_metrics(3),
    code,
    flags=re.DOTALL
)


# Re-write the glow boxes, borders and gradients
def replace_card_colors(code, idx, default_color):
    # Ambient background (hidden md:block) - e.g. bg-[#39FF14]/15
    code = re.sub(
        f'<div className="absolute inset-0 bg-\\[{default_color}\\]/[0-9]+ blur-\\[100px\\] scale-95 pointer-events-none -z-10 rounded-\\[3rem\\] hidden md:block" />',
        f'<div className="absolute inset-0 blur-[100px] scale-95 pointer-events-none -z-10 rounded-[3rem] hidden md:block" style={{backgroundColor: `${{displayProjects[{idx}].badgeColor}}26`}} />',
        code
    )
    
    # Border & Shadow on card
    code = re.sub(
        f'border-\\[{default_color}\\]/[0-9]+ rounded-3xl overflow-hidden shadow-2xl shadow-black/50 md:shadow-\\[0_0_60px_rgba\\([0-9,]+,0\\.15\\)\\]',
        f'border rounded-3xl overflow-hidden shadow-2xl shadow-black/50" style={{ borderColor: `${{displayProjects[{idx}].badgeColor}}33`, boxShadow: `0 0 60px ${{displayProjects[{idx}].badgeColor}}26` }} className="this-is-a-hack',
        code
    )
    # the replace adds className="this-is-a-hack that gets merged mostly but we can clean it
    
    # Top gradient
    code = re.sub(
        f'bg-gradient-to-r from-transparent via-\\[{default_color}\\]/[0-9]+ to-transparent z-40',
        f'z-40" style={{ background: `linear-gradient(to right, transparent, ${{displayProjects[{idx}].badgeColor}}66, transparent)` }} className="hack2',
        code
    )
    
    return code

code = replace_card_colors(code, 0, '#39FF14')
code = replace_card_colors(code, 1, '#00F0FF')
code = replace_card_colors(code, 2, '#7000FF')
code = replace_card_colors(code, 3, '#00FFFF')

# Fix the hack classes
code = code.replace('" className="this-is-a-hack', '')
code = code.replace('" className="hack2', '')

# Glows behind image
code = re.sub(
    r'<div className="absolute inset-0 bg-\[#39FF14\]/20 blur-\[70px\] rounded-full pointer-events-none hidden md:block" />\n\s*<div className="absolute inset-0 bg-\[#39FF14\]/10 blur-\[35px\] rounded-full pointer-events-none mix-blend-screen hidden md:block" />',
    r'<div className="absolute inset-0 blur-[70px] rounded-full pointer-events-none hidden md:block" style={{backgroundColor: `${displayProjects[0].badgeColor}33`}}/>\n                                    <div className="absolute inset-0 blur-[35px] rounded-full pointer-events-none mix-blend-screen hidden md:block" style={{backgroundColor: `${displayProjects[0].badgeColor}1a`}}/>',
    code
)

code = re.sub(
    r'<div className="absolute inset-0 bg-\[#00F0FF\]/15 blur-\[60px\] rounded-full pointer-events-none hidden md:block" />',
    r'<div className="absolute inset-0 blur-[60px] rounded-full pointer-events-none hidden md:block" style={{backgroundColor: `${displayProjects[1].badgeColor}26`}}/>',
    code
)

code = re.sub(
    r'<div className="absolute inset-0 bg-\[#7000FF\]/15 blur-\[60px\] rounded-full pointer-events-none hidden md:block" />',
    r'<div className="absolute inset-0 blur-[60px] rounded-full pointer-events-none hidden md:block" style={{backgroundColor: `${displayProjects[2].badgeColor}26`}}/>',
    code
)

code = re.sub(
    r'<div className="absolute inset-0 bg-\[#00FFFF\]/10 blur-\[60px\] rounded-full pointer-events-none hidden md:block" />',
    r'<div className="absolute inset-0 blur-[60px] rounded-full pointer-events-none hidden md:block" style={{backgroundColor: `${displayProjects[3].badgeColor}1a`}}/>',
    code
)


with open('src/components/ProvenGrowth.tsx', 'w') as f:
    f.write(code)

print("Modification complete")
