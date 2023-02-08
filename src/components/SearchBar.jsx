import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import { TfiSearch, TfiLocationPin } from 'react-icons/tfi'


const SearchBar = () => {
    const { location, getLocation, fetchForecasts } = useContext(AppContext)


    return (
        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    className='text-xl font-light p-2 focus:outline-none capitalize rounded-full'
                    type='text'
                    placeholder='Search for cities here...'
                    onChange={(e) => getLocation(e)}
                />
                <TfiSearch
                    onClick={() => fetchForecasts(location)}
                    className='text-white text-2xl cursor-pointer transition ease-out hover:scale-125'
                />
                <TfiLocationPin className='text-white text-2xl cursor-pointer transition ease-out hover:scale-125' />
            </div>
        </div>
    )
}

export default SearchBar