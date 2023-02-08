import { useState, createContext } from "react";
import axios from 'axios'


const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [showComponents, setShowComponents] = useState(false)
    const [location, setLocation] = useState('')
    const [forecasts, setForecasts] = useState({ current: []/* , daily: [], hourly: [] */ })

    //const GEOAPIS_KEY = import.meta.env.VITE_GEOAPIS_KEY
    const WEATHER_VC_KEY = import.meta.env.VITE_WEATHER_VC_KEY


    const getLocation = (e) => {
        setLocation(e.target.value)
    }

    const fetchForecasts = async (location) => {
        try {
            const resCurrent = await axios.get(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&include=current&key=${WEATHER_VC_KEY}&contentType=json&iconSet=icons1`
            )
/*             const resDaily = await axios.get(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${location}&aggregateHours=24&forecastDays=7&unitGroup=metric&shortColumnNames=false&contentType=json&iconSet=icons1&key=${WEATHER_VC_KEY}`
            )
            const resHourly = await axios.get(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${location}&aggregateHours=1&forecastDays=1&unitGroup=metric&shortColumnNames=false&contentType=json&iconSet=icons1&key=${WEATHER_VC_KEY}`
            ) */
            setForecasts({ 
                current: resCurrent.data/* , 
                daily: Object.values(resDaily.data.locations)[0], 
                hourly: Object.values(resHourly.data.locations)[0]  */
            })
            setShowComponents(true)
        } catch (err) {
            return console.error(err)
        }
    }


    return (
        <AppContext.Provider value={{
            showComponents,
            location,
            forecasts,
            getLocation,
            fetchForecasts
        }}>
            {children}
        </AppContext.Provider>
    )
}


export { AppContext, AppProvider }