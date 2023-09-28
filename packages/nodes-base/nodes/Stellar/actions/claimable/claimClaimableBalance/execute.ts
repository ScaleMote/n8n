import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function claimClaimableBalance(this: IExecuteFunctions) {
	try {
		const balanceId = this.getNodeParameter('balanceId', 0) as string;
		const claimClaimableBalanceOperation = Operation.claimClaimableBalance({
			balanceId,
		}).toXDR('base64');
		return { operation: claimClaimableBalanceOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
