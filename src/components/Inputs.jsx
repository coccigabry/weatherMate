import React from 'react'
import { TfiSearch, TfiLocationPin } from 'react-icons/tfi'


const Inputs = () => {

    return (
        <div className='flex flex-row justify-center my-6'>
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input
                    className='text-xl font-light p-2 focus:outline-none capitalize'
                    type='text'
                    placeholder='Search for cities here...'
                />
                <TfiSearch className='text-white text-2xl cursor-pointer transition ease-out hover:scale-125'/>
                <TfiLocationPin className='text-white text-2xl cursor-pointer transition ease-out hover:scale-125'/>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name='metric' className='text-xl text-white font-light'>°C</button>
                <span className='text-xl text-white mx-1'>&nbsp;|&nbsp;</span>
                <button name='imperial' className='text-xl text-white font-light'>°F</button>
            </div>
        </div>
    )
}

export default Inputs