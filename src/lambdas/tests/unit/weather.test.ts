import { APIGatewayProxyEvent, APIGatewayProxyResult, ClientContext, ClientContextClient, ClientContextEnv, CognitoIdentity, Context } from "aws-lambda";
import { getWeather } from "../../weather";
import { context, proxyResult } from "../utils/weatherConsts";

describe('Unit test for getWeather function', function () {
    it('should verifies successful response when city exists', async () => {
        const event: APIGatewayProxyEvent = {
            pathParameters: {
                cityName: "malaga"
            }
        } as any;
        
        const result = await getWeather(event, context, () => proxyResult) as any;
        const body = JSON.parse(result.body);

        expect(result.statusCode).toEqual(200);
        expect(body.name).toEqual('malaga');
    });

    it('should verifies error response when city does not exist', async () => {
        const event: APIGatewayProxyEvent = {
            pathParameters: {
                cityName: "maracay"
            }
        } as any;
        
        const result = await getWeather(event, context, () => proxyResult) as any;

        expect(result.statusCode).toEqual(404);
    });

    it('should returns error response when city is not provided', async () => {
        const event: APIGatewayProxyEvent = {
            pathParameters: {}
        } as any;
        
        const result = await getWeather(event, context, () => proxyResult) as any;

        expect(result.statusCode).toEqual(500);
    });
});
