import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioSectionProps {
    onImageClick: (src: string, alt: string) => void;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ onImageClick }) => {
    const container = useRef<HTMLElement | null>(null);

    useGSAP(()=>{
        const cards : HTMLElement[] = gsap.utils.toArray(".imageCard");
        cards.forEach((card) => {

            gsap.from(card, {
                x: "-50%",
                opacity: 0,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger:{
                    trigger: card,
                    toggleActions: "restart pause restart pause"
                }
            });

        });
    }, { scope:container });


    return (
        <section id="portfolio" className="py-16 md:py-24 bg-white" ref={container}>
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
                        <div key={index} className="imageCard">
                            <div
                                className="group relative overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl cursor-pointer" // Dodano cursor-pointer
                                // Dodano obsługę kliknięcia
                                onClick={() => onImageClick(
                                    // Używamy większego rozmiaru placeholder dla podglądu pełnoekranowego
                                    `https://placehold.co/800x600/334155/e2e8f0?text=${caption.replace(/\s/g, '+')}`,
                                    `Przykład pracy: ${caption}`
                                )}
                            >
                                {/* Placeholder Image */}
                                <Image
                                    unoptimized
                                    src={`https://placehold.co/600x400/334155/e2e8f0?text=${caption.replace(/\s/g, '+')}`}
                                    alt={`Przykład pracy: ${caption}`}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/64748b/f1f5f9?text=Błąd+Ładowania+Obrazu"; }}
                                />
                                <div className="absolute inset-0 bg-slate-900 bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white text-lg font-semibold border-b-2 border-teal-400 pb-1">{caption}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition-colors hover:cursor-pointer"
                        href={"/gallery"}
                    >
                        Zobacz Pełną Galerię
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;