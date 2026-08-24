import { useEffect, useState } from 'react'
import { getActiveInterestRates } from '@/lib/rates.functions'
import { Lock, CheckCircle2, ArrowRight, Info, Calculator } from 'lucide-react'
import { AdvancedCalculator } from '@/components/AdvancedCalculator'
import { useSEO } from '@/hooks/useSEO'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Deposits() {
    const [rates, setRates] = useState<Record<string, number>>({})

    useSEO({
        title: "Deposit Products - Suriyan Benefit Fund",
        description: "Explore our highly rewarding Fixed Deposits, Recurring Deposits, and Savings Deposit products exclusively for members of Suriyan Benefit Fund.",
        path: "/deposits"
    })

    useEffect(() => {
        getActiveInterestRates().then(setRates)
    }, [])

    return (
        <div className="pt-32 sm:pt-40 pb-20 min-h-screen bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -mr-32 -mt-32"></div>

            {/* Hero Section */}
            <section className="px-6 mb-24 relative z-10">
                <ScrollReveal className="max-w-[1000px] mx-auto text-center">
                    <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
                        <Lock className="w-4 h-4 text-primary mr-2" />
                        Member-Exclusive Financial Products
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                        Secure Deposit Products
                    </h1>
                    <p className="text-muted-foreground text-lg sm:text-xl max-w-[700px] mx-auto leading-relaxed mb-10">
                        Maximize your savings with compliant, highly rewarding deposit products curated specifically for the financial growth of our members.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://member.sb-fund.com" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-xl text-[16px] font-bold hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgb(var(--primary)_/_20%)] hover:-translate-y-0.5">
                            Become a Member
                        </a>
                        <a href="https://member.sb-fund.com" className="w-full sm:w-auto border-2 border-border text-foreground px-8 py-4 rounded-xl text-[16px] font-bold hover:bg-muted transition-all bg-transparent">
                            Member Login
                        </a>
                    </div>
                </ScrollReveal>
            </section>

            {/* Individual Products */}
            <section className="px-6 mb-24 space-y-12 max-w-[1200px] mx-auto relative z-10">
                {/* Fixed Deposit */}
                <ScrollReveal animation="fade-up">
                    <div className="grid md:grid-cols-[1fr_400px] gap-8 bg-card p-8 sm:p-12 rounded-[2.5rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-primary/30 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-md mb-4">Lump Sum Savings</span>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Fixed Deposit (FD)</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-[600px]">
                                    Lock in your savings for a fixed tenure and earn our highest verified returns. Ideal for members looking to safely grow a robust corpus over time.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Verified Tenure: 12 - 36 Months</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Highest verified returns for long-term growth</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">100% digital receipt issuance in member portal</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://member.sb-fund.com" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all">
                                    Become a Member to Apply <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="#calculator" className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-muted/80 transition-all border border-border">
                                    Calculate FD Returns <Calculator className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="relative z-10 bg-background border border-border rounded-3xl p-8 flex flex-col justify-center text-center shadow-inner">
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Current Active Rate</p>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-6xl font-bold text-primary tracking-tighter">{rates["Fixed Deposit"]?.toFixed(1) || "7.0"}</span>
                                <span className="text-3xl text-primary font-semibold">%</span>
                            </div>
                            <span className="text-muted-foreground text-sm font-medium">per annum</span>

                            <div className="mt-8 pt-6 border-t border-border/50 text-left">
                                <p className="text-xs text-muted-foreground flex items-start gap-2">
                                    <Info className="w-4 h-4 shrink-0" />
                                    Rates are subject to terms, periodic revision, and strict member eligibility rules.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Recurring Deposit */}
                <ScrollReveal animation="fade-up">
                    <div className="grid md:grid-cols-[1fr_400px] gap-8 bg-card p-8 sm:p-12 rounded-[2.5rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-primary/30 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-md mb-4">Disciplined Savings</span>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Recurring Deposit (RD)</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-[600px]">
                                    Cultivate the habit of regular savings. Start a monthly deposit commitment and watch your wealth compound significantly over time.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Verified Tenure: 12 - 36 Months</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Flexible monthly contribution bounds</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Manage pending installments via digital dashboard</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://member.sb-fund.com" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-primary/90 transition-all">
                                    Become a Member to Apply <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href="#calculator" className="inline-flex items-center justify-center gap-2 bg-muted text-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-muted/80 transition-all border border-border">
                                    Calculate RD Returns <Calculator className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="relative z-10 bg-background border border-border rounded-3xl p-8 flex flex-col justify-center text-center shadow-inner">
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Current Active Rate</p>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-6xl font-bold text-primary tracking-tighter">{rates["Recurring Deposit"]?.toFixed(1) || "6.5"}</span>
                                <span className="text-3xl text-primary font-semibold">%</span>
                            </div>
                            <span className="text-muted-foreground text-sm font-medium">per annum</span>

                            <div className="mt-8 pt-6 border-t border-border/50 text-left">
                                <p className="text-xs text-muted-foreground flex items-start gap-2">
                                    <Info className="w-4 h-4 shrink-0" />
                                    Rates are subject to terms, periodic revision, and strict member eligibility rules.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Savings Deposit */}
                <ScrollReveal animation="fade-up">
                    <div className="grid md:grid-cols-[1fr_400px] gap-8 bg-card p-8 sm:p-12 rounded-[2.5rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-border transition-colors group relative overflow-hidden">

                        <div className="relative z-10 flex flex-col justify-between">
                            <div>
                                <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-bold uppercase tracking-wider rounded-md mb-4">High Liquidity</span>
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Savings Deposit</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-[600px]">
                                    A highly flexible account offering unhindered digital access to your funds while maintaining a steady rate of interest.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Flexible daily tenure</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Liquid withdrawal accessibility</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">Digital statements available in member portal</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://member.sb-fund.com" className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-xl font-semibold hover:bg-foreground/90 transition-all">
                                    Become a Member to Apply <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="relative z-10 bg-background border border-border rounded-3xl p-8 flex flex-col justify-center text-center shadow-inner">
                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Current Active Rate</p>
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-6xl font-bold text-foreground tracking-tighter">{rates["Savings Deposit"]?.toFixed(1) || "5.0"}</span>
                                <span className="text-3xl text-foreground font-semibold">%</span>
                            </div>
                            <span className="text-muted-foreground text-sm font-medium">per annum</span>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Smart Calculator Section */}
            <section id="calculator" className="pt-10 pb-24 px-6 relative z-10 scroll-mt-20">
                <ScrollReveal className="max-w-[1400px] mx-auto py-16 px-6 sm:px-12 bg-card rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Deposit Calculator</h2>
                        <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
                            Model your investment returns using our official active interest rates. Find the perfect product suited to your goals.
                        </p>
                    </div>
                    <AdvancedCalculator />
                </ScrollReveal>
            </section>

        </div>
    )
}
