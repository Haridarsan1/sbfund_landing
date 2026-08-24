import { Building2, CheckCircle2, ShieldCheck, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
    return (
        <div className="pt-32 pb-20 px-6 sm:px-8 max-w-[1000px] mx-auto min-h-screen">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
                    About Suriyan Benefit Fund
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl max-w-[700px] mx-auto leading-relaxed">
                    A trusted legacy of secure, member-focused financial growth. Established in 1994, we are committed to the financial well-being of our shareholders.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-[4/3] bg-muted">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Corporate office building representing financial stability"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Our History</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        Suriyan Benefit Fund (Madras) Limited was incorporated in 1994. For decades, we have operated as a declared Nidhi Company, fully compliant with the Ministry of Corporate Affairs (MCA) and the Companies Act.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        Our mutual benefit model means that we exist solely to encourage thrift and savings among our members. By lending exclusively against secure collateral to our own members, we ensure high asset quality and complete safety of deposits.
                    </p>
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                            <CheckCircle2 className="w-4 h-4" />
                            MCA Approved
                        </span>
                        <span className="flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                            <ShieldCheck className="w-4 h-4" />
                            100% Secure
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-24">
                <div className="bg-card p-8 rounded-2xl border border-border text-center shadow-sm">
                    <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                        To cultivate the habit of savings among our members by offering secure, high-yield deposit products, while providing timely credit facilities against collateral at reasonable rates.
                    </p>
                </div>
                <div className="bg-card p-8 rounded-2xl border border-border text-center shadow-sm">
                    <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                        To be the most trusted and digitally advanced Nidhi company in the region, bridging the gap between traditional financial security and modern digital convenience.
                    </p>
                </div>
            </div>

            <div className="mb-24">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Board of Directors & Management</h2>
                    <p className="text-muted-foreground max-w-[600px] mx-auto">
                        Led by seasoned financial professionals committed to ethical governance and regulatory compliance.
                    </p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl max-w-[800px] mx-auto text-amber-900 shadow-sm">
                    <p className="font-semibold flex items-center gap-2 mb-1">
                        <Users className="w-5 h-5" />
                        [BUSINESS CONFIRMATION REQUIRED]
                    </p>
                    <p className="text-sm">
                        The official list of active Directors and Management officials must be populated here to establish transparency and trust as required for a financial institution.
                    </p>
                </div>
            </div>

            <div className="bg-foreground text-background rounded-3xl p-10 md:p-16 text-center">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Modern Digital Transformation</h2>
                <p className="text-muted max-w-[600px] mx-auto mb-10 text-lg">
                    While our foundation is traditional trust, our operations are strictly modern. Our completely digital member portal ensures that your share certificates, deposit receipts, and transaction histories are available 24/7 on your mobile or desktop.
                </p>
                <a href="https://member.sb-fund.com" className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                    Experience the Platform
                </a>
            </div>
        </div>
    );
}
