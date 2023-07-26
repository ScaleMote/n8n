export default interface IBasePriceRequest {
	sellAsset: string;
	sellAmount?: string;
	sellDeliveryMethod?: string;
	buyDeliveryMethod?: string;
	countryCode?: string;
}
