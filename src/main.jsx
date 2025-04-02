import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from './context/WeatherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherProvider>
      {/* The WeatherProvider component wraps the App component to provide weather-related context to the entire application. */}
      <App />
    </WeatherProvider>
  </StrictMode>,
)
