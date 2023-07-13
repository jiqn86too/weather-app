import { APIGatewayProxyResult, ClientContext, ClientContextClient, ClientContextEnv, CognitoIdentity, Context } from "aws-lambda"

export const proxyResult: APIGatewayProxyResult = {
    body: '',
    statusCode: 200,
    headers: {}
}


const client: ClientContextClient = {
    appPackageName: '',
    appTitle: '',
    appVersionCode: '',
    appVersionName: '',
    installationId: ''
}

const env: ClientContextEnv = {
    locale: '',
    make: '',
    model: '',
    platform: '',
    platformVersion: ''
}

const clientContext: ClientContext = {
    client,
    env,
    Custom: null
}

const identity: CognitoIdentity = {
    cognitoIdentityId: '',
    cognitoIdentityPoolId: ''
}

export const context: Context = {
    awsRequestId: '',
    callbackWaitsForEmptyEventLoop: false,
    functionName: '',
    functionVersion: '',
    getRemainingTimeInMillis: () => 0,
    invokedFunctionArn: '',
    logGroupName: '',
    logStreamName: '',
    memoryLimitInMB: '',
    clientContext,
    identity,
    done: () => {},
    fail: () => {},
    succeed: () => {}
}