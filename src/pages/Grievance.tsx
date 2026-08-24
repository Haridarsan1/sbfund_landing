import { Headset, AlertCircle, FileText, ChevronRight, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Grievance() {
    useSEO({
        title: "Customer Support & Grievance - Suriyan Benefit Fund",
        description: "Contact our dedicated support team or escalate issues to our formal Grievance Redressal Mechanism.",
        path: "/grievance"
    })

    return (
        <div className="pt-32 pb-24 px-6 sm:px-8 bg-background min-h-screen">
            <ScrollReveal className="text-center mb-20">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                    Support & Grievance
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl max-w-[700px] mx-auto leading-relaxed">
                    We ensure absolute accountability. From routine inquiries to established formal grievance redressal, your mutual growth and satisfaction are our primary focus.
                </p>
            </ScrollReveal>

            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 mb-20">
                {/* General Support */}
                <ScrollReveal animation="fade-up" delay={100} className="h-full">
                    <div className="bg-card border border-border rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full hover:border-primary/30 transition-colors">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                            <Headset className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4 tracking-tight">Standard Support</h2>
                        <p className="text-muted-foreground leading-relaxed mb-10 flex-grow text-[15.5px]">
                            Immediate assistance regarding deposits, routine member onboarding, or digital dashboard navigation. Our authenticated member ticketing system offers the fastest verified path to resolution.
                        </p>
                        <div className="space-y-4">
                            <a href="https://member.sb-fund.com" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-[0_4px_14px_0_rgb(var(--primary)_/_20%)] hover:-translate-y-0.5">
                                Open a Digital Ticket
                                <ChevronRight className="w-4 h-4" />
                            </a>
                            <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-background text-foreground py-4 rounded-xl font-bold hover:bg-muted transition-colors border border-border">
                                View General Contact Info
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Grievance Redressal */}
                <ScrollReveal animation="fade-up" delay={200} className="h-full">
                    <div className="bg-amber-50/50 border border-amber-200/60 rounded-[2rem] p-10 shadow-sm flex flex-col relative overflow-hidden h-full mix-blend-multiply">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none">
                            <AlertCircle className="w-48 h-48 text-amber-900" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-8">
                                <AlertCircle className="w-8 h-8 text-amber-900" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-amber-950 tracking-tight">Escalation Desk</h2>
                            <p className="text-amber-900/80 leading-relaxed mb-8 flex-grow text-[15.5px]">
                                If a standard ticket fails to yield a satisfactory resolution within 14 business days, or your case represents a critical escalation, you may activate the formal grievance protocol.
                            </p>
                            <div className="bg-white/80 rounded-2xl p-6 border border-amber-200/60 shadow-sm backdrop-blur-sm">
                                <p className="font-bold flex items-center gap-2 text-amber-950 mb-4">
                                    <FileText className="w-4 h-4 text-amber-600" /> Required Information:
                                </p>
                                <ul className="text-sm font-medium text-amber-900/70 space-y-3 mb-0">
                                    <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Established Member ID</li>
                                    <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Previous portal Ticket ID</li>
                                    <li className="flex items-start gap-2"><span className="text-amber-500">•</span> Complete documented context</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Visual Redressal Mechanism Tracker */}
            <ScrollReveal className="max-w-[1200px] mx-auto mb-20 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">The Resolution Journey</h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">We follow a transparent, time-bound procedure for resolving all formal grievances.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <div className="bg-card border border-border p-6 rounded-2xl w-full md:w-1/4 text-center shadow-sm relative">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-muted-foreground">1</div>
                        <h4 className="font-bold text-foreground">Submit Concern</h4>
                        <p className="text-xs text-muted-foreground mt-2">Via Portal or Email</p>
                    </div>

                    <ArrowDown className="md:-rotate-90 w-6 h-6 text-muted-foreground/30 flex-shrink-0" />

                    <div className="bg-card border border-border p-6 rounded-2xl w-full md:w-1/4 text-center shadow-sm relative">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-muted-foreground">2</div>
                        <h4 className="font-bold text-foreground">Acknowledgement</h4>
                        <p className="text-xs text-muted-foreground mt-2">Within 24 Hours</p>
                    </div>

                    <ArrowDown className="md:-rotate-90 w-6 h-6 text-muted-foreground/30 flex-shrink-0" />

                    <div className="bg-card border border-border p-6 rounded-2xl w-full md:w-1/4 text-center shadow-sm relative">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-muted-foreground">3</div>
                        <h4 className="font-bold text-foreground">Review & Resolution</h4>
                        <p className="text-xs text-muted-foreground mt-2">Maximum 14 Days</p>
                    </div>

                    <ArrowDown className="md:-rotate-90 w-6 h-6 text-muted-foreground/30 flex-shrink-0" />

                    <div className="bg-primary border border-primary p-6 rounded-2xl w-full md:w-1/4 text-center shadow-md relative scale-105">
                        <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-primary-foreground">4</div>
                        <h4 className="font-bold text-primary-foreground">Final Escalation</h4>
                        <p className="text-xs text-primary-foreground/80 mt-2">To Grievance Officer</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Official Grievance Officer */}
            <ScrollReveal animation="fade-up">
                <div className="bg-card border border-border rounded-[2.5rem] p-10 sm:p-14 shadow-sm text-center max-w-[1000px] mx-auto overflow-hidden relative">
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-[80px]"></div>

                    <div className="relative z-10 mb-10">
                        <h2 className="text-2xl font-bold mb-3 tracking-tight">Designated Grievance Officer</h2>
                        <p className="text-muted-foreground">Formal escalations strictly adhere to the designated official below.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 max-w-[750px] mx-auto bg-muted/30 p-8 rounded-3xl border border-border/50 shadow-inner relative z-10 text-left">
                        <div>
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Grievance Officer Name</p>
                            <p className="font-semibold text-[15px] border border-dashed border-border/70 inline-block px-3 py-1.5 rounded-lg w-full text-muted-foreground/60 bg-background/50">[BUSINESS CONFIRMATION PENDING]</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Official Role</p>
                            <p className="font-semibold text-[15px] text-foreground inline-block px-3 py-1.5 border border-transparent">Grievance Redressal Officer</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Official Email</p>
                            <p className="font-semibold text-[15px] text-primary break-all border border-dashed border-border/70 inline-block px-3 py-1.5 rounded-lg w-full bg-background/50">[PENDING]</p>
                        </div>
                        <div>
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Official Phone</p>
                            <p className="font-semibold text-[15px] border border-dashed border-border/70 inline-block px-3 py-1.5 rounded-lg w-full text-muted-foreground/60 bg-background/50">[PENDING]</p>
                        </div>
                        <div className="sm:col-span-2">
                            <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Office Address</p>
                            <p className="font-semibold text-[15px] border border-dashed border-border/70 inline-block px-3 py-1.5 rounded-lg w-full text-muted-foreground/60 bg-background/50">[BUSINESS CONFIRMATION REQUIRED: COMPLETE ADDRESS]</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

        </div>
    )
}
