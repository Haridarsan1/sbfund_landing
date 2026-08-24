import { useSEO } from '@/hooks/useSEO'
import { ScrollReveal } from '@/components/ScrollReveal'
import { FileText, Building2, Scale, FileLock2, Info } from 'lucide-react'

const DocumentPlaceholder = ({ title, type }: { title: string, type: string }) => (
    <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-card">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
                <h5 className="font-semibold text-[15px]">{title}</h5>
                <p className="text-[13px] text-muted-foreground">{type}</p>
            </div>
        </div>
        <span className="text-[11px] font-semibold tracking-wider uppercase bg-muted text-muted-foreground px-2.5 py-1 rounded-md shrink-0 ml-4">Pending</span>
    </div>
);

export default function Transparency() {
    useSEO({
        title: "Trust & Transparency - Suriyan Benefit Fund",
        description: "Review our corporate information, statutory disclosures, annual reports, and policies. We maintain strict compliance as a registered Nidhi Company.",
        path: "/transparency"
    })

    return (
        <div className="bg-background min-h-screen pt-32 pb-24">
            <div className="max-w-[900px] mx-auto px-6">
                <ScrollReveal className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Trust & Transparency</h1>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
                        Official corporate disclosures, financial reports, and statutory policies will be securely published here upon business approval.
                    </p>
                </ScrollReveal>

                <div className="space-y-10">
                    {/* Corporate Info */}
                    <ScrollReveal animation="fade-up" delay={100}>
                        <div className="bg-card border border-border rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <Building2 className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight mb-1">Corporate Information</h2>
                                    <p className="text-sm text-muted-foreground">Official registered entity details</p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Company Name</p>
                                    <p className="text-foreground font-semibold text-[17px]">Suriyan Benefit Fund (Madras) Limited</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">CIN</p>
                                    <p className="text-foreground font-medium text-muted-foreground/50 border border-dashed border-border inline-block px-3 py-1.5 rounded-lg w-full sm:w-auto text-sm bg-muted/30">[BUSINESS CONFIRMATION REQUIRED]</p>
                                </div>
                                <div className="sm:col-span-2">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Registered Address</p>
                                    <p className="text-foreground font-medium text-muted-foreground/50 border border-dashed border-border inline-block px-3 py-1.5 rounded-lg w-full text-sm bg-muted/30">[BUSINESS CONFIRMATION REQUIRED: COMPLETE OFFICIAL ADDRESS]</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Reports */}
                    <ScrollReveal animation="fade-up" delay={200}>
                        <div className="bg-card border border-border rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <FileLock2 className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight mb-1">Reports & Disclosures</h2>
                                    <p className="text-sm text-muted-foreground">Official annual reports and structural audits</p>
                                </div>
                            </div>

                            <div className="bg-muted/50 border border-border/50 rounded-2xl p-6 flex gap-4 mb-8">
                                <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                <p className="text-[15px] text-muted-foreground font-medium leading-relaxed">
                                    Official financial statements and audit reports will be securely available for public download here upon final business confirmation and publication approval.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <DocumentPlaceholder title="Annual Report FY 2024-25" type="PDF Document" />
                                <DocumentPlaceholder title="Auditor's Report" type="PDF Document" />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Policies */}
                    <ScrollReveal animation="fade-up" delay={300}>
                        <div className="bg-card border border-border rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <Scale className="w-7 h-7 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight mb-1">Statutory Policies</h2>
                                    <p className="text-sm text-muted-foreground">Governance and public compliance policies</p>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm font-medium">
                                <DocumentPlaceholder title="Nidhi Rules Compliance Policy" type="Internal Policy" />
                                <DocumentPlaceholder title="Digital Privacy Policy" type="Public Policy" />
                                <DocumentPlaceholder title="Grievance Redressal Policy" type="Public Policy" />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
