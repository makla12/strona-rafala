import React, { FC } from 'react';
import Image from 'next/image';
import { Hammer, PaintRoller, Square, Phone, Mail } from 'lucide-react';

// --- TYPY (TypeScript) ---

// Definicja struktury dla pojedynczej usługi
interface Service {
    icon: React.ElementType; // Typ dla komponentu Lucide-React Icon
    title: string;
    description: string;
}

// --- Definicje Danych (Polski) ---

const SERVICES: Service[] = [
    {
        icon: PaintRoller,
        title: "Renowacja Ścian Wewnętrznych",
        description: "Profesjonalne naprawy, tynkowanie, teksturowanie i malowanie na zamówienie, aby nadać Twoim ścianom nieskazitelne, nowoczesne wykończenie. Zajmujemy się wszystkim, od drobnych pęknięć po całkowite remonty powierzchni."
    },
    {
        icon: Square,
        title: "Renowacja Podłóg Drewnianych",
        description: "Przywracanie życia starym drewnianym podłogom poprzez profesjonalne szlifowanie, bejcowanie i lakierowanie. Usuwamy zarysowania i zużycie, chroniąc Twoją inwestycję na lata."
    },
    {
        icon: Hammer,
        title: "Montaż Płytek i Kamienia",
        description: "Precyzyjny montaż wszelkiego rodzaju płytek podłogowych i ściennych, w tym ceramicznych, porcelanowych i kamienia naturalnego. Idealne do kuchni, łazienek i obszarów o dużym natężeniu ruchu."
    },
];

// UWAGA: Sekcja referencji została usunięta na życzenie klienta i zastąpiona sekcją "O mnie".

// --- Sub-Komponenty ---

const ServiceCard: FC<Service> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
        <div className="text-teal-600 mb-4">
            <Icon size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-base">{description}</p>
    </div>
);

// --- Nowa Sekcja: O Mnie ---

const AboutMeSection: FC = () => (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                O Mnie – Rzemiosło i Osobiste Zaangażowanie
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-10 bg-white p-8 rounded-xl shadow-xl border border-teal-100">
                {/* Placeholder Photo - Zmień to na swoje zdjęcie! */}
                <div className="shrink-0 mb-6 md:mb-0">
                    <Image
                        unoptimized
                        src="https://placehold.co/200x200/526D82/FFFFFF?text=Twoje+Zdjęcie"
                        alt="Zdjęcie Właściciela Firmy"
                        className="w-48 h-48 object-cover rounded-full border-4 border-teal-500 shadow-lg"
                        width={200} 
                        height={200} 
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/200x200/64748b/f1f5f9?text=Błąd+Ładowania"; }}
                    />
                </div>
                {/* Description */}
                <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                        Michał Kowalski – Twój Wykonawca (Zmień imię!)
                    </h3>
                    <p className="text-slate-700 text-lg mb-4">
                        Nazywam się Michał (wpisz swoje imię) i jestem jedyną osobą odpowiedzialną za każdy projekt w tej firmie. Choć działalność dopiero się rozpoczyna, wniosłem ze sobą **wieloletnie doświadczenie** w precyzyjnej renowacji wnętrz, ze szczególnym uwzględnieniem podłóg i ścian.
                    </p>
                    <p className="text-slate-700 text-lg">
                        Wierzę, że pracując samodzielnie, mogę zagwarantować najwyższą jakość, dbałość o detale i stałą, jasną komunikację. Wybierając mnie, wybierasz rzemieślnika, który osobiście zajmie się Twoimi ścianami i podłogami od początku do końca, bez ukrytych podwykonawców.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// --- Główne Sekcje ---

const HeroSection: FC = () => (
    <header className="bg-slate-900 text-white py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                Nieskazitelne Wykończenia Ścian i Podłóg
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
                Przekształcanie przestrzeni z precyzyjnym rzemiosłem w renowacji i restauracji.
            </p>
            {/* Dodano przycisk "Skontaktuj się" z linkiem do sekcji #contact */}
            <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-xl text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors duration-300 transform hover:scale-[1.02]"
                aria-label="Skontaktuj się z nami"
            >
                Skontaktuj się
            </a>
        </div>
    </header>
);

const ServicesSection: FC = () => (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Nasza Ekspertyza w Renowacji</h2>
            <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                Specjalizujemy się w obszarach, które mają największe znaczenie – powierzchniach, które definiują Twoją przestrzeń.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    </section>
);

const PortfolioSection: FC = () => (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Zobacz Naszą Pracę</h2>
            <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                Kilka przykładów transformacji, które dostarczyliśmy. Jakość, której możesz zaufać.
            </p>

            {/* Mock Gallery/Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    "Renowacja Podłóg Drewnianych",
                    "Płytki Łazienkowe",
                    "Ściana w Salonie",
                    "Przestrzeń Komercyjna",
                ].map((caption, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-md transition-shadow duration-300"
                    >
                        {/* Placeholder Image */}
                        <Image
                            unoptimized
                            src={`https://placehold.co/600x400/334155/e2e8f0?text=${caption.replace(/\s/g, '+')}`}
                            alt={`Przykład pracy: ${caption}`}
                            className="w-full h-48 object-cover transition-transform duration-500"
                            width={600} 
                            height={400}
                            loading="lazy"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/64748b/f1f5f9?text=Błąd+Ładowania+Obrazu"; }}
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition-colors">
                    Zobacz Pełną Galerię
                </button>
            </div>
        </div>
    </section>
);

const ContactSection: FC = () => {
    /* Cały stan i logika formularza zostały usunięte. */

    return (
        <section id="contact" className="py-16 md:py-24 bg-white">
            <div className="max-w-xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skontaktuj Się Bezpośrednio</h2>
                    <p className="text-lg text-slate-600">
                        Jestem gotów omówić Twój projekt. Proszę o kontakt telefoniczny lub mailowy w celu ustalenia szczegółów.
                    </p>
                </div>

                <div className="space-y-8 p-8 bg-slate-50 rounded-xl shadow-xl border border-teal-100">

                    <div className="flex items-start space-x-4">
                        <Phone size={28} className="text-teal-600 shrink-0 mt-1" />
                        <div>
                            <p className="text-slate-500 font-medium text-lg">Zadzwoń do Mnie</p>
                            <a href="tel:+1-555-123-4567" className="text-slate-800 text-xl font-semibold hover:text-teal-600 transition-colors">+1 (555) 123-4567</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <Mail size={28} className="text-teal-600 shrink-0 mt-1" />
                        <div>
                            <p className="text-slate-500 font-medium text-lg">Wyślij E-mail</p>
                            <a href="mailto:info@renobusiness.com" className="text-slate-800 text-xl font-semibold hover:text-teal-600 transition-colors">info@renobusiness.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer: FC = () => (
    <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Precision Renovations Co. Wszelkie prawa zastrzeżone.</p>
            <div className="mt-2 space-x-4">
                <a href="#services" className="hover:text-teal-400 transition-colors">Usługi</a>
                <a href="#portfolio" className="hover:text-teal-400 transition-colors">Portfolio</a>
                <a href="#about" className="hover:text-teal-400 transition-colors">O Mnie</a>
            </div>
        </div>
    </footer>
);

// --- Główny Komponent App ---
export default function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-800">
            {/* W środowisku Next.js, Tailwind CSS i font 'Inter' są ładowane globalnie 
        w plikach 'globals.css' lub 'layout.tsx', dlatego ich importy CDN zostały usunięte na życzenie.
      */}

            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <AboutMeSection />
            <ContactSection />
            <Footer />
        </div>
    );
}
