import { PocService } from './poc-service/poc.service';
import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from 'aws-lambda';
import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';

import container from './poc-service/poc.module';
import SERVICE_IDENTIFIER from './poc-service/poc.identifier';

// Composition root
const pocService = container.get<PocService>(SERVICE_IDENTIFIER.POC_SERVICE);

const baseHandler: APIGatewayProxyHandlerV2 = async (event: APIGatewayProxyEventV2) => {
  console.log(event.version);
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: pocService.getData(),
  };
};

export const handler = middy(baseHandler)
  .use(jsonBodyParser()) // parses the request body when it's a JSON and converts it to an object
  .use(httpErrorHandler());
