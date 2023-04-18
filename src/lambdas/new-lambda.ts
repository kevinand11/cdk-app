import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda'

export const main = (event: APIGatewayProxyEventV2): APIGatewayProxyResultV2 => {
	console.log('region 👉', process.env.REGION)
	console.log('availability zones 👉', process.env.AVAILABILITY_ZONES)

	return {
		body: JSON.stringify({ message: 'SUCCESS 🎉' }),
		statusCode: 200,
	}
}