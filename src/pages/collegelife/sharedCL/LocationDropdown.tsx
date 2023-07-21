/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Option } from '@material-tailwind/react';
import { cities } from './Locations';

type Props = {
    setSelectedLocation: (value: string | undefined) => void;
};

export default function LocationDropdown({ setSelectedLocation }: Props) {
    // const [selectedLocation, setSelectedLocation] = useState<
    //     string | undefined
    // >('Wise');

    return (
        <div>
            <div className="md:flex gap-48">
                <div className="w-64 sm:mb-16">
                    <Select
                        label="Select Location"
                        value="Wise"
                        onChange={(event) => {
                            setSelectedLocation(event);
                        }}
                        variant="outlined"
                        color="blue"
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                        }}
                    >
                        {cities.map((location) => (
                            <Option key={location.name} value={location.name}>
                                {location.name}
                            </Option>
                        ))}
                    </Select>
                </div>
                {/* <WeatherDisplay selectedLocation={selectedLocation} /> */}
            </div>
            {/* {weatherData && <CustomMap coordinates={weatherData.city.coord} />} */}
        </div>
    );
}
