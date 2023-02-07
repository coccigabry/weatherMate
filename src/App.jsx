import Forecasts from "./components/Forecasts"
import Inputs from "./components/Inputs"
import TimeLocation from "./components/TimeLocation"
import TopButtons from "./components/TopButtons"
import WeatherDetails from "./components/WeatherDetails"


function App() {

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeLocation />
      <WeatherDetails />

      <Forecasts title='hourly forecast' />
      <Forecasts title='daily forecast' />
    </div>
  )
}

export default App
