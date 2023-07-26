import IBasePriceRequest from './IBasePriceRequest';

export default interface IQuotePostRequest extends IBasePriceRequest {
	buyAsset: string;
	buyAmount?: string;
	expireAfter?: string;
	context: string;
}
