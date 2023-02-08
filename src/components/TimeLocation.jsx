import React, { useContext } from 'react'
import { AppContext } from '../context/context'


const TimeLocation = () => {
    const { showComponents, forecasts } = useContext(AppContext)
    const { current } = forecasts

    const getLocalTime = (timezone) => {
        const dateOptions = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }

        const timeOptions = {
            timeZone: timezone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit'
        }

        const options = {
            ...timeOptions, ...dateOptions
        };

        const date = new Date().toLocaleString('en-UK', options)

        return date
    }


    return (
        <div>
            {
                showComponents &&
                <>
                    <div className='flex items-center justify-center my-6'>
                        <p className='text-white text-xl font-extralight'>
                            {getLocalTime(current.timezone)}
                        </p>
                    </div>
                    <div className='flex items-center justify-center my-3'>
                        <p className='text-white text-3xl font-medium'>
                            {current.resolvedAddress}
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-white text-sm font-extralight'>
                            Updated at: {current.currentConditions.datetime.substring(0, 5)}
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default TimeLocation