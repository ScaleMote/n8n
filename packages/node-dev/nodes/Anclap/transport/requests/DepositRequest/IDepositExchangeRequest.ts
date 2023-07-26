import BaseDepositRequest from './BaseDepositRequest';

export default interface IDepositExchangeRequest extends BaseDepositRequest {
	destinationAsset: string;
	sourceAsset: string;
	quoteId?: string;
}
