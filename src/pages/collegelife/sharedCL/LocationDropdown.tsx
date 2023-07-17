/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, Option } from '@material-tailwind/react';
import { useState, useEffect } from 'react';

const apiKey: string | undefined = import.meta.env.VITE_REACT_APP_API_KEY;

const locations = ['Wise', 'Norton', 'Big Stone Gap', 'Abingdon', 'Kingsport'];

export default function LocationDropdown() {
    const [selectedLocation, setSelectedLocation] = useState<
        string | undefined
    >('Wise');
    // let initialData;
    // const initialFetch = async () => {
    //     const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${selectedLocation}`;
    //     const response = await fetch(url);
    //     initialData = await response.json();
    // };
    // initialFetch();
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${selectedLocation}&units=imperial`;
            const response = await fetch(url);
            setWeatherData(await response.json());
        };

        fetchData();
    }, [selectedLocation]);

    return (
        <div className="w-72 md:flex">
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
            <div>
                {weatherData && weatherData.list && (
                    <ul>
                        {weatherData.list.slice(0, 5).map((day: any) => (
                            <li key={day.dt}> Temperature: {day.main.temp} </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
