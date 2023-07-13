/* eslint-disable prettier/prettier */
import { City } from '../interfaces/city';

export const cities: City[] = [
    {
        name: 'malaga',
        currentTemperature: 38,
        temperatureUnit: 'C',
        forecast: {
            monday: {
                temperature: 32,
                weather: 'sunny',
            },
            tuesday: {
                temperature: 31,
                weather: 'sunny',
            },
            wednesday: {
                temperature: 36,
                weather: 'cloudy',
            },
            thursday: {
                temperature: 30,
                weather: 'rainy',
            },
            friday: {
                temperature: 28,
                weather: 'sunny',
            },
            saturday: {
                temperature: 29,
                weather: 'sunny',
            },
            sunday: {
                temperature: 35,
                weather: 'cloudy',
            },
        },
    },
    {
        name: 'madrid',
        currentTemperature: 42,
        temperatureUnit: 'C',
        forecast: {
            monday: {
                temperature: 38,
                weather: 'sunny',
            },
            tuesday: {
                temperature: 36,
                weather: 'rainy',
            },
            wednesday: {
                temperature: 36,
                weather: 'cloudy',
            },
            thursday: {
                temperature: 32,
                weather: 'cloudy',
            },
            friday: {
                temperature: 40,
                weather: 'sunny',
            },
            saturday: {
                temperature: 39,
                weather: 'rainy',
            },
            sunday: {
                temperature: 35,
                weather: 'cloudy',
            },
        },
    },
    {
        name: 'berlin',
        currentTemperature: 27,
        temperatureUnit: 'C',
        forecast: {
            monday: {
                temperature: 28,
                weather: 'rainy',
            },
            tuesday: {
                temperature: 26,
                weather: 'rainy',
            },
            wednesday: {
                temperature: 26,
                weather: 'cloudy',
            },
            thursday: {
                temperature: 22,
                weather: 'sunny',
            },
            friday: {
                temperature: 20,
                weather: 'sunny',
            },
            saturday: {
                temperature: 29,
                weather: 'rainy',
            },
            sunday: {
                temperature: 25,
                weather: 'sunny',
            },
        },
    },
];
