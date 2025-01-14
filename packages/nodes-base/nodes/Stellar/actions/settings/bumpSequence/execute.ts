import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function bumpSequence(this: IExecuteFunctions) {
	try {
		const bumpToSequenceNumber = this.getNodeParameter('bumpTo', 0) as number;
		const bumpTo = bumpToSequenceNumber.toString();
		const bumpSequenceOperation = Operation.bumpSequence({ bumpTo }).toXDR('base64');

		return { operation: bumpSequenceOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
