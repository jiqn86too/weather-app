export interface City {
    name: string;
    currentTemperature: number;
    temperatureUnit: string;
    averageTemp?: number;
    forecast: Forecast;
}

interface Forecast {
    monday: Day;
    tuesday: Day;
    wednesday: Day;
    thursday: Day;
    friday: Day;
    saturday: Day;
    sunday: Day;
}

interface Day {
    temperature: number;
    weather: string;
}
