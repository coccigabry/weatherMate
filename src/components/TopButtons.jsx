import React, { useContext } from 'react'
import { AppContext } from '../context/context'


const TopButtons = () => {
    const { fetchForecasts } = useContext(AppContext)

    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Madrid'
        },
        {
            id: 3,
            name: 'Paris'
        },
        {
            id: 4,
            name: 'Rome'
        },
        {
            id: 5,
            name: 'Berlin'
        },
    ]


    return (
        <div className='flex items-center justify-around my-6'>
            {
                cities.map(city => (
                    <button
                        key={city.id}
                        className='text-white text-lg font-medium'
                        onClick={() => fetchForecasts(city.name)}
                    >
                        {city.name}
                    </button>
                ))

            }
        </div>
    )
}

export default TopButtons