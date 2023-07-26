import IPricesRequest from './IPricesRequest';

export class PricesRequest implements IPricesRequest {
	sellAsset: string;
	sellAmount?: string;
	sellDeliveryMethod?: string;
	buyDeliveryMethod?: string;
	countryCode?: string;

	constructor(request: IPricesRequest) {
		const { sellAsset, sellAmount, sellDeliveryMethod, buyDeliveryMethod, countryCode } = request;

		this.sellAsset = sellAsset;
		this.sellAmount = sellAmount;
		this.sellDeliveryMethod = sellDeliveryMethod;
		this.buyDeliveryMethod = buyDeliveryMethod;
		this.countryCode = countryCode;
	}
}
