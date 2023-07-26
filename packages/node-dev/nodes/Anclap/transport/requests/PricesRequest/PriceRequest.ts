import IPriceRequest from './IPriceRequest';

export default class PriceRequest implements IPriceRequest {
	sellAsset: string;
	sellAmount?: string;
	sellDeliveryMethod?: string;
	buyDeliveryMethod?: string;
	countryCode?: string;
	context: string;
	buyAmount?: string;
	buyAsset: string;

	constructor(request: IPriceRequest) {
		const {
			sellAsset,
			sellAmount,
			sellDeliveryMethod,
			buyDeliveryMethod,
			countryCode,
			context,
			buyAmount,
			buyAsset,
		} = request;

		this.sellAsset = sellAsset;
		this.sellAmount = sellAmount;
		this.sellDeliveryMethod = sellDeliveryMethod;
		this.buyDeliveryMethod = buyDeliveryMethod;
		this.countryCode = countryCode;
		this.context = context;
		this.buyAmount = buyAmount;
		this.buyAsset = buyAsset;
		this.context = context;
	}
}
