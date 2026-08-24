import { ShieldCheck, Users, Share2, ArrowRight } from "lucide-react";

export default function Membership() {
    return (
        <div className="pt-32 pb-20 px-6 sm:px-8 max-w-[1000px] mx-auto min-h-screen">
            <div className="flex flex-col items-center text-center mb-16">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Become a Member
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl max-w-[600px] leading-relaxed">
                    By law, Suriyan Benefit Fund offers deposit services exclusively to our shareholding members. Joining us is the first step towards securing your financial future.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-3">What is Membership?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        As a registered Nidhi Company (Mutual Benefit Society) declared under Section 406 of the Companies Act, 2013, we hold a unique status. We are legally mandated to accept deposits from, and lend money to, our members only. This closed-loop system ensures high security, better rates, and a shared focus on mutual financial growth.
                    </p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                    <Share2 className="h-10 w-10 text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-3">What are Shares?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        To become a member, you purchase a nominal number of equity shares during registration. This makes you a recognized shareholder in Suriyan Benefit Fund. As a shareholder, you own a piece of the institution, unlocking access to our high-yield Fixed Deposits, Recurring Deposits, and Savings accounts.
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-10">The Digital Onboarding Process</h2>

            <div className="space-y-6 mb-16">
                {[
                    { title: "1. Register Online", desc: "Start your application on our digital portal." },
                    { title: "2. Complete e-KYC", desc: "Upload your PAN, Aadhar, and a photograph securely." },
                    { title: "3. Share Payment", desc: "Pay for your initial equity shares via Razorpay, NEFT, or DD." },
                    { title: "4. Admin Verification", desc: "Our team verifies your KYC and approves the membership." },
                    { title: "5. Digital Certificate", desc: "Receive your Share Certificate instantly as a secure PDF." },
                    { title: "6. Open Deposits", desc: "Log in to your member dashboard to open FDs, RDs, or Savings accounts." }
                ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                            {idx + 1}
                        </div>
                        <div>
                            <h3 className="font-bold text-[17px] text-foreground mb-1">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 sm:p-12 text-center border border-primary/20">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Start Your Journey Today</h2>
                <p className="text-muted-foreground mb-8 max-w-[500px] mx-auto">
                    Registration takes less than 5 minutes. Become a shareholder and start building your secure financial future with our member-exclusive deposits.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="https://member.sb-fund.com/" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md text-[15px] font-semibold hover:bg-primary/90 transition-colors shadow-sm">
                        Apply for Membership
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}
