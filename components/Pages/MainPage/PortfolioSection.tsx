import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useRef } from "react";
import deco1 from "@/public/Deco1.jpg";
import deco2 from "@/public/Deco2.jpg";
import deco3 from "@/public/Deco3.jpg";
import deco4 from "@/public/Deco4.jpg";

gsap.registerPlugin(ScrollTrigger);

interface PortfolioSectionProps {
    onImageClick: (src: string | StaticImageData, alt: string) => void;
}

const PortfolioSection: FC<PortfolioSectionProps> = ({ onImageClick }) => {
    const container = useRef<HTMLElement | null>(null);

    useGSAP(() => {
        const cards: HTMLElement[] = gsap.utils.toArray(".imageCard");
        cards.forEach((card) => {

            gsap.from(card, {
                x: "-50%",
                opacity: 0,
                duration: 1.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    toggleActions: "restart pause restart pause"
                }
            });

        });
    }, { scope: container });


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
                        { caption: "Renowacja Podłóg Drewnianych", img: deco1 },
                        { caption: "Płytki Łazienkowe", img: deco2 },
                        { caption: "Ściana w Salonie", img: deco3 },
                        { caption: "Przestrzeń Komercyjna", img: deco4 },
                    ].map((value, index) => (
                        <div key={index} className="imageCard">
                            <h1 className="text-center font-semibold">{value.caption}</h1>
                            <div
                                className="group relative overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl cursor-pointer" // Dodano cursor-pointer
                                // Dodano obsługę kliknięcia
                                onClick={() => onImageClick(
                                    // Używamy większego rozmiaru placeholder dla podglądu pełnoekranowego
                                    value.img,
                                    `Przykład pracy: ${value.caption}`
                                )}
                            >
                                {/* Placeholder Image */}
                                <Image
                                    unoptimized
                                    src={value.img}
                                    alt={`Przykład pracy: ${value.caption}`}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    width={600}
                                    height={400}
                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x400/64748b/f1f5f9?text=Błąd+Ładowania+Obrazu"; }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 flex gap-6 justify-center flex-col sm:flex-row">
                    <Link
                        className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition-colors hover:cursor-pointer"
                        href={"/gallery"}
                    >
                        Zobacz Galerię Remontową
                    </Link>

                    <Link
                        className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-700 transition-colors hover:cursor-pointer"
                        href={"/gallery"}
                    >
                        Zobacz Galerię Dekoracji Ściennych
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
