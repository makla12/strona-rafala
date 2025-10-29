import { FC, useMemo, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

const ServiceAreaMapSection: FC = () => {
    const container = useRef<HTMLElement | null>(null);
    const card = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.from(card.current, {
            x: "-50%",
            opacity: 0,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card.current,
                toggleActions: "restart stop restart stop"
            }
        });
    }, { scope: container });

    const Map = useMemo(() => dynamic(
        () => import('@/components/Utils/Map').then(mod => mod.MapComponent),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <section ref={container} id="area" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Obszar Działania</h2>
                <p className="text-center text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                    Obsługuję klientów w okolicach <b className="text-teal-500">Sławna</b> i <b className="text-teal-500">Słupska</b>.
                </p>

                {/* Wstawienie nowego dynamicznego komponentu mapy */}
                <div className="mx-auto max-w-4xl">
                    <div ref={card}>
                        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-teal-500 bg-gray-200">
                            <Map />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServiceAreaMapSection;
