/* eslint-disable prettier/prettier */
import { City } from "./interfaces/city";
import { cities } from "./data/cities";

export const getWeatherWithAverage = (city: City) => {
  let averageTemp = 0;
  let counter = 0;
  const daysArray = Object.keys(city.forecast).map(dayName => dayName);
  daysArray.map((day: string) => {
    averageTemp += city.forecast[day].temperature;
    counter++;
  })

  averageTemp = Math.floor(averageTemp / counter);
  return { ...city, averageTemp };
};

export const findCity = (cityName: string): City[] | null => {
    return cities.filter(city => city.name === cityName)
}
