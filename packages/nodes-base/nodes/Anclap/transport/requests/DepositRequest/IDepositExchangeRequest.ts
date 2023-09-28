import type { BaseDepositRequest } from './BaseDepositRequest';

export interface IDepositExchangeRequest extends BaseDepositRequest {
	destinationAsset: string;
	sourceAsset: string;
	quoteId?: string;
}
