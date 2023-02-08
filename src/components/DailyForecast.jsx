import React, { useContext } from 'react'
import { AppContext } from '../context/context'


const DailyForecast = () => {
    const { showComponents, forecasts } = useContext(AppContext)
    const { values } = forecasts.daily


    return (
        <div>
            {
                showComponents &&
                <>
                    <div className="flex items-center justify-start mt-6">
                        <p className="text-white font-medium uppercase">
                            daily forecast
                        </p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-row items-center justify-between text-white">
                        {
                            values.slice(1).map((value, idx) => {
                                const { datetime, icon, temp, maxt } = value
                                const date = new Date(datetime).toDateString().split(' ')
                                return (
                                    <div key={idx} className="flex flex-col items-center justify-center">
                                        <p className="font-light text-sm">
                                            {`${date[0]} ${date[2]}`}
                                        </p>
                                        <img
                                            src={`/icons/png/2nd Set - Color/${(icon)}.png`}
                                            alt=""
                                            className="w-12 my-1"
                                        />
                                        <div className="flex flex-row items-center justify-between gap-2">
                                            <p className="font-sm">{temp.toFixed()}°</p>
                                            <p className="font-sm">{maxt.toFixed()}°</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default DailyForecast