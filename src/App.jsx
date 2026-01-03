import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import HowItWorks from './components/sections/HowItWorks'
import UseCases from './components/sections/UseCases'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <UseCases />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </div>
    )
}

export default App

