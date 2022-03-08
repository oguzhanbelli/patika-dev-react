import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("Istanbul");
  const [loading, setLoading] = useState(false);
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    async function getData() {
      setLoading(true);
<<<<<<< HEAD
      await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=*****
=======
      await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=89ae81f9365001ca6d9c9f0c419ed5a4
>>>>>>> 918435980bc50e2c0b99247247810d2e72674e03
     `).then((response) => {
        getSevenDaysData(response.data.coord.lat, response.data.coord.lon);
      });
    }
    getData();
    async function getSevenDaysData(lat, lon) {
<<<<<<< HEAD
      await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=en&appid=****
=======
      await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=en&appid=89ae81f9365001ca6d9c9f0c419ed5a4
>>>>>>> 918435980bc50e2c0b99247247810d2e72674e03
      `).then((response) => {
        setWeathers(response.data);
        setLoading(false);
      });
    }
  }, [city]);
  const values = {
    city,
    loading,
    weathers,
    setLoading,

    setCity,
    setWeathers,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
export const useWeather = () => useContext(WeatherContext);
