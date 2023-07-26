import BaseWithdrawRequest from './BaseWithdrawRequest';

export default interface IWithdrawRequest extends BaseWithdrawRequest {
	assetCode: string;
}
