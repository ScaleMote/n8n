import AnclapCredentials from '../../../transport/AnclapCredentials';
import { IExecuteFunctions } from 'n8n-workflow';
import SEP38 from '../../../transport/SEP38';
import IPriceRequest from '../../../transport/requests/PricesRequest/IPriceRequest';
import PriceRequest from '../../../transport/requests/PricesRequest/PriceRequest';

export async function getPrice(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sellAsset = this.getNodeParameter('sellAsset', 0) as string;
	const sellAmount = this.getNodeParameter('sellAmount', 0) as string;
	const buyAsset = this.getNodeParameter('buyAsset', 0) as string;
	const buyAmount = this.getNodeParameter('buyAmount', 0) as string;
	const context = this.getNodeParameter('context', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const sep38 = new SEP38(anclapCredentials, token);

	let priceRequest: IPriceRequest;

	if (sellAmount && buyAmount) {
		throw new Error('Either sellAmount or buyAmount should have a value, not both.');
	}
	if (!sellAmount && !buyAmount) {
		throw new Error('Either sellAmount or buyAmount should have a value.');
	}

	if (showOptionalValues) {
		const sellDeliveryMethod = this.getNodeParameter('sellDeliveryMethod', 0) as string;
		const buyDeliveryMethod = this.getNodeParameter('buyDeliveryMethod', 0) as string;
		const countryCode = this.getNodeParameter('countryCode', 0) as string;

		priceRequest = new PriceRequest({
			sellAsset,
			sellAmount,
			sellDeliveryMethod,
			buyDeliveryMethod,
			buyAsset,
			buyAmount,
			countryCode,
			context,
		});
	} else {
		priceRequest = new PriceRequest({ sellAsset, sellAmount, buyAsset, buyAmount, context });
	}

	return await sep38.getPrice(priceRequest);
}
