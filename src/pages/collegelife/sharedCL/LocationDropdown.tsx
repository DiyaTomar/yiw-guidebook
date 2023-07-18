/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Option } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

const apiKey: string | undefined = import.meta.env.VITE_REACT_APP_API_KEY;

const locations = ['Wise', 'Norton', 'Big Stone Gap', 'Abingdon', 'Kingsport'];

export default function LocationDropdown() {
    const [selectedLocation, setSelectedLocation] = useState<
        string | undefined
    >('Wise');

    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedLocation}&appid=${apiKey}&units=imperial`;
            const response = await fetch(url);
            setWeatherData(await response.json());
        };

        fetchData();
    }, [selectedLocation]);

    return (
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
                    {locations.map((location) => (
                        <Option key={location} value={location}>
                            {location}
                        </Option>
                    ))}
                </Select>
            </div>
            <div>
                <ul className="flex">
                    {weatherData &&
                        weatherData.list.map((day: any, index: number) => {
                            if (index % 8 === 0) {
                                return (
                                    <li key={day.dt}>
                                        <WeatherCard day={day} />
                                    </li>
                                );
                            }
                            return null; // If you want to skip the elements that are not at every 5th index
                        })}
                </ul>
            </div>
        </div>
    );
}
