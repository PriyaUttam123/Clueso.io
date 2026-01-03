import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, ArrowRight } from 'lucide-react'

function App() {
    return (
        <div className="app">
            <nav style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Clueso.io Clone</h2>
            </nav>
            <main className="container section">
                <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gradient"
                    >
                        Turn Screen Recordings into <br /> Polished Product Videos
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
                        Create professional docs and videos in seconds with AI. No editing skills required.
                    </p>
                </header>
            </main>
        </div>
    )
}

export default App
