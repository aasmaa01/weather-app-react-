import React from 'react';
import SideBar from './components/SideBar';
import Weather from './components/Weather';
import './index.css';

function App() {
  return (
    <div className="container">
      <SideBar />
      <Weather />
    </div>
  );
}

export default App;