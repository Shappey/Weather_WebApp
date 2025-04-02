import React, { useState } from 'react';
import SearchBox from './SearchBox';
import WeathetDisplay from './WeatherDisplay';
import FiveDayForcast from './FiveDayForecast';

function App() {
  const [search, setSearch] = useState('');

  // ??? placeholder
  const handleSearch = () => {
    console.log(`Searching for: ${search}`);
    // Add your search logic here (e.g., API call)
  };
  // This function is called when a button is clicked
  const handleButtonClick = (city) => {
    setSearch(city);
    handleSearch();
  };

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
    <SearchBox search={search} setSearch={setSearch} handleSearch={handleSearch} />
    <WeathetDisplay weatherData={sampleWeatherData} />
    <FiveDayForcast FiveDayForcast />
  </div>
  );
}
export default App;