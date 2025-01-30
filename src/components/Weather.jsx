import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import WeeklyForecast from './WeeklyForecast';
import AirConditions from './AirConditions';
import './Weather.css';

const apiKey = "383f94e1b221da936c5d30b6b15b64da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      checkWeather(city);
    }
  }, [city]);

  const checkWeather = async (city) => {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    const data = await response.json();
    setWeatherData(data);

    const lat = data.coord.lat;
    const lon = data.coord.lon;
    fetchForecast(lat, lon);
  };

  const fetchForecast = async (lat, lon) => {
    const response = await fetch(`${forecastUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    setForecastData(data);
  };

  return (
    <div className="main-content">
      <SearchBar setCity={setCity} />
      {weatherData && <CurrentWeather data={weatherData} />}
      {forecastData && <HourlyForecast data={forecastData.list.slice(0, 6)} />}
      {forecastData && <WeeklyForecast data={forecastData.list} />}
      {weatherData && <AirConditions data={weatherData} />}
    </div>
  );
};

export default Weather;