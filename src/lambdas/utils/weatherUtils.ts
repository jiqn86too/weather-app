import { City } from './interfaces/city';
import { cities } from './data/cities';

export const getWeatherWithAverage = (city: City) => {
    const daysArray = Object.keys(city.forecast).map(dayName => dayName);
    let averageTemp = daysArray
        .map((day: string) => (city.forecast as any)[day].temperature)
        .reduce((previousValue: number, currentValue: number) => {
        return previousValue + currentValue;
    });

    averageTemp = Math.floor(averageTemp / daysArray.length);
    return { ...city, averageTemp };
};

export const findCity = (cityName: string): City[] | null => {
    return cities.filter(city => city.name === cityName);
};