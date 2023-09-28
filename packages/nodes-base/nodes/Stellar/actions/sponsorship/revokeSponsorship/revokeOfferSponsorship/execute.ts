import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function revokeOfferSponsorship(this: IExecuteFunctions) {
	try {
		const seller = this.getNodeParameter('seller', 0) as string;
		const offerId = this.getNodeParameter('offerId', 0) as string;
		const revokeOfferSponsorshipOperation = Operation.revokeOfferSponsorship({
			seller,
			offerId,
		}).toXDR('base64');

		return { operation: revokeOfferSponsorshipOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
