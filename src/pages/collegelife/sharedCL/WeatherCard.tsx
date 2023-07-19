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

    return (
        <div className="h-[10rem] w-[8rem] border-2 text-center ">
            <div>{date}</div>
            <div className="flex justify-center h-16">
                <img
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                    alt="Weather Icon"
                />
            </div>
            <div className="text-lg font-bold">{temperature} °F</div>
            <div className="text-sm">{day.weather[0].main}</div>
            <div className="text-xs">{day.weather[0].description}</div>
        </div>
    );
}

export default WeatherCard;
