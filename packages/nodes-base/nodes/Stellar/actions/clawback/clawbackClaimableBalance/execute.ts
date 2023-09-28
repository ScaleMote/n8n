import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';

export async function clawbackClaimableBalance(this: IExecuteFunctions) {
	try {
		const balanceId = this.getNodeParameter('balanceId', 0) as string;
		const clawbackClaimableBalanceOperation = Operation.clawbackClaimableBalance({
			balanceId,
		}).toXDR('base64');

		return { operation: clawbackClaimableBalanceOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
