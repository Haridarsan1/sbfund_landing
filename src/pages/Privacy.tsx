import { Lock } from "lucide-react";

export default function Privacy() {
    return (
        <div className="pt-32 pb-20 px-6 sm:px-8 max-w-[900px] mx-auto min-h-screen">
            <div className="mb-6 flex justify-center">
                <span className="bg-amber-100 text-amber-800 border border-amber-300 font-bold px-4 py-2 rounded-lg text-sm shadow-sm inline-flex items-center gap-2">
                    [CONTENT PENDING LEGAL REVIEW]
                </span>
            </div>

            <div className="flex items-center gap-3 mb-8">
                <Lock className="h-8 w-8 text-primary" />
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
            </div>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                At Suriyan Benefit Fund (Madras) Limited, your privacy and data security are our highest priority. This policy outlines how we handle your personal and financial information.
            </p>

            <div className="space-y-12">
                <section className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
                    <h2 className="text-xl font-bold mb-4 text-foreground">1. Data Collection</h2>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                        We collect information necessary to comply with KYC norms, Nidhi rules, and to service your deposit accounts effectively. This includes personal identification, financial transaction histories, and contact information.
                    </p>
                </section>

                <section className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
                    <h2 className="text-xl font-bold mb-4 text-foreground">2. Data Usage</h2>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                        Your data is strictly used for the administration of your accounts, ensuring compliance with RBI and MCA regulations, and communicating important updates about our deposit schemes. We do not sell your data to third parties.
                    </p>
                </section>

                <section className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
                    <h2 className="text-xl font-bold mb-4 text-foreground">3. Security</h2>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                        Our systems use industry-standard encryption and security protocols to prevent unauthorized access, disclosure, or modification of your personal data.
                    </p>
                </section>

                <section className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-border">
                    <h2 className="text-xl font-bold mb-4 text-foreground">4. Contact Us</h2>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                        For any privacy-related concerns or queries regarding your data, please contact our Data Protection Officer at: <br />
                        <strong>support@sb-fund.com</strong>
                    </p>
                </section>
            </div>
        </div>
    );
}
