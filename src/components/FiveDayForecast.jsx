import { useWeather } from "../context/WeatherContext";

function FiveDayForcast({  }) {
    const { selectedCity } = useWeather();

  return (
    <div className="five-day-forecast">
     <h2>5-Day Forecast in {selectedCity}</h2>
      <p>Mon: 21°C</p>
      <p>Tue: 18°C</p>
      <p>Wed: 23°C</p>
      <p>Thu: 19°C</p>
      <p>Fri: 20°C</p>
    </div>
  );
}
export default FiveDayForcast;