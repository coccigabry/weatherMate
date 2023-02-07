import React, { useState, useRef, useContext } from 'react'
import { AppContext } from '../context/context'
import { TfiSearch, TfiLocationPin } from 'react-icons/tfi'


const SearchBar = () => {
    const { fetchForecasts } = useContext(AppContext)
    const searchValue = useRef('')
    const [location, setLocation] = useState('')

    const handleChange = () => {
        setLocation(searchValue.current.value)
    }

    const handleClick = async () => {
        try {
           await fetchForecasts(location)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    className='text-xl font-light p-2 focus:outline-none capitalize rounded-full'
                    type='text'
                    placeholder='Search for cities here...'
                    ref={searchValue}
                    onChange={handleChange}
                />
                <TfiSearch
                    onClick={handleClick}
                    className='text-white text-2xl cursor-pointer transition ease-out hover:scale-125'
                />
                <TfiLocationPin className='text-white text-2xl cursor-pointer transition ease-out hover:scale-125' />
            </div>
        </div>
    )
}

export default SearchBar