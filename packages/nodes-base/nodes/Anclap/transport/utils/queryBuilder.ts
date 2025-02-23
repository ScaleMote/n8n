import { PayloadBuilder } from './PayloadBuilder';
import { convertToSnakeCase } from './convertToSnakeCase';

export function queryBuilder(request: Record<string, any>): string {
	const filteredRequest = new PayloadBuilder(request).filterUndefinedValues().build();

	return (
		Object.entries(filteredRequest)
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			.map(([key, value]) => `${convertToSnakeCase(key)}=${encodeURIComponent(value)}`)
			.join('&')
	);
}
