import { FC } from "react";
import { Hammer, PaintRoller, Square } from 'lucide-react';

import type { Service } from "./ServiceCard";
import ServiceCard from './ServiceCard';

const SERVICES: Service[] = [
    {
        icon: PaintRoller,
        title: "Renowacja Ścian Wewnętrznych",
        description: "Profesjonalne naprawy, tynkowanie, teksturowanie i malowanie na zamówienie, aby nadać Twoim ścianom nieskazitelne, nowoczesne wykończenie. Zajmujemy się wszystkim, od drobnych pęknięć po całkowite remonty powierzchni."
    },
    {
        icon: Square,
        title: "Renowacja Podłóg Drewnianych",
        description: "Przywracanie życia starym drewnianym podłogom poprzez profesjonalne szlifowanie, bejcowanie i lakierowanie. Usuwamy zarysowania i zużycie, chroniąc Twoją inwestycję na lata."
    },
    {
        icon: Hammer,
        title: "Montaż Płytek i Kamienia",
        description: "Precyzyjny montaż wszelkiego rodzaju płytek podłogowych i ściennych, w tym ceramicznych, porcelanowych i kamienia naturalnego. Idealne do kuchni, łazienek i obszarów o dużym natężeniu ruchu."
    },
];

const ServicesSection: FC = () => (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Nasza Ekspertyza w Renowacji</h2>
            <p className="text-center text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
                Specjalizujemy się w obszarach, które mają największe znaczenie – powierzchniach, które definiują Twoją przestrzeń.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {SERVICES.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    </section>
);

export default ServicesSection;