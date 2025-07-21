import React, { useEffect, useState } from 'react'

function WeatherApi() {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bb147eff8079c98f68f5cbf8d0837f5d`)
                    .then((response) => response.json())
                    .then((data) => {                        
                        console.log(data);
                        setWeather(data)
                    }

                    );
            })
        }
    },[]);

    return (
        <div>
            <h1>Weather API</h1>
            {
                weather ? (
                    <div>
                        <h2>Current Weather</h2>

                        <p>Location: {weather.name}</p>
                        <p>Temperature: {weather.main.temp}°C</p>
                        <p>Condition: {weather.weather[0].description}</p>
                    </div>
                ) : (
                    <h3>Loading....</h3>
                )
            }

        </div>

    )
}

export default WeatherApi