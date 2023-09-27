import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function accountMerge(this: IExecuteFunctions) {
	try {
		const destination = this.getNodeParameter('destinationAccount', 0) as string;

		const accountMergeOperation = Operation.accountMerge({ destination }).toXDR('base64');
		return { operation: accountMergeOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
