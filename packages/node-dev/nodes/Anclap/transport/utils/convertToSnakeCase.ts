export default function convertToSnakeCase(value: string): string {
	return value.replace(/([A-Z])/g, '_$1').toLowerCase();
}
