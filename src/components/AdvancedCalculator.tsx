import { useState, useMemo, useEffect } from 'react'
import { Calculator, ChevronRight, Info, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react'
import { getActiveInterestRates } from '@/lib/rates.functions'
import { calculateInterestDetails } from '@/lib/deposit'

export function AdvancedCalculator() {
    const [rates, setRates] = useState<Record<string, number>>({})

    useEffect(() => {
        getActiveInterestRates().then(setRates)
    }, [])

    // UI States
    const [calcScheme, setCalcScheme] = useState<"Fixed Deposit" | "Recurring Deposit" | "Savings Deposit">("Fixed Deposit")
    const [calcAmount, setCalcAmount] = useState(100000)
    const [calcTenure, setCalcTenure] = useState(12)

    // Boundaries based on scheme
    const minAmount = calcScheme === "Recurring Deposit" ? 1000 : 10000
    const maxAmount = calcScheme === "Recurring Deposit" ? 1000000 : 10000000

    // Safety check boundaries on scheme change
    useEffect(() => {
        if (calcAmount < minAmount) setCalcAmount(minAmount)
        if (calcAmount > maxAmount) setCalcAmount(maxAmount)
    }, [calcScheme, minAmount, maxAmount, calcAmount])

    // Official Rate Logic
    const defaultRate = useMemo(() => {
        if (rates[calcScheme]) return rates[calcScheme];
        if (calcScheme === "Fixed Deposit") return 7.0;
        if (calcScheme === "Recurring Deposit") return 6.5;
        return 5.0; // Savings
    }, [rates, calcScheme])

    const [customRate, setCustomRate] = useState<number | null>(null)

    useEffect(() => {
        setCustomRate(defaultRate)
    }, [calcScheme, defaultRate])

    const activeRate = customRate !== null ? customRate : defaultRate;

    const option = calcScheme === "Recurring Deposit" ? "Cumulative" : "Cumulative / On Maturity"

    const calcResult = useMemo(() => {
        return calculateInterestDetails(calcAmount, activeRate, calcTenure, calcScheme, option)
    }, [calcScheme, calcAmount, calcTenure, activeRate, option])

    const totalInvestment = calcScheme === "Recurring Deposit" ? calcAmount * calcTenure : calcAmount;
    const interestPercentage = (calcResult.totalInterest / calcResult.maturityValue) * 100;

    return (
        <div className="max-w-[1200px] mx-auto text-left">
            <div className="bg-card rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border overflow-hidden flex flex-col lg:flex-row">

                {/* Input Panel */}
                <div className="p-8 sm:p-12 lg:w-3/5 border-b lg:border-b-0 lg:border-r border-border bg-background relative">
                    <div className="flex items-center gap-4 mb-10 border-b border-border pb-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                            <Calculator className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Deposit Calculator</h2>
                            <p className="text-[15px] text-muted-foreground mt-1">Estimate maturity using official active rates</p>
                        </div>
                    </div>

                    <div className="space-y-10">
                        {/* Segmented Control for Product */}
                        <div>
                            <label className="block text-[13px] font-bold text-muted-foreground uppercase tracking-widest mb-4">Select Product</label>
                            <div className="flex bg-muted/50 p-1.5 rounded-2xl border border-border">
                                {["Fixed Deposit", "Recurring Deposit", "Savings Deposit"].map((scheme) => (
                                    <button
                                        key={scheme}
                                        onClick={() => {
                                            setCalcScheme(scheme as any)
                                            if (scheme === "Savings Deposit") setCalcTenure(12) // Default savings comparison to 12 months
                                        }}
                                        className={`flex-1 py-3 text-[14px] font-bold rounded-xl transition-all ${calcScheme === scheme
                                            ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                                            : "text-muted-foreground hover:text-foreground"
                                            }`}
                                    >
                                        {scheme.split(" ")[0]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Amount Input */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="block text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                                    {calcScheme === "Recurring Deposit" ? "Monthly Instalment" : "Deposit Amount"}
                                </label>
                                <div className="text-right">
                                    <div className="relative inline-flex items-center">
                                        <span className="text-xl font-bold text-primary mr-1">₹</span>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            className="text-2xl sm:text-3xl font-bold text-foreground bg-transparent border-0 outline-none max-w-[200px] text-right p-0 focus:ring-0"
                                            value={calcAmount.toLocaleString('en-IN')}
                                            onChange={(e) => {
                                                const rawValue = e.target.value.replace(/,/g, '');
                                                const val = Number(rawValue);
                                                if (!isNaN(val)) setCalcAmount(val);
                                            }}
                                            onBlur={() => {
                                                if (calcAmount < minAmount) setCalcAmount(minAmount)
                                                if (calcAmount > maxAmount) setCalcAmount(maxAmount)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <input
                                type="range"
                                min={minAmount}
                                max={maxAmount}
                                step={calcScheme === "Recurring Deposit" ? 500 : 5000}
                                className="w-full h-2.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary border border-border/50"
                                value={calcAmount}
                                onChange={e => setCalcAmount(Number(e.target.value))}
                            />

                            <div className="flex justify-between text-[12px] font-semibold text-muted-foreground mt-3 uppercase tracking-wider">
                                <span>₹{(minAmount).toLocaleString('en-IN')}</span>
                                <span>₹{(maxAmount).toLocaleString('en-IN')}+</span>
                            </div>
                        </div>

                        {/* Tenure Input */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="block text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                                    Tenure (Months)
                                </label>
                                <span className="text-2xl sm:text-3xl font-bold text-foreground">{calcTenure} <span className="text-lg text-muted-foreground">Mo</span></span>
                            </div>

                            {calcScheme === "Savings Deposit" ? (
                                <div className="bg-primary/5 border border-primary/20 text-primary p-4 rounded-xl text-sm font-medium flex items-center gap-3">
                                    <Info className="w-5 h-5 shrink-0" />
                                    Savings deposits do not have a fixed tenure. Adjusting months here simply projects potential earnings over time.
                                </div>
                            ) : null}

                            <input
                                type="range"
                                min="1"
                                max="60"
                                step="1"
                                className="w-full h-2.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary border border-border/50"
                                value={calcTenure}
                                onChange={e => setCalcTenure(Number(e.target.value))}
                            />

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[12, 24, 36, 48, 60].map(m => (
                                    <button
                                        key={m}
                                        onClick={() => setCalcTenure(m)}
                                        className={`flex-1 min-w-[60px] py-2 text-sm font-semibold rounded-lg border transition-all ${calcTenure === m ? 'bg-foreground text-background border-foreground' : 'bg-background text-muted-foreground border-border hover:bg-muted'
                                            }`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Interest Rate Input */}
                        <div>
                            <div className="flex justify-between items-end mb-4">
                                <label className="block text-[13px] font-bold text-muted-foreground uppercase tracking-widest">
                                    Interest Rate (% p.a.)
                                </label>
                                <div className="text-right">
                                    <div className="relative inline-flex items-center">
                                        <input
                                            type="number"
                                            step="0.1"
                                            min="0.1"
                                            max="20"
                                            className="text-2xl sm:text-3xl font-bold text-foreground bg-transparent border-0 outline-none max-w-[120px] text-right p-0 focus:ring-0"
                                            value={activeRate}
                                            onChange={(e) => {
                                                const val = Number(e.target.value)
                                                setCustomRate(val)
                                            }}
                                        />
                                        <span className="text-xl font-bold text-primary ml-1">%</span>
                                    </div>
                                </div>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="15"
                                step="0.1"
                                className="w-full h-2.5 bg-muted rounded-full appearance-none cursor-pointer accent-primary border border-border/50"
                                value={activeRate}
                                onChange={e => setCustomRate(Number(e.target.value))}
                            />
                            <div className="flex justify-between text-[12px] font-semibold text-muted-foreground mt-3 uppercase tracking-wider">
                                <span>1%</span>
                                <span>15%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Result Panel */}
                <div className="p-8 sm:p-12 lg:w-2/5 bg-slate-50 flex flex-col relative z-0">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none -mr-8 -mt-8 z-0"></div>

                    <div className="relative z-10 flex-grow">
                        <div className="flex justify-between items-center mb-8 border-b border-border/50 pb-6">
                            <span className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest">Applicable Rate</span>
                            <div className="bg-white border border-border px-3 py-1.5 rounded-lg shadow-sm font-bold text-primary flex items-center gap-2">
                                {activeRate.toFixed(1)}% <span className="text-muted-foreground font-medium text-sm">p.a.</span>
                            </div>
                        </div>

                        <div className="text-center mb-10">
                            <p className="text-[14px] font-bold text-foreground mb-3 uppercase tracking-widest">Estimated Maturity</p>
                            <p className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">₹{calcResult.maturityValue.toLocaleString('en-IN')}</p>
                            <p className="text-slate-500 font-medium mt-3">on {calcResult.maturityDateStr}</p>
                        </div>

                        {/* Breakdown Visual */}
                        <div className="mb-10">
                            <div className="h-5 w-full bg-slate-200 rounded-full overflow-hidden flex shadow-inner">
                                <div className="h-full bg-slate-400 transition-all duration-700" style={{ width: `${100 - interestPercentage}%` }}></div>
                                <div className="h-full bg-primary transition-all duration-700" style={{ width: `${interestPercentage}%` }}></div>
                            </div>

                            <div className="mt-5 space-y-3">
                                <div className="flex justify-between text-[15px] font-medium text-slate-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm bg-slate-400"></div> Total Principal
                                    </div>
                                    <span className="font-bold text-slate-900">₹{totalInvestment.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-[15px] font-medium text-slate-700">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-sm bg-primary"></div> Total Interest
                                    </div>
                                    <span className="font-bold text-slate-900">+₹{calcResult.totalInterest.toLocaleString('en-IN')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Explanation & Disclaimer */}
                        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm mb-10">
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                <strong className="text-slate-900 block mb-1">How this estimate is calculated:</strong>
                                This tool projects your maturity based on the {calcScheme} compounding structure active in the member portal using a rate of {activeRate.toFixed(2)}%.
                            </p>
                            <p className="text-xs text-slate-400 mt-3 border-t border-slate-100 pt-3">
                                * Estimated maturity is indicative. Final maturity is subject to product terms and the official rate applicable on deposit creation.
                            </p>
                        </div>
                    </div>

                    {/* Trust Signals & CTA */}
                    <div className="relative z-10 border-t border-slate-200 pt-8 mt-auto">
                        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8 text-[12px] font-bold text-slate-600">
                            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Transparent estimate</div>
                            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-primary" /> Core member rates</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Verified logic</div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Online workflow</div>
                        </div>

                        <div className="space-y-3">
                            <a href="https://member.sb-fund.com" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                                Become a Member to Apply <ChevronRight className="w-4 h-4" />
                            </a>
                            <a href="https://member.sb-fund.com" className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                                Already a member? Login
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
