import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
import markerLocations from './Locations';

type Props = {
    coordinates: {
        lat: number;
        lon: number;
    };
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

function CustomMap({ coordinates }: Props) {
    const [descOpen, setDescOpen] = useState<boolean>(false);
    const [activeLocation, setActiveLocation] = useState<
        Location | undefined
    >();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: mapKey,
    });

    const center = useMemo(
        () => ({ lat: coordinates.lat, lng: coordinates.lon }),
        [coordinates.lat, coordinates.lon]
    );

    const handleMarkerClick = (location: Location) => {
        setDescOpen(true);
        setActiveLocation(location);
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div className="mt-32 mx-auto w-100 h-[35rem]">
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
