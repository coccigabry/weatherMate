import React, { useContext } from 'react'
import { AppContext } from '../context/context'


const HourlyForecast = () => {
    const { showComponents, dailyForecast } = useContext(AppContext)


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
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                12:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                13:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                14:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                15:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                16:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                17:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                18:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                19:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                20:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                21:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                22:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                23:00 PM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="font-medium">
                                00:00 AM
                            </p>
                            <img
                                src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WOeO9yS1ydIuLBy7qS4KkwHaHa%26pid%3DApi&f=1&ipt=578a57462eea12d013862d09edd76ebf0a3de9f8023ccefa71a4efd7b8ffc9e3&ipo=images'
                                alt=""
                                className="w-12 my-1"
                            />
                            <p className="font-medium">28°</p>
                            <p className="font-light text-sm">prec</p>
                            <p className="font-light text-sm">wspd + wdir</p>
                            <p className="font-light text-sm">humidity</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default HourlyForecast