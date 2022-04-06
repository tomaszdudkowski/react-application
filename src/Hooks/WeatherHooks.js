import { createContext, useContext } from "react";
import useFetch from "./useFetch";

const WeatherContext = createContext();
export const useWeather = () => useContext(WeatherContext);

export function WeatherProvider({children}) {
    const {
        
    }
}