import type { IKYCBaseRequest } from './IKYCBaseRequest';

export interface IKYCRequest extends IKYCBaseRequest {
	type?: string;
	lang?: string;
}
