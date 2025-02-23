import type { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { buildAsset } from '../../../../transport';
import type { IAsset } from '../../../entities/IAsset';

export async function revokeTrustlineSponsorship(this: IExecuteFunctions) {
	try {
		const account = this.getNodeParameter('account', 0) as string;
		const { values: assetValues } = this.getNodeParameter('asset', 0) as IAsset;
		const asset = buildAsset(assetValues);

		const revokeTrustlineSponsorshipOperation = Operation.revokeTrustlineSponsorship({
			account,
			asset,
		}).toXDR('base64');

		return { operation: revokeTrustlineSponsorshipOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
