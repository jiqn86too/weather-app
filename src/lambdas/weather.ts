import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { findCity, getWeatherWithAverage } from "./utils/weatherUtils";

export const getWeather: APIGatewayProxyHandler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const cityName = _event.pathParameters?.cityName;
    if (cityName && cityName !== '') {
        try {
            const currentWeather = findCity(cityName)
            if (currentWeather[0]) {
                const cityWeather = getWeatherWithAverage(currentWeather[0])
                return {
                    statusCode: 200,
                    body: JSON.stringify(cityWeather)
                };
            } else {
                return {
                    statusCode: 404,
                    body: `There are no records for ${cityName}`
                };

            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Error' + JSON.stringify(error)
            }
        }
    }
    return {
        statusCode: 500,
        body: 'You need to provide a city'
    }
}



