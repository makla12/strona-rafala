import deco2 from "@/public/Deco2.jpg";
import deco3 from "@/public/Deco3.jpg";
import deco4 from "@/public/Deco4.jpg";
import deco12 from "@/public/Deco12.jpg";
import deco13 from "@/public/Deco13.jpg";
import deco14 from "@/public/Deco14.jpg";
import deco15 from "@/public/Deco15.jpg";
import deco16 from "@/public/Deco16.jpg";
import deco17 from "@/public/Deco17.jpg";
import deco18 from "@/public/Deco18.jpg";
import deco19 from "@/public/Deco19.jpg";
import deco20 from "@/public/Deco20.jpg";
import GalleryPage, { GalleryEntry } from "./GalleryPage";

const galleryData : GalleryEntry[] = [
    { caption: "Placeholder text", img: deco2 },
    { caption: "Placeholder text", img: deco3 },
    { caption: "Placeholder text", img: deco4 },
    { caption: "Placeholder text", img: deco12 },
    { caption: "Placeholder text", img: deco13 },
    { caption: "Placeholder text", img: deco14 },
    { caption: "Placeholder text", img: deco15 },
    { caption: "Placeholder text", img: deco16 },
    { caption: "Placeholder text", img: deco17 },
    { caption: "Placeholder text", img: deco18 },
    { caption: "Placeholder text", img: deco19 },
    { caption: "Placeholder text", img: deco20 },
];

const DecoGallery = () => (<GalleryPage title="Galeria Projektów Dekoracyjnych" subtitle="Przykłady naszego precyzyjnego rzemiosła w wykończeniach wnętrz." galleryData={galleryData} />);

export default DecoGallery;