import Link from "next/link";
import { FC } from "react";

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
            <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-xl text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors duration-300 transform hover:scale-[1.02]"
                aria-label="Skontaktuj się z nami"
            >
                Skontaktuj się
            </Link>
        </div>
    </header>
);

export default HeroSection;