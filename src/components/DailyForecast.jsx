import React, { useContext } from 'react'
import { AppContext } from '../context/context'


const DailyForecast = () => {
    const { showComponents, dailyForecast } = useContext(AppContext)


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
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                wed 8
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                thu 9
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                fri 10
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                sat 11
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                sun 12
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                mon 13
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">
                                tue 14
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default DailyForecast