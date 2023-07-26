import { IExecuteFunctions } from 'n8n-workflow';
import AnclapCredentials from '../../../transport/AnclapCredentials';
import SEP38 from '../../../transport/SEP38';
import IQuotePostRequest from '../../../transport/requests/PricesRequest/IQuotePostRequest';
import QuotePostRequest from '../../../transport/requests/PricesRequest/QuotePostRequest';

export async function getFirmQuote(this: IExecuteFunctions) {
	const anclapCredentials = new AnclapCredentials(await this.getCredentials('anclapApi'));
	const token = this.getNodeParameter('token', 0) as string;

	const sellAsset = this.getNodeParameter('sellAsset', 0) as string;
	const sellAmount = this.getNodeParameter('sellAmount', 0) as string;
	const buyAsset = this.getNodeParameter('buyAsset', 0) as string;
	const buyAmount = this.getNodeParameter('buyAmount', 0) as string;
	const context = this.getNodeParameter('context', 0) as string;
	const sellDeliveryMethod = this.getNodeParameter('sellDeliveryMethod', 0) as string;
	const buyDeliveryMethod = this.getNodeParameter('buyDeliveryMethod', 0) as string;

	const showOptionalValues = this.getNodeParameter('showOptionalValues', 0) as boolean;

	const sep38 = new SEP38(anclapCredentials, token);

	let firmQuoteRequest: IQuotePostRequest;

	if ((sellAmount && buyAmount) || (!sellAmount && !buyAmount)) {
		throw new Error('Either "Amount to Sell" or "Amount to Buy" should have a value, not both.');
	}

	if ((sellDeliveryMethod && buyDeliveryMethod) || (!sellDeliveryMethod && !buyDeliveryMethod)) {
		throw new Error(
			'Either "Sell delivery method" or "Buy delivery method" should have a value, not both.',
		);
	}

	if (showOptionalValues) {
		const expireAfter = this.getNodeParameter('expireAfter', 0) as string;
		const countryCode = this.getNodeParameter('countryCode', 0) as string;

		firmQuoteRequest = new QuotePostRequest({
			sellAsset,
			sellAmount,
			buyAsset,
			buyAmount,
			context,
			expireAfter,
			sellDeliveryMethod,
			buyDeliveryMethod,
			countryCode,
		});
	} else {
		firmQuoteRequest = new QuotePostRequest({
			sellAsset,
			sellAmount,
			buyAsset,
			buyAmount,
			context,
			sellDeliveryMethod,
			buyDeliveryMethod,
		});
	}

	return await sep38.getFirmQuote(firmQuoteRequest);
}
