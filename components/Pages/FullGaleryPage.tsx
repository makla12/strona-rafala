import { ArrowLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import Footer from "./MainPage/Footer";
import ImageModal from "../Utils/ImageModal";
import Link from "next/link";
import kasia1 from "@/public/Kasia1.jpg";
import kasia2 from "@/public/Kasia2.jpg";
import stjuk1 from "@/public/Stjuk1.jpg";
import stjuk2 from "@/public/Stjuk2.jpg";

const GALLERY_IMAGES_DATA = [
    { caption: "Kuchnia - montaż płytek", img: kasia1 },
    { caption: "Łazienka - renowacja podłogi", img: kasia2 },
    { caption: "Salon - malowanie dekoracyjne", img: stjuk1},
    { caption: "Sypialnia - tynkowanie", img: stjuk2},
    { caption: "Korytarz - układanie drewna", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Garaż - podłoga epoksydowa", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Prace wykończeniowe - detale", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Projekt komercyjny - biuro", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Renowacja starej kamienicy", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Bejcowanie parkietu", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Montaż listew przypodłogowych", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
    { caption: "Płytki tarasowe", img: "https://placehold.co/800x600/334155/e2e8f0?text=some" },
];

const GalleryPage: FC = () => {
    const [modalImage, setModalImage] = useState<{ src: string | StaticImageData, alt: string } | null>(null);

    const handleImageClick = (src: string | StaticImageData, alt: string) => {
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
                        {GALLERY_IMAGES_DATA.map((value, index) => (
                            <div key={index}>
                                <h1 className="text-center font-semibold text-black">{value.caption}</h1>
                                <div
                                    className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer bg-white"
                                    onClick={() => handleImageClick(
                                        value.img,
                                        `Projekt nr ${index + 1}: ${value.caption}`
                                    )}
                                >
                                    {/* Placeholder Image z różnymi proporcjami */}
                                    <Image
                                        unoptimized
                                        src={value.img}
                                        alt={`Projekt nr ${index + 1}: ${value.caption}`}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        width={600}
                                        height={450}
                                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/600x450/64748b/f1f5f9?text=Błąd+Obrazu"; }}
                                    />
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
