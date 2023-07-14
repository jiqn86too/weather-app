# Simple Weather API with TypeScript

A very simple API with one endpoint to retrieve a JSON object with all weather information for a given city. No authorization required.

## Project structure

The project is based in a code architechture that uses a SAM template with OpenAPI validation to deploy a Lambda function and an API Gateway to AWS. This deployment process is triggered with Github Actions on every commit to main branch.

## Inside the project we will find:

    - `template.yaml` The file that contains all the cloudformation structure.
    - `./src/lambdas` The folder with the lambda code, unit tests and other utils.
    - `./src/openapi/openpapi.yaml` The file with all the OpenAPI validation.
    - `.github/workflows/pipeline.yaml` File that contains all the pipeline definition.

## Pipeline steps

    - `lint` First step of the pipeline is a linter to prevent code style issues.
    - `delete-feature` When required, removes feature branches from the repo.
    - `test` Runs all the unit tests to ensure changes are not breaking the code.
    - `build-and-deploy-feature` Deploys feature branch to feature stack in the testing account.
    - `build-and-package` Uploads artifacts to testing artifact buckets.
    - `deploy-testing` Deploys SAM template to testing account in AWS.
    - `integration-test` Runs integration tests (Not implemented yet)
    - `deploy-prod` Deploys SAM template to prod account in AWS.

## Getting started

### For developer

    - Clone the repo `git clone git@github.com:jiqn86too/weather-app.git`
    - Run `npm install`
    - Do your stuffs
    - In order to deploy your code open a pr to main branch. Once approved it will be deployed to AWS.

### For users:

API is available on `https://z9uz7sehy8.execute-api.us-east-2.amazonaws.com/weather/{cityName}`. So you can run your tests on Postman or by just pasting this URL in the browser. Make sure to replace {cityName} witha valid city. Values can be `malaga`, `madrid`, `berlin`.

## Next Steps

    - Since the project was created in just few hours. Next steps will be to add documentation steps to the pipeline so we can generate an HTML file that can be uploaded to a public domain so users and developers can have all the API documentation online.

    - Also will be important to protect the repo to commit code drectly to main branch. Normally we will create feature branches that later can be merged to main branch using Pull Requests.

    - Modify response type so we can implement server driven ui.

    - Add integration tests.

    - Improve linting

## Why to go serverless?

Easier to start (Een I was able to deploy this app in few hours)

We can split funcitonality into Lambda functions and trigger them with events (HTTP Events)

We pay for what we  use. Lambda functions are billed for run time consumed.

Easier to scale since we can have pretty much as many instances as we want running at the same time.

No need to admin servers or containers


