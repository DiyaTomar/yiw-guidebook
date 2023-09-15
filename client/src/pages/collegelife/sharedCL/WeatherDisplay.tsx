/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

type Props = {
    selectedLocation: string | undefined;
};

const weatherKey: string | undefined = import.meta.env
    .VITE_REACT_APP_WEATHER_API_KEY;

function WeatherDisplay({ selectedLocation }: Props) {
    const [weatherData, setWeatherData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedLocation},VA,US&appid=${weatherKey}&units=imperial`;
            const response = await fetch(url);
            setWeatherData(await response.json());
        };

        fetchData();
    }, [selectedLocation]);
    return (
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
    );
}

export default WeatherDisplay;
