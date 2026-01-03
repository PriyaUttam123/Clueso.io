import React from 'react'
import './TrustedCompanies.css'

function TrustedCompanies() {
    const companies = [
        { name: 'phenom', displayName: 'phenom' },
        { name: 'samsara', displayName: 'samsara' },
        { name: 'smartsheet', displayName: 'smartsheet' },
        { name: 'personio', displayName: 'Personio' },
        { name: 'uipath', displayName: 'UiPath' },
        { name: 'duda', displayName: 'duda' },
        { name: 'darwinbox', displayName: 'darwinbox' },
        { name: 'movableink', displayName: 'MOVABLEINK' },
        { name: 'keyfactor', displayName: 'KEYFACTOR' },
        { name: 'moengage', displayName: 'moengage' },
        { name: 'fireflies', displayName: 'fireflies.ai' },
        { name: 'piceo', displayName: 'PICEO' }
    ]

    return (
        <section className="trusted-companies">
            <div className="trusted-companies-header">
                <span className="backed-by">Backed by</span>
                <a href="https://www.ycombinator.com" className="yc-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://www.ycombinator.com/assets/ycdc/yc-logo-9e7ad488091b041e628c473c72ff1f8f7d40d77b8f1c8a6176d5bace8d86a4ca.png" alt="Y Combinator" className="yc-logo" />
                    Combinator
                </a>
                <span className="rated">Rated</span>
                <span className="rating">4.9 ⭐</span>
                <span className="on">on</span>
                <a href="https://www.g2.com" className="g2-link" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.worldvectorlogo.com/logos/g2-crowd.svg" alt="G2" className="g2-logo" />
                    G2.com
                </a>
            </div>

            <div className="companies-grid">
                {companies.map((company, index) => (
                    <div
                        key={company.name}
                        className="company-logo"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <span className="company-name">{company.displayName}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TrustedCompanies
