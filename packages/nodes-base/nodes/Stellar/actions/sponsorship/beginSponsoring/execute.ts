import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function beginSponsoring(this: IExecuteFunctions) {
	try {
		const sponsoredId = this.getNodeParameter('sponsoredId', 0) as string;
		const beginSponsoringOperation = Operation.beginSponsoringFutureReserves({ sponsoredId }).toXDR(
			'base64',
		);

		return { operation: beginSponsoringOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
