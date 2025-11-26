import deco1 from "@/public/Deco1.jpg";
import deco5 from "@/public/Deco5.jpg";
import deco6 from "@/public/Deco6.jpg";
import deco7 from "@/public/Deco7.jpg";
import deco8 from "@/public/Deco8.jpg";
import deco9 from "@/public/Deco9.jpg";
import deco10 from "@/public/Deco10.jpg";
import deco11 from "@/public/Deco11.jpg";
import GalleryPage, { GalleryEntry } from "./GalleryPage";

const galleryData : GalleryEntry[] = [
    { caption: "", img: deco1 },
    { caption: "", img: deco5 },
    { caption: "", img: deco6 },
    { caption: "", img: deco7 },
    { caption: "", img: deco8 },
    { caption: "", img: deco9 },
    { caption: "", img: deco10 },
    { caption: "", img: deco11 },
];

const RemontGallery = () => (<GalleryPage title="Galeria Projektów Remontowych" subtitle="Przykłady naszego precyzyjnego rzemiosła w wykończeniach wnętrz." galleryData={galleryData} />);

export default RemontGallery;