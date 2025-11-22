import { ArrowLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import Footer from "./MainPage/Footer";
import ImageModal from "../Utils/ImageModal";
import Link from "next/link";
import deco1 from "@/public/Deco1.jpg";
import deco2 from "@/public/Deco2.jpg";
import deco3 from "@/public/Deco3.jpg";
import deco4 from "@/public/Deco4.jpg";
import deco5 from "@/public/Deco5.jpg";
import deco6 from "@/public/Deco6.jpg";
import deco7 from "@/public/Deco7.jpg";
import deco8 from "@/public/Deco8.jpg";
import deco9 from "@/public/Deco9.jpg";
import deco10 from "@/public/Deco10.jpg";
import deco11 from "@/public/Deco11.jpg";
import deco12 from "@/public/Deco12.jpg";
import deco13 from "@/public/Deco13.jpg";
import deco14 from "@/public/Deco14.jpg";
import deco15 from "@/public/Deco15.jpg";
import deco16 from "@/public/Deco16.jpg";
import deco17 from "@/public/Deco17.jpg";
import deco18 from "@/public/Deco18.jpg";
import deco19 from "@/public/Deco19.jpg";
import deco20 from "@/public/Deco20.jpg";

const GALLERY_IMAGES_DATA = [
    { caption: "Kuchnia - montaż płytek", img: deco1 },
    { caption: "Łazienka - renowacja podłogi", img: deco2 },
    { caption: "Salon - malowanie dekoracyjne", img: deco3 },
    { caption: "Sypialnia - tynkowanie", img: deco4 },
    { caption: "Placeholder text", img: deco5 },
    { caption: "Placeholder text", img: deco6 },
    { caption: "Placeholder text", img: deco7 },
    { caption: "Placeholder text", img: deco8 },
    { caption: "Placeholder text", img: deco9 },
    { caption: "Placeholder text", img: deco10 },
    { caption: "Placeholder text", img: deco11 },
    { caption: "Placeholder text", img: deco12 },
    { caption: "Placeholder text", img: deco13 },
    { caption: "Placeholder text", img: deco14 },
    { caption: "Placeholder text", img: deco15 },
    { caption: "Placeholder text", img: deco16 },
    { caption: "Placeholder text", img: deco17 },
    { caption: "Placeholder text", img: deco18 },
    { caption: "Placeholder text", img: deco19 },
    { caption: "Placeholder text", img: deco20 },
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
