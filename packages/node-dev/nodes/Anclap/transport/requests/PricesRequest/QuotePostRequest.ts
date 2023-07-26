import IQuotePostRequest from './IQuotePostRequest';

export default class QuotePostRequest implements IQuotePostRequest {
	sellAsset: string;
	sellAmount?: string;
	sellDeliveryMethod?: string;
	buyDeliveryMethod?: string;
	countryCode?: string;
	buyAmount?: string;
	buyAsset: string;
	expireAfter?: string;
	context: string;

	constructor(request: IQuotePostRequest) {
		const {
			sellAsset,
			sellAmount,
			sellDeliveryMethod,
			buyDeliveryMethod,
			countryCode,
			buyAmount,
			buyAsset,
			expireAfter,
			context,
		} = request;

		this.sellAsset = sellAsset;
		this.sellAmount = sellAmount;
		this.sellDeliveryMethod = sellDeliveryMethod;
		this.buyDeliveryMethod = buyDeliveryMethod;
		this.countryCode = countryCode;
		this.buyAmount = buyAmount;
		this.buyAsset = buyAsset;
		this.expireAfter = expireAfter;
		this.context = context;
	}
}
