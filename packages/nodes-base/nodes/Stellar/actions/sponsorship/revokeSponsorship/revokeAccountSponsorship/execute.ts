import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function revokeAccountSponsorship(this: IExecuteFunctions) {
	try {
		const account = this.getNodeParameter('account', 0) as string;
		const revokeAccountSponsorshipOperation = Operation.revokeAccountSponsorship({
			account,
		}).toXDR('base64');

		return { operation: revokeAccountSponsorshipOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
		throw error;
	}
}
