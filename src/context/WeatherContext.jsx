import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
const [selectedCity, setSelectedCity] = useState("");
const [ weatherData, setWeatherData ] = useState(null);

// Function to get city coordinates TODO HARDCODED
const cityCoordinates = {
    Vilnius: { lat: 54.6892, lon: 25.2798 },
    Kaunas: { lat: 54.8985, lon: 23.9036 },
    Klaipeda: { lat: 55.7038, lon: 21.1443 },
};

useEffect(() => {
    async function fetchWeatherData() {
        if (!cityCoordinates[selectedCity]) return(console.log(`City not found.`));

        const { lat, lon } = cityCoordinates['Vilnius'];
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

        console.log(url); // Debug check if url is correct
        // Debug check if city found
        console.log(`FAUND. Selected city: ${selectedCity}. Available cities: ${JSON.stringify(cityCoordinates[selectedCity])} lat ${lat} lon ${lon}`);
       
        try {
            const response = await fetch(url);
            console.log(response); // Debug check if response is correct
            const data = await response.json();
            setWeatherData(data.current_weather); // Save only the relevant weather data
            console.log(data.current_weather);
          } catch (error) {
            console.error("Error fetching weather:", error);
          }
        }

        fetchWeatherData();
    }, [selectedCity]); // Fetch data every time selectedCity changes

return (
    <WeatherContext.Provider value={{ selectedCity, setSelectedCity, weatherData, setWeatherData }}>
        {children}
    </WeatherContext.Provider>
);
}

export function useWeather() {
    return useContext(WeatherContext);
}
