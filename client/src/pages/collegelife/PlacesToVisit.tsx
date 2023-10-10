import { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import LocationDropdown from './sharedCL/LocationDropdown';
import WeatherDisplay from './sharedCL/WeatherDisplay';
import CustomMap from './sharedCL/CustomMap';
import useMediaQuery from '../navbar/hooks/useMediaQuery';

function PlacesToVisit() {
    const isAboveMediumScreens: boolean = useMediaQuery('(min-width: 1250px)'); // returns a bool val as per the custom hook we created that takes in a media query string
    // in this case that string is the min-width of 1060 so it will return true if the viewport size is greater than 1060px
    // media queries must have paranthesees around them
    const [selectedLocation, setSelectedLocation] = useState<
        string | undefined
    >('Wise');
    return (
        <div>
            <Navbar />
            <Header header="Places To Visit" />
            <div className="mx-auto w-2/3 text-center pt-12 pb-10">
                {' '}
                Select a location from the dropdown to see the location&apos;s
                weather for the next 5 days. The map below will display places
                recommended by staff and past Year in Wise students at the
                chosen location.
            </div>
            {isAboveMediumScreens ? (
                <div className="w-3/4 mx-auto flex justify-between gap-[1rem] pt-8">
                    <div className="pt-16 pb-20 flex justify-center">
                        <LocationDropdown
                            setSelectedLocation={setSelectedLocation}
                        />
                    </div>
                    <WeatherDisplay selectedLocation={selectedLocation} />
                </div>
            ) : (
                <div className="w-3/4 mx-auto gap-[1rem] pt-8">
                    <div className="pt-16 pb-20 flex justify-center">
                        <LocationDropdown
                            setSelectedLocation={setSelectedLocation}
                        />
                    </div>
                    <WeatherDisplay selectedLocation={selectedLocation} />
                </div>
            )}
            <div className="w-3/4 mx-auto pb-60">
                <CustomMap selectedLocation={selectedLocation} />
            </div>

            <Footer />
        </div>
    );
}

export default PlacesToVisit;
