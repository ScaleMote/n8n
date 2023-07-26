import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function endSponsoring(this: IExecuteFunctions) {
	try {
		const source = this.getNodeParameter('accountSponsoring', 0) as string;
		const endSponsoringOperation = Operation.endSponsoringFutureReserves({
			source,
		}).toXDR('base64');

		return { operation: endSponsoringOperation };
	} catch (error) {
		throw new Error(error);
	}
}
