import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import WeathetDisplay from './components/WeatherDisplay';
import FiveDayForcast from './components/FiveDayForecast';

function App() {

  //Hardcoded weather data for demonstration purposes
const sampleWeatherData = {
  main: {
    temp: 25,
    humidity: 60
  },
  weather: [
    {
      description: "clear sky"
    }
  ],
  wind: {
    speed: 5
  }
};

  return (
  <div> 
    <h1>Weather Forecast App</h1>
    <h2>Search Box test</h2>
    <SearchBox />
    <WeathetDisplay weatherData={sampleWeatherData} />
    <FiveDayForcast FiveDayForcast />
  </div>
  );
}
export default App;