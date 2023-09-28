import type { BaseWithdrawRequest } from './BaseWithdrawRequest';

export interface IWithdrawRequest extends BaseWithdrawRequest {
	assetCode: string;
}
