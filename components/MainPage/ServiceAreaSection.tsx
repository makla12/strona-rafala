import { FC } from "react";
import { MapComponent } from "../Utils/Map";

const ServiceAreaMapSection: FC = () => (
    <section id="area" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">Obszar Działania</h2>
            <p className="text-center text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Obsługuję klientów w okolicach <b className="text-teal-500">Sławna</b>, <b className="text-teal-500">Słupska</b> i <b className="text-teal-500">Koszalina</b>.
            </p>

            {/* Wstawienie nowego dynamicznego komponentu mapy */}
            <div className="mx-auto max-w-4xl">
                <MapComponent />
            </div>

        </div>
    </section>
);

export default ServiceAreaMapSection;