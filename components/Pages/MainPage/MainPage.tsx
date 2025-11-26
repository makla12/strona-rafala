import HeroSection from './model/HeroSection';
import AboutMeSection from './model/AboutMeSection';
import ServicesSection from './model/ServicesSection';
import PortfolioSection from './model/PortfolioSection';
import ServiceAreaMapSection from './model/ServiceAreaSection';
import ContactSection from './model/ContactSection';
import Footer from './model/Footer';
import { FC, useState } from 'react';
import ImageModal from '../../Utils/ImageModal';
import { StaticImageData } from 'next/image';

const MainPage: FC = () => {
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
        <div className="min-h-screen bg-white font-sans text-slate-800">
            <HeroSection />
            <ServicesSection />
            <PortfolioSection onImageClick={handleImageClick} />
            <AboutMeSection />
            <ServiceAreaMapSection />
            <ContactSection />
            <Footer />
            {modalImage && (
                <ImageModal
                    src={modalImage.src}
                    alt={modalImage.alt}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};
export default MainPage;
