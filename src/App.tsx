import { Routes, Route } from 'react-router-dom'
import { PageTransition } from './components/PageTransition'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ArrowRight } from 'lucide-react'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Membership from './pages/Membership'
import About from './pages/About'
import Contact from './pages/Contact'
import Deposits from './pages/Deposits'
import FAQ from './pages/FAQ'
import Grievance from './pages/Grievance'
import Transparency from './pages/Transparency'
import Management from './pages/Management'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/deposits" element={<Deposits />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/transparency" element={<Transparency />} />
          <Route path="/management" element={<Management />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </PageTransition>
      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-5 left-4 right-4 z-50">
        <a href="https://member.sb-fund.com" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold shadow-xl shadow-primary/20 backdrop-blur-md">
          Member Login
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}

export default App
