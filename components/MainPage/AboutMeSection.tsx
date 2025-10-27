import { FC, SyntheticEvent } from 'react'
import Image from 'next/image';

const AboutMeSection: FC = () => (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                O Mnie i mojej pracy
            </h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-10 bg-white p-8 rounded-xl shadow-xl border border-teal-100">
                {/* Placeholder Photo - Zmień to na swoje zdjęcie! */}
                <div className="shrink-0 mb-6 md:mb-0">
                    <Image
                        unoptimized
                        src="https://placehold.co/200x200/526D82/FFFFFF?text=Twoje+Zdjęcie"
                        alt="Zdjęcie Właściciela Firmy"
                        className="w-48 h-48 object-cover rounded-full border-4 border-teal-500 shadow-lg"
                        width={200} 
                        height={200} 
                        onError={(e: SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://placehold.co/200x200/64748b/f1f5f9?text=Błąd+Ładowania"; }}
                    />
                </div>
                {/* Description */}
                <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                        Rafał Filipiak - Twój Wykonawca
                    </h3>
                    <p className="text-slate-700 text-lg mb-4">
                        Nazywam się Rafał i jestem jedyną osobą odpowiedzialną za każdy projekt w tej firmie. Choć działalność dopiero się rozpoczyna, wniosłem ze sobą **wieloletnie doświadczenie** w precyzyjnej renowacji wnętrz, ze szczególnym uwzględnieniem podłóg i ścian.
                    </p>
                    <p className="text-slate-700 text-lg">
                        Wierzę, że pracując samodzielnie, mogę zagwarantować najwyższą jakość, dbałość o detale i stałą, jasną komunikację. Wybierając mnie, wybierasz rzemieślnika, który osobiście zajmie się Twoimi ścianami i podłogami od początku do końca, bez ukrytych podwykonawców.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMeSection;