import { useWeather } from "../context/WeatherContext";

import Animation from "./Animation/Animation";

function Card() {
  const { weathers } = useWeather();

  const timestampToDate = (dt) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let d = new Date(dt * 1000);
    let dayName = days[d.getDay()];
    return dayName.slice(0, 3);
  };
  const fahrenheitToCelsius = (fahrenheit) => parseInt(fahrenheit - 273.5);
  return (
    <div className="  first-letter:max-w-xl p-3 flex gap-7  items-center text-center justify-between">
      {weathers.daily ? (
        weathers.daily.map((weather, i) => {
          return (
            <div
              key={i}
              className={`${
                i === 0
                  ? "border-indigo-800  border-opacity-100 border-3 dark:border-indigo-300  "
                  : "border-gray-200"
              } max-w-sm w-[300px] bg-white rounded-lg border  shadow-md  dark:bg-slate-800 dark:border-gray-700 `}
            >
              <div className="flex flex-col   justify-center text-center w-[300px] items-center pb-10 ">
                <span className="text-sm mt-3 text-gray-500 dark:text-gray-400">
                  {<p>{timestampToDate(weather.dt)}</p>}
                </span>
                <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg p-2 mt-2"
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={`${i}`}
                ></img>
                <span className="text-sm text-white dark:text-white bg-indigo-500 p-2 rounded-xl">
                  <p>{weather.weather[0].description}</p>
                </span>

                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
                    {fahrenheitToCelsius(weather.temp.max)}°
                  </p>
                  <p className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
                    {fahrenheitToCelsius(weather.temp.min)}°
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Animation></Animation>
      )}
    </div>
  );
}

export default Card;
