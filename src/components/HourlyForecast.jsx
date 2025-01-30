import React from 'react';

const HourlyForecast = ({ data }) => {
  const getIconByCondition = (condition) => {
    if (condition === "Clouds") return "/images&icons/icons8-cloud-94.png";
    if (condition === "Clear") return "/images&icons/icons8-sun-94.png";
    if (condition === "Rain") return "/images&icons/icons8-rain-94.png";
    if (condition === "Drizzle") return "/images&icons/icons8-drizzle-94.png";
    if (condition === "Mist") return "/images&icons/icons8-mist-94.png";
    return "/images&icons/icons8-default-94.png"; // Default icon
  };

  return (
    <div className="today-forecast">
      <h3>Today Forecast</h3>
      <div className="hourly-forecast">
        {data.map((hourData, index) => (
          <div className="hour" key={index}>
            <p>{new Date(hourData.dt * 1000).getHours()}:00</p>
            <img src={getIconByCondition(hourData.weather[0].main)} alt={hourData.weather[0].description} />
            <p>{Math.round(hourData.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;