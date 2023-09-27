import type { IBasePriceRequest } from './IBasePriceRequest';

export interface IQuotePostRequest extends IBasePriceRequest {
	buyAsset: string;
	buyAmount?: string;
	expireAfter?: string;
	context: string;
}
