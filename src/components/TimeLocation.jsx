import React, { useContext } from 'react'
import { AppContext } from '../context/context'


const TimeLocation = () => {
    const { showComponents, dailyForecast } = useContext(AppContext)


    return (
        <div>
            {
                showComponents &&
                <>
                    <div className='flex items-center justify-center my-6'>
                        <p className='text-white text-xl font-extralight'>
                            Tuesday, 7 May 2023 | Local time: 12:23 PM
                        </p>
                    </div>
                    <div className='flex items-center justify-center my-3'>
                        <p className='text-white text-3xl font-medium'>
                            Genoa, IT
                        </p>
                    </div>
                </>
            }
        </div>
    )
}

export default TimeLocation