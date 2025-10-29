import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { FC } from "react";

gsap.registerPlugin(ScrollToPlugin);

const HeroSection: FC = () => {
    const { contextSafe } = useGSAP();

    const goToContacts = contextSafe(() => {
        gsap.to(window, {
            duration: 3,
            scrollTo: "#contact"
        });
    });

    return (
        <header className="text-white h-screen md:h-auto md:py-64 relative flex justify-center" style={{ backgroundImage: "url(Kasia2.jpg)", backgroundPosition: "center center", backgroundSize: "cover" }}>
            <div className="opacity-75 bg-slate-900 w-full h-full top-0 absolute"></div>
            <div className="z-10 flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
                        Nieskazitelne Wykończenia Ścian i Podłóg
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto">
                        Przekształcanie przestrzeni z precyzyjnym rzemiosłem w renowacji i restauracji.
                    </p>
                    {/* Dodano przycisk "Skontaktuj się" z linkiem do sekcji #contact */}
                    <button
                        onClick={goToContacts}
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-xl text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors duration-300 transform hover:scale-[1.02]"
                        aria-label="Skontaktuj się"
                    >
                        Skontaktuj się
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
