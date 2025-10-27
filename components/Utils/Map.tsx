import { GoogleMap, Circle } from "@react-google-maps/api";
import { MapProvider } from "./MapProvider";

//Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '100%',
};

const slawno = { lat:54.36263527025584, lng:16.67829970486722 };
const slupsk = { lat:54.46464006250349, lng:17.02812614037272 };
const koszalin = { lat:54.1941223822441, lng:16.17135900812188 };

//Default zoom level, can be adjusted
const defaultMapZoom = 9

//Map options
const defaultMapOptions = {
    zoomControl: true,
    gestureHandling: 'auto',
    mapTypeId: 'roadmap',
    disableDefaultUI: true, // Ukrycie niepotrzebnych kontrolek UI
};

const circleOptions = {
    strokeColor: "#10b981", // Teal-500
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#10b981",
    fillOpacity: 0.2,
    radius: 10000, // Promień w metrach
};

const MapComponent = () => {
    return (
        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-teal-500 bg-gray-200">
            <MapProvider>
                <GoogleMap
                    mapContainerStyle={defaultMapContainerStyle}
                    center={slawno}
                    zoom={defaultMapZoom}
                    options={defaultMapOptions}

                >
                    <Circle center={slawno} options={circleOptions} />
                    <Circle center={slupsk} options={circleOptions} />
                    <Circle center={koszalin} options={circleOptions} />
                </GoogleMap>
            </MapProvider>
        </div>
    );
};

export { MapComponent };