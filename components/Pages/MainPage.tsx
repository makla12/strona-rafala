import HeroSection from './MainPage/HeroSection';
import AboutMeSection from './MainPage/AboutMeSection';
import ServicesSection from './MainPage/ServicesSection';
import PortfolioSection from './MainPage/PortfolioSection';
import ServiceAreaMapSection from './MainPage/ServiceAreaSection';
import ContactSection from './MainPage/ContactSection';
import Footer from './MainPage/Footer';
import { FC, useState } from 'react';
import ImageModal from './../Utils/ImageModal';

const MainPage: FC = () => {
    const [modalImage, setModalImage] = useState<{ src: string, alt: string } | null>(null);

    const handleImageClick = (src: string, alt: string) => {
        setModalImage({ src, alt });
    };

    const handleCloseModal = () => {
        setModalImage(null);
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
