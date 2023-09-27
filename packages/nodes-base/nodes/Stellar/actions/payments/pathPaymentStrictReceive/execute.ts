import type { IExecuteFunctions } from 'n8n-workflow';
import type { Asset } from 'stellar-sdk';
import { Operation } from 'stellar-sdk';
import { buildAsset, convertAmountToBigNumber } from '../../../transport';
import type { IAssetsPath } from '../../entities/IAssetsPath';
import type { IAsset } from '../../entities/IAsset';

export async function pathPaymentStrictReceive(this: IExecuteFunctions) {
	try {
		const { values: sendingAsset } = this.getNodeParameter('sendingAsset', 0) as IAsset;
		const maxSendingAmount = this.getNodeParameter('maxSendAmount', 0) as number;
		const destination = this.getNodeParameter('destinationAccount', 0) as string;
		const { values: destinationAsset } = this.getNodeParameter('destinationAsset', 0) as IAsset;
		const destinationAmount = this.getNodeParameter('destinationAmount', 0) as number;
		const { values: intermediateAssets } = this.getNodeParameter(
			'intermediatePathAssets',
			0,
			[],
		) as IAssetsPath;

		const sendAsset = buildAsset(sendingAsset);
		const sendMax = convertAmountToBigNumber(maxSendingAmount);
		const destAsset = buildAsset(destinationAsset);
		const destAmount = convertAmountToBigNumber(destinationAmount);
		const path: Asset[] = [];

		intermediateAssets.forEach((asset) => {
			const intermediateAsset = buildAsset(asset);
			path.push(intermediateAsset);
		});

		const pathPaymentStrictReceiveOperation = Operation.pathPaymentStrictReceive({
			sendAsset,
			sendMax,
			destination,
			destAsset,
			destAmount,
			path,
		}).toXDR('base64');

		return { operation: pathPaymentStrictReceiveOperation };
	} catch (error: unknown) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}

		throw error;
	}
}
