import BaseWithdrawRequest from './BaseWithdrawRequest';

export default interface IWithdrawExchangeRequest extends BaseWithdrawRequest {
	sourceAsset: string;
	destinationAsset: string;
	quoteId?: string;
}
