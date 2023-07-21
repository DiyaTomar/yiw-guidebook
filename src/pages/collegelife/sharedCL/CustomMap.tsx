import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import { cities, markerLocations } from './Locations';

type Props = {
    selectedLocation: string | undefined;
};

type Location = {
    id: number;
    city: string;
    name: string;
    position: {
        lat: number;
        lng: number;
    };
    description: string;
    address: string;
};

const mapKey: string = import.meta.env.VITE_REACT_APP_MAP_API_KEY;

function CustomMap({ selectedLocation }: Props) {
    const [descOpen, setDescOpen] = useState<boolean>(false);
    const [activeLocation, setActiveLocation] = useState<
        Location | undefined
    >();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: mapKey,
    });

    const coordinates = cities.find(
        (location) => location.name === selectedLocation
    )?.position;

    const center = useMemo(
        () => ({ lat: coordinates?.lat ?? 0, lng: coordinates?.lng ?? 0 }),
        [coordinates?.lat, coordinates?.lng]
    );

    const handleMarkerClick = (location: Location) => {
        setDescOpen(true);
        setActiveLocation(location);
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="h-[35rem]">
            <GoogleMap
                zoom={15}
                center={center}
                mapContainerStyle={{ height: '100%' }}
            >
                {markerLocations.map((marker) => (
                    <MarkerF
                        key={marker.id}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker)}
                    />
                ))}
            </GoogleMap>
            {descOpen && (
                <div className="w-100 h-30 bg-blue-300">
                    {activeLocation && (
                        <div className="ml-8 py-4">
                            <h1 className="font-bold">{activeLocation.name}</h1>
                            <p>{activeLocation.address}</p>
                            <p>{activeLocation.description}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CustomMap;
