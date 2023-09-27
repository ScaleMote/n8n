import type { BaseDepositRequest } from './BaseDepositRequest';

export interface IDepositRequest extends BaseDepositRequest {
	assetCode: string;
}
