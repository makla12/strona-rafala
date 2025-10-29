// import { GoogleMap, Circle } from "@react-google-maps/api";
// import { MapProvider } from "./MapProvider";
import { MapContainer, TileLayer, Circle } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { PathOptions } from "leaflet";

const slawno = { lat: 54.36263527025584, lng: 16.67829970486722 };
const slupsk = { lat: 54.46464006250349, lng: 17.02812614037272 };

const pathOptions: PathOptions = {
    color: '#10b981',
    fillColor: '#10b981',
    fillOpacity: 0.5
}

const MapComponent = () => {
    return (
        <MapContainer
            className="w-full h-full"
            center={[(slawno.lat + slupsk.lat) / 2, (slawno.lng + slupsk.lng) / 2]}
            zoom={10}
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            keyboard={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
                center={[slawno.lat, slawno.lng]}
                radius={10000}
                pathOptions={pathOptions}
            />
            <Circle
                center={[slupsk.lat, slupsk.lng]}
                radius={10000}
                pathOptions={pathOptions}
            />
        </MapContainer>
    );
};

export { MapComponent };
