import { useWeather } from "../context/WeatherContext";

// This component is responsible for the search box where users can enter a city name to get weather information.
function SearchBox() {
    const { selectedCity, setSelectedCity } = useWeather();

  return (
    <div className="search-box">
      {/* <input
        type="text"
        placeholder="Enter city name"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      /> */}
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="Vilnius">Vilnius</option>
        <option value="Kaunas">Kaunas</option>
        <option value="Klaipeda">Klaipeda</option>
        </select>
      <div>
      <p>Selected City: {selectedCity}</p>
        {/* This is a placeholder for the most viewed cities*/}
        <p>Mostly viewed cities:
            <button onClick={() => setSelectedCity("Vilnius")}>Vilnius</button>
            <button onClick={() => setSelectedCity("Kaunas")}>Kaunas</button>
            <button onClick={() => setSelectedCity("Klaipėda")}>Klaipėda</button>
        </p>
      </div>
    </div>
  );
}
export default SearchBox;