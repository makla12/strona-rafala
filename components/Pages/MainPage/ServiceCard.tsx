import { ElementType, FC } from 'react'

interface Service {
    icon: ElementType,
    title: string,
    description: string
}

const ServiceCard: FC<Service> = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
        <div className="text-teal-600 mb-4">
            <Icon size={40} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-base">{description}</p>
    </div>
);

export type { Service };
export default ServiceCard;