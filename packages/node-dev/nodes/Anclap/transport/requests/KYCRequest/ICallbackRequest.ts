import { IKYCBaseRequest } from './IKYCBaseRequest';

export interface ICallbackRequest extends IKYCBaseRequest {
	url: string;
}
