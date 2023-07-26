import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { buildAsset, convertAmountToBigNumber } from '../../../transport';
import IAsset from '../../entities/IAsset';

export async function clawback(this: IExecuteFunctions) {
	try {
		const from = this.getNodeParameter('from', 0) as string;
		const { values: assetToBurn } = this.getNodeParameter('assetToBurn', 0) as IAsset;
		const amountToBurn = this.getNodeParameter('amount', 0) as number;

		const amount = convertAmountToBigNumber(amountToBurn);
		const asset = buildAsset(assetToBurn);
		const clawbackOperation = Operation.clawback({ asset, amount, from }).toXDR('base64');

		return { operation: clawbackOperation };
	} catch (error) {
		throw new Error(error);
	}
}
