import React from 'react'


const TopButtons = () => {
    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Sidney'
        },
        {
            id: 3,
            name: 'Tokyo'
        },
        {
            id: 4,
            name: 'Toronto'
        },
        {
            id: 5,
            name: 'Paris'
        },
    ]

    const renderCities = cities.map(city => (
        <button key={city.id} className='text-white text-lg font-medium'>
            {city.name}
        </button>
    ))

    return (
        <div className='flex items-center justify-around my-6'>
            {renderCities}
        </div>
    )
}

export default TopButtons