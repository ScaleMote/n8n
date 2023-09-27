import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function revokeDataSponsorship(this: IExecuteFunctions) {
	try {
		const account = this.getNodeParameter('account', 0) as string;
		const name = this.getNodeParameter('name', 0) as string;
		const revokeDataSponsorshipOperation = Operation.revokeDataSponsorship({
			account,
			name,
		}).toXDR('base64');

		return { operation: revokeDataSponsorshipOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
