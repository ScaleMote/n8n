import BaseDepositRequest from './BaseDepositRequest';

export default interface IDepositRequest extends BaseDepositRequest {
	assetCode: string;
}
