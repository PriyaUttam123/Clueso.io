import React, { useState } from 'react';
import './Localization.css';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', greeting: 'Hello' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸', greeting: 'Hola' },
    { code: 'de', name: 'German', flag: '🇩🇪', greeting: 'Hallo' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵', greeting: 'こんにちは' },
    { code: 'hi', name: 'Hindi', flag: '🇮🇳', greeting: 'नमस्ते' },
    { code: 'ar', name: 'Arabic', flag: '🇦🇪', greeting: 'مرحبا' },
];

const content = {
    en: {
        title: "How to Book an Airbnb",
        steps: [
            "Start by searching for your desired destination and dates on the home page.",
            "Browse through the list of available homes and find one that suits your needs.",
            "Click on a listing to view details, then select 'Reserve' to book your stay."
        ],
        uiText: { search: "Where", checkin: "Check in", checkout: "Check out", guests: "Who" }
    },
    es: {
        title: "Cómo reservar un Airbnb",
        steps: [
            "Comience buscando su destino y fechas deseadas en la página de inicio.",
            "Navegue por la lista de hogares disponibles y encuentre uno que se adapte a sus necesidades.",
            "Haga clic en un listado para ver detalles, luego seleccione 'Reservar' para reservar su estancia."
        ],
        uiText: { search: "Dónde", checkin: "Llegada", checkout: "Salida", guests: "Quién" }
    },
    de: {
        title: "Wie man ein Airbnb bucht",
        steps: [
            "Beginnen Sie mit der Suche nach Ihrem gewünschten Ziel und Datum auf der Startseite.",
            "Durchsuchen Sie die Liste der verfügbaren Unterkünfte und finden Sie eine, die Ihren Bedürfnissen entspricht.",
            "Klicken Sie auf ein Inserat, um Details anzuzeigen, und wählen Sie dann 'Reservieren', um Ihren Aufenthalt zu buchen."
        ],
        uiText: { search: "Wohin", checkin: "Anreise", checkout: "Abreise", guests: "Wer" }
    },
    ja: {
        title: "Airbnbの予約方法",
        steps: [
            "ホームページで希望の目的地と日程を検索することから始めます。",
            "利用可能な家のリストを閲覧し、ニーズに合ったものを見つけます。",
            "リスティングをクリックして詳細を表示し、「予約」を選択して滞在を予約します。"
        ],
        uiText: { search: "行き先", checkin: "チェックイン", checkout: "チェックアウト", guests: "人数" }
    },
    hi: {
        title: "Airbnb कैसे बुक करें",
        steps: [
            "होम पेज पर अपनी इच्छित मंजिल और तारीखें खोजने से शुरुआत करें।",
            "उपलब्ध घरों की सूची ब्राउज़ करें और एक ऐसा घर खोजें जो आपकी आवश्यकताओं के अनुरूप हो।",
            "विवरण देखने के लिए किसी लिस्टिंग पर क्लिक करें, फिर अपने प्रवास को बुक करने के लिए 'रिज़र्व' चुनें।"
        ],
        uiText: { search: "कहाँ", checkin: "चेक इन", checkout: "चेक आउट", guests: "कौन" }
    },
    ar: {
        title: "كيفية حجز Airbnb",
        steps: [
            "ابدأ بالبحث عن وجهتك وتواريخك المطلوبة على الصفحة الرئيسية.",
            "تصفح قائمة المنازل المتاحة واعثر على واحد يناسب احتياجاتك.",
            "انقر على قائمة لعرض التفاصيل، ثم اختر 'حجز' لحجز إقامتك."
        ],
        uiText: { search: "إلى أين", checkin: "تسجيل وصول", checkout: "تسجيل مغادرة", guests: "الضيوف" }
    }
};

const Localization = () => {
    const [activeLang, setActiveLang] = useState('en');
    const currentContent = content[activeLang];

    return (
        <section className="localization-section">
            <div className="container">
                <div className="section-header">
                    <div className="translate-tag">
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                        </svg>
                        TRANSLATE
                    </div>
                    <h2>Hola. Hallo. こんにちは. नमस्ते.</h2>
                    <p>Make the world your audience. Translate your voiceover, captions, and documentation in one click.</p>
                </div>

                <div className="language-selector">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`lang-btn ${activeLang === lang.code ? 'active' : ''}`}
                            onClick={() => setActiveLang(lang.code)}
                        >
                            <span className="flag">{lang.flag}</span>
                            <span className="name">{lang.name}</span>
                        </button>
                    ))}
                    <button className="lang-btn more">+31 More Languages</button>
                </div>

                <div className="demo-showcase">
                    {/* Left Side: App Mockup */}
                    <div className="app-mockup">
                        <div className="browser-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="url-bar">airbnb.com</div>
                        </div>
                        <div className="app-content" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
                            <div className="search-bar">
                                <div className="search-item active">
                                    <div className="label">{currentContent.uiText.search}</div>
                                    <div className="value">---</div>
                                </div>
                                <div className="divider"></div>
                                <div className="search-item">
                                    <div className="label">{currentContent.uiText.checkin}</div>
                                    <div className="value">--/--</div>
                                </div>
                                <div className="divider"></div>
                                <div className="search-item">
                                    <div className="label">{currentContent.uiText.checkout}</div>
                                    <div className="value">--/--</div>
                                </div>
                                <div className="divider"></div>
                                <div className="search-item">
                                    <div className="label">{currentContent.uiText.guests}</div>
                                    <div className="value">---</div>
                                </div>
                                <div className="search-btn">
                                    <svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M11 2a9 9 0 100 18 9 9 0 000-18zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"></path></svg>
                                </div>
                            </div>

                            {/* Airbnb Grid Layout */}
                            <div className="airbnb-grid">
                                <div className="listing-large" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop)' }}></div>
                                <div className="listing-small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop)' }}></div>
                                <div className="listing-small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop)' }}></div>
                                <div className="listing-small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop)' }}></div>
                                <div className="listing-small" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop)' }}></div>
                            </div>

                            <div className="listings-rows">
                                {[1, 2].map((i) => (
                                    <div className="listing-row-item" key={i}>
                                        <div className="img-box skelet"></div>
                                        <div className="txt-box">
                                            <div className="skelet-line w-3-4"></div>
                                            <div className="skelet-line w-1-2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="toast-notification">
                                <div className="avatar"></div>
                                <div className="message">
                                    <strong>{languages.find(l => l.code === activeLang).greeting}</strong>
                                    <br />Booking a stay is easy!
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Guide Panel */}
                    <div className="guide-panel" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
                        <h3>{currentContent.title}</h3>
                        <div className="steps-timeline">
                            {currentContent.steps.map((step, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-marker">{index + 1}</div>
                                    <div className="timeline-content">
                                        <p>{step}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localization;
