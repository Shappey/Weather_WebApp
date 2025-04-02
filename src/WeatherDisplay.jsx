function WeathetDisplay({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather, wind } = weatherData;

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Condition: {weather[0].description}</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}
export default WeathetDisplay;