import { Lock, UserPlus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="bg-white p-1 rounded-lg shadow-sm w-9 h-9 sm:w-10 sm:h-10 border border-slate-100 flex items-center justify-center">
                            <img src="/sbf-logo.png" alt="SBF Logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs sm:text-sm font-bold text-foreground leading-none tracking-tight">
                                Suriyan Benefit Fund
                            </span>
                            <span className="text-[10px] sm:text-[11px] text-muted-foreground mt-0.5">
                                (Madras) Limited
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-muted-foreground uppercase tracking-widest">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link to="/membership" className="hover:text-primary transition-colors">Membership</Link>
                    <Link to="/deposits" className="hover:text-primary transition-colors">Deposits</Link>
                    <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-3">
                    <a href="https://member.sb-fund.com" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[14px] bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                        <Lock className="w-4 h-4" />
                        Login
                    </a>
                    <a href="https://member.sb-fund.com" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl font-bold text-[14px] hover:bg-primary/95 transition-colors shadow-md shadow-primary/20 flex items-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        Become a Member
                    </a>
                </div>
            </div>
        </nav>
    )
}
