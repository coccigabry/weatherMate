import { useState, createContext } from "react";
import axios from 'axios'


const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [showComponents, setShowComponents] = useState(false)
    const [dailyForecast, setDailyForecast] = useState([])
    const [hourlyForecast, setHourlyForecast] = useState([])

    const GEOAPIS_KEY = import.meta.env.VITE_GEOAPIS_KEY
    const WEATHER_VC_KEY = import.meta.env.VITE_WEATHER_VC_KEY

    const fetchForecasts = (location) => {
        const fetchDaily = async () => {
            try {
                const res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${location}&aggregateHours=24&forecastDays=7&unitGroup=metric&shortColumnNames=false&contentType=json&iconSet=icons1&key=${WEATHER_VC_KEY}`)
                setDailyForecast(res.data)
                setShowComponents(true)
            } catch (err) {
                console.error(err)
            }
        }
        fetchDaily();

        const fetchHourly = async () => {
            try {
                const res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${location}&aggregateHours=1&forecastDays=1&unitGroup=metric&shortColumnNames=false&contentType=json&iconSet=icons1&key=${WEATHER_VC_KEY}`)
                setHourlyForecast(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        fetchHourly();
    }


    return (
        <AppContext.Provider value={{
            showComponents,
            dailyForecast,
            hourlyForecast,
            fetchForecasts
        }}>
            {children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider }