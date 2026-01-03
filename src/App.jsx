import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustedCompanies from './components/sections/TrustedCompanies'

import Features from './components/sections/Features'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import UseCases from './components/sections/UseCases'
import HowItWorks from './components/sections/HowItWorks'
import Localization from './components/sections/Localization'
import FAQ from './components/sections/FAQ'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <TrustedCompanies />

                <Features />
                <Testimonials />
                <CTA />
                <UseCases />
                <HowItWorks />
                <Localization />
                <FAQ />
            </main>
            <Footer />
        </div>
    )
}

export default App


