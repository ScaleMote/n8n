import type { IBasePriceRequest } from './IBasePriceRequest';

export interface IPriceRequest extends IBasePriceRequest {
	buyAsset: string;
	buyAmount?: string;
	context: string;
}
