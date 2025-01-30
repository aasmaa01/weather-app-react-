import React from 'react';

const CurrentWeather = ({ data }) => {
  const getIconByCondition = (condition) => {
    if (condition === "Clouds") return "/images&icons/icons8-cloud-94.png";
    if (condition === "Clear") return "/images&icons/icons8-sun-94.png";
    if (condition === "Rain") return "/images&icons/icons8-rain-94.png";
    if (condition === "Drizzle") return "/images&icons/icons8-drizzle-94.png";
    if (condition === "Mist") return "/images&icons/icons8-mist-94.png";
    return "/images&icons/icons8-default-94.png"; // Default icon
  };

  return (
    <div className="current-weather">
      <div>
        <h1 className="city">{data.name}</h1>
        <p>Chance of rain: <span className="rain">{data.rain ? data.rain["1h"] || 0 : 0} mm</span></p>
        <h2 className="temp">{Math.round(data.main.temp)}°C</h2>
      </div>
      <div className="weather-icon">
        <img src={getIconByCondition(data.weather[0].main)} alt={data.weather[0].description} />
      </div>
    </div>
  );
};

export default CurrentWeather;