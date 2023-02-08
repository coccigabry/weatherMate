import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { FaThermometerHalf, FaTemperatureHigh, FaTemperatureLow, FaWind } from 'react-icons/fa'
import { FiDroplet, FiSunrise, FiSunset } from 'react-icons/fi'


const WeatherDetails = () => {
    const { showComponents, forecasts } = useContext(AppContext)

    const { current } = forecasts

    
    return (
        <div>
            {
                showComponents &&
                <>
                    <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                        <p>{(current.currentConditions.conditions)}</p>
                    </div>

                    <div className="flex flex-row items-center justify-between text-white py-3">
                        <img
                            src={`./src/assets/icons/png/2nd Set - Color/${(current.currentConditions.icon)}.png`}
                            alt=""
                            className="w-20"
                        />
                        <p className="text-5xl">32°</p>
                        <div className="flex flex-col space-y-2">
                            <div className="flex font-light text-sm items-center justify-center">
                                <FaThermometerHalf className="text-lg mr-1" />
                                Wind Chill:
                                <span className="font-medium ml-1">35°</span>
                            </div>
                            <div className="flex font-light text-sm items-center justify-center">
                                <FiDroplet className="text-lg mr-1" />
                                Humidity:
                                <span className="font-medium ml-1">80%</span>
                            </div>
                            <div className="flex font-light text-sm items-center justify-center">
                                <FaWind className="text-lg mr-1" />
                                Wind:
                                <span className="font-medium ml-1">30 km/h</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                        <FiSunrise />
                        <p className="font-light">
                            Rise:{" "}
                            <span className="font-medium ml-1">
                                06:30 AM
                            </span>
                        </p>
                        <p className="font-light">|</p>

                        <FiSunset />
                        <p className="font-light">
                            Set:{" "}
                            <span className="font-medium ml-1">
                                18:30 PM
                            </span>
                        </p>
                        <p className="font-light">|</p>

                        <FaTemperatureHigh />
                        <p className="font-light">
                            High:{" "}
                            <span className="font-medium ml-1">39°</span>
                        </p>
                        <p className="font-light">|</p>

                        <FaTemperatureLow />
                        <p className="font-light">
                            Low:{" "}
                            <span className="font-medium ml-1">27°</span>
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default WeatherDetails