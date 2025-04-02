import { useWeather } from "../context/WeatherContext";

// This component is responsible for displaying specific weather information.
function WeathetDisplay() {
    const { selectedCity, weatherData} = useWeather();
  return (
    <div>
      <h2>Weather Information in {selectedCity}</h2>
      {console.log("Rendering WeatherDisplay component with city:", selectedCity, "and weather data:", weatherData)}
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Wind: {weatherData.windspeed} km/h</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
export default WeathetDisplay;