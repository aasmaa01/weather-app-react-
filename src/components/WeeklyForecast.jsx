import React from 'react';

const WeeklyForecast = ({ data }) => {
  const getIconByCondition = (condition) => {
    if (condition === "Clouds") return "/images&icons/icons8-cloud-94.png";
    if (condition === "Clear") return "/images&icons/icons8-sun-94.png";
    if (condition === "Rain") return "/images&icons/icons8-rain-94.png";
    if (condition === "Drizzle") return "/images&icons/icons8-drizzle-94.png";
    if (condition === "Mist") return "/images&icons/icons8-mist-94.png";
    return "/images&icons/icons8-default-94.png"; // Default icon
  };

  const dailyForecast = {};

  data.forEach((hourData) => {
    const date = new Date(hourData.dt * 1000).toLocaleDateString("en-US");
    if (!dailyForecast[date]) {
      dailyForecast[date] = {
        maxTemp: hourData.main.temp_max,
        minTemp: hourData.main.temp_min,
        weather: hourData.weather[0].main,
      };
    } else {
      dailyForecast[date].maxTemp = Math.max(dailyForecast[date].maxTemp, hourData.main.temp_max);
      dailyForecast[date].minTemp = Math.min(dailyForecast[date].minTemp, hourData.main.temp_min);
    }
  });

  return (
    <div className="weekly-forecast">
      <h3>7-Days Forecast</h3>
      {Object.keys(dailyForecast).map((date, index) => (
        <div className="day" key={index}>
          <p>{date}</p>
          <img src={getIconByCondition(dailyForecast[date].weather)} alt={dailyForecast[date].weather} />
          <p>{Math.round(dailyForecast[date].maxTemp)}/{Math.round(dailyForecast[date].minTemp)}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;