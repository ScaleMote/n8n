import { IExecuteFunctions } from 'n8n-workflow';
import { Operation } from 'stellar-sdk';
import { buildAsset, convertAmountToBigNumber } from '../../../transport';
import IAsset from '../../entities/IAsset';

export async function manageSellOffer(this: IExecuteFunctions) {
	try {
		const { values: sellingAsset } = this.getNodeParameter('sellingAsset', 0) as IAsset;
		const { values: buyingAsset } = this.getNodeParameter('buyingAsset', 0) as IAsset;
		const sellingAmount = this.getNodeParameter('sellingAmount', 0) as number;
		const sellingPrice = this.getNodeParameter('price', 0) as number;

		const selling = buildAsset(sellingAsset);
		const buying = buildAsset(buyingAsset);
		const amount = convertAmountToBigNumber(sellingAmount);
		const price = convertAmountToBigNumber(sellingPrice);
		const offerId = this.getNodeParameter('offerId', 0) as string;

		const manageSellOfferOperation = Operation.manageSellOffer({
			selling,
			buying,
			amount,
			price,
			offerId,
		}).toXDR('base64');

		return { operation: manageSellOfferOperation };
	} catch (error) {
		throw new Error(error);
	}
}
