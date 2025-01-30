import React from 'react';

const SideBar = () => {
  return (
    <div className="side-bar">
      <h2>Weather</h2>
      <ul className="side">
        <li><img src="/images&icons/icons8-home-50.png" alt="Home" /><a href="/">Home</a></li>
        <li><img src="/images&icons/icons8-country-50.png" alt="Cities" /><a href="/cities">Cities</a></li>
        <li><img src="/images&icons/icons8-setting-50.png" alt="Settings" /><a href="/settings">Settings</a></li>
      </ul>
    </div>
  );
};

export default SideBar;