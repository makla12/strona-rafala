import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => (
    <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Rafał Filipiak Wszelkie prawa zastrzeżone.</p>
            <div className="mt-2 space-x-4">
                <Link href="/#services" className="hover:text-teal-400 transition-colors">Usługi</Link>
                <Link href="/gallery" className="hover:text-teal-400 transition-colors">Portfolio</Link>
                <Link href="/#about" className="hover:text-teal-400 transition-colors">O Mnie</Link>
                <Link href="/#contact" className="hover:text-teal-400 transition-colors">Kontakt</Link>
            </div>
        </div>
    </footer>
);

export default Footer;