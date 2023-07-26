import PayloadBuilder from './PayloadBuilder';
import convertToSnakeCase from './convertToSnakeCase';

export default function queryBuilder(request: Record<string, any>): string {
	const filteredRequest = new PayloadBuilder(request).filterUndefinedValues().build();

	return Object.entries(filteredRequest)
		.map(([key, value]) => `${convertToSnakeCase(key)}=${encodeURIComponent(value)}`)
		.join('&');
}
