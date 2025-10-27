import { FC } from "react";
import { Phone, Mail } from 'lucide-react';

const ContactSection: FC = () => (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-xl mx-auto px-6">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Skontaktuj Się Bezpośrednio</h2>
                <p className="text-lg text-slate-600">
                    Jestem gotów omówić Twój projekt. Proszę o kontakt telefoniczny lub mailowy w celu ustalenia szczegółów.
                </p>
            </div>

            <div className="space-y-8 p-8 bg-slate-50 rounded-xl shadow-xl border border-teal-100">

                <div className="flex items-start space-x-4">
                    <Phone size={28} className="text-teal-600 shrink-0 mt-1" />
                    <div>
                        <p className="text-slate-500 font-medium text-lg">Zadzwoń do Mnie</p>
                        <a href="tel:+1-555-123-4567" className="text-slate-800 text-xl font-semibold hover:text-teal-600 transition-colors">+1 (555) 123-4567</a>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <Mail size={28} className="text-teal-600 shrink-0 mt-1" />
                    <div>
                        <p className="text-slate-500 font-medium text-lg">Wyślij E-mail</p>
                        <a href="mailto:info@renobusiness.com" className="text-slate-800 text-xl font-semibold hover:text-teal-600 transition-colors">info@renobusiness.com</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;