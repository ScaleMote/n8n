import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { buildAsset, convertAmountToBigNumber } from '../../../transport';
import IAsset from '../../entities/IAsset';

export async function makePayment(this: IExecuteFunctions) {
	try {
		const destination = this.getNodeParameter('destinationAccount', 0) as string;
		const { values: destinationAsset } = this.getNodeParameter('destinationAsset', 0) as IAsset;
		const paymentAmount = this.getNodeParameter('amount', 0) as number;

		const asset = buildAsset(destinationAsset);
		const amount = convertAmountToBigNumber(paymentAmount);

		const paymentOperation = Operation.payment({ amount, asset, destination }).toXDR('base64');

		return { operation: paymentOperation };
	} catch (error) {
		throw new Error(error);
	}
}
