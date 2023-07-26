import { IExecuteFunctions } from 'n8n-workflow';
import { Asset, Operation } from 'stellar-sdk';
import { buildAsset, convertAmountToBigNumber } from '../../../transport';
import IAssetsPath from '../../entities/IAssetsPath';
import IAsset from '../../entities/IAsset';

export async function pathPaymentStrictSend(this: IExecuteFunctions) {
	try {
		const { values: sendingAsset } = this.getNodeParameter('sendingAsset', 0) as IAsset;
		const sendingAmount = this.getNodeParameter('sendAmount', 0) as number;
		const destination = this.getNodeParameter('destinationAccount', 0) as string;
		const { values: destinationAsset } = this.getNodeParameter('destinationAsset', 0) as IAsset;
		const minDestinationAmount = this.getNodeParameter('minDestinationAmount', 0) as number;
		const { values: intermediateAssets } = this.getNodeParameter(
			'intermediatePathAssets',
			0,
			[],
		) as IAssetsPath;

		const sendAsset = buildAsset(sendingAsset);
		const sendAmount = convertAmountToBigNumber(sendingAmount);
		const destAsset = buildAsset(destinationAsset);
		const destMin = convertAmountToBigNumber(minDestinationAmount);
		let path: Asset[] = [];

		intermediateAssets.forEach((asset) => {
			const intermediateAsset = buildAsset(asset);
			path.push(intermediateAsset);
		});

		let pathPaymentStrictSendOperation = Operation.pathPaymentStrictSend({
			sendAsset,
			sendAmount,
			destination,
			destAsset,
			destMin,
			path,
		}).toXDR('base64');

		return { operation: pathPaymentStrictSendOperation };
	} catch (error) {
		throw new Error(error);
	}
}
