import { useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useGeographic } from "ol/proj";

function MapComponent() {
    useGeographic();

    const map = new Map({
        view: new View({ center: [10.75, 59.91], zoom: 11 }),
        layers: [new TileLayer({ source: new OSM() })],
    });

    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            map.setTarget(mapRef.current);
        }
    }, [mapRef]);

    return <div className="map bg-dark" ref={mapRef}></div>;
}

export default MapComponent;
