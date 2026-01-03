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
            "From the website home, search for your desired destination and dates.",
            "Find a place you like from the list of options.",
            "Once you've found a place you like, click on it to view more details and read reviews. When you're ready to book, click on \"Reserve\"."
        ],
        uiText: { search: "Where", checkin: "Check in", checkout: "Check out", guests: "Who" }
    },
    es: {
        title: "Cómo reservar un Airbnb",
        steps: [
            "Desde la página de inicio, busca tu destino y fechas deseadas.",
            "Encuentra un lugar que te guste de la lista de opciones.",
            "Una vez que encuentres un lugar, haz clic para ver más detalles y leer reseñas. Cuando estés listo, haz clic en \"Reservar\"."
        ],
        uiText: { search: "Dónde", checkin: "Llegada", checkout: "Salida", guests: "Quién" }
    },
    de: {
        title: "Wie man ein Airbnb bucht",
        steps: [
            "Suchen Sie von der Startseite aus nach Ihrem gewünschten Ziel und Datum.",
            "Finden Sie aus der Liste der Optionen einen Ort, der Ihnen gefällt.",
            "Sobald Sie einen Ort gefunden haben, klicken Sie darauf, um weitere Details und Bewertungen zu sehen."
        ],
        uiText: { search: "Wohin", checkin: "Anreise", checkout: "Abreise", guests: "Wer" }
    },
    ja: {
        title: "Airbnbの予約方法",
        steps: [
            "ウェブサイトのホームから、希望の目的地と日程を検索します。",
            "オプションのリストから気に入った場所を見つけます。",
            "気に入った場所が見つかったら、クリックして詳細やレビューを確認します。予約の準備ができたら、「予約する」をクリックします。"
        ],
        uiText: { search: "行き先", checkin: "チェックイン", checkout: "チェックアウト", guests: "人数" }
    },
    hi: {
        title: "Airbnb कैसे बुक करें",
        steps: [
            "वेबसाइट के होम पेज से, अपनी इच्छित मंजिल और तारीखें खोजें।",
            "विकल्पों की सूची में से वह जगह ढूंढें जो आपको पसंद हो।",
            "एक बार जब आपको अपनी पसंद की जगह मिल जाए, तो अधिक विवरण और समीक्षाएं देखने के लिए उस पर क्लिक करें। जब आप बुक करने के लिए तैयार हों, तो \"रिज़र्व\" पर क्लिक करें।"
        ],
        uiText: { search: "कहाँ", checkin: "चेक इन", checkout: "चेक आउट", guests: "कौन" }
    },
    ar: {
        title: "كيفية حجز Airbnb",
        steps: [
            "من الصفحة الرئيسية للموقع، ابحث عن وجهتك وتواريخك المطلوبة.",
            "اعثر على مكان يعجبك من قائمة الخيارات.",
            "بمجرد العثور على مكان يعجبك، انقر عليه لعرض المزيد من التفاصيل وقراءة التقييمات. عندما تكون مستعدًا للحجز، انقر على \"حجز\"."
        ],
        uiText: { search: "إلى أين", checkin: "تسجيل وصول", checkout: "تسجيل مغادرة", guests: "الضيوف" }
    }
};

const Localization = () => {
    const [activeLang, setActiveLang] = useState('en');
    const currentContent = content[activeLang];

    // Auto-rotate languages for demo effect
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveLang(current => {
    //             const currentIndex = languages.findIndex(l => l.code === current);
    //             const nextIndex = (currentIndex + 1) % languages.length;
    //             return languages[nextIndex].code;
    //         });
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

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
                    <div className="app-mockup">
                        <div className="browser-header">
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="url-bar">airbnb.com</div>
                        </div>
                        <div className="app-content" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
                            <div className="search-bar">
                                <div className="search-item">
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

                            <div className="hero-grid">
                                <div className="grid-item big"></div>
                                <div className="grid-item"></div>
                                <div className="grid-item"></div>
                                <div className="grid-item"></div>
                                <div className="grid-item"></div>
                            </div>

                            <div className="listings-grid">
                                {[1, 2, 3, 4].map((i) => (
                                    <div className="listing-card" key={i}>
                                        <div className="img-placeholder"></div>
                                        <div className="text-lines">
                                            <div className="line title"></div>
                                            <div className="line"></div>
                                            <div className="line price"></div>
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

                    <div className="guide-panel" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
                        <h3>{currentContent.title}</h3>
                        <div className="steps-list">
                            {currentContent.steps.map((step, index) => (
                                <div className="step-item" key={index}>
                                    <div className="step-number">{index + 1}</div>
                                    <p className="step-text">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="scroll-indicator"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localization;
