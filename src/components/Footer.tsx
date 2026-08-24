import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="bg-sidebar pt-16 pb-8 px-6 text-sidebar-foreground text-sm">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-12 lg:gap-8 border-b border-sidebar-border pb-12 mb-8">
                    <div className="col-span-1 md:col-span-2">
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
                        <h4 className="text-sidebar-foreground font-bold mb-5 tracking-wide uppercase text-xs">Products</h4>
                        <ul className="space-y-3.5 text-[13.5px]">
                            <li><Link to="/membership" className="hover:text-primary transition-colors">Membership & Shares</Link></li>
                            <li><Link to="/deposits" className="hover:text-primary transition-colors">Deposits</Link></li>
                            <li><Link to="/deposits" className="hover:text-primary transition-colors">Fixed Deposit</Link></li>
                            <li><Link to="/deposits" className="hover:text-primary transition-colors">Recurring Deposit</Link></li>
                            <li><Link to="/deposits" className="hover:text-primary transition-colors">Savings Deposit</Link></li>
                            <li><a href="/#calculator" className="hover:text-primary transition-colors">Calculator</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sidebar-foreground font-bold mb-5 tracking-wide uppercase text-xs">Company</h4>
                        <ul className="space-y-3.5 text-[13.5px]">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sidebar-foreground font-bold mb-5 tracking-wide uppercase text-xs">Support & Legal</h4>
                        <ul className="space-y-3.5 text-[13.5px]">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
                            <li><Link to="/grievance" className="hover:text-primary transition-colors">Grievance</Link></li>
                            <li><Link to="/transparency" className="hover:text-primary transition-colors">Transparency</Link></li>
                            <li><Link to="/management" className="hover:text-primary transition-colors">Management</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sidebar-foreground font-bold mb-5 tracking-wide uppercase text-xs">Member</h4>
                        <ul className="space-y-3.5 text-[13.5px]">
                            <li><a href="https://member.sb-fund.com" className="hover:text-primary transition-colors">Login</a></li>
                            <li><a href="https://member.sb-fund.com" className="hover:text-primary transition-colors">Apply for Membership</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-b border-sidebar-border pb-8 mb-8">
                    <h4 className="text-sidebar-foreground font-bold mb-4 tracking-wide text-sm">Regulatory & Compliance Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sidebar-foreground/70 text-[13px] leading-relaxed">
                        <div>
                            <p><strong className="text-sidebar-foreground">Legal Name:</strong> Suriyan Benefit Fund (Madras) Limited</p>
                            <p><strong className="text-sidebar-foreground">CIN:</strong> [BUSINESS CONFIRMATION REQUIRED]</p>
                            <p><strong className="text-sidebar-foreground">Registered Office:</strong> [BUSINESS CONFIRMATION REQUIRED]</p>
                            <p><strong className="text-sidebar-foreground">Contact:</strong> support@sb-fund.com | [BUSINESS CONFIRMATION REQUIRED]</p>
                        </div>
                        <div>
                            <p>
                                <strong>Important Disclaimer:</strong> Nidhi Companies are exempted from the core provisions of the RBI Act and other directions applicable to Non-Banking Financial Companies (NBFCs). We are regulated by the Ministry of Corporate Affairs, Government of India.
                            </p>
                            <p className="mt-2">
                                We deal exclusively with our registered members for deposits.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sidebar-foreground/70 text-[12.5px]">
                    <p>© {new Date().getFullYear()} Suriyan Benefit Fund (Madras) Limited. All rights reserved.</p>
                    <p>Declared as a NIDHI Company by Govt of India (Regd No: 18-25018 of 93 | ESTD. 1994).</p>
                </div>
            </div>
        </footer>
    )
}
