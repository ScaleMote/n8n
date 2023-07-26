import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function revokeClaimableBalanceSponsorship(this: IExecuteFunctions) {
	try {
		const balanceId = this.getNodeParameter('balanceId', 0) as string;
		const revokeClaimableBalanceSponsorshipOperation = Operation.revokeClaimableBalanceSponsorship({
			balanceId,
		}).toXDR('base64');

		return { operation: revokeClaimableBalanceSponsorshipOperation };
	} catch (error) {
		throw new Error(error);
	}
}
