import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function manageData(this: IExecuteFunctions) {
	try {
		const name = this.getNodeParameter('entryName', 0) as string;
		const entryValue = this.getNodeParameter('entryValue', 0) as string;
		const value = entryValue ? entryValue : null;

		const manageDataOperation = Operation.manageData({ name, value }).toXDR('base64');

		return { operation: manageDataOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
