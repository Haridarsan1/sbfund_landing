import { useEffect, useState, useMemo } from 'react'
import { getActiveInterestRates } from '@/lib/rates.functions'
import { ArrowRight, CheckCircle2, Lock, Calculator, UserPlus, Send, LineChart, ChevronDown } from 'lucide-react'
import { calculateInterestDetails } from '@/lib/deposit'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function App() {
  const [rates, setRates] = useState<Record<string, number>>({})

  // Calculator State
  const [calcScheme, setCalcScheme] = useState("Fixed Deposit")
  const [calcAmount, setCalcAmount] = useState(100000)
  const [calcTenure, setCalcTenure] = useState(12)

  useEffect(() => {
    getActiveInterestRates().then(setRates)
  }, [])

  const calcResult = useMemo(() => {
    const rate = rates[calcScheme] || (calcScheme === "Fixed Deposit" ? 7.0 : calcScheme === "Recurring Deposit" ? 6.5 : 5.0)
    const option = calcScheme === "Recurring Deposit" ? "Cumulative" : "Cumulative / On Maturity"
    return calculateInterestDetails(calcAmount, rate, calcTenure, calcScheme, option)
  }, [calcScheme, calcAmount, calcTenure, rates])

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <a href="#" className="flex items-center gap-2">
              <img src="/sbf-logo.png" alt="SBF Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-foreground leading-none tracking-tight">
                  Suriyan Benefit Fund
                </span>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">
                  (Madras) Limited
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-muted-foreground">
            <a href="#" className="text-primary font-semibold">Home</a>
            <a href="#products" className="hover:text-primary transition-colors">Deposits</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Calculator</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="https://member.sb-fund.com/auth" className="hidden sm:flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md font-semibold text-[14px] hover:bg-muted transition-colors">
              <Lock className="w-4 h-4" />
              Member Login
            </a>
            <a href="https://member.sb-fund.com/apply-share" className="bg-primary text-primary-foreground px-4 py-2 sm:px-5 rounded-md font-semibold text-[14px] hover:bg-primary/90 transition-colors shadow-sm">
              Apply for Membership
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 px-6 bg-muted/40">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="pr-0 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-foreground leading-[1.1] mb-6 tracking-tight">
              Build Your Savings.<br />
              Secure Your Future.
            </h1>
            <p className="text-[17px] sm:text-[18px] text-muted-foreground mb-10 leading-relaxed max-w-[540px]">
              Suriyan Benefit Fund (Madras) Limited is a compliant Nidhi Company (Mutual Benefit Society) helping members grow their wealth securely with trusted deposit schemes.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <a href="https://member.sb-fund.com/apply-share" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-[15px] font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-sm">
                Apply for Membership
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#products" className="w-full sm:w-auto border-2 border-primary text-primary px-8 py-3.5 rounded-md text-[15px] font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 bg-transparent">
                Explore Deposit Plans
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-[14px] text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Regulated Entity
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Member Focused
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Digital & Secure
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-muted order-first lg:order-last">
             <img 
               src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
               alt="Family planning finances and saving money securely"
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 sm:py-28 px-6 bg-background">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Our Deposit Schemes</h2>
          <p className="text-muted-foreground text-[16px] sm:text-[18px] max-w-[600px] mx-auto">
            Transparent, compliant, and highly rewarding deposit products exclusively for our members.
          </p>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Fixed Deposit */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Fixed Deposit (FD)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                  Lock in a lump sum for a fixed tenure and earn guaranteed high returns.
                </p>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-primary tracking-tighter">{rates["Fixed Deposit"]?.toFixed(1) || "7.0"}</span>
                <span className="text-2xl text-primary font-semibold">%</span>
                <span className="text-muted-foreground ml-1 text-sm font-medium">p.a.</span>
              </div>
              <p className="text-sm font-medium text-foreground mb-8 border-l-2 border-primary/40 pl-3">
                Tenure: 12 - 36 Months
              </p>
              <a href="https://member.sb-fund.com/deposit-entry" className="mt-auto w-full text-center bg-primary text-primary-foreground py-3.5 rounded-md font-semibold text-[15px] hover:bg-primary/90 transition-colors shadow-sm">
                Apply for FD
              </a>
            </div>

            {/* Recurring Deposit */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Recurring Deposit (RD)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                  Build your corpus steadily with fixed monthly contributions.
                </p>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-primary tracking-tighter">{rates["Recurring Deposit"]?.toFixed(1) || "6.5"}</span>
                <span className="text-2xl text-primary font-semibold">%</span>
                <span className="text-muted-foreground ml-1 text-sm font-medium">p.a.</span>
              </div>
              <p className="text-sm font-medium text-foreground mb-8 border-l-2 border-primary/40 pl-3">
                Tenure: 12 - 36 Months
              </p>
              <a href="https://member.sb-fund.com/deposit-entry" className="mt-auto w-full text-center bg-primary text-primary-foreground py-3.5 rounded-md font-semibold text-[15px] hover:bg-primary/90 transition-colors shadow-sm">
                Apply for RD
              </a>
            </div>

            {/* Savings Deposit */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">Savings Deposit</h3>
                <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                  Highly flexible deposits allowing easy access to your funds with steady interest.
                </p>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-primary tracking-tighter">{rates["Savings Deposit"]?.toFixed(1) || "5.0"}</span>
                <span className="text-2xl text-primary font-semibold">%</span>
                <span className="text-muted-foreground ml-1 text-sm font-medium">p.a.</span>
              </div>
              <p className="text-sm font-medium text-foreground mb-8 border-l-2 border-primary/40 pl-3">
                Tenure: Flexible
              </p>
              <a href="https://member.sb-fund.com/deposit-entry" className="mt-auto w-full text-center bg-background border-2 border-primary text-primary py-3 rounded-md font-semibold text-[15px] hover:bg-primary/5 transition-colors">
                Apply for Savings
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-6 bg-muted/20 border-y border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">How It Works</h2>
            <p className="text-muted-foreground text-[16px] sm:text-[18px]">Start saving with us in four simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-border z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                <UserPlus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-[17px] mb-2">1. Become a Member</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Register online and complete your KYC to become a recognized member.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-[17px] mb-2">2. Choose a Scheme</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Select from FD, RD, or Savings based on your financial goals.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                <Send className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-[17px] mb-2">3. Deposit Funds</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Transfer funds securely via NEFT, RTGS, UPI, or cheque.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-sm">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-[17px] mb-2">4. Track & Grow</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Watch your savings grow through our secure member dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Calculator */}
      <section id="calculator" className="py-20 sm:py-28 px-6 bg-background">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden flex flex-col md:flex-row">
            
            {/* Input Form */}
            <div className="p-8 sm:p-12 md:w-1/2 border-b md:border-b-0 md:border-r border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">Interest Calculator</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Scheme Type</label>
                  <div className="relative">
                    <select 
                      className="w-full appearance-none border border-input rounded-md px-4 py-3.5 text-foreground bg-background focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors shadow-sm"
                      value={calcScheme}
                      onChange={e => setCalcScheme(e.target.value)}
                    >
                      <option value="Fixed Deposit">Fixed Deposit (FD)</option>
                      <option value="Recurring Deposit">Recurring Deposit (RD)</option>
                      <option value="Savings Deposit">Savings Deposit (SD)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {calcScheme === "Recurring Deposit" ? "Monthly Instalment (₹)" : "Deposit Amount (₹)"}
                  </label>
                  <input 
                    type="number"
                    className="w-full border border-input rounded-md px-4 py-3.5 text-foreground bg-background focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors shadow-sm"
                    value={calcAmount}
                    onChange={e => setCalcAmount(Number(e.target.value) || 0)}
                    min="0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Tenure (Months)</label>
                  <input 
                    type="number"
                    className="w-full border border-input rounded-md px-4 py-3.5 text-foreground bg-background focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring transition-colors shadow-sm"
                    value={calcTenure}
                    onChange={e => setCalcTenure(Number(e.target.value) || 0)}
                    min="1"
                  />
                </div>
              </div>
            </div>
            
            {/* Results */}
            <div className="p-8 sm:p-12 md:w-1/2 bg-muted/30 flex flex-col justify-center">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">Projected Returns</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-foreground">Total Investment</span>
                  <span className="font-semibold text-foreground">
                    ₹{calcScheme === "Recurring Deposit" ? (calcAmount * calcTenure).toLocaleString('en-IN') : calcAmount.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-foreground">Interest Rate</span>
                  <span className="font-semibold text-foreground">{calcResult.rate.toFixed(1)}% p.a.</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <span className="text-foreground">Total Interest Earned</span>
                  <span className="font-semibold text-emerald-600">+ ₹{calcResult.totalInterest.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-xl border border-border text-center shadow-sm">
                <p className="text-muted-foreground text-sm font-semibold mb-2 uppercase tracking-wide">Maturity Value</p>
                <p className="text-4xl font-bold text-foreground tracking-tight">₹{calcResult.maturityValue.toLocaleString('en-IN')}</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 px-6 bg-muted/20">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-[16px] sm:text-[18px]">Everything you need to know about deposits and rules.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-foreground font-semibold text-left text-[16px] py-6 hover:no-underline hover:text-primary">
                Is my money safe with Suriyan Benefit Fund?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6">
                Yes, as a declared Nidhi Company under Section 406 of the Companies Act, 2013, we operate under strict compliance with the Nidhi Rules, 2014 regulated by the Ministry of Corporate Affairs (MCA). We lend exclusively to our members against secure collateral (like gold and property), ensuring high asset quality and safety of deposits.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-foreground font-semibold text-left text-[16px] py-6 hover:no-underline hover:text-primary">
                Can I withdraw my Fixed Deposit prematurely?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6">
                Premature withdrawals are permitted subject to the following rules: The Fund will not repay any deposit within a period of 3 months from the date of its acceptance. If a deposit is withdrawn after 3 months but before 6 months, no interest is payable. If withdrawn after 6 months but before maturity, the rate of interest payable will be reduced by 2% from the rate ordinarily paid for the period the deposit had run.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-foreground font-semibold text-left text-[16px] py-6 hover:no-underline hover:text-primary">
                How is interest calculated and paid?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6">
                For Fixed Deposits, you can choose Monthly, Quarterly, Half-Yearly, Yearly, or Cumulative payouts. Cumulative deposits and Recurring Deposits are compounded quarterly. Savings deposits earn simple interest on the daily minimum balance, credited periodically.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-foreground font-semibold text-left text-[16px] py-6 hover:no-underline hover:text-primary">
                Is TDS deducted on interest earned?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6">
                Yes, Income tax in terms of provisions of the Income Tax Act will be deducted on the Interest payable/credited. Persons desiring non-deduction of tax at source on Interest exceeding the limit set out in the Finance Act are required to submit Form 15G in duplicate.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-foreground font-semibold text-left text-[16px] py-6 hover:no-underline hover:text-primary">
                Do I need to be a member to open a deposit account?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6">
                Yes, by law, a Nidhi company can only accept deposits from and lend to its registered members. Becoming a member is a simple process of subscribing to a nominal number of equity shares during registration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar pt-16 pb-8 px-6 text-sidebar-foreground text-sm">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-sidebar-border pb-12 mb-8">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white rounded-md p-1.5 shrink-0">
                  <img src="/sbf-logo.png" alt="SBF Logo" className="h-8 w-8 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sidebar-foreground text-[15px] leading-tight tracking-wide">
                    SURIYAN BENEFIT FUND
                  </span>
                  <span className="text-[11px] text-sidebar-foreground/70 font-medium mt-0.5">
                    (MADRAS) LIMITED
                  </span>
                </div>
              </div>
              <p className="leading-relaxed text-[13.5px] text-sidebar-foreground/80 max-w-[320px]">
                A compliant Nidhi Company growing your wealth securely through trusted financial services, exclusively for our registered members.
              </p>
            </div>
            
            <div>
              <h4 className="text-sidebar-foreground font-bold mb-5 tracking-wide uppercase text-xs">Quick Links</h4>
              <ul className="space-y-3.5 text-[13.5px]">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-primary transition-colors">Deposit Schemes</a></li>
                <li><a href="#calculator" className="hover:text-primary transition-colors">Interest Calculator</a></li>
                <li><a href="https://member.sb-fund.com/auth" className="hover:text-primary transition-colors">Member Login</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sidebar-foreground font-bold mb-5 tracking-wide uppercase text-xs">Legal</h4>
              <ul className="space-y-3.5 text-[13.5px]">
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-sidebar-foreground/50 cursor-not-allowed">Terms & Conditions (Pending)</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()} className="text-sidebar-foreground/50 cursor-not-allowed">Privacy Policy (Pending)</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sidebar-foreground/70 text-[12.5px]">
            <p>© {new Date().getFullYear()} Suriyan Benefit Fund (Madras) Limited. All rights reserved.</p>
            <p>Declared as a NIDHI Company by Govt of India (Regd No: 18-25018 of 93 | ESTD. 1994).</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
