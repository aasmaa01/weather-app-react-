import React from 'react';

const AirConditions = ({ data }) => {
  return (
    <div className="air-conditions">
      <h3>Air Conditions</h3>
      <p>Precipitation: <span className="rain">{data.rain ? data.rain["1h"] || 0 : 0} mm</span></p>
      <p>Humidity: <span className="humidity">{data.main.humidity}%</span></p>
      <p>Wind: <span className="wind">{data.wind.speed} km/h</span></p>
    </div>
  );
};

export default AirConditions;