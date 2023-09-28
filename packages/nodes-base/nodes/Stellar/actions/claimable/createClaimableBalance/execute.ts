import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { buildAsset, convertAmountToBigNumber } from '../../../transport';
import type { IAsset } from '../../entities/IAsset';
import type { IClaimants } from '../../entities/IClaimants';
import { buildClaimantsList } from './helpers/helpers';

export async function createClaimableBalance(this: IExecuteFunctions) {
	try {
		const { values: claimableAsset } = this.getNodeParameter('claimableAsset', 0) as IAsset;
		const claimableAmount = this.getNodeParameter('amount', 0) as number;
		const { values: claimantsValues } = this.getNodeParameter('claimants', 0) as IClaimants;

		const asset = buildAsset(claimableAsset);
		const claimants = buildClaimantsList(claimantsValues);
		const amount = convertAmountToBigNumber(claimableAmount);

		const createClaimableBalanceOperation = Operation.createClaimableBalance({
			asset,
			amount,
			claimants,
		}).toXDR('base64');

		return { operation: createClaimableBalanceOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
