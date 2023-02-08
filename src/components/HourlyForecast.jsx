import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import d2d from 'degrees-to-direction'


const HourlyForecast = () => {
    const { showComponents, forecasts } = useContext(AppContext)
    const { values } = forecasts.hourly


    return (
        <div>
            {
                showComponents &&
                <>
                    <div className="flex items-center justify-start mt-6">
                        <p className="text-white font-medium uppercase">
                            hourly forecast
                        </p>
                    </div>
                    <hr className="my-2" />
                    <div className="text-white">
                        {
                            values.map((value, idx) => {
                                const {
                                    datetimeStr,
                                    icon,
                                    conditions,
                                    temp,
                                    precip,
                                    wspd,
                                    wdir,
                                    humidity
                                } = value
                                const today = new Date().getUTCDate()
                                const valueDate = new Date(datetimeStr).getUTCDate()

                                if (today === valueDate) {
                                    return (
                                        <div key={idx} className="flex items-center justify-between" >
                                            <div className="flex items-center justify-center w-1/12">
                                                <p className="font-medium">
                                                    {new Date(datetimeStr).toLocaleTimeString('en-UK', { hour: '2-digit', minute: '2-digit' })}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center w-3/12">
                                                <img
                                                    src={`/icons/png/2nd Set - Color/${(icon)}.png`}
                                                    alt=""
                                                    className="w-12 my-1"
                                                />
                                            </div>
                                            <div className="flex items-center justify-center w-3/12">
                                                <p className="font-light text-xs">{conditions}</p>
                                            </div>
                                            <div className="flex items-center justify-center w-1/12">
                                                <p className="font-medium">{temp.toFixed()}°</p>
                                            </div>
                                            <div className="flex items-center justify-center w-1/12">
                                                <p className="font-light text-xs">{precip == 0 ? '-' : `${precip}mm`}</p>
                                            </div>
                                            <div className="flex items-center justify-center w-2/12">
                                                <p className="font-light text-xs">{wspd.toFixed()} {d2d(wdir)}</p>
                                            </div>
                                            <div className="flex items-center justify-center w-1/12">
                                                <p className="font-light text-xs">{humidity.toFixed()}%</p>
                                            </div>
                                        </div >
                                    )
                                }
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default HourlyForecast