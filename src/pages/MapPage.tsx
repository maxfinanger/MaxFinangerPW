import MapComponent from "../components/map/MapComponent";

const MapPage = () => {
    return (
        <div className="bg-dark p-3 mb-5">
            <h1 className="text-center text-white">GIS Open Layers</h1>
            <MapComponent />
        </div>
    );
};

export default MapPage;
