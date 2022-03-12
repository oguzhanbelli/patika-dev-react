import React from "react";
import Card from "./Card";

import Select from "./Select";
import Button from "./Button";
import Animation from "./Animation/Animation";
import { useWeather } from "../context/WeatherContext";
import Footer from "./Footer";
function Container() {
    const { loading } = useWeather();
  return (
    <div className="w-screen p-3  h-screen justify-center items-center text-center bg-gray-300 dark:bg-slate-600" >
      <div className="flex justify-between gap-3  w-full max-w-8xl">
        <Select></Select>
        <Button></Button>
      </div>
      <div className="h-1/2 overflow-x-auto p-2"> 
      {
          loading ? <Animation></Animation>: <Card></Card>
      }
           
      </div>
 <div>
 <Footer></Footer>
 </div>
    </div>
  );
}

export default Container;
