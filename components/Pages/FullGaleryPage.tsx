import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";
import Footer from "./MainPage/Footer";
import ImageModal from "../Utils/ImageModal";
import Link from "next/link";

const GALLERY_IMAGES_DATA = [
    "Kuchnia - montaż płytek",
    "Łazienka - renowacja podłogi",
    "Salon - malowanie dekoracyjne",
    "Sypialnia - tynkowanie",
    "Korytarz - układanie drewna",
    "Garaż - podłoga epoksydowa",
    "Prace wykończeniowe - detale",
    "Projekt komercyjny - biuro",
    "Renowacja starej kamienicy",
    "Bejcowanie parkietu",
    "Montaż listew przypodłogowych",
    "Płytki tarasowe",
];

const GalleryPage: FC = () => {
    const [modalImage, setModalImage] = useState<{ src: string, alt: string } | null>(null);

    const handleImageClick = (src: string, alt: string) => {
        setModalImage({ src, alt });
    };

    const handleCloseModal = () => {
        setModalImage(null);
    };

    return (
        <>
            <div className="min-h-screen bg-slate-50 pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Przycisk Powrotu */}
                    <Link
                        href={"/#portfolio"}
                        className="mb-8 inline-flex items-center text-teal-600 font-semibold hover:text-teal-800 transition-colors text-lg"
                    >
                        <ArrowLeft size={24} className="mr-2" />
                        Powrót do Strony Głównej
                    </Link>

                    {/* Nagłówek Galerii */}
                    <header className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">Pełna Galeria Projektów</h1>
                        <p className="text-xl text-slate-600">Przykłady naszego precyzyjnego rzemiosła w wykończeniach wnętrz.</p>
                    </header>

                    {/* Rozszerzona siatka Galerii */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {GALLERY_IMAGES_DATA.map((caption, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer bg-white"
                                onClick={() => handleImageClick(
                                    `https://placehold.co/1200x900/1e293b/f1f5f9?text=${caption.replace(/\s/g, '+')}`,
                                    `Projekt nr ${index + 1}: ${caption}`
                                )}
                            >
                                {/* Placeholder Image z różnymi proporcjami */}
                                <Image
                                    unoptimized
                                    src={`https://placehold.co/600x450/1e293b/f1f5f9?text=${caption.replace(/\s/g, '+')}`}
                                    alt={`Projekt nr ${index + 1}: ${caption}`}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    width={600}
                                    height={450}
                                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x450/64748b/f1f5f9?text=Błąd+Obrazu"; }}
                                />
                                {/* Overlay z opisem */}
                                <div className="absolute inset-0 bg-slate-900 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                    <span className="text-white text-lg font-bold text-center border-b-2 border-teal-400 pb-1">{caption}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <Footer />
            {modalImage && (
                <ImageModal
                    src={modalImage.src}
                    alt={modalImage.alt}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default GalleryPage;