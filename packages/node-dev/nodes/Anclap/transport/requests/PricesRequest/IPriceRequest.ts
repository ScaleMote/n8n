import IBasePriceRequest from './IBasePriceRequest';

export default interface IPriceRequest extends IBasePriceRequest {
	buyAsset: string;
	buyAmount?: string;
	context: string;
}
