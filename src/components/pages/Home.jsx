import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Hero from '../sections/Hero';
import TrustedCompanies from '../sections/TrustedCompanies';
import Features from '../sections/Features';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import UseCases from '../sections/UseCases';
import HowItWorks from '../sections/HowItWorks';
import Localization from '../sections/Localization';
import FAQ from '../sections/FAQ';

const Home = () => {
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
    );
};

export default Home;
