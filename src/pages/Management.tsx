import { useSEO } from '@/hooks/useSEO'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Users, Info } from 'lucide-react'

export default function Management() {
    useSEO({
        title: "Board & Management - Suriyan Benefit Fund",
        description: "Meet the leadership and governance body ensuring strict compliance and member-focused growth at Suriyan Benefit Fund.",
        path: "/management"
    })

    return (
        <div className="bg-background min-h-screen pt-32 pb-24">
            <div className="max-w-[900px] mx-auto px-6">
                <ScrollReveal className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Board & Management</h1>
                    <p className="text-lg text-muted-foreground max-w-[700px] mx-auto leading-relaxed">
                        Our leadership oversees stringent compliance and strives relentlessly towards mutual growth for all registered members.
                    </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={100}>
                    <div className="bg-card border border-border rounded-[2.5rem] p-8 sm:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="relative z-10 w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-10 border-[6px] border-background shadow-sm">
                            <Users className="w-10 h-10 text-muted-foreground/60" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 text-foreground">Leadership Information Pending</h2>
                        <div className="bg-muted/50 border border-border/50 inline-flex items-start gap-5 p-6 sm:p-8 rounded-3xl max-w-[600px] text-left">
                            <Info className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                            <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">
                                Detailed management biographies, director names, and official DINs (Director Identification Numbers) will be securely published here as soon as official corporate data is cleared for public display. We uphold this placeholder to strictly prevent the presentation of unverified information.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}
