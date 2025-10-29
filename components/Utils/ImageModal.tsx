import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { FC, useEffect } from "react";

interface ImageModalProps {
    src: string | StaticImageData;
    alt: string;
    onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ src, alt, onClose }) => {
    useEffect(() => {
        // Blokowanie przewijania tła po otwarciu modala
        document.body.style.overflow = 'hidden';
        return () => {
            // Przywracanie przewijania tła po zamknięciu modala
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Zamknięcie modala po naciśnięciu klawisza ESC
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={onClose} // Zamknięcie po kliknięciu poza obrazem
        >
            <div
                className="relative max-w-5xl max-h-full"
                onClick={e => e.stopPropagation()} // Zapobieganie zamknięciu po kliknięciu na kontener obrazu
            >
                {/* Przycisk Zamknij */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-teal-400 transition-colors z-50 p-3 bg-black bg-opacity-50 rounded-full"
                    aria-label="Zamknij podgląd pełnoekranowy"
                >
                    <X size={32} strokeWidth={2.5} />
                </button>

                {/* Obraz */}
                <Image
                    unoptimized
                    src={src}
                    alt={alt}
                    className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                    width={1000} // Duża szerokość dla pełnoekranowego podglądu
                    height={800} // Duża wysokość dla pełnoekranowego podglądu
                />

                {/* Etykieta/Caption */}
                <p className="mt-4 text-center text-white text-lg font-medium drop-shadow-md">{alt}</p>
            </div>
        </div>
    );
};

export default ImageModal;
