import { useState } from 'react';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import LocationDropdown from './sharedCL/LocationDropdown';
import WeatherDisplay from './sharedCL/WeatherDisplay';
import CustomMap from './sharedCL/CustomMap';

function PlacesToVisit() {
    const [selectedLocation, setSelectedLocation] = useState<
        string | undefined
    >('Wise');
    return (
        <div>
            <Navbar />
            <Header header="Places To Visit" />
            <div className="md:flex pt-8 gap-[2rem]">
                <div className="pt-16 pb-20 pl-[15rem]">
                    <LocationDropdown
                        setSelectedLocation={setSelectedLocation}
                    />
                </div>
                <WeatherDisplay selectedLocation={selectedLocation} />
            </div>
            <div className="w-2/3 mx-auto pb-60">
                <CustomMap selectedLocation={selectedLocation} />
            </div>

            <Footer />
        </div>
    );
}

export default PlacesToVisit;
