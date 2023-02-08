import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { FaThermometerHalf, FaTemperatureHigh, FaTemperatureLow, FaWind } from 'react-icons/fa'
import { FiDroplet, FiSunrise, FiSunset } from 'react-icons/fi'
import d2d from 'degrees-to-direction'


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
                        <div className="flex items-center justify-center flex-1">
                            <img
                                src={`./src/assets/icons/png/2nd Set - Color/${(current.currentConditions.icon)}.png`}
                                alt=""
                                className="w-20"
                            />
                        </div>
                        <div className="flex items-center justify-center flex-1">
                            <p className="text-5xl">{current.currentConditions.temp.toFixed()}°</p>
                        </div>
                        <div className="flex flex-col space-y-2 flex-1">
                            <div className="flex font-light text-sm items-center justify-start">
                                <FaThermometerHalf className="text-lg mr-1" />
                                Feels Like:
                                <span className="font-medium ml-1">{current.currentConditions.feelslike.toFixed()}°</span>
                            </div>
                            <div className="flex font-light text-sm items-center justify-start">
                                <FiDroplet className="text-lg mr-1" />
                                Humidity:
                                <span className="font-medium ml-1">{current.currentConditions.humidity.toFixed()}%</span>
                            </div>
                            <div className="flex font-light text-sm items-center justify-start">
                                <FaWind className="text-lg mr-1" />
                                Wind:
                                <span className="font-medium ml-1">{current.currentConditions.windspeed.toFixed()}km/h {d2d(current.currentConditions.winddir)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                        <FiSunrise />
                        <p className="font-light">
                            Rise:{" "}
                            <span className="font-medium ml-1">
                                {current.currentConditions.sunrise.substring(0, 5)}
                            </span>
                        </p>
                        <p className="font-light">|</p>

                        <FiSunset />
                        <p className="font-light">
                            Set:{" "}
                            <span className="font-medium ml-1">
                                {current.currentConditions.sunset.substring(0, 5)}
                            </span>
                        </p>
                        <p className="font-light">|</p>

                        <FaTemperatureHigh />
                        <p className="font-light">
                            High:{" "}
                            <span className="font-medium ml-1">{current.days[0].tempmax.toFixed()}°</span>
                        </p>
                        <p className="font-light">|</p>

                        <FaTemperatureLow />
                        <p className="font-light">
                            Low:{" "}
                            <span className="font-medium ml-1">{current.days[0].tempmin.toFixed()}°</span>
                        </p>
                    </div>

                </>
            }
        </div>
    )
}

export default WeatherDetails