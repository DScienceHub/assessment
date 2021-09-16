const apiGatewayInvokeURL = process.env.REACT_APP_API_GATEWAY_INVOKE_URL;

class AWSClient {
  async signUp(email) {
    return await this.makeApiGatewayRequest('POST', 'instructorNewsletter', {
      email,
    });
  }

  async makeApiGatewayRequest(method, route, queryStringParams) {
    let queryUrl = `${apiGatewayInvokeURL}/${route}`;
    console.debug(
      `sensitive - Making API Gateway request with method ${method}, route ${route}, and queryString ${
        queryStringParams ? JSON.stringify(queryStringParams) : 'none'
      } with full query as ${queryUrl}`
    );
    try {
      const response = await fetch(queryUrl, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryStringParams),
      });
      const result = await response.json();
      console.debug(
        `sensitive - Api gateway result is ${JSON.stringify(result)}`
      );
      return result;
    } catch (err) {
      console.error(`Error making api gateway request ${err}`);
    }
  }
}

const awsClient = new AWSClient();

export default awsClient;
