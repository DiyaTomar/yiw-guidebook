import Sunny from '../../../assets/Sunny.png';
import Cloudy from '../../../assets/Cloudy.png';
import Thunderstorm from '../../../assets/Thunderstorm.png';
import Drizzle from '../../../assets/Drizzle.png';
import Rain from '../../../assets/Rain.png';
import Snow from '../../../assets/Snow.png';
import Fog from '../../../assets/Fog.png';
import Sand from '../../../assets/Sand.png';
import Tornado from '../../../assets/Tornado.png';

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
    day: any;
};

function WeatherCard({ day }: Props) {
    const temperature = Math.round(day.main.temp);

    const date = new Date(day.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
    });

    function weatherToImage(condition: string) {
        switch (condition) {
            case 'Clear':
                return Sunny;
            case 'Clouds':
                return Cloudy;
            case 'Thunderstorm':
                return Thunderstorm;
            case 'Drizzle':
                return Drizzle;
            case 'Rain':
                return Rain;
            case 'Snow':
                return Snow;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Ash':
            case 'Squash':
            case 'Fog':
                return Fog;
            case 'Sand':
                return Sand;
            case 'Tornado':
                return Tornado;
            default:
                return Sunny;
        }
    }

    const weatherIcon = weatherToImage(day.weather[0].main);

    return (
        <div className="text-white h-[10rem] w-[8rem] pt-3 border-2 text-center rounded-lg bg-gradient-to-b from-blue-900 to-cyan-600">
            <div className="font-bold">{date}</div>
            <div className="flex justify-center h-16">
                <img src={weatherIcon} alt="Weather Icon" />
            </div>
            <div className="text-md font-semibold">{temperature} °F</div>
            <div className="text-md">{day.weather[0].main}</div>
        </div>
    );
}

export default WeatherCard;
