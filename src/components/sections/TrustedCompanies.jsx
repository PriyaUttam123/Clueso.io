import React from 'react'
import './TrustedCompanies.css'

function TrustedCompanies() {
    const companies = [
        {
            name: 'phenom',
            displayName: 'phenom',
            devName: 'Sarah Jenkins',
            role: 'Lead Developer',
            summary: 'Clueso cut our documentation time by 50%.',
            avatar: 'https://i.pravatar.cc/150?u=phenom'
        },
        {
            name: 'samsara',
            displayName: 'samsara',
            devName: 'Mike Chen',
            role: 'Product Manager',
            summary: 'The best way to create training videos at scale.',
            avatar: 'https://i.pravatar.cc/150?u=samsara'
        },
        {
            name: 'smartsheet',
            displayName: 'smartsheet',
            devName: 'Jessica Wu',
            role: 'CTO',
            summary: 'Incredible AI editing capabilities.',
            avatar: 'https://i.pravatar.cc/150?u=smartsheet'
        },
        {
            name: 'personio',
            displayName: 'Personio',
            devName: 'David Miller',
            role: 'Eng Manager',
            summary: 'A game changer for our onboarding process.',
            avatar: 'https://i.pravatar.cc/150?u=personio'
        },
        {
            name: 'uipath',
            displayName: 'UiPath',
            devName: 'Alex Thompson',
            role: 'Director of Eng',
            summary: 'Highly recommended for any SaaS company.',
            avatar: 'https://i.pravatar.cc/150?u=uipath'
        },
        {
            name: 'duda',
            displayName: 'duda',
            devName: 'Emily Davis',
            role: 'Tech Lead',
            summary: 'Simple, fast, and effective.',
            avatar: 'https://i.pravatar.cc/150?u=duda'
        },
        {
            name: 'darwinbox',
            displayName: 'darwinbox',
            devName: 'Raj Patel',
            role: 'VP Engineering',
            summary: 'Our team loves using Clueso.',
            avatar: 'https://i.pravatar.cc/150?u=darwinbox'
        },
        {
            name: 'movableink',
            displayName: 'MOVABLEINK',
            devName: 'Chris Wilson',
            role: 'Senior Dev',
            summary: 'Video production made easy.',
            avatar: 'https://i.pravatar.cc/150?u=movableink'
        },
        {
            name: 'keyfactor',
            displayName: 'KEYFACTOR',
            devName: 'Amanda Thomas',
            role: 'Product Lead',
            summary: 'Exceeded our expectations.',
            avatar: 'https://i.pravatar.cc/150?u=keyfactor'
        },
        {
            name: 'moengage',
            displayName: 'moengage',
            devName: 'Sanjay Gupta',
            role: 'DevOps Lead',
            summary: 'Great support and amazing features.',
            avatar: 'https://i.pravatar.cc/150?u=moengage'
        },
        {
            name: 'fireflies',
            displayName: 'fireflies.ai',
            devName: 'Lisa Brown',
            role: 'Engineering Head',
            summary: 'Must-have tool for documentation.',
            avatar: 'https://i.pravatar.cc/150?u=fireflies'
        },
        {
            name: 'piceo',
            displayName: 'PICEO',
            devName: 'Tom White',
            role: 'Staff Engineer',
            summary: 'Automated our entire video workflow.',
            avatar: 'https://i.pravatar.cc/150?u=piceo'
        }
    ]

    return (
        <section className="trusted-companies">


            <div className="companies-container">
                <div className="companies-grid">
                    {companies.map((company, index) => (
                        <div
                            className="company-card-wrapper"
                            key={company.name}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="company-card">
                                <div className="card-content">
                                    <div className="logo-view">
                                        <span className="company-name">{company.displayName}</span>
                                    </div>
                                    <div className="profile-view">
                                        <div className="profile-header">
                                            <img src={company.avatar} alt={company.devName} className="profile-avatar" />
                                            <div className="profile-info">
                                                <div className="profile-name">{company.devName}</div>
                                                <div className="profile-role">{company.role}</div>
                                            </div>
                                        </div>
                                        <p className="profile-summary">"{company.summary}"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrustedCompanies
