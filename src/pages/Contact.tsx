import { MapPin, Phone, Mail, Clock, ShieldAlert, ChevronRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from '@/components/ScrollReveal'

export default function Contact() {
    return (
        <div className="pt-32 pb-24 px-6 sm:px-8 bg-background min-h-screen">
            <ScrollReveal className="text-center mb-20">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                    Connect With Us
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl max-w-[700px] mx-auto leading-relaxed">
                    We remain fully committed to supporting our members. Explore our secure digital support channels or reach out to our institutional headquarters directly.
                </p>
            </ScrollReveal>

            <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-10 mb-20">
                <ScrollReveal animation="fade-up" delay={100} className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 tracking-tight">Institutional Headquarters</h2>

                    <div className="bg-card p-8 rounded-[2rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-5 md:gap-6 items-start hover:border-border transition-colors">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">Registered Office</h3>
                            <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                                Suriyan Benefit Fund (Madras) Limited<br />
                                <span className="border border-dashed border-border/70 inline-block px-2 py-1 rounded bg-muted/30 mt-1">[BUSINESS CONFIRMATION REQUIRED: FULL STREET ADDRESS]</span><br />
                                Chennai, Tamil Nadu, 1994
                            </p>
                            <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-muted-foreground/60 bg-muted px-3 py-1.5 rounded-lg border border-border/50">
                                Official Location Pending
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-[2rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-5 md:gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Clock className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">Operational Hours</h3>
                            <p className="text-muted-foreground text-[15px] leading-relaxed">
                                Monday - Saturday: 10:00 AM - 5:00 PM<br />
                                Sunday & Public Holidays: <span className="text-foreground font-semibold">Closed</span>
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200} className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 tracking-tight">Dedicated Support</h2>

                    <div className="bg-card p-8 rounded-[2rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-5 md:gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Phone className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">Telephonic Support</h3>
                            <p className="text-muted-foreground text-[15px] mb-3">For general inquiries regarding deposit products and member registration logic.</p>
                            <p className="font-bold text-xl text-foreground inline-block px-3 py-1.5 border border-dashed border-border rounded-lg bg-muted/30 text-muted-foreground/60">[CONFIRMATION PENDING]</p>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-[2rem] border border-border shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex gap-5 md:gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-[18px] mb-2">Electronic Mail</h3>
                            <p className="text-muted-foreground text-[15px] mb-3">Secure communication for detailed queries or document clarifications.</p>
                            <a href="mailto:support@sb-fund.com" className="font-bold text-xl text-primary hover:text-foreground transition-colors hover:underline underline-offset-4">
                                support@sb-fund.com
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <ScrollReveal className="max-w-[1200px] mx-auto">
                <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 sm:p-14 mb-8 shadow-sm relative overflow-hidden mix-blend-multiply">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none">
                        <ShieldAlert className="w-64 h-64 text-slate-900" />
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                                    <ShieldAlert className="w-6 h-6 text-slate-700" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Grievance Redressal</h2>
                            </div>
                            <p className="text-slate-600 mb-8 leading-relaxed text-[15.5px]">
                                We uphold strict transparency standards. Should your routine support requests go unresolved, we maintain a dedicated escalation matrix verified by a statutory Grievance Officer.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Link to="/grievance" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
                                    View Resolution Process
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white/80 p-8 rounded-3xl border border-slate-200 shadow-sm backdrop-blur-sm">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
                                <HelpCircle className="w-5 h-5 text-slate-500" /> Member Fast-Track
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                As a registered member, your quickest path to resolution is strictly through authenticated internal support tickets.
                            </p>
                            <a href="https://member.sb-fund.com" className="w-full flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-xl text-[15px] font-bold hover:bg-slate-50 transition-colors border-2 border-slate-200">
                                Open Authenticated Ticket
                            </a>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
}
