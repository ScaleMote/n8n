import type { BaseWithdrawRequest } from './BaseWithdrawRequest';

export interface IWithdrawExchangeRequest extends BaseWithdrawRequest {
	sourceAsset: string;
	destinationAsset: string;
	quoteId?: string;
}
