import { ArrowLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import Footer from "../MainPage/model/Footer";
import ImageModal from "@/components/Utils/ImageModal";

interface GalleryEntry {
    caption: string,
    img: string | StaticImageData,
}

interface GalleryPageProps {
    title: string,
    subtitle: string,
    galleryData: GalleryEntry[],
}

const GalleryPage: FC<GalleryPageProps> = ({ title, subtitle, galleryData }) => {
    const [modalImage, setModalImage] = useState<{ src: string | StaticImageData, alt: string } | null>(null);

    const handleImageClick = (src: string | StaticImageData, alt: string) => {
        setModalImage({ src, alt });
        history.pushState({ modalOpen: true }, '', '#fullscreen-image');
    };

    const handleCloseModal = () => {
        setModalImage(null);
        if (history.state?.modalOpen) {
            history.back();
        }
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
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">{title}</h1>
                        <p className="text-xl text-slate-600">{subtitle}</p>
                    </header>

                    {/* Rozszerzona siatka Galerii */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {galleryData.map((value, index) => (
                            <div key={index}>
                                {value.caption != null ?
                                    <h1 className="text-center font-semibold text-black">{value.caption}</h1>
                                : ""}

                                <div
                                    className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl cursor-pointer bg-white"
                                    onClick={() => handleImageClick(
                                        value.img,
                                        `${value.caption}`
                                    )}
                                >
                                    {/* Placeholder Image z różnymi proporcjami */}
                                    <Image
                                        unoptimized
                                        src={value.img}
                                        alt={`${value.caption}`}
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
export type { GalleryEntry };
export default GalleryPage;