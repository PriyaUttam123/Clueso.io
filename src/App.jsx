import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
            </main>
        </div>
    )
}

export default App
