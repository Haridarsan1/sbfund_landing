import { useEffect, useState } from 'react'
import { getActiveInterestRates } from '@/lib/rates.functions'
import {
    ArrowRight, CheckCircle2, UserPlus,
    Send, Smartphone, Users, Banknote,
    ShieldCheck, Landmark, Lock, FileText, ChevronRight, Activity, HelpCircle, FileCheck
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { AdvancedCalculator } from '@/components/AdvancedCalculator'
import { ScrollReveal } from '@/components/ScrollReveal'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export default function Home() {
    const [rates, setRates] = useState<Record<string, number>>({})

    useEffect(() => {
        getActiveInterestRates().then(setRates)
    }, [])

    return (
        <div className="bg-background min-h-screen selection:bg-primary/20">
            {/* 01 Announcement / Trust Bar */}
            <div className="bg-primary/5 border-b border-primary/10 text-primary pt-[84px] pb-3 px-4 text-center text-sm font-semibold tracking-wide">
                <span className="flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span className="hidden sm:inline">Regulated Nidhi Company • </span>Member-Exclusive Financial Products
                </span>
            </div>

            {/* 03 Premium Hero */}
            <section className="relative pt-24 pb-32 px-6 lg:px-8 overflow-hidden flex items-center min-h-[85vh]">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
                <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -mr-32 -mt-32"></div>

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
                        <div>
                            <ScrollReveal animation="fade-up" duration={800}>
                                <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-md px-5 py-2 text-sm font-bold text-primary shadow-sm uppercase tracking-wider">
                                    <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse"></span>
                                    Suriyan Benefit Fund (Madras) Limited
                                </div>
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-8 tracking-tight">
                                    Strategic Wealth. <span className="text-primary block mt-2">Mutual Growth.</span>
                                </h1>
                                <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-[600px] font-medium">
                                    Join a compliant institutional Nidhi Company. Acquire equity shares and secure your financial future through highly rewarding member-exclusive deposit reserves.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                                    <a href="https://member.sb-fund.com" className="group w-full sm:w-auto bg-primary text-primary-foreground px-10 py-5 rounded-2xl text-[17px] font-bold hover:bg-primary/95 transition-all flex items-center justify-center gap-3 shadow-[0_4px_20px_0_rgb(var(--primary)_/_25%)] hover:shadow-[0_8px_30px_0_rgb(var(--primary)_/_30%)] hover:-translate-y-1">
                                        Become a Member
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </a>
                                    <a href="https://member.sb-fund.com" className="w-full sm:w-auto border-2 border-border text-foreground px-10 py-5 rounded-2xl text-[17px] font-bold hover:bg-muted hover:border-border transition-all flex items-center justify-center gap-3 bg-white">
                                        Member Login
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-foreground font-bold uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        <Lock className="w-5 h-5 text-muted-foreground" />
                                        Secure Portal
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FileCheck className="w-5 h-5 text-muted-foreground" />
                                        Digital Receipts
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal animation="fade-in" delay={300} duration={1000} className="hidden lg:flex justify-end relative">
                            <div className="relative w-full max-w-[600px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white isolate">
                                <img
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
                                    alt="Professional financial planning"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                                {/* Floating Rate Card */}
                                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <TrendingUpIcon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-foreground">Verified Fixed Deposit</p>
                                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Peak applicable rate</p>
                                        </div>
                                    </div>
                                    <div className="text-right pl-4 border-l border-border">
                                        <p className="text-3xl font-black text-primary">{rates["Fixed Deposit"]?.toFixed(1) || "7.0"}%</p>
                                        <p className="text-xs font-bold text-muted-foreground">P.A. COMP</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 04 Institutional Trust Metrics */}
            <section className="py-16 bg-card border-y border-border relative z-10">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 text-center">
                    <ScrollReveal animation="fade-up" delay={50}>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3"><AnimatedCounter end={1994} duration={1500} /></h3>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Established</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={150}>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3 flex items-center"><AnimatedCounter end={100} duration={1500} />%</h3>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Member Focus</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={250}>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3"><AnimatedCounter end={3} duration={1500} /></h3>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Core Products</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={350}>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3 flex items-center justify-center"><CheckCircle2 className="w-10 h-10 text-primary" /></h3>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Digital Auth</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 05 Why SB Fund */}
            <section className="py-32 px-6 bg-slate-50 relative z-20">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px bg-border flex-grow max-w-[60px]"></div>
                            <h2 className="text-sm font-bold text-primary uppercase tracking-widest">The Institutional Standard</h2>
                        </div>
                        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-[800px] leading-tight">
                            Built on transparency, structured strictly for our members.
                        </h3>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ScrollReveal animation="fade-up" delay={100} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                                <Users className="w-8 h-8 text-slate-700 group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-slate-900">Member First</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Core membership and formal shareholdings form the unbreakable foundation of our relationship.</p>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={200} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                                <Activity className="w-8 h-8 text-slate-700 group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-slate-900">Transparent Products</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Clear deposit capabilities linked to authoritative active rates without hidden variables.</p>
                        </ScrollReveal>
                        <ScrollReveal animation="fade-up" delay={300} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group lg:col-span-1 md:col-span-2">
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                                <Smartphone className="w-8 h-8 text-slate-700 group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-slate-900">Digital Experience</h4>
                            <p className="text-slate-600 leading-relaxed font-medium">Track your deposits, access digital certificates, and communicate via authenticated support within the modern portal.</p>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* 06 Membership + Shares */}
            <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                    <ShieldCheck className="w-96 h-96" />
                </div>

                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <ScrollReveal animation="fade-up">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">
                            Nidhi compliance requires absolute mutual benefit.
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-[600px]">
                            We are not a generic public bank. To ensure sustainable growth and strict adherence to regulations, we interact solely with verified shareholders. By purchasing shares, you become a formal part of the institution with full access to deposit products.
                        </p>
                        <p className="text-xl font-medium text-white mb-10 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            Membership → Shareholding → Member Services
                        </p>
                        <a href="https://member.sb-fund.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-slate-900 transition-colors shadow-lg">
                            Initate Member Registration <ArrowRight className="w-5 h-5" />
                        </a>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-in" delay={200} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center mb-6">
                                <UserPlus className="w-6 h-6 text-slate-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">1. Identity</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Provide robust digital KYC including PAN and Aadhaar records.</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center mb-6">
                                <Banknote className="w-6 h-6 text-slate-300" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">2. Shares</h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Purchase mandatory equity shares to fortify institutional parity.</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl flex flex-col justify-center sm:col-span-2">
                            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                                <Landmark className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-2">3. Deposit Utilization</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-[400px]">Unlock member-only access to our curated Fixed, Recurring, and Savings structures.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 07 Interactive Member Journey */}
            <section className="py-32 bg-background border-b border-border">
                <ScrollReveal className="max-w-[1200px] mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Journey</h2>
                        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight">The Institutional Pathway</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Join Member Portal", desc: "Submit basic preliminary data." },
                            { step: "02", title: "Share Application", desc: "Digital equity subscription." },
                            { step: "03", title: "Formal Approval", desc: "KYC and compliance check." },
                            { step: "04", title: "Portal Access", desc: "Dashboard unlocks fully." },
                            { step: "05", title: "Choose Deposit", desc: "Select FD, RD, or Savings." },
                            { step: "06", title: "Process Payment", desc: "Utilize secure gateways." },
                            { step: "07", title: "Digital Docs", desc: "Certificates auto-generate." },
                            { step: "08", title: "Track & Support", desc: "Manage via internal tools." }
                        ].map((item, index) => (
                            <div key={index} className="relative group bg-card p-8 rounded-3xl border border-border shadow-sm hover:border-primary transition-colors">
                                <div className="text-4xl font-black text-muted mb-6 group-hover:text-primary/20 transition-colors">{item.step}</div>
                                <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                                <p className="text-sm font-medium text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </section>

            {/* 08 Deposit Products */}
            <section className="py-32 px-6 bg-slate-50 relative">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="mb-20 text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                            Member-Exclusive Deposits
                        </h2>
                        <p className="text-lg text-slate-600 max-w-[700px] mx-auto">
                            Robust, structurally verified deposit instruments designed for long-term monetary resilience.
                        </p>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { name: "Fixed Deposit", purpose: "Lump Sum Investments", rate: rates["Fixed Deposit"], benefit: "Maximized lock-in returns", min: "12-36 Months" },
                            { name: "Recurring Deposit", purpose: "Disciplined Automation", rate: rates["Recurring Deposit"], benefit: "Compound interest growth", min: "12-36 Months" },
                            { name: "Savings Deposit", purpose: "Fluid Liquidity", rate: rates["Savings Deposit"], benefit: "Everyday balance accrual", min: "Flexible" }
                        ].map((prod, i) => (
                            <ScrollReveal key={i} animation="fade-up" delay={i * 100} className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:border-slate-300 transition-all">
                                <div className="mb-6 flex justify-between items-start">
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{prod.purpose}</p>
                                        <h3 className="text-2xl font-bold text-slate-900">{prod.name}</h3>
                                    </div>
                                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                                        <Landmark className="w-6 h-6 text-slate-600" />
                                    </div>
                                </div>
                                <div className="space-y-4 mb-10 flex-grow">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700">{prod.benefit}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Lock className="w-5 h-5 text-slate-400 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700">Restricted to Shareholders</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ClockIcon className="w-5 h-5 text-slate-400 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700">Tenure: {prod.min}</span>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
                                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Active Rate</p>
                                    <p className="text-3xl font-black text-slate-900">{prod.rate?.toFixed(1) || "-"}%</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 09 Rate Transparency Panel */}
            <section className="py-24 bg-card border-y border-border">
                <ScrollReveal className="max-w-[1000px] mx-auto px-6">
                    <div className="bg-background rounded-[2rem] p-10 border border-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-lg mb-4">
                                <Activity className="w-4 h-4" /> Live Fetch
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight mb-4 text-foreground">Authoritative Rate Parity</h3>
                            <p className="text-[15px] font-medium text-muted-foreground leading-relaxed">
                                Our calculator and Member Portal utilize exactly the same strict rate verification variables. We do not disguise our logic.
                            </p>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-card border border-border p-5 rounded-2xl text-center">
                                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Max FD Rate</p>
                                    <p className="text-2xl font-black text-primary">{rates["Fixed Deposit"]?.toFixed(1) || "7.0"}%</p>
                                </div>
                                <div className="bg-card border border-border p-5 rounded-2xl text-center">
                                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">Max RD Rate</p>
                                    <p className="text-2xl font-black text-foreground">{rates["Recurring Deposit"]?.toFixed(1) || "6.5"}%</p>
                                </div>
                            </div>
                            <p className="text-[11px] text-muted-foreground text-center mt-4">
                                * Rates are actively subject to institutional terms and revision capabilities.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 10 PRO Calculator */}
            <section className="py-32 px-6 bg-slate-900 relative z-20">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-slate-900 to-slate-900 pointer-events-none"></div>
                <ScrollReveal className="max-w-[1400px] mx-auto relative z-10 mb-20 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">Smart Financial Calculator</h2>
                    <p className="text-xl text-slate-400 font-medium">Model your accumulation accurately against strictly verified member logic.</p>
                </ScrollReveal>
                <div className="relative z-10">
                    <AdvancedCalculator />
                </div>
            </section>

            {/* 11 & 12 Consolidated: Digital Experience & Corporate Trust */}
            <section className="py-32 px-6 bg-background relative border-b border-border">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <ScrollReveal animation="slide-in-right">
                        <div className="bg-muted rounded-[3rem] p-10 lg:p-14 border border-border relative overflow-hidden h-[500px] flex items-center justify-center">
                            <div className="absolute top-10 left-10 p-4 bg-background border border-border shadow-2xl rounded-2xl z-10 flex items-center gap-4">
                                <ShieldCheck className="w-8 h-8 text-emerald-500" />
                                <div>
                                    <p className="text-sm font-bold">100% Digital Execution</p>
                                    <p className="text-xs text-muted-foreground">End to end authenticated issuance</p>
                                </div>
                            </div>
                            {/* Abstract mockup representation to ensure we don't fake real data */}
                            <div className="w-[400px] h-full mt-24 bg-background border-t-8 border-x-8 border-slate-300 rounded-t-[3rem] shadow-2xl p-6 opacity-90 blur-[1px]">
                                <div className="w-full h-8 bg-muted rounded-md mb-6"></div>
                                <div className="w-full h-32 bg-primary/10 rounded-2xl mb-8"></div>
                                <div className="space-y-4">
                                    <div className="w-3/4 h-6 bg-muted rounded"></div>
                                    <div className="w-full h-6 bg-muted rounded"></div>
                                    <div className="w-5/6 h-6 bg-muted rounded"></div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-in-left">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-foreground">
                            Uncompromising Transparency
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                            To truly function as an institutional pillar for our members, we enforce absolute compliance and disclosure. Corporate logic, structural records, and operational reports are systematically maintained via the proper channels.
                        </p>

                        <div className="space-y-4">
                            <Link to="/transparency" className="flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary transition-all group">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                        <FileText className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-lg text-foreground">Corporate Disclosures</h4>
                                </div>
                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                            <Link to="/management" className="flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary transition-all group">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                                        <Users className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <h4 className="font-bold text-lg text-foreground">Board & Management</h4>
                                </div>
                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 14 FAQ & 15 Contact */}
            <section className="py-24 bg-card border-b border-border">
                <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-20">
                    <ScrollReveal animation="slide-in-right">
                        <h3 className="text-3xl font-bold tracking-tight mb-6">Common Inquiries</h3>
                        <p className="text-muted-foreground mb-8">Access detailed explanations regarding our membership structure, equity requirements, and authorized deposit facilities.</p>
                        <Link to="/faq" className="inline-flex items-center justify-between w-full p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-primary transition-colors group">
                            <div className="flex items-center gap-4">
                                <HelpCircle className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                                <span className="font-bold text-foreground">View Full Knowledge Base</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-in-left">
                        <h3 className="text-3xl font-bold tracking-tight mb-6">Formal Support</h3>
                        <p className="text-muted-foreground mb-8">Utilize our authenticated digital resolution mechanism to escalate issues or contact administrative branches directly.</p>
                        <div className="space-y-4">
                            <Link to="/contact" className="inline-flex items-center justify-between w-full p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-primary transition-colors group">
                                <div className="flex items-center gap-4">
                                    <Send className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                                    <span className="font-bold text-foreground">Contact Headquarters</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 16 Final CTA */}
            <section className="py-32 px-6 bg-primary text-primary-foreground text-center relative overflow-hidden">
                <div className="max-w-[800px] mx-auto relative z-10">
                    <ScrollReveal>
                        <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-primary-foreground/80" />
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tight">Ready to institutionalize your savings?</h2>
                        <p className="text-xl font-medium text-primary-foreground/90 mb-12 max-w-[600px] mx-auto">
                            Submit your KYC, request equity, and activate your portal access today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://member.sb-fund.com" className="w-full sm:w-auto bg-background text-foreground px-10 py-5 rounded-2xl text-[17px] font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-xl hover:-translate-y-1">
                                Join SB Fund
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}

function TrendingUpIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokelinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    )
}

function ClockIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokelinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
