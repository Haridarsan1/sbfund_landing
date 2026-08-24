import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { ScrollReveal } from '@/components/ScrollReveal'

export default function FAQ() {
    useSEO({
        title: "Knowledge Base & FAQ - Suriyan Benefit Fund",
        description: "Detailed answers on SB Fund Membership, Shares, Deposits, Calculator logic, Digital Services, and Support.",
        path: "/faq"
    })

    const categories = [
        {
            title: "Membership",
            items: [
                { q: "What is SB Fund?", a: "Suriyan Benefit Fund (Madras) Limited is a compliant Nidhi Company dedicated to mutual benefit principles, focusing exclusively on cultivating the habit of secure savings among its registered members." },
                { q: "Who is eligible for membership?", a: "Individuals capable of satisfying complete digital KYC requirements can apply. Nidhi guidelines dictate that we cannot engage with non-members, minors (unless represented legally), or corporate entities." },
            ]
        },
        {
            title: "Shares",
            items: [
                { q: "Why is shareholding mandatory?", a: "Purchasing equity shares formally inducts you into the fund as a recognized member. Statutory regulations stipulate that deposit capabilities remain restricted exclusively to verified shareholders." },
                { q: "Are share certificates provided?", a: "Yes. Once payment is realized and approved, secure digital Share Certificates are automatically issued directly inside your Member Portal." }
            ]
        },
        {
            title: "Deposits",
            items: [
                { q: "What deposit structures exist?", a: "We offer member-exclusive Fixed Deposits (FD), Recurring Deposits (RD), and Savings accounts. You can inspect active rates on our Deposits page." },
                { q: "Are non-members permitted to deposit?", a: "No. Nidhi regulations strictly forbid financial operations with the general public." }
            ]
        },
        {
            title: "Calculator",
            items: [
                { q: "Is the calculated maturity guaranteed?", a: "The calculator provides a rigorous estimate modeled exactly on our production logic. However, final maturity amounts are subject to the specific product terms and interest rate effective upon creation." },
                { q: "What compounding logic is used?", a: "We use the same compounding rules formalized inside the Member Portal. RD utilizes standard quarterly compounding logic, while FD varies based on selected payout frequencies (Periodic vs Cumulative)." }
            ]
        },
        {
            title: "Digital Services",
            items: [
                { q: "Can I manage deposits online?", a: "Absolutely. The digital member platform handles onboarding, deposit requests, and digital document provisioning completely online." },
                { q: "Are digital receipts legally valid?", a: "Yes, all active deposit receipts and share certificates provisioned via the member portal are electronically recorded and formally valid." }
            ]
        },
        {
            title: "Support",
            items: [
                { q: "How do I securely escalate an issue?", a: "Verified members can raise authenticated support tickets directly within the member platform. For external queries, use our primary Contact options or the 4-step Grievance Redressal mechanism." }
            ]
        }
    ]

    return (
        <div className="pt-32 pb-24 px-6 sm:px-8 bg-background min-h-screen">
            <ScrollReveal className="text-center mb-20 max-w-[800px] mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                    Knowledge Base
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                    Access rigorous answers regarding statutory membership, our secure deposit products, and the digital portal capabilities.
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                    <Link to="/deposits" className="text-primary font-bold hover:underline">View Deposits</Link>
                    <span className="text-muted-foreground">•</span>
                    <a href="/#calculator" className="text-primary font-bold hover:underline">Use Calculator</a>
                </div>
            </ScrollReveal>

            <div className="max-w-[900px] mx-auto space-y-16">
                {categories.map((cat, categoryIdx) => (
                    <ScrollReveal key={cat.title} animation="fade-up" delay={categoryIdx * 100}>
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight border-b border-border pb-4">
                                {cat.title}
                            </h2>
                            <Accordion type="single" collapsible className="w-full bg-card rounded-[1.5rem] border border-border px-6 shadow-sm">
                                {cat.items.map((item, i) => (
                                    <AccordionItem key={i} value={`${categoryIdx}-${i}`} className={i === cat.items.length - 1 ? "border-transparent" : "border-border"}>
                                        <AccordionTrigger className="text-foreground font-semibold text-left text-[16px] py-6 hover:no-underline hover:text-primary outline-none transition-colors">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pb-6 font-medium">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={300} className="mt-20 text-center">
                <Link to="/contact" className="inline-flex py-3 px-6 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary sm:text-base text-sm hover:text-primary-foreground transition-colors">
                    Can't find your answer? Contact Us
                </Link>
            </ScrollReveal>
        </div>
    )
}
