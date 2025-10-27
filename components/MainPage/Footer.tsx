import { FC } from "react";

const Footer: FC = () => (
    <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Rafał Filipiak Wszelkie prawa zastrzeżone.</p>
            <div className="mt-2 space-x-4">
                <a href="#services" className="hover:text-teal-400 transition-colors">Usługi</a>
                <a href="#portfolio" className="hover:text-teal-400 transition-colors">Portfolio</a>
                <a href="#about" className="hover:text-teal-400 transition-colors">O Mnie</a>
            </div>
        </div>
    </footer>
);

export default Footer;